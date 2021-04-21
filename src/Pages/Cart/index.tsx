import { List, Avatar, Button } from "antd";
import { FC, useEffect, useState } from "react";

import { getBasketByUserId } from "../../API/basket";
import { getGoodsById } from "../../API/goods";
import { Input } from 'antd';

import useStyles from "./style";

interface IBasket {
  price: number;
  comment: string;
  orderDate: Date;
  goods: string[];
}

const { TextArea } = Input;

const Cart: FC = () => {
  const classes = useStyles();
  const [basket, setBasket] = useState<IBasket>({
    price: 0,
    comment: "",
    orderDate: new Date(),
    goods: [],
  });

  const [goodsList, setGoodsList] = useState<IGoods[]>([
    {
      _id: "",
      name: "",
      price: 0,
      description: "",
      existence: true,
      type: [],
      tag: [],
      productImage: "",
    },
  ]);

  const getGoodsList = (goodsIdList: string[]) => {
    let goodsArray: IGoods[] = [];
    goodsIdList.forEach((item, index) => {
      getGoodsById(item)
        .then((goods) => {   
       
          goodsArray.push( {
            _id: goods.data.id,
            name: goods.data.name,
            price: goods.data.price,
            description: goods.data.description,
            existence: goods.data.existence,
            type: goods.data.type,
            tag: goods.data.tag,
            productImage: goods.data.productImage,
          });
        })
        .catch((error) => console.log(error));
    });
    
    setGoodsList(goodsArray);
  };
  
  useEffect(() => {
    getBasketByUserId(localStorage.userId)
      .then((basket) => {
        setBasket({
          price: basket.data.price,
          comment: basket.data.comment,
          orderDate: basket.data.orderDate,
          goods: basket.data[0].goods,
        });

        getGoodsList(basket.data[0].goods);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Корзина товаров</h2>
      <div className="cart_wrapper">
        <List
          itemLayout="horizontal"
          dataSource={goodsList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.productImage} />}
                title={item.name}
                description={item.description}
              />
              <p>{item.price} ₴</p>
            </List.Item>
          )}
        />
        <div className='order_wrapper'>
            <div>
            <p>Укажите адрес доставки</p>
            <Input />
            <TextArea rows={4} className='order_comment'/>
            </div>
          <div className='order_inner'>
            <p className='order_total-price'>Общая стоимость {basket.price} ₴</p>
            <Button className='order_btn'>Оформить заказ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
