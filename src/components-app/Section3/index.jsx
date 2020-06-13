import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import image1 from "assets/option_3.png";
import image2 from "assets/option_1.png";
import image3 from "assets/option_0.png";

const columns = [
  {
    title: "Invoicing & Payments",
    text:
      "Some text about this column, quick and short prefereably. I can't spell but the idea is there.",
    image: image1,
  },
  {
    title: "Peoples & Contracts",
    text:
      "Some text about this column, quick and short prefereably. I can't spell but the idea is there.",
    image: image2,
  },
  {
    title: "Tracking & Reports",
    text:
      "Some text about this column, quick and short prefereably. I can't spell but the idea is there.",
    image: image3,
  },
];

const Section3 = ({ className }) => {
  return (
    <div className={classNames(styles.section3, className)}>
      {columns.map((col, i) => (
        <div key={col.text + i} className={styles.column}>
          <div className={styles.imgWrapper}>
            <div class={styles.gradient}></div>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${col.image})` }}
            ></div>
          </div>
          <h3 className={styles.title}>{col.title}</h3>
          <p>{col.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Section3;
