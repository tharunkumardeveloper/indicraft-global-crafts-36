# rag_api.py

from fastapi import FastAPI
from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain_community.llms import Ollama

# 1️⃣ FastAPI app
app = FastAPI()

# 2️⃣ Load embeddings from local Chroma DB
persist_directory = "chroma_db"
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory=persist_directory, embedding_function=embeddings)

# 3️⃣ Setup retriever
retriever = vectordb.as_retriever(search_kwargs={"k": 3})

# 4️⃣ Use your finetuned model "venmathi"
llm = Ollama(model="venmathi", temperature=0)

# 5️⃣ Create RetrievalQA chain
qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

# 6️⃣ Request body model
class QueryRequest(BaseModel):
    query: str

# 7️⃣ API endpoint
@app.post("/ask")
async def ask_question(request: QueryRequest):
    result = qa.invoke(request.query)
    return {
        "answer": result["result"],
        "sources": [doc.metadata for doc in result["source_documents"]]
    }
