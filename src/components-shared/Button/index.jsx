import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children, onClick, isLink, ...props }) => {
  if (isLink)
    return (
      <a {...props} className={styles.button} onClick={onClick}>
        {children}
      </a>
    );
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
