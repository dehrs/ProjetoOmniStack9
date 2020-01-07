import React, { useState, useEffect } from "react";
import api from "../services/api";

import "./spotList.css";

export default function SpotList({ tech, history }) {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, [tech]);

  function navigation() {
    history.push("/solicitarReserva");
  }
  return (
    <>
      <p>
        Empresas que usam <strong> {tech}</strong>
      </p>
      <ul className="list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$ ${spot.price}/dia` : "Gratuito"}</span>
            <button onClick={navigation}>Solicitar Reserva</button>
          </li>
        ))}
      </ul>
    </>
  );
}
