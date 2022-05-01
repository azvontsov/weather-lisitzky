import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const APP_ID = "c65b9d1866db1243036134173b97b27a";

const api = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

async function getLatLon(location) {
  const response = await api.get("geo/1.0/direct", {
    params: {
      q: location,
      appid: APP_ID,
    },
  });
  const { lat, lon } = response.data[0];
  return { lat, lon };
}

async function getForecast(lat, lon) {
  const response = await api.get("data/2.5/onecall", {
    params: {
      lat,
      lon,
      appid: APP_ID,
    },
  });
  return response.data.daily;
}

function useForecast(date, location) {
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    if (!location) {
      return;
    }

    getLatLon(location)
      .then(({ lat, lon }) => getForecast(lat, lon))
      .then((forecast) => setForecast(forecast));
  }, [location]);

  if (!forecast) {
    return;
  }

  const dayForecast = forecast.find((dayForecast) => {
    const forecastTime = moment.unix(dayForecast.dt);
    return forecastTime.dayOfYear() === date.dayOfYear();
  });

  return dayForecast;
}

export default useForecast;
