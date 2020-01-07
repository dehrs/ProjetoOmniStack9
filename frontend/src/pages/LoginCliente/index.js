import React, { useState } from "react";
import api from "../../services/api";

export default function LoginCliente({ history }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email });

    const { _id } = response.data;

    localStorage.setItem("user", _id);
    localStorage.setItem("techs", techs);

    history.push("/list");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> E-MAIL *</label>
      <input
        type="email"
        id="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="tech">TECNOLOGIAS *</label>
      <input
        type="tech"
        id="tecnologias"
        placeholder="Tecnologias de interesse"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <button className="btn" type="submit">
        Entrar
      </button>
    </form>
  );
}
