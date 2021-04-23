import React, { FC, useState } from "react";
import classNames from "classnames";

import { Input, Button, Result } from "antd";
import { updateBasketData } from "../../API/basket";

import useStyles from "./style";

interface CartFormProps {
  data: IBasket;
  setData: React.Dispatch<React.SetStateAction<IBasket>>;
}

const { TextArea } = Input;

const CartForm: FC<CartFormProps> = ({ data, setData }) => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);

  const sendBasket = () => {
    if (data.address.length > 0) {
      updateBasketData(localStorage.userId, {
        address: data.address,
        comment: data.comment,
        price: data.price,
        orderDate: new Date(),
      })
      .then(() => setStatus(prev => (true)));
    }
  };
  return (
    <div className={classes.root}>
      <div>
        <p>Укажите адрес доставки</p>
        <Input
          value={data.address}
          placeholder="Введите адрес доставки"
          className={classNames({ check_address: data.address.length === 0 })}
          onChange={(e) =>
            setData((prev) => ({ ...prev, address: e.target.value }))
          }
        />
        <TextArea
          value={data.comment}
          rows={4}
          className="order_comment"
          placeholder="Личные пожелания"
          onChange={(e) =>
            setData((prev) => ({ ...prev, comment: e.target.value }))
          }
        />
      </div>
      <div className="order_inner">
        <p className="order_total-price">Общая стоимость {data.price} ₴</p>
        <Button className="order_btn" onClick={sendBasket}>
          Оформить заказ
        </Button>
        {status && <Result status="success" title="Заказ принят" />}
      </div>
    </div>
  );
};

export default CartForm;
