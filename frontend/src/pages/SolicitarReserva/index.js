import React, { useState } from "react";
import api from "../../services/api";

export default function SolicitarReserva({ match, history }) {
  const [date, setDate] = useState("");
  const id = match.params.id;

  async function handleSubmit(e) {
    e.preventDefault();
    const user_id = await localStorage.getItem("user");

    await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } });

    alert("Solicitao Enviada");

    history.push("/list");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="data"> Data de Interesse *</label>
        <input
          placeholder="Qual data você quer reservar?"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button className="btn" type="submit">
          Solicitar Reserva
        </button>
        <button className="btn-Cancel" onClick={() => history.push("/list")}>
          Cancelar
        </button>
      </form>
    </>
  );
}
