import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Button from "components-shared/Button";

const title = "Getsemani Lanscaping";
const infoText =
  "some text that will appear hear, maybe a description describing something. or a quick message, idk..";
const buttonText = "Contact";

const Section1 = React.forwardRef(({ className }, ref) => {
  const TriggeHash = (path) => {
    // (josue): might be a bad idea to have a timer;
    window.location.hash = Date.now();
    setTimeout(() => {
      window.location = path;
    }, 0);
  };

  return (
    <div className={classNames(styles.Section1, className)} ref={ref}>
      <div className={styles.column}>
        <h1 className={styles.title}>{title}</h1>
        <p>{infoText}</p>
        <Button
          isLink
          href="/#section4"
          onClick={() => TriggeHash("/#section4")}
        >
          {buttonText}
        </Button>
      </div>
      <div className={classNames(styles.column, styles.picture)}></div>
    </div>
  );
});

export default Section1;
