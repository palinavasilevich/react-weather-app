import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunks/fetchWeather";
import weatherService from "../../services/weatherService";
import { storage } from "../../utils/storage";
import {
  ForecastType,
  WeatherType,
  WeatherResponseType,
  ForecastResponseType,
} from "../../types";

type WeatherState = {
  weather: WeatherType | null;
  forecast: ForecastType[] | null;
  isLoading: boolean;
  error: boolean | null;
};

const initialWeather = storage.getItem("weather") || null;
const initialForecast = storage.getItem("forecast") || null;

const initialState: WeatherState = {
  weather: initialWeather,
  forecast: initialForecast,
  isLoading: false,
  error: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
      state.weather = null;
      state.error = false;
    });
    builder.addCase(
      fetchWeather.fulfilled,
      (
        state,
        action: PayloadAction<[WeatherResponseType, ForecastResponseType]>
      ) => {
        state.isLoading = false;

        const [currentWeather, forecast] = action.payload;
        state.weather = weatherService.formatCurrentWeather(currentWeather);
        state.forecast = weatherService.formatForecast(forecast);

        storage.setItem(
          "weather",
          weatherService.formatCurrentWeather(currentWeather)
        );
        storage.setItem("forecast", weatherService.formatForecast(forecast));

        state.error = null;
      }
    );
    builder.addCase(fetchWeather.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = true;

      // if (payload) state.error = payload.errorMessage;
    });
  },
});

export default weatherSlice.reducer;
