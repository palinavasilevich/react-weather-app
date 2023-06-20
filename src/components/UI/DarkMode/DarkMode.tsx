import React, { useEffect } from "react";

import { TbMoon, TbSun } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setTheme, Theme } from "../../../store/reducers/themeSlice";

import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme]);

  const switchDarkMode = () => {
    dispatch(setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className={styles.darkmode}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onChange={switchDarkMode}
      />
      <label htmlFor="checkbox" className={styles.label}>
        <TbMoon
          style={{
            color: "#a6ddf0",
          }}
        />
        <TbSun
          style={{
            color: "#f5c32c",
          }}
        />
        <div className={styles.ball}></div>
      </label>
    </div>
  );
};

export default DarkMode;
