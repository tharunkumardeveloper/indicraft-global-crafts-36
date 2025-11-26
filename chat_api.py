from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_ollama import OllamaLLM
from langchain.prompts import PromptTemplate
import re

# ===============================
# FastAPI Setup
# ===============================
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all for local dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===============================
# Vector DB & Embeddings Setup
# ===============================
persist_directory = "chroma_db"

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory=persist_directory, embedding_function=embeddings)

# ===============================
# Ollama Models
# ===============================
venmathi_llm = OllamaLLM(model="venmathi", temperature=0)
rag_prompt_template = """
You are Venmathi, a friendly, helpful assistant about Indian handicrafts.  
Answer the user's question using ONLY the context below.  
If the answer is not in the context, say you don't know instead of making something up.  
Keep your tone friendly and like your fine-tuned style.

Context:
{context}

Question:
{question}

Answer:
"""

rag_prompt = PromptTemplate(template=rag_prompt_template, input_variables=["context", "question"])

# ===============================
# API Schema
# ===============================
class ChatRequest(BaseModel):
    message: str
    history: list = []

# ===============================
# Helper Functions
# ===============================
def is_unclear_or_empty(response: str) -> bool:
    """Checks if the LLM response is unclear or empty."""
    if not response.strip():
        return True
    unclear_phrases = [
        "I don't know", "I'm not sure", "cannot answer", "no information",
        "unspecified", "unknown"
    ]
    return any(phrase.lower() in response.lower() for phrase in unclear_phrases)

def query_rag(question: str) -> str:
    """Fetch answer from knowledge base."""
    docs = vectordb.similarity_search(question, k=3)
    context = "\n".join([d.page_content for d in docs])
    rag_chain = rag_prompt | venmathi_llm
    return rag_chain.invoke({"context": context, "question": question})

# ===============================
# Main Chat Endpoint
# ===============================
@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    user_input = request.message

    # Step 1: Try fine-tuned model directly
    fine_tuned_prompt = f"You are Venmathi. Respond in your friendly style.\nUser: {user_input}\nAssistant:"
    ft_response = venmathi_llm.invoke(fine_tuned_prompt)

    # Step 2: If unclear → use RAG
    if is_unclear_or_empty(ft_response):
        rag_response = query_rag(user_input)
        return {"response": rag_response}

    return {"response": ft_response}

# ===============================
# Root Test Route
# ===============================
@app.get("/")
def home():
    return {"message": "Chat API is running! Use POST /chat"}
