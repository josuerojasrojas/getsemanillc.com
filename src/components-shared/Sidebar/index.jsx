import React, { useEffect } from "react";
import Button from "components-shared/Button";
import classNames from "classnames";
import styles from "./styles.module.scss";

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
              {route.isButton ? (
                <Button
                  isLink
                  onClick={() => TriggeHash(route.path)}
                  href={route.path}
                >
                  {route.name}
                </Button>
              ) : (
                <a
                  className={styles.link}
                  onClick={() => TriggeHash(route.path)}
                  href={route.path}
                >
                  {route.name}
                </a>
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
