import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../Context';
import { getUserById } from '../../API/user';

import useStyles from './style';

const Account = () => {
  const classes = useStyles();
  const { userContext, setUserContext } = useContext(AppContext);

  const [user, setUser] = useState<IUser>({
    name: '',
    surname: '',
    lastname: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    checkPass: '',
    basketId: '',
  });

  const logout = () => {
    localStorage.clear();

    setUserContext({
      auth: false,
      goodsCount: 0,
      userId: '',
      userName: '',
      userSurName: '',
      userLastName: '',
      email: '',
      phone: '',
      address: '',
      role: '',
    });
  };

  useEffect(() => {
    getUserById(userContext.userId).then((res) => {
      setUser({
        name: res.data.name,
        surname: res.data.surname,
        lastname: res.data.lastname,
        phone: res.data.phone,
        address: res.data.address,
        email: res.data.email,
        password: '',
        checkPass: '',
        basketId: '',
      });
    });
  }, [userContext.userId]);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Кабинет пользователя</h2>
      <div className="userData">
        <h3>Личные данные</h3>
        <div className="userData_items">
          <div className="userData_item">
            <p className="userData_item-title">Фамилия</p>
            <p>{user.surname}</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Имя</p>
            <p>{user.name}</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Отчество</p>
            <p>{user.lastname}</p>
          </div>
        </div>
      </div>

      <div className="userData">
        <h3>Контакты</h3>
        <div className="userData_items">
          <div className="userData_item">
            <p className="userData_item-title">Телефон</p>
            <p>{user.phone}</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Email</p>
            <p>{user.email}</p>
          </div>
          <div className="userData_item" />
        </div>
      </div>

      <div className="userData">
        <h3>Адрес доставки</h3>
        <div className="userData_items">
          <p>{user.address}</p>
        </div>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Account;
