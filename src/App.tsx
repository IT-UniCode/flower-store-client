import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import CustomHeader from "./Components/CustomHeader";
import CustomFooter from "./Components/CustomFooter";
import AppProvider from "./Context";
import CountProvider from "./Context/CountContext";

import useStyles from "./style";
import "antd/dist/antd.css";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppProvider>
        <CountProvider>
          <Router>
            <Layout>
              <CustomHeader />
              <Routes />
              <CustomFooter />
            </Layout>
          </Router>
        </CountProvider>
      </AppProvider>
    </div>
  );
};

export default App;
