import { List } from "antd";
import { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";

import { getBasketByUserId, updateGoodsOnBasket } from "../../API/basket";
import { getGoodsByIdArray } from "../../API/goods";
import CartForm from "../../Components/CartForm";

import useStyles from "./style";

const Cart: FC = () => {
  const classes = useStyles();

  const [basket, setBasket] = useState<IClientBasket>({
    price: 0,
    comment: "",
    address: localStorage.address,
    orderDate: new Date(),
    goods: [],
  });

  const changeGoodsCount = (op: string, goodsId: string, index: number) => {
    if (basket.goods[index].count + Number(op + 1) !== 0) {
      updateGoodsOnBasket(localStorage.userId, goodsId, op)
        .then(() => {
          const copyBasket = { ...basket };
          copyBasket.goods[index].count += Number(op + 1);
          copyBasket.price += Number(op + copyBasket.goods[index].goods.price);
          setBasket(copyBasket);
        })
        .catch((error) => console.log(error));
    }
  };

  const getGoods = async (serverBasket: IServerBasket) => {
    const goodsArray: IBasketGoodsProps[] = [];
    let goodsIdArray: string[] = [];
    let totalPrice: number = 0;

    for (let i = 0; i < serverBasket.goods.length; i++) {
      goodsIdArray.push(serverBasket.goods[i].goodsId);
    }

    await getGoodsByIdArray(goodsIdArray)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          goodsArray.push({
            goods:
              res.data[
                res.data.findIndex(
                  (goodsItem: IGoods) => goodsItem._id === goodsIdArray[i]
                )
              ],
            count: serverBasket.goods[i].count,
          });
          totalPrice += res.data[i].price * serverBasket.goods[i].count;
        }
      })
      .catch((error) => console.log(error));

    return { goodsArray, totalPrice };
  };

  useEffect(() => {
    getBasketByUserId(localStorage.userId)
      .then(async (serverBasket) => {
        const clientBasket: IClientBasket = {
          price: 0,
          comment: "",
          address: localStorage.address,
          orderDate: new Date(),
          goods: [],
        };

        const { goodsArray, totalPrice } = await getGoods(serverBasket.data[0]);

        clientBasket.comment = serverBasket.data[0].comment;
        clientBasket.orderDate = serverBasket.data[0].orderDate;
        clientBasket.goods = goodsArray;
        clientBasket.price = totalPrice;

        setBasket(clientBasket);
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
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    className="goods_img"
                    src={item.goods.goodsImage}
                    alt=""
                  />
                }
                title={item.goods.name}
                description={item.goods.description}
              />

              <div className="goods_count">
                Количество
                <button
                  className="count_btn"
                  onClick={() => changeGoodsCount("-", item.goods._id, index)}
                >
                  -
                </button>
                {item.count}
                <button
                  className="count_btn"
                  onClick={() => changeGoodsCount("+", item.goods._id, index)}
                >
                  +
                </button>
              </div>
              <div className="goods_price">
                {item.goods.price} ₴
                <span className="goods_price-desc"> (ед.)</span>
              </div>
            </List.Item>
          )}
        />
        <CartForm data={basket} setData={setBasket} />
      </div>
    </div>
  );
};

export default Cart;
