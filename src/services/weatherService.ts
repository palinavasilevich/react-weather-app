import weatherApi from "../api/weatherApi";

import {
  LocationCoordinatesType,
  WeatherResponseType,
  WeatherType,
  ForecastResponseType,
  ForecastType,
} from "../types";

import getCurrentDate from "../utils/getLocalDate";
import { kelvinToCelcius } from "../utils/weatherConversion";

const formatCurrentWeather = (data: WeatherResponseType): WeatherType => {
  const {
    coord,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    name,
    clouds: { all },
  } = data;

  const { icon } = weather[0];

  const is_day = icon.slice(2) === "d";

  const { localDate, localTime } = getCurrentDate(dt, timezone);

  return {
    coord,
    weather: weather[0],
    main: {
      temp: kelvinToCelcius(temp),
      feels_like: kelvinToCelcius(feels_like),
      temp_min: kelvinToCelcius(temp_min),
      temp_max: kelvinToCelcius(temp_max),
      humidity,
      pressure,
    },
    wind: { speed },
    clouds: { all },
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    name,
    is_day,
    date: localDate,
    time: localTime,
  };
};

const formatForecast = (data: ForecastResponseType): ForecastType[] => {
  const {
    list,
    city: { timezone },
  } = data;

  return list.map((item) => {
    const {
      weather,
      main: { temp, humidity, pressure },
      wind: { speed },
      dt,
    } = item;

    const { localDate, localTime, dayOfWeek } = getCurrentDate(dt, timezone);

    return {
      dt,
      main: {
        temp: kelvinToCelcius(temp),
        humidity,
        pressure,
      },

      weather: weather[0],
      wind: { speed },
      date: localDate,
      time: localTime,
      dayOfWeek,
    };
  });
};

const fetchCurrentWeather = async ({ lat, lon }: LocationCoordinatesType) => {
  const response = await weatherApi.get<WeatherResponseType>(
    `/data/2.5/weather?lat=${lat}&lon=${lon}`
  );

  return response.data;
};

const fetchForecast = async ({ lat, lon }: LocationCoordinatesType) => {
  const response = await weatherApi.get<ForecastResponseType>(
    `/data/2.5/forecast?lat=${lat}&lon=${lon}`
  );

  return response.data;
};

const fetchСitiesData = async (city: string) => {
  try {
    const response = await weatherApi.get(
      `/geo/1.0/direct?q=${city.trim()}&limit=5&lang=en`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const weatherService = {
  fetchCurrentWeather,
  fetchForecast,
  fetchСitiesData,
  formatCurrentWeather,
  formatForecast,
};

export default weatherService;
