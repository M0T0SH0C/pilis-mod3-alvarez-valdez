import "./App.css";
import "./components/Card/Card.css";
import Home from "./routes/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CardsContext } from "./context/CardsContext";
import Formularios from "./routes/Formulario/Formulario.jsx";
import Navigation from "./routes/Navigation/Navigation";
import Mapsygeo from "./routes/Mapsygeo/Mapsygeos.jsx"
// TODO: Quitar despues de implementar el formulario

const cardList = [
  {
    id: 1,
    ubication: "Ciudad Cultural",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 2,
    ubication: "Ciudad de Nieva",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image: "",
  },
  {
    id: 3,
    ubication: "Barrio Norte",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image: "https://picsum.photos/seed/picsum/300/300",
  },
  {
    id: 4,
    ubication: "San Martin",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image: "",
  },
  {
    id: 5,
    ubication: "Alto Padilla",
    temperature: "18 °C",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image: "https://picsum.photos/seed/picsum/300/300",
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
  }, [setCards]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* TODO: Agregar nueva página en "NombrePagina" */}
          {/* <Route path="card/:id" element={<NombrePagina />} /> */}
          <Route path="card/create" element={<Formularios />} />
          <Route phat= "./routes/Mapsygeo/Mapsygeos.jsx" element ={<Mapsygeo></Mapsygeo>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}
export default App;
