import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import image1 from "assets/option_3.png";
import image2 from "assets/option_1.png";
import image3 from "assets/option_0.png";

const columns = [
  {
    title: "Landscaping Maintenance",
    text:
      "Professional landscaping is vital to your business success or private property value. We maintain the appearance of your property so you don't have to sacrifice more time out of your busy life. ",
    image: image1,
  },
  {
    title: "Snow & Ice Management",
    text:
      "Snow management and ice control services performed by E-Landscaping snow fighters who follow a decade-long strategy of safety, quality and value.",
    image: image2,
  },
  {
    title: "Fertilization & Pest Management",
    text:
      "Our lawn care experts examine your lawn to create a unique fertilization & weed control plan customized to your lawn's exact needs.",
    image: image3,
  },
  {
    title: "Hardscaping & Design",
    text:
      "We build retaining walls, patios, and walk ways. Using only the highest quality materials available on the market and our best workmanship, everything we build is guaranteed to last.",
    image: image3,
  },
  {
    title: "Plant Installation",
    text:
      "Our Plant Installation displays a spectacular variety of annuals, perennials, shrubs, trees and garden ornaments. We take pride in being smooth, efficient on time, and clean on our plant delivery and plant installations",
    image: image3,
  },
];

const Section3 = React.forwardRef(({ className }, ref) => {
  return (
    <div className={classNames(styles.section3, className)} ref={ref}>
      {columns.map((col, i) => (
        <div key={col.text + i} className={styles.column}>
          <div className={styles.imgWrapper}>
            <div className={styles.gradient}></div>
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
});

export default Section3;
