import React, { useState, useContext } from "react";
import Cards from "../../components/Card/Cards";
import { CardsContext } from "../../context/CardsContext";
import "./Home.css";

const Home = () => {
  const { cards } = useContext(CardsContext);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const cardList = !query
    ? cards
    : cards.filter((card) =>
        card.ubication.toLowerCase().includes(query.toLowerCase())
      );

  return (      
    <div className="container mb-5">
      <input
        className="form-control w-50 m-auto my-5"
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
      />
      {!cardList.length > 0 && query && (
        <h1 className="text-center text-light">No hay coincidencias</h1>
      )}
      {!cardList.length > 0 && !query && (
        <div className="w-50 p-5 m-auto text-center text-light no-cards">
          <h1>No hay tarjetas</h1>
          <p>¿Quieres agregar una nueva?</p>
          <button className="btn btn-light">Agregar</button>
        </div>
      )}
      <Cards cards={cardList} />      
  <div>
    <button className="btn btn-light">
      <a href="Formulsrios.jsx">Crear nueva ubicacion</a>
    </button>
  </div>
    </div>   
  );
};


export default Home;
