import React from "react";
import styles from "./Modal.module.css";

export const Modal = ({ title, subtitle, content, footer, onClose }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.btnWrapper}>
            <button className={styles.btn}>cancel</button>
          </div>
          <div className={styles.title}>
            <h2>{title}</h2>
            {subtitle}
          </div>
        </div>
        <div className={styles.body}>{content}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
};
