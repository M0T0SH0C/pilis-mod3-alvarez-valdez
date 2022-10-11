import React, { useEffect, useInsertionEffect } from 'react'
import "../components/Formularios.css";
import { CrearUbi } from './funciones/Funciones';


const Formularios = () => {

useEffect(()=>{CrearUbi()},[])

  return (    
    <div>
      <h1>hola</h1>
      </div>
  )
}

export default Formularios