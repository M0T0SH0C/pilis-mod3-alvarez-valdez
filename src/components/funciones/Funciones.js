import axios from 'axios';

const CrearUbi = async (state) =>{
    const peticion = await  axios.get('https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=24.204606&longitude=65.3038322&timezone=America/Argentina/Jujuy')
   console.log(peticion)   

}
export {
    CrearUbi
};