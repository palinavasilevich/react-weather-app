import React from "react";

import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["sk-chase"]}>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
        <div className={styles["sk-chase-dot"]}></div>
      </div>
    </div>
  );
};

export default Spinner;
