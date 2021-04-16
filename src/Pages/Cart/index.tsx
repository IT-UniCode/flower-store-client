import { List, Avatar } from "antd";

import useStyles from "./style";

const data = [
  {
    title: "Tovar 1",
  },
  {
    title: "Tovar 2",
  },
  {
    title: "Tovar 3",
  },
  {
    title: "Tovar 4",
  },
];

const Cart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className="page_title">Корзина товаров</h2>
      <div className="cart_wrapper">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="234">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Cart;
