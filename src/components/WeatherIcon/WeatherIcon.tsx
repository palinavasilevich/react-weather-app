import React, { FC } from "react";

import clearDay from "../../assets/icons/weather/clear-day.svg";
import clearNigth from "../../assets/icons/weather/clear-night.svg";

import partlyCloudyDay from "../../assets/icons/weather/partly-cloudy-day.svg";
import partlyCloudyNight from "../../assets/icons/weather/partly-cloudy-night.svg";

import cloudy from "../../assets/icons/weather/cloudy.svg";

import overcastDay from "../../assets/icons/weather/overcast-day.svg";
import overcastNight from "../../assets/icons/weather/overcast-night.svg";

import overcastRainDay from "../../assets/icons/weather/overcast-day-rain.svg";
import overcastRainNight from "../../assets/icons/weather/overcast-night-rain.svg";

import rainy from "../../assets/icons/weather/rain.svg";

import thunderstormsDay from "../../assets/icons/weather/thunderstorms-day.svg";
import thunderstormsNight from "../../assets/icons/weather/thunderstorms-night.svg";

import snowyDay from "../../assets/icons/weather/partly-cloudy-day-snow.svg";
import snowyNight from "../../assets/icons/weather/partly-cloudy-night-snow.svg";

import fogDay from "../../assets/icons/weather/fog-day.svg";
import fogNight from "../../assets/icons/weather/fog-night.svg";

interface WeatherIconPropsType {
  id: string;
}

const WeatherIcon: FC<WeatherIconPropsType> = ({ id }) => {
  const getWeatherIcon = () => {
    switch (id) {
      case "01d":
        return clearDay;

      case "01n":
        return clearNigth;

      case "02d":
        return partlyCloudyDay;

      case "02n":
        return partlyCloudyNight;

      case "03d":
        return cloudy;

      case "03n":
        return cloudy;

      case "04d":
        return overcastDay;

      case "04n":
        return overcastNight;

      case "09d":
        return rainy;

      case "09n":
        return rainy;

      case "10d":
        return overcastRainDay;

      case "10n":
        return overcastRainNight;

      case "11d":
        return thunderstormsDay;

      case "11n":
        return thunderstormsNight;

      case "13d":
        return snowyDay;

      case "13n":
        return snowyNight;

      case "50d":
        return fogDay;

      case "50n":
        return fogNight;

      default:
        return "";
    }
  };

  return <img src={getWeatherIcon()} alt="weather icon" />;
};

export default WeatherIcon;
