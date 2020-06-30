import React from "react";
import HomePage from "Routes/HomePage";
import Header from "components-shared/Header";
import Footer from "components-shared/Footer";
import styles from "./styles.module.css";

// Routes Array
const routes = (isAuthenticated) => [
  {
    name: "Contact",
    sidebar: true,
    path: "/#contact",
    exact: true,
    isExternal: true,
    main: () => <HomePage isAuthenticated={isAuthenticated} />,
  },
  {
    name: "Section 2",
    sidebar: true,
    path: "/#section2",
    exact: true,
    isExternal: true,
    main: () => <HomePage isAuthenticated={isAuthenticated} />,
  },
  {
    name: "Section 3",
    sidebar: isAuthenticated,
    path: "/#section3",
    exact: true,
    isExternal: true,
    main: () => <HomePage isAuthenticated={isAuthenticated} />,
  },
  {
    name: "Contact",
    sidebar: isAuthenticated,
    path: "/#section4",
    // isButton: true,
    exact: true,
    isExternal: true,
    main: () => <HomePage isAuthenticated={isAuthenticated} />,
  },
];

// all routes go here
const Routes = () => {
  const _routes = routes(true);
  return (
    <>
      <Header _routes={_routes} />
      <div className={styles.page}>
        <HomePage isAuthenticated />
      </div>
      <Footer />
    </>
  );
};

export default Routes;
