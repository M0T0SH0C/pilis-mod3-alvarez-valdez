export const getForecast = async (latitud, longitud) => {
  const url = `https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=America/Argentina/Jujuy`;
  try {
    const response = await fetch(
      `${url}&latitude=${latitud}&longitude=${longitud}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Problemas al obtener el pronostico");
  }
};

export const getForecastHourly = async (latitud, longitud) => {
  const url =
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m";
  try {
    const response = await fetch(
      `${url}&latitude=${latitud}&longitude=${longitud}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Problemas al obtener el pronostico");
  }
};
