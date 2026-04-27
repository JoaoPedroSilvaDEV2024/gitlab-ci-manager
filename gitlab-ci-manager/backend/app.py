from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pipeline import run_pipeline

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

history = []

@app.get("/run")
def run():
    result = run_pipeline()
    history.append(result)
    return result

@app.get("/history")
def get_history():
    return history

# 🔥 NOVO: métricas
@app.get("/metrics")
def metrics():
    total = len(history)
    success = len([h for h in history if h["status"] == "success"])
    failed = len([h for h in history if h["status"] == "failed"])

    rate = (success / total * 100) if total > 0 else 0

    return {
        "total": total,
        "success": success,
        "failed": failed,
        "success_rate": round(rate, 2)
    }