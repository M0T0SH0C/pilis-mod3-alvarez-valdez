const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=America/Argentina/Jujuy`

export const getForecast = async (latitud, longitud) => {    
    try {
        const response = await fetch(`${url}&latitude=${latitud}&longitude=${longitud}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Problemas al obtener el pronostico");
    }        
}

