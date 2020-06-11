import React from "react";
import { Route } from "react-router-dom";
import Login from "Routes/Login";

const ProtectedLoginRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Login isRedirect={false} />}
    </Route>
  );
};

export default ProtectedLoginRoute;
