import React from "react";
import keyboardIMG from "../../keyboard-498396_1920.jpg";
import styles from "./Header.module.css";

export const Header = () => (
  <div className={styles.header}>
    {/* <img
      src={
        "https://requestreduce.org/images/computer-keyboard-clipart-for-kids-transparent-12.jpg"
      }
    /> */}
    <h1 className={styles.titleTone}>Tone</h1>
    {/* <p className={styles.descriptTone}>
      check the tone of your email before you send it.
    </p> */}
    {/* <h1 className={styles.titleInkblot}>Personality</h1> */}
    {/* <p className={styles.descriptInkblot}>
      Get a personality assessment by submitting 150+ words you've written.
    </p> */}
  </div>
);
