import React, { FC } from "react";

import { ReactComponent as ClearDayIcon } from "../../assets/icons/weather/clear-day.svg";
import { ReactComponent as ClearNightIcon } from "../../assets/icons/weather/clear-night.svg";

import { ReactComponent as PartlyCloudyDayIcon } from "../../assets/icons/weather/partly-cloudy-day.svg";
import { ReactComponent as PartlyCloudyNightIcon } from "../../assets/icons/weather/partly-cloudy-night.svg";

import { ReactComponent as CloudyIcon } from "../../assets/icons/weather/cloudy.svg";

import { ReactComponent as OvercastDayIcon } from "../../assets/icons/weather/overcast-day.svg";
import { ReactComponent as OvercastNightIcon } from "../../assets/icons/weather/overcast-night.svg";

import { ReactComponent as RainyIcon } from "../../assets/icons/weather/rain.svg";

import { ReactComponent as OvercastRainDayIcon } from "../../assets/icons/weather/overcast-day-rain.svg";
import { ReactComponent as OvercastRainNightIcon } from "../../assets/icons/weather/overcast-night-rain.svg";

import { ReactComponent as ThunderstormsDayIcon } from "../../assets/icons/weather/thunderstorms-day.svg";
import { ReactComponent as ThunderstormsNightIcon } from "../../assets/icons/weather/thunderstorms-night.svg";

import { ReactComponent as SnowyDayIcon } from "../../assets/icons/weather/partly-cloudy-day-snow.svg";
import { ReactComponent as SnowyNightIcon } from "../../assets/icons/weather/partly-cloudy-night-snow.svg";

import { ReactComponent as FogDayIcon } from "../../assets/icons/weather/fog-day.svg";
import { ReactComponent as FogNightIcon } from "../../assets/icons/weather/fog-night.svg";

interface WeatherIconPropsType {
  id: string;
}

const WeatherIcon: FC<WeatherIconPropsType> = ({ id }) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  switch (id) {
    case "01d":
      Icon = ClearDayIcon;
      break;

    case "01n":
      Icon = ClearNightIcon;
      break;

    case "02d":
      Icon = PartlyCloudyDayIcon;
      break;

    case "02n":
      Icon = PartlyCloudyNightIcon;
      break;

    case "03d":
      Icon = CloudyIcon;
      break;

    case "03n":
      Icon = CloudyIcon;
      break;

    case "04d":
      Icon = OvercastDayIcon;
      break;

    case "04n":
      Icon = OvercastNightIcon;
      break;

    case "09d":
      Icon = RainyIcon;
      break;

    case "09n":
      Icon = RainyIcon;
      break;

    case "10d":
      Icon = OvercastRainDayIcon;
      break;

    case "10n":
      Icon = OvercastRainNightIcon;
      break;

    case "11d":
      Icon = ThunderstormsDayIcon;
      break;

    case "11n":
      Icon = ThunderstormsNightIcon;
      break;

    case "13d":
      Icon = SnowyDayIcon;
      break;

    case "13n":
      Icon = SnowyNightIcon;
      break;

    case "50d":
      Icon = FogDayIcon;
      break;

    case "50n":
      Icon = FogNightIcon;
      break;

    default:
      Icon = CloudyIcon;
  }

  return <Icon />;
};

export default WeatherIcon;
