import React from "react";
import styles from "./Button.module.css";

export const Button = ({ btnText, onClick }) => {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
};
