import { createAsyncThunk } from "@reduxjs/toolkit";

import weatherService from "../../services/weatherService";
import { LocationCoordinatesType } from "../../types";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (
    city: LocationCoordinatesType,
    { dispatch, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const res = await Promise.all([
        weatherService.fetchCurrentWeather(city),
        weatherService.fetchForecast(city),
      ]);

      return res;
    } catch (error) {
      return rejectWithValue({
        errorMessage: "Failed to fetch weather.",
      });
    }
  }
);
