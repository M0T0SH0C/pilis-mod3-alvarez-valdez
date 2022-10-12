 import React from 'react'
 import "../components/Formularios.css"

const Formularios = () => {
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
        <form action="" method="POST" name="get-weather">
            <input type="text" name="City" id="City" placeholder="Nombre de tu ciudad / provincia..."></input>          
            <input type="number" name="Latitud" id="latitud" placeholder="Escribe la Latitud..."></input>           
            <input type="number" name="Longitud" id="longitud" placeholder="Escribe la Longitud..."></input>
            <select name="" id="country">
                <option disabled selected value="">Selecctiona tu pais </option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
            </select>
            <input type="submit" name="" id="" value="Crear nueva ubicacion"></input>
        </form>    
        </section>     
  )
}

export default Formularios



    

       