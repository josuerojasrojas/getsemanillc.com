import React, { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import Logo from "components-shared/Logo";
import logoSrc from "assets/circle.svg";
import { Link } from "react-router-dom";
import HamburgerButton from "components-shared/HamburgerButton";
import Sidebar from "components-shared/Sidebar";
import wave1 from "assets/wave-layer-1.svg";

const Header = ({ className, _routes }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={classNames(className, styles.header)}>
        <div className={classNames(styles.layer, styles.layer3)}></div>
        <div className={classNames(styles.layer, styles.layer2)}></div>
        <div className={classNames(styles.layer, styles.layer1)}></div>
        <Sidebar routes={_routes} toggle={toggle} setToggle={setToggle} />
        <Link to="/">
          <Logo imageSrc={logoSrc} />
        </Link>
        <HamburgerButton
          toggle={toggle}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      <div className={styles["header-space"]}></div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
