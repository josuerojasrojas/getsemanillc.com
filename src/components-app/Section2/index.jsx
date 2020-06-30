import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const title = "What Do We Offer to You?";
const textInfo = `Your Property is Your Investment...
  From Concept to Completion, We Take Care of What Matters Most to You.
  Your Needs Are Our Top Priority!`;

const Section2 = React.forwardRef(({ className }, ref) => (
  <div className={classNames(styles.section2, className)} ref={ref}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{textInfo}</p>
  </div>
));

export default Section2;
