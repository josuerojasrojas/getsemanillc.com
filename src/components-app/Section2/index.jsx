import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const title = "Explore Features";
const textInfo =
  "For there are many features to explore, and without exploration how would thy know what features we have?";

const Section2 = ({ className }) => (
  <div className={classNames(styles.section2, className)}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{textInfo}</p>
  </div>
);

export default Section2;
