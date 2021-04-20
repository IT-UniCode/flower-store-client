import { List, Avatar } from "antd";
import { useEffect, useState } from "react";

import { getBasketByUserId } from "../../API/basket";

import useStyles from "./style";

interface IBasket {
  price: number;
  comment: string;
  orderDate: Date;
  goods: IGoods[];
}

const Cart = () => {
  const classes = useStyles();
  const [basket, setBasket] = useState<IBasket>({
    price: 0,
    comment: "",
    orderDate: new Date(),
    goods: [
      {
        name: "",
        price: 0,
        description: "",
        existence: true,
        type: [],
        tag: [],
        productImage: "",
      },
    ],
  });

  useEffect(() => {
    getBasketByUserId(localStorage.userId)
      .then((basket) => {
        setBasket({
          price: basket.data.price,
          comment: basket.data.comment,
          orderDate: basket.data.orderDate,
          goods: basket.data.goods,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(basket);
  
  return (
    <div className={classes.root}>
      <h2 className="page_title">Корзина товаров</h2>
      <div className="cart_wrapper">
        <List
          itemLayout="horizontal"
          dataSource={basket.goods}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={item.productImage} />
                }
                title={<a href="234">{item.name}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Cart;
