import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const title = "Getsemani Lanscaping";
const infoText =
  "some text that will appear hear, maybe a description describing something. or a quick message, idk..";

const Section1 = React.forwardRef(({ className }, ref) => {
  return (
    <div className={classNames(styles.Section1, className)} ref={ref}>
      <div className={styles.column}>
        <h1 className={styles.title}>{title}</h1>
        <p>{infoText}</p>
      </div>
      <div className={classNames(styles.column, styles.picture)}></div>
    </div>
  );
});

export default Section1;
