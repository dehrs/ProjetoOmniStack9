import React, { useState, useEffect } from "react";
import SpotList from "../../components/spotList";

export default function List({ history }) {
  const [techs, setTechs] = useState([]);

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
