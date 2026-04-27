import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);
  const [metrics, setMetrics] = useState({});

  // 🚀 rodar pipeline
  const runPipeline = async () => {
    try {
      const res = await axios.get("http://localhost:8000/run");

      setLogs(res.data.logs);
      setStatus(res.data.status);

      loadData();
    } catch (error) {
      console.error("Erro ao rodar pipeline:", error);
    }
  };

  // 📊 carregar dados do backend
  const loadData = async () => {
    try {
      const hist = await axios.get("http://localhost:8000/history");
      const met = await axios.get("http://localhost:8000/metrics");

      setHistory(hist.data);
      setMetrics(met.data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">

      {/* TÍTULO */}
      <h1>🚀 GitLab CI Pipeline Manager</h1>

      {/* BOTÃO */}
      <button onClick={runPipeline}>
        Run Pipeline
      </button>

      {/* STATUS */}
      <div className="status">
        Status:{" "}
        <span className={status === "success" ? "success" : "failed"}>
          {status}
        </span>
      </div>

      {/* 📊 MÉTRICAS */}
      <div className="metrics">

        <div className="card">
          <h3>Total Builds</h3>
          <p>{metrics.total}</p>
        </div>

        <div className="card">
          <h3>Success</h3>
          <p>{metrics.success}</p>
        </div>

        <div className="card">
          <h3>Failed</h3>
          <p>{metrics.failed}</p>
        </div>

        <div className="card">
          <h3>Success Rate</h3>
          <p>{metrics.success_rate}%</p>
        </div>

      </div>

      {/* 📜 HISTÓRICO */}
      <div className="history">
        <h2>📜 History</h2>

        {history.map((item, i) => (
          <div key={i}>
            {item.status === "success" ? "✔" : "❌"}{" "}
            {item.status} - {item.timestamp}
          </div>
        ))}
      </div>

      {/* 🧾 LOGS */}
      <div className="logs">
        <h2>🧾 Logs</h2>

        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

    </div>
  );
}