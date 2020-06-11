import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.css";

const HamburgerButton = ({ toggle, onClick }) => {
  const [isRender, setIsRender] = useState(false);

  const _onClick = () => {
    setIsRender(true);
    onClick();
  };

  return (
    <div
      id="hamburger-button"
      onClick={_onClick}
      className={classNames(styles.hamburgerButton, {
        [styles.isToggled]: isRender && toggle,
        [styles.isNotToggled]: isRender && !toggle,
      })}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

HamburgerButton.propTypes = {
  toggle: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HamburgerButton;
