import React from "react";
import { Menu } from "antd";

import useStyles from "./style";

const CategoryMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="category-menu">
        <h4 className="category-menu_title">Выберите свой идеальный букет</h4>
        <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]}>
          <Menu.Item key="1">
            <span className='category-menu_item'>Категория 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className='category-menu_item'>Категория 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className='category-menu_item'>Категория 3</span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default CategoryMenu;
