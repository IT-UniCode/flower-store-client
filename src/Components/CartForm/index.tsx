import React, { FC, useState, useContext } from 'react';
import classNames from 'classnames';
import { Input, Button, Result } from 'antd';

import { BasketStatus } from '../../utils/enums';
import { AppContext } from '../../Context';
import { confirmBasket } from '../../API/basket';

import useStyles from './style';

interface CartFormProps {
  data: IClientBasket;
  setData: React.Dispatch<React.SetStateAction<IClientBasket>>;
}

const { TextArea } = Input;

const CartForm: FC<CartFormProps> = ({ data, setData }) => {
  const classes = useStyles();
  const [basketStatus, setBasketStatus] = useState(false);
  const { userContext, setUserContext } = useContext(AppContext);

  const sendBasket = () => {
    if (data.address.length > 0) {
      confirmBasket(userContext.userId, {
        fullName: `${userContext.userSurName} ${userContext.userName} ${userContext.userLastName}`,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        price: data.price,
        orderDate: new Date(),
        email: userContext.email,
        status: BasketStatus.sended,
      }).then(() => {
        setUserContext({
          goodsCount: 0,
          phone: userContext.phone,
          address: userContext.address,
          role: userContext.role,
          auth: userContext.auth,
          email: userContext.email,
          userId: userContext.userId,
          userName: userContext.userName,
          userSurName: userContext.userSurName,
          userLastName: userContext.userLastName,
        });

        setData((prev) => ({
          ...prev,
          address: userContext.address,
          goods: [],
          price: 0,
          comment: '',
        }));

        setBasketStatus(true);
      });
    }
  };

  return (
    <form className={classes.root}>
      <div className="order_inner-left">
        <label>Укажите телефон</label>
        <Input
          value={data.phone}
          placeholder="Введите номер телефона"
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
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
      <div className="order_inner-right">
        <p className="order_total-price">
          Общая стоимость: <br />
          {data.price} ₴
        </p>
        <Button
          className="order_btn"
          onClick={sendBasket}
          disabled={userContext.goodsCount === 0}
        >
          Оформить заказ
        </Button>
        {basketStatus && (
          <Result status="success" title="Заказ отправлен менеджеру" />
        )}
      </div>
    </form>
  );
};

export default CartForm;
