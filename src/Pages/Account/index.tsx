import React from "react";

import useStyles from "./style";

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className="page_title">Кабинет пользователя</h2>
      <div className="userData">
        <h3>Личные данные</h3>
        <div className="userData_items">
          <div className="userData_item">
            <p className="userData_item-title">Фамилия</p>
            <p>Сапейко</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Имя</p>
            <p>Максим</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Отчество</p>
            <p>Олександрович</p>
          </div>
        </div>
      </div>

      <div className="userData">
        <h3>Контакты</h3>
        <div className="userData_items">
          <div className="userData_item">
            <p className="userData_item-title">Телефон</p>
            <p>+380832342367</p>
          </div>
          <div className="userData_item">
            <p className="userData_item-title">Email</p>
            <p>maks.ewfa@ewf.efwe</p>
          </div>
          <div className="userData_item" />
        </div>
      </div>

      <div className="userData">
        <h3>Адрес доставки</h3>
        <div className="userData_items">
            <p>Черкасская обл., Черкассы р-н., Черкассы, Благовестная ул., д.123, кв.7</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
