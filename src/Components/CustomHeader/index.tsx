import { Layout, Menu } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import { AppContext } from "../../Context";

import logo_img from "../../assets/img/poppy-flower.png";

import useStyles from "./style";

const { Header } = Layout;

const CustomHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  const { auth, setAuth } = useContext(AppContext);
  const [path, setPath] = useState(["/"]);

  useEffect(() => {
    setPath([`${history.location.pathname}`]);
  }, [history.location.pathname]);

  return (
    <Header
      className={classes.root}
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="header_inner">
        <Menu selectedKeys={path}>
          <Menu.Item key="1">
            <Link to="/">
              <img className="logo_link" src={logo_img} alt="logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="/">
            <Link to="/" className="menu_link">
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key="/catalog">
            <Link to="/catalog" className="menu_link">
              Каталог
            </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about" className="menu_link">
              О нас
            </Link>
          </Menu.Item>
          {/* <Menu.Item key='/' className="menu_item_right menu_item_contact">
            <Link to="/" className="menu_link">
              Связаться
            </Link>
          </Menu.Item> */}
          <Menu.Item key="/cart" className="menu_item_right menu_item_cart">
            <Link to="/cart" className="menu_link">
              Корзина
            </Link>
          </Menu.Item>
          <Menu.Item key="/account" className="menu_item_right">
            <Link to="/account" className="menu_link">
              Кабинет
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default withRouter(CustomHeader);
