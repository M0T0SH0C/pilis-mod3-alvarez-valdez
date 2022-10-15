import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardsContext } from "../../context/CardsContext";
import { UserContext } from "../../context/UserContext";
import Cards from "../../components/Card/Cards";
import "./Home.css";

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cards } = useContext(CardsContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

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
          <h1>Sin tarjetas</h1>
          <p>¿Quieres agregar una nueva?</p>
          {currentUser ? (
            <Link className="btn btn-light" to="/card/create">
              Agregar
            </Link>
          ) : (
            <h3>Inicia sesión!!</h3>
          )}
        </div>
      )}
      <Cards cards={cardList} />
    </div>
  );
};

export default Home;
