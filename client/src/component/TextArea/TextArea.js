import React from "react";
import styles from "./TextArea.module.css";

export const TextArea = ({ onChange }) => (
  <textarea rows={10} onChange={onChange} className={styles.textarea} />
);
