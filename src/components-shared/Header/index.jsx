import React, { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import Logo from "components-shared/Logo";
import logoSrc from "assets/circle.svg";
import { Link } from "react-router-dom";
import HamburgerButton from "components-shared/HamburgerButton";
import Sidebar from "components-shared/Sidebar";

const Header = ({ className, _routes }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={classNames(className, styles.header)}>
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
