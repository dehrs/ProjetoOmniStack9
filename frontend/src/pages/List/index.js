import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import SpotList from "../../components/spotList";

export default function List({ history }) {
  const [techs, setTechs] = useState([]);
  const user_id = localStorage.getItem("user");

  useEffect(() => {
    const socket = socketio("http://localhost:3333", {
      query: { user_id }
    });

    socket.on("booking_response", booking => {
      alert(
        `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
          booking.approved ? "APROVADA" : "REJEITADA"
        }`
      );
    });
  }, [user_id]);

  useEffect(() => {
    let tecnologias = localStorage.getItem("techs");

    const techsArray = tecnologias.split(",").map(tech => tech.trim());
    setTechs(techsArray);
  }, []);

  return (
    <>
      {techs.map(tech => (
        <SpotList key={tech} tech={tech} history={history} />
      ))}
    </>
  );
}
