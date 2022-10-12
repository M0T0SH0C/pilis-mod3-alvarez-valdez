 import React, { useContext } from 'react'
 import "./Formularios.css"
 import {useForm} from "react-hook-form";
 import {useNavigate} from "react-router-dom";
 import { CardsContext } from "../../context/CardsContext";
 import { getForecast } from "../../Funciones";
 import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

const Formularios = () => {
    const {cards, setCards} = useContext(CardsContext)
    const { register, handleSubmit, formState: {}} = useForm();
    const navigate = useNavigate();

    const onSubmit = (data)=>{

        getForecast(data.latitud , data.longitud)
        .then ( res => {
            const  newCard = {
                id:cards.length + 1,
                ubication: data.city,
                latitude: res.latitude ,
                longitude: res.longitude,
                temperature: res.current_weather.temperature , 
                windspeed: res.current_weather.windspeed , 
                image: data.imagen, 
            }
            setCards([...cards, newCard]);
            Swal.fire({
                    title: 'Aviso',
                    text: "Tarjeta creada exitosamente!",
                    icon: 'success',                    
                    confirmButtonText: 'OK'
                }
            ).then((result) => {
                if (result.isConfirmed) {
                    navigate("/");
                }
              })
        } )
        .catch(errors=> {
            console.log (errors);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo malo ha pasado!',
              })
        })


        

    }
  return (
    <section className="weather-content">
        <h1>Buscador del clima</h1>
        <div className="result">
            <p>Agrege cuidad y pais</p>
            <h5>Clima en JuJuy</h5>
            <img src="" alt=""></img>
            <h2>28°C</h2>
            <p>Max: 29°C</p>
            <p>Min: 27°C</p> 
        </div>
        <form onSubmit={handleSubmit(onSubmit)} name="get-weather">
            <input type="text" {...register("city", {required: "Debe igresar el nombre de la ciudad"})} id="city" placeholder="Nombre de tu ciudad / provincia..."></input>          
            <input type="text" {...register("latitud", {required: "Debe igresar la latitud"})} id="latitud" placeholder="Escribe la Latitud..."></input>           
            <input type="text" {...register("longitud", {required: "Debe igresar la longitud"})} id="longitud" placeholder="Escribe la Longitud..."></input>
            <input type="url" {...register("imagen")} id="imagen" placeholder="Escribe la url de la imagen..."></input>
            
            {/* <select name="" id="country">
                <option disabled selected value="">Selecctiona tu pais </option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
            </select> */}
            <input type="submit" value="Crear nueva ubicacion"></input>
        </form>    
    </section>     
  )
}

export default Formularios



    

       