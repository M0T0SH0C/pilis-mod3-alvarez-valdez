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
    <div>
      <input
        className="input-form"
        type="tex"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
      />
      <Cards cards={cardList} />
    </div>
  );
};

export default Home;
