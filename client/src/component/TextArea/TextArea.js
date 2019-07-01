import React from "react";
import styles from "./TextArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const TextArea = ({ onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <button className={styles.btn}>
        {/* <FontAwesomeIcon icon={faTimes} size="lg" /> */}
        <span>clear</span>
      </button>
      <textarea rows={10} onChange={onChange} className={styles.textarea} />
    </div>
  );
};
