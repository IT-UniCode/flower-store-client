import { FC, useContext, useEffect, useState } from 'react';

import {
  getBasketByUserId,
  updateGoodsOnBasket,
  delGoodsFromBasket,
} from '../../API/basket';
import {
  CloseOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import { getGoodsByIdArray } from '../../API/goods';
import CartForm from '../../Components/CartForm';
import { Button, List } from 'antd';
import { Operation } from '../../utils/consts';
import { CountContext } from '../../Context/CountContext';

import useStyles from './style';

const Cart: FC = () => {
  const classes = useStyles();
  const { count, setCount } = useContext(CountContext);
  const [basket, setBasket] = useState<IClientBasket>({
    price: 0,
    comment: '',
    address: localStorage.address,
    orderDate: new Date(),
    goods: [],
  });

  const changeGoodsCount = (op: string, goodsId: string, index: number) => {
    if (basket.goods[index].count + Number(op + 1) !== 0) {
      const copyBasket = { ...basket };
      copyBasket.goods[index].count += Number(op + 1);
      copyBasket.price += Number(op + copyBasket.goods[index].goods.price);
      setBasket(copyBasket);
      updateGoodsOnBasket(localStorage.userId, goodsId, op);

      setCount(count + Number(op + 1));
    }
  };

  const deleteGoods = (startId: number, goodsId: string) => {
    const copyBasket = { ...basket };
    setCount(count - copyBasket.goods[startId].count);

    delGoodsFromBasket(localStorage.userId, goodsId)
      .then(() => {
        copyBasket.price -=
          copyBasket.goods[startId].goods.price *
          copyBasket.goods[startId].count;
        copyBasket.goods.splice(startId, 1);

        setBasket(copyBasket);
      })
      .catch((error) => console.log(`Error ${error}`));
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
                  (goodsItem: any) => goodsItem._id === goodsIdArray[i]
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
          comment: '',
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
              <Button
                className="del_btn"
                icon={<CloseOutlined />}
                onClick={() => deleteGoods(index, item.goods._id)}
              />
              <div className="goods_count">
                <Button
                  className="count_btn"
                  icon={<MinusSquareOutlined />}
                  onClick={() =>
                    changeGoodsCount(Operation.minus, item.goods._id, index)
                  }
                />
                {item.count}
                <Button
                  className="count_btn"
                  icon={<PlusSquareOutlined />}
                  onClick={() =>
                    changeGoodsCount(Operation.plus, item.goods._id, index)
                  }
                />
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
