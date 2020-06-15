import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import phoneImage from "assets/phone.svg";
import instagram from "assets/instagram.svg";
import mailImage from "assets/mail.svg";

const title = "Contact Us";
const textInfo = "There are many ways to contact us.";
const socialMediaLinks = [
  {
    link: "https://instagram.com/getsemaniland",
    icon: instagram,
  },
  {
    link: "#phone",
    icon: phoneImage,
  },
  {
    link: "#email",
    icon: mailImage,
  },
];

const Section4 = React.forwardRef(({ className }, ref) => (
  <div className={classNames(styles.section4, className)} ref={ref}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{textInfo}</p>
    <div className={styles.socialLinks}>
      {socialMediaLinks.map((info, i) => (
        <a
          className={styles.socialIcon}
          key={`social-${i}`}
          style={{ backgroundImage: `url(${info.icon})` }}
          href={info.link}
        >
          <span className={styles.accText}>{info.link}</span>
        </a>
      ))}
    </div>
  </div>
));

export default Section4;
