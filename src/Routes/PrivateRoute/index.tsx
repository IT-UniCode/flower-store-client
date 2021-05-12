import React, { FC, ReactNode, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AppContext } from "../../Context";

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...props }) => {
  const { userContext  } = useContext(AppContext);

  if (userContext.auth === null) {
    return <div>Loading...</div>;
  }

  if (userContext.auth) {
    return <Route {...props}>{children}</Route>;
  }
  return <Redirect to="/signin" />;
};

export default PrivateRoute;
