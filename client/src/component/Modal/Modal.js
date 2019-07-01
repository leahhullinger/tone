import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.css";

export const Modal = ({ title, subtitle, content, footer, onClose }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.btnWrapper}>
            <button
              style={{
                height: 40,
                padding: 10,
                backgroundColor: "transparent",
                border: "none"
              }}
              onClick={() => onClose()}
              className={styles.btn}
            >
              <FontAwesomeIcon icon={faTimes} size="3x" />
            </button>
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
