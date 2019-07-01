import React from "react";
import styles from "./TextArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const TextArea = ({ onChange, userInput, onClearText }) => {
  return (
    <div className={styles.inputWrapper}>
      {!!userInput && (
        <button className={styles.btn} onClick={onClearText}>
          {/* <FontAwesomeIcon icon={faTimes} size="lg" /> */}
          <span>clear</span>
        </button>
      )}
      <textarea
        placeholder="start typing here..."
        rows={10}
        onChange={onChange}
        className={styles.textarea}
      />
    </div>
  );
};
