import axios from "axios";

const weatherApi = axios.create({
  baseURL: process.env.REACT_APP_API_WEATHER_URL,
});

weatherApi.interceptors.request.use((config) => {
  config.url = config.url + "&appid=" + process.env.REACT_APP_API_KEY;
  return config;
});

export default weatherApi;
