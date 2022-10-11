import React, { useEffect,} from 'react'
import "../components/Formularios.css";
import { CrearUbi } from '../components/funciones/Funciones';


const Formularios = () => {

useEffect (()=>{CrearUbi()},[]);

  return (     
    <form className='Latitud'>
      <p>INGRESE NOMBRE DEL LUGAR </p>
      <input type ='text' name= 'Nombre' autoCompletar = 'on' ></input>
        
      <br></br>
      <br></br>
      <br></br>

     <p>INGRESE LATITUD</p>
     <input type ='number' name= 'Latitud' autoCompletar = 'on' ></input>
     
     <br></br>
     <br></br>
     <br></br>
      <p>INGRESE LONGITUD</p>
     <input type ='number' name= 'Longitud' autoCompletar = 'on' ></input>    
     <br></br>
     <br></br>
     <br></br>
     
     
     <button type='submit'>CREAR</button>



   </form>   

  )
};

export default Formularios