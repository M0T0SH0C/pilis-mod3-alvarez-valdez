import "./App.css";
import "./components/Card/Card.css";
import Home from "./routes/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import { CardsContext } from "./context/CardsContext";
import Login from "./routes/Login/Login.jsx";
import CardForm from "./routes/Card/CardForm";
import Navigation from "./routes/Navigation/Navigation";
import DetailsCard from "./routes/Card/CardDetails";
import Mapsygeos from "./routes/Mapsygeo/Mapsygeos";

// TODO: Quitar despues de implementar el formulario

const cardList = [
  {
    id: 1,
    ubication: "Ciudad Cultural",
    temperature: "18",
    latitude: "-24.1950",
    longitude: "-65.3138",
    windspeed: "4.1",
    image:
      "https://somosjujuy-wordpress.s3.amazonaws.com/wp-content/uploads/2020/12/22210147/arbolito-ciudad-cultural.jpg",
    date: dayjs().format(),
  },
  {
    id: 2,
    ubication: "Ciudad de Nieva",
    temperature: "20",
    latitude: "-24.1861",
    longitude: "-65.3192",
    windspeed: "4.1",
    image: "",
    date: dayjs().format(),
  },
  {
    id: 3,
    ubication: "Dique la Cienaga",
    temperature: "18",
    latitude: "-24.4228",
    longitude: "-65.2842",
    windspeed: "5.1",
    image:
      "https://www.amoalcamping.com.ar/img/localidades/gran/localidad-47.jpg",
    date: dayjs().format(),
  },
  {
    id: 4,
    ubication: "Alto Padilla",
    temperature: "11",
    latitude: "-24.1814",
    longitude: "-65.3349",
    windspeed: "4.1",
    image: "",
    date: dayjs().format(),
  },
  {
    id: 5,
    ubication: "Plaza Belgrano",
    temperature: "19",
    latitude: "-24.1862",
    longitude: "-65.2993",
    windspeed: "2.3",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a1/6a/be/fuente-y-casa-de-gobierno.jpg?w=1200&h=-1&s=1",
    date: dayjs().format(),
  },
];

function App() {
  const { setCards } = useContext(CardsContext);

  useEffect(() => {
    setCards(cardList);
  }, [setCards]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="card/:id" element={<DetailsCard />} />
          <Route path="card/create" element={<CardForm />} />
          <Route path="map" element={<Mapsygeos />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
