import React from "react";
import styles from "./Button.module.css";

const btnStyle = {
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "right",
    padding: 20,
    width: "100%",
    height: 50,
    backgroundColor: "transparent"
  },
  btn: {
    height: "100%",
    textDecoration: "none",
    backgroundColor: "transparent",
    borderSize: 3,
    borderColor: "black",
    borderRadius: 5,
    fontSize: "24px",
    fontWeight: 800,
    // textTransform: "uppercase",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10
  }
};
export const Button = ({ btnText, onClick }) => {
  return (
    <div style={btnStyle.btnWrapper}>
      <button style={btnStyle.btn} onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
};
