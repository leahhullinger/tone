import React, { Component } from "react";
import styles from "./Tone.module.css";

export default class Tone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userText: ""
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.wrapper}>
            <p>this is the description</p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <textarea />
        </div>
      </div>
    );
  }
}
