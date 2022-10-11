import "./App.css";
import Home from "./routes/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CardsContext } from "./context/CardsContext";

// TODO: Quitar despues de implementar el formulario
const cardList = [
  {
    id: 1,
    ubication: "Ciudad Cultural",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    img: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 2,
    ubication: "Ciudad de Nieva",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    img: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 3,
    ubication: "Barrio Norte",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    img: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 4,
    ubication: "San Martin",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    img: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 5,
    ubication: "Alto Padilla",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    img: "https://picsum.photos/seed/picsum/300/300",
  },
];

function App() {
  const { setCards } = useContext(CardsContext);

  // TODO: Quitar despues de implementar el formulario
  useEffect(() => {
    cardList.forEach((card) => {
      localStorage.setItem(card.id, JSON.stringify(card));
    });
    setCards(cardList);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
