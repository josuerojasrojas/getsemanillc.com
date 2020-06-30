import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children, onClick, isLink, isInput, ...props }) => {
  if (isLink)
    return (
      <a {...props} className={styles.button} onClick={onClick}>
        {children}
      </a>
    );
  else if (isInput) {
    return (
      <input {...props} className={styles.button} onClick={onClick}></input>
    );
  }
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
