import clearDay from "../assets/images/day/clear.jpg";
import clearNight from "../assets/images/night/clear.jpg";

import rainyDay from "../assets/images/day/rainy.jpg";
import rainyNight from "../assets/images/night/rainy.jpg";

import thunderstormDay from "../assets/images/day/thunderstorm.jpg";
import thunderstormNight from "../assets/images/night/thunderstorm.jpg";

import cloudyDay from "../assets/images/day/cloudy.jpg";
import cloudyNight from "../assets/images/night/cloudy.jpg";

import snowyDay from "../assets/images/day/snowy.jpg";
import snowyNight from "../assets/images/night/snowy.jpg";

const setStyles = (bgUrl: string, themeColor: string) => {
  const app = document.querySelector<HTMLElement>("#search");

  if (app) {
    const img = new Image();
    img.onload = () => {
      app.style.backgroundImage = `url(${bgUrl})`;
    };
    img.src = bgUrl;
  }

  document.documentElement.style.setProperty("--main-theme", themeColor);
};

const setBackground = (weatherId: number, isDay: boolean) => {
  if (weatherId >= 200 && weatherId <= 232) {
    if (isDay) {
      setStyles(thunderstormDay, "#30639c");
    } else {
      setStyles(thunderstormNight, "#2d3656");
    }
  } else if (weatherId >= 300 && weatherId <= 531) {
    if (isDay) {
      setStyles(rainyDay, "#647d75");
    } else {
      setStyles(rainyNight, "#325c80");
    }
  } else if (weatherId >= 600 && weatherId <= 622) {
    if (isDay) {
      setStyles(snowyDay, "#4d72aa");
    } else {
      setStyles(snowyNight, "#4d72aa");
    }
  } else if (weatherId === 800) {
    if (isDay) {
      setStyles(clearDay, "#fa6d1b");
    } else {
      setStyles(clearNight, "#fa6d1b");
    }
  } else if (weatherId >= 801 && weatherId <= 804) {
    if (isDay) {
      setStyles(cloudyDay, "#fa6d1b");
    } else {
      setStyles(cloudyNight, "#fa6d1b");
    }
  }
};

export const backgroundImage = (weatherId: number, isDay: boolean) => {
  if (weatherId >= 200 && weatherId <= 232) {
    return isDay ? thunderstormDay : thunderstormNight;
  } else if (weatherId >= 300 && weatherId <= 531) {
    return isDay ? rainyDay : rainyNight;
  } else if (weatherId >= 600 && weatherId <= 622) {
    return isDay ? snowyDay : snowyNight;
  } else if (weatherId === 800) {
    return isDay ? clearDay : clearNight;
  } else if (weatherId >= 801 && weatherId <= 804) {
    return isDay ? cloudyDay : cloudyNight;
  }
};

export default setBackground;
