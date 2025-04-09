import { useState } from "react";
import api from "../services/api";
import "./Login.css";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/usuarios", {
        nome,
        email,
      });

      alert("Usuário criado com sucesso!");
      window.location.href = "/";
    } catch (error) {
      alert("Erro ao criar usuário");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}
