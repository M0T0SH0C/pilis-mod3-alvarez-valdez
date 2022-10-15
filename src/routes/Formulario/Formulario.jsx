import React, { useContext } from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../context/CardsContext";
import { getForecast } from "../../Funciones";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";
import dayjs from "dayjs";

const Formularios = () => {
  const { cards, setCards } = useContext(CardsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    getForecast(data.latitud, data.longitud)
      .then((res) => {
        const newCard = {
          id: cards.length + 1,
          ubication: data.city,
          latitude: res.latitude,
          longitude: res.longitude,
          temperature: res.current_weather.temperature,
          windspeed: res.current_weather.windspeed,
          image: data.imagen,
          date: dayjs().format(),
        };
        console.log(res);
        setCards([...cards, newCard]);
        Swal.fire({
          title: "Aviso",
          text: "Tarjeta creada exitosamente!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#356BB1"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((errors) => {
        console.log(errors);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo malo ha pasado!",
        });
      });
  };
  return (
    <section className="weather-content">
      <h1 className="mb-4">Nueva Tarjeta</h1>
      <form onSubmit={handleSubmit(onSubmit)} name="get-weather">
        <input
          type="text"
          {...register("city", {
            required: "Debe igresar el nombre de la ciudad",
          })}
          id="city"
          placeholder="Nombre de tu ciudad / provincia..."
          className={`${errors.city && "error"}`}
        />
        <p className="label-error">{errors.city?.message}</p>
        <input
          type="text"
          {...register("latitud", { required: "Debe igresar la latitud" })}
          id="latitud"
          placeholder="Escribe la Latitud..."
          className={`${errors.latitud && "error"}`}
        />
        <p className="label-error">{errors.latitud?.message}</p>
        <input
          type="text"
          {...register("longitud", { required: "Debe igresar la longitud" })}
          id="longitud"
          placeholder="Escribe la Longitud..."
          className={`${errors.longitud && "error"}`}
        />
        <p className="label-error">{errors.longitud?.message}</p>
        <input
          type="url"
          {...register("imagen")}
          id="imagen"
          placeholder="Escribe la url de la imagen..."
        />
        <input type="submit" value="Crear nueva ubicacion"></input>
      </form>
    </section>
  );
};

export default Formularios;
