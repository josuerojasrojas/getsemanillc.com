import React from "react";
import styles from "./styles.module.scss";
import wave from "assets/wave.svg";

const Footer = () => (
  <footer className={styles.footer}>
    <img className={styles.wave} src={wave} />
  </footer>
);
export default Footer;
