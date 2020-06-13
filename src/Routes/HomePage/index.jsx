import React from "react";
import styles from "./styles.module.scss";
import Section1 from "components-app/Section1";
import Section2 from "components-app/Section2";
import Section3 from "components-app/Section3";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Section1 className={styles.section}></Section1>
      <Section2 className={styles.section}></Section2>
      <Section3 className={styles.section}></Section3>
    </div>
  );
};

export default HomePage;
