import time
import random

def run_pipeline():
    steps = ["build", "test", "deploy"]
    logs = []
    status = "success"

    logs.append("[INFO] Pipeline started")

    for step in steps:
        logs.append(f"[INFO] Running {step}...")

        time.sleep(1)

        if random.random() < 0.2:
            logs.append(f"[ERROR] {step} failed")
            status = "failed"
            break

        logs.append(f"[SUCCESS] {step} completed")

    logs.append(f"[INFO] Pipeline finished with status: {status}")

    return {
        "status": status,
        "logs": logs,
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
    }