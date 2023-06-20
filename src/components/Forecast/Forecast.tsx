import React, { FC } from "react";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { WeatherIcon } from "..";
import { ForecastType } from "../../types";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Forecast.module.scss";

type ForecastPropsType = {
  forecast: ForecastType[];
};

const Forecast: FC<ForecastPropsType> = ({ forecast }) => {
  return (
    <Swiper
      spaceBetween={12}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true, dragSize: 24 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        280: {
          slidesPerView: 2,
        },
        370: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 5,
        },
        800: {
          slidesPerView: 7,
        },
        996: {
          slidesPerView: 5,
        },
      }}
    >
      <ul className={styles.forecast}>
        {forecast.map((item) => (
          <SwiperSlide key={item.dt}>
            <li className={styles.card}>
              <p className={styles.dayOfWeek}>{item.dayOfWeek}</p>
              <p className={styles.date}>{item.time}</p>
              <WeatherIcon id={item.weather.icon} />
              <p className={styles.temp}>
                {item.main.temp}
                <sup>&deg;</sup>
              </p>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default Forecast;
