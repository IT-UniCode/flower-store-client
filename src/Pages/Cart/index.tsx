import { List } from "antd";
import { FC, useEffect, useState } from "react";

import { getBasketByUserId, updateGoodsOnBasket } from "../../API/basket";
import { getGoodsByIdArray } from "../../API/goods";
import CartForm from "../../Components/CartForm";

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

  useEffect(() => {
    getBasketByUserId(localStorage.userId)
      .then(async (userBasket) => {
        const copyBasket: IBasket = {
          price: 0,
          comment: "",
          address: localStorage.address,
          orderDate: new Date(),
          goods: [],
        };
        copyBasket.comment = userBasket.data[0].comment;
        copyBasket.orderDate = userBasket.data[0].orderDate;

        let goodsIdArray: string[] = [];

        for (let i = 0; i < userBasket.data[0].goods.length; i++) {
          goodsIdArray.push(userBasket.data[0].goods[i].goodsId);
        }

        await getGoodsByIdArray(goodsIdArray)
          .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
              copyBasket.goods.push({
                goods: res.data[i],
                count: userBasket.data[0].goods[i].count,
              });
              copyBasket.price +=
                res.data[i].price * userBasket.data[0].goods[i].count;
            }
          })
          .catch((error) => console.log(error));

        setBasket(copyBasket);
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
              <span className="goods_count">
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
              </span>
              <span className="goods_price">
                {item.goods.price} ₴
                <span className="goods_price-desc"> (ед.)</span>
              </span>
            </List.Item>
          )}
        />
        <CartForm data={basket} setData={setBasket} />
      </div>
    </div>
  );
};

export default Cart;
