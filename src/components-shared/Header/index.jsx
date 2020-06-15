import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import HamburgerButton from "components-shared/HamburgerButton";
import Sidebar from "components-shared/Sidebar";

const Header = ({ className, _routes }) => {
  const [toggle, setToggle] = useState(false);

  const TriggeHash = (path) => {
    // (josue): might be a bad idea to have a timer;
    window.location.hash = Date.now();
    setTimeout(() => {
      window.location = path;
    }, 0);
  };

  return (
    <>
      <div className={classNames(className, styles.header)}>
        <a
          className={styles.name}
          onClick={() => TriggeHash("/#section1")}
          href="/#section1"
        >
          GETSEMANI
        </a>
        <HamburgerButton
          toggle={toggle}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <Sidebar routes={_routes} toggle={toggle} setToggle={setToggle} />
      </div>
      <div className={styles["header-space"]}></div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
