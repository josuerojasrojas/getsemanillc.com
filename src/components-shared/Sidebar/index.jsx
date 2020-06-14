import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css";

const Sidebar = ({ routes, toggle, setToggle }) => {
  useEffect(
    () => {
      const domClick = (e) => {
        if (
          e.target.id !== "main-sidemenu" &&
          !e.target.closest("#hamburger-button")
        ) {
          setToggle(false);
        }
      };

      document.addEventListener("click", domClick); // adds eventListener that contains elements properties
      return () => document.removeEventListener("click", domClick); // removes eventListener
    },
    [setToggle] //useEffect dependency to reinitiate itself.
  );

  const TriggeHash = (path) => {
    // (josue): might be a bad idea to have a timer;
    window.location.hash = Date.now();
    setTimeout(() => {
      window.location = path;
    }, 0);
  };

  return (
    <div
      id="main-sidemenu"
      className={classNames(styles.sidebar, {
        [styles.slideIn]: toggle,
      })}
    >
      <ul>
        {routes.map((route, index) =>
          route.sidebar ? (
            <li key={index}>
              {route.isExternal ? (
                <a onClick={() => TriggeHash(route.path)} href={route.path}>
                  {route.name}
                </a>
              ) : (
                <NavLink
                  to={route.path}
                  exact
                  key={index}
                  activeClassName={styles.active}
                >
                  {route.name}
                </NavLink>
              )}
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
