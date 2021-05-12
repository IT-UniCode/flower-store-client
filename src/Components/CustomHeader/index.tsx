import { Layout, Menu, Badge, Button } from "antd";
import { useEffect, useState, useContext, FC } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { AppContext } from "../../Context";
import logo_img from "../../assets/img/poppy-flower.png";

import useStyles from "./style";

const { Header } = Layout;

const CustomHeader: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [path, setPath] = useState(["/"]);
  const { userContext } = useContext(AppContext);

  useEffect(() => {
    setPath([`${history.location.pathname}`]);
  }, [history.location.pathname]);
  
  return (
    <Header className={classes.root}>
      <div className="header_inner">
        <Menu selectedKeys={path}>
          <Menu.Item key="home">
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
          { userContext.role === 'ADMIN' &&
          <Menu.Item key="/admin-page">
            <Link to="/admin-page" className="menu_link">
              Admin
            </Link>
          </Menu.Item>}
            <Menu.Item key="/cart" className="menu_item_right menu_item_cart">
          <Badge count={userContext.goodsCount}>
              <Link to="/cart" className="menu_link">
                <Button icon={<ShoppingCartOutlined />} className="cart_btn" />
              </Link>
          </Badge>
            </Menu.Item>
          <Menu.Item key="/account" className="menu_item_right">
            <Link to="/account" className="menu_link">
              {userContext.auth ? "Кабинет" : "Войти"}
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default withRouter(CustomHeader);
