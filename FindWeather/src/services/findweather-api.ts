import { api } from "./api";

const  API_KEY  = "c3bff431da434de2b89184729231103";

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
  }
}