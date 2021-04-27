import React, { FC, useState } from "react";
import classNames from "classnames";

import { Input, Button, Result } from "antd";
import { confirmBasket } from "../../API/basket";

import useStyles from "./style";

interface CartFormProps {
  data: IClientBasket;
  setData: React.Dispatch<React.SetStateAction<IClientBasket>>;
}

const { TextArea } = Input;

const CartForm: FC<CartFormProps> = ({ data, setData }) => {
  const classes = useStyles();
  const [status, setStatus] = useState(false);

  const sendBasket = () => {
    if (data.address.length > 0) {
      confirmBasket(localStorage.userId, {
        address: data.address,
        comment: data.comment,
        price: data.price,
        orderDate: new Date(),
      })
      .then(() => setStatus(true));
    }
  };
  return (
    <form className={classes.root}>
      <div>
        <label>Укажите адрес доставки</label>
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
    </form>
  );
};

export default CartForm;
