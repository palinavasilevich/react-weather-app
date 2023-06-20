export type CityType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type LocationCoordinatesType = {
  lat: number;
  lon: number;
};

export type WeatherResponseType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      icon: string;
      description: string;
    }
  ];
  base: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  visibility: number;
  wind: { speed: number; gust: number; deg: number };
  rain: { "1h": number };
  clouds: { all: number };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    icon: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  wind: {
    speed: number;
  };

  clouds: { all: number };

  dt: number;

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
  name: string;
  is_day: boolean;
  date: string;
  time: string;
};

export type ForecastResponseType = {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: { all: number };
      wind: { speed: number; deg: number; gust: number };
      visibility: number;
      pop: number;
      sys: { pod: string };
      dt_txt: string;
    }
  ];

  city: {
    id: number;
    name: string;
    coord: { lat: number; lon: number };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type ForecastType = {
  dt: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };

  wind: { speed: number };
  date: string;
  dayOfWeek: string;
  time: string;
};
