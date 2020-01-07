import React from "react";

import "./styles.css";

export default function Login({ history }) {
  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>

      <div className="textoInicial">
        <p>Escolha como deseja acessar a página:</p>
      </div>
      <button className="btn" onClick={() => history.push("/empresa")}>
        Empresa
      </button>
      <button className="btn" onClick={() => history.push("/cliente")}>
        Programador
      </button>
    </>
  );
}
