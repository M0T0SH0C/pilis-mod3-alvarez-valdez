import axios from 'axios';

const CrearUbi = async () =>{
    const peticion = axios.get('https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=$%7blatitude%7d&longitude=$%7blongitude%7d&timezone=America/Argentina/Jujuy')
    console.log(peticion)
}
export {
    CrearUbi
};