import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import HamburgerButton from "components-shared/HamburgerButton";
import Sidebar from "components-shared/Sidebar";

const Header = ({ className, _routes }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={classNames(className, styles.header)}>
        <Sidebar routes={_routes} toggle={toggle} setToggle={setToggle} />
        <span className={styles.name}>GETSEMANI</span>
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
