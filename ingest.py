# ingest.py

from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

# Step 1: Load the PDF
pdf_path = "knowledge.pdf"  # Your PDF file
loader = PyPDFLoader(pdf_path)
documents = loader.load()

# Step 2: Split text into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
docs = text_splitter.split_documents(documents)

# Step 3: Initialize embeddings
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# Step 4: Create local Chroma database
vectordb = Chroma.from_documents(
    documents=docs,
    embedding=embeddings,
    persist_directory="chroma_db"
)

# Step 5: Persist data
vectordb.persist()
print("✅ Data ingested and stored in 'chroma_db' locally")
