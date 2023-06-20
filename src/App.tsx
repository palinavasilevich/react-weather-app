import React, { useEffect, useState, ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchWeather } from "./store/thunks/fetchWeather";

import { Search, CurrentWeather, Forecast, Spinner } from "./components";

import { backgroundImage } from "./utils/setBackground";

import { CityType } from "./types";
import searchPlace from "./assets/images/search.svg";
import notFoundImg from "./assets/images/not-found.svg";

import weatherService from "./services/weatherService";

import "./styles/index.scss";

const App = () => {
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<CityType | null>(null);

  const dispatch = useAppDispatch();
  const { weather, forecast, isLoading, error } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  useEffect(() => {
    if (weather) {
      setTerm("");
    }
  }, [weather]);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords);

        dispatch(fetchWeather({ lat: latitude, lon: longitude }));
      });
    } else {
      alert("Browser does not support geolocation");
    }
  };

  const getSearchOptions = async (term: string) => {
    const options = await weatherService.fetchСitiesData(term);
    setOptions(options);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === "") {
      return setOptions([]);
    }

    getSearchOptions(value);
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="app">
      <div className="content">
        <Search
          term={term}
          onInputChange={onInputChange}
          setCity={setCity}
          options={options}
          location={
            weather && { city: weather.name, country: weather.sys.country }
          }
          backgroundImage={
            weather && backgroundImage(weather.weather.id, weather.is_day)
          }
        />
        <div className="weatherContainer">
          {weather && forecast ? (
            <>
              <h3 className="title">Today</h3>
              <CurrentWeather weather={weather} />
              <div className="forecast">
                <h3 className="title">
                  More On {weather.name}, {weather.sys.country}
                </h3>
                <Forecast forecast={forecast} />
              </div>
            </>
          ) : (
            <div className="noData">
              {error ? (
                <>
                  <p>Location Not Found</p>
                  <img src={notFoundImg} alt="an astronaut lost in the space" />
                  <span>Oh oh! We're lost in space finding that place.</span>
                </>
              ) : (
                <>
                  <p>No Data Yet</p>
                  <img src={searchPlace} alt="searchPlace" />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
