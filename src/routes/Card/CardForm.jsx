import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { CardsContext } from "../../context/CardsContext";
import { getForecast } from "../../service";
import "./CardForm.css";

const Formularios = () => {
  const { cards, setCards } = useContext(CardsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    getForecast(data.latitude, data.longitude)
      .then((res) => {
        const newCard = {
          id: uuid(),
          ubication: data.city,
          latitude: res.latitude,
          longitude: res.longitude,
          temperature: res.current_weather.temperature,
          windspeed: res.current_weather.windspeed,
          image: data.imagen,
          date: dayjs().format(),
        };
        setCards([...cards, newCard]);
        Swal.fire({
          title: "Aviso",
          text: "Tarjeta creada exitosamente!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#356BB1",
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
          confirmButtonColor: "#356BB1",
        });
      });
  };
  return (
    <div className="weather-content">
      <h1 className="mb-4">Nueva Tarjeta</h1>
      <form onSubmit={handleSubmit(onSubmit)} name="get-weather">
        <input
          type="text"
          {...register("city", {
            required: "Debe igresar el nombre de la ciudad",
          })}
          placeholder="Nombre de tu ciudad / provincia..."
          className={`${errors.city && "error"}`}
        />
        <p className="label-error">{errors.city?.message}</p>
        <input
          type="text"
          {...register("latitude", { required: "Debe igresar la latitud" })}
          placeholder="Escribe la Latitud..."
          className={`${errors.latitude && "error"}`}
        />
        <p className="label-error">{errors.latitude?.message}</p>
        <input
          type="text"
          {...register("longitude", { required: "Debe igresar la longitud" })}
          placeholder="Escribe la Longitud..."
          className={`${errors.longitude && "error"}`}
        />
        <p className="label-error">{errors.longitude?.message}</p>
        <input
          type="url"
          {...register("imagen")}
          placeholder="Escribe la url de la imagen..."
        />
        <input type="submit" value="Crear nueva ubicacion"></input>
      </form>
    </div>
  );
};

export default Formularios;
