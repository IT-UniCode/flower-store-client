import React, { FC, ReactNode, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

import { AppContext } from "../../Context";

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...props }) => {
  const { auth, setAuth } = useContext(AppContext);

  useEffect(() => {
    // getUserInfo(28).then((res) => console.log(res.data));
    
    // login({ email: 'maks@gmail.com', pass: 'maks2000' })
    //   .then((res) => res.data)
    //   .catch((res) => res);
    setAuth(false);
  }, [setAuth]);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  if (auth) {
    return <Route {...props}>{children}</Route>;
  }
  return <Redirect to="/sign-in" />;
};

export default PrivateRoute;
