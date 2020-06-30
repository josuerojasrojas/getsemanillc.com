import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Input = ({ className, height, isInvalid, width, ...props }) => {
  const _className = classNames(className, styles.input, {
    [styles.invalid]: isInvalid,
  });

  const _style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${width}px` : height,
  };

  return <input className={_className} style={_style} {...props} />;
};

Input.defaultProps = {
  disabled: false,
  isInvalid: false,
  spellCheck: false,
  type: "text",
  width: "100%",
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  isInvalid: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  spellCheck: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Input;
