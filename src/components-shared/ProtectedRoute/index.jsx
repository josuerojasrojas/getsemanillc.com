import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect from={location.path + location.search} to={redirectTo} />
        )
      }
    />
  );
};

export default ProtectedRoute;
