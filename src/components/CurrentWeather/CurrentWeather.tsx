import React, { FC } from "react";
import IndicatorSvgSelector from "../../assets/icons/indicators/IndicatorSvgSelector";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

import { WeatherType } from "../../types";
import styles from "./CurrentWeather.module.scss";

interface CurrentWeatherPropsType {
  weather: WeatherType;
}

const CurrentWeather: FC<CurrentWeatherPropsType> = ({ weather }) => {
  return (
    <div className={styles.currentWeather}>
      <div className={styles.weather}>
        <div className={styles.temp}>
          {weather.main.temp}
          <sup>&deg;</sup>
        </div>

        <WeatherIcon id={weather.weather.icon} />

        <p className={styles.desc}> {weather.weather.description} </p>
        <p className={styles.date}> {weather.date} </p>
      </div>
      <ul className={styles.details}>
        <li>
          <span className={styles.icon}>
            <IndicatorSvgSelector id="humidity" />
            Humidity:
          </span>
          <span className={styles.value}>{`${weather.main.humidity} %`}</span>
        </li>
        <li>
          <span className={styles.icon}>
            <IndicatorSvgSelector id="wind" />
            Wind:
          </span>
          <span className={styles.value}>{`${weather.wind.speed} kph`}</span>
        </li>

        <li>
          <span className={styles.icon}>
            <IndicatorSvgSelector id="clouds" />
            Clouds:
          </span>
          <span className={styles.value}>{`${weather.clouds.all}%`}</span>
        </li>
        <li>
          <span className={styles.icon}>
            <IndicatorSvgSelector id="max-temp" />
            Max Temp:
          </span>
          <span className={styles.value}>
            {weather.main.temp_max}
            <sup>&deg;</sup>
          </span>
        </li>
        <li>
          <span className={styles.icon}>
            <IndicatorSvgSelector id="min-temp" />
            Min Temp:
          </span>
          <span className={styles.value}>
            {weather.main.temp_min}
            <sup>&deg;</sup>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
