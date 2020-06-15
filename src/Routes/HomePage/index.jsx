import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Section1 from "components-app/Section1";
import Section2 from "components-app/Section2";
import Section3 from "components-app/Section3";
import Section4 from "../../components-app/Section4";

const HomePage = () => {
  const sections = {
    "#section1": useRef(null),
    "#section2": useRef(null),
    "#section3": useRef(null),
    "#section4": useRef(null),
  };

  useEffect(() => {
    const scrollToSection = () => {
      const headerOffset = 101;
      window.scrollTo({
        top: sections[window.location.hash]
          ? sections[window.location.hash].current.offsetTop - headerOffset
          : 0,
        left: 0,
        behavior: "smooth",
      });
    };
    scrollToSection();
    window.addEventListener("hashchange", scrollToSection, false);
    return () =>
      window.removeEventListener("hashchange", scrollToSection, false);
  }, [sections]);

  return (
    <div className={styles.home}>
      <Section1
        ref={sections["#section1"]}
        className={styles.section}
      ></Section1>
      <Section2
        ref={sections["#section2"]}
        className={styles.section}
      ></Section2>
      <Section3
        ref={sections["#section3"]}
        className={styles.section}
      ></Section3>
      <Section4
        ref={sections["#section4"]}
        className={styles.section}
      ></Section4>
    </div>
  );
};

export default HomePage;
