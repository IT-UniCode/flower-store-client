import React, { FC, ReactNode, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AppContext } from "../../Context";

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...props }) => {
  const { auth,  } = useContext(AppContext);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  if (auth) {
    return <Route {...props}>{children}</Route>;
  }
  return <Redirect to="/signin" />;
};

export default PrivateRoute;
