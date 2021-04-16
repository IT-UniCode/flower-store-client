import { FC, ReactNode } from "react";
import { Switch, Route } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Account from "../Pages/Account";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";

import PrivateRoute from "../Routes/PrivateRoute";

import useStyles from "./style";

interface IRoutes {
  path: string;
  exact: boolean;
  componnent: ReactNode;
  private: boolean;
};

const ROUTES: IRoutes[] = [
  {
    path: "/",
    exact: true,
    componnent: <Home />,
    private: false,
  },
  {
    path: "/catalog",
    exact: false,
    componnent: <Catalog />,
    private: false,
  },
  {
    path: "/about",
    exact: false,
    componnent: <About />,
    private: false,
  },
  {
    path: "/cart",
    exact: false,
    componnent: <Cart />,
    private: false,
  },
  {
    path: "/account",
    exact: false,
    componnent: <Account />,
    private: true,
  },
  {
    path: "/sign-up",
    exact: false,
    componnent: <SignUp />,
    private: false,
  },
  {
    path: "/sign-in",
    exact: false,
    componnent: <SignIn />,
    private: false,
  },
];

const Routes: FC = () => {
  const classes = useStyles();

  return (
    <Content className={classes.root}>
      <Switch>
        {ROUTES.map((item, index) => (
          item.private ?  (
            <PrivateRoute path={item.path} exact={item.exact} key={index}>
              {item.componnent}
            </PrivateRoute>
          ) : (
            <Route path={item.path} exact={item.exact} key={index}>
              {item.componnent}
            </Route>)
        ))}
      </Switch>
    </Content>
  );
};

export default Routes;
