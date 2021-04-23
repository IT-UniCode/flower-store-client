import { List, Avatar } from "antd";
import { FC, useEffect, useState } from "react";


import { getBasketByUserId } from "../../API/basket";
import { getGoodsByIdArray } from "../../API/goods";
import CartForm from '../../Components/CartForm';

import useStyles from "./style";

const Cart: FC = () => {
  const classes = useStyles();
  const [basket, setBasket] = useState<IBasket>({
    price: 0,
    comment: "",
    address: localStorage.address,
    orderDate: new Date(),
    goods: [],
  });

  useEffect(() => {
    getBasketByUserId(localStorage.userId)
      .then((userBasket) => {
        const copyBasket = { ...basket };
        copyBasket.comment = userBasket.data[0].comment;
        copyBasket.orderDate = userBasket.data[0].orderDate;

        getGoodsByIdArray(userBasket.data[0].goods)
          .then(async (goods) => {
            copyBasket.goods = goods.data;
            copyBasket.price = await goods.data.reduce(
              (sum: number, item: IGoods) => {
                return sum + item.price;
              },
              0
            );

            setBasket(copyBasket);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

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
                avatar={<Avatar src={item.goodsImage} />}
                title={item.name}
                description={item.description}
              />
              <span className="goods_price">{item.price} ₴</span>
            </List.Item>
          )}
        />
        <CartForm data={basket} setData={setBasket}/>
      </div>
    </div>
  );
};

export default Cart;
