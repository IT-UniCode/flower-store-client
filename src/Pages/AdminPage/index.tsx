import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';

import {
  getAdminBasketList,
  updateBasketStatus,
  delBasketById,
} from '../../API/basket';
import { BasketStatus } from '../../utils/enums';
import { AppContext } from '../../Context';

import useStyles from './style';

const AdminPage = () => {
  const classes = useStyles();
  const { userContext } = useContext(AppContext);
  const [data, setData] = useState([
    {
      _id: '',
      fullName: '',
      phone: '',
      address: '',
      price: '',
      orderDate: '',
      status: '',
    },
  ]);

  const changeStatus = async (
    basketId: string,
    status: string,
    orderDate: Date
  ) => {
    const changedStatus = checkStatus(status)[1];
    const copyData = [...data];
    let orderId = -1;

    copyData.forEach((item, index) => {
      if (item._id === basketId) {
        orderId = index;
      }
    });

    if (status === BasketStatus.isdone) {
      delBasketById(basketId).catch((error) => console.log(`Error ${error}`));
      copyData.splice(orderId, 1);
    } else {
      updateBasketStatus(
        basketId,
        changedStatus,
        userContext.email,
        orderDate
      ).catch((error) => console.log(`Error ${error}`));
      copyData[orderId].status = changedStatus;
    }

    setData(copyData);
  };

  const checkStatus = (status: string) => {
    switch (status) {
      case BasketStatus.sended:
        return ['Принять', BasketStatus.accepted];
      case BasketStatus.accepted:
        return ['Укомплетовать', BasketStatus.staffed];
      case BasketStatus.staffed:
        return ['Завершить', BasketStatus.isdone];
      case BasketStatus.isdone:
        return ['Удалить'];
      default:
        return [''];
    }
  };

  const btn_classes = (status: string) => {
    return classNames({
      "change-status_btn change-status_btn_sended": status === BasketStatus.sended,
      'change-status_btn change-status_btn_accepted': status === BasketStatus.accepted,
      'change-status_btn change-status_btn_staffed': status === BasketStatus.staffed,
      'change-status_btn change-status_btn_isdone': status === BasketStatus.isdone,
    });
  };

  useEffect(() => {
    getAdminBasketList()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(`Error ${error}`));
  }, []);

  return (
    <div className={classes.root}>
      <h2 className="page_title">AdminPage</h2>
      <div className="basket-list_wrapper">
        <table className="basket-list">
          <thead>
            <tr>
              <th>№</th>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Адрес доставки</th>
              <th>Сумма заказа</th>
              <th>Дата</th>
              <th>Статус</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.price}</td>
                <td>{new Date(item.orderDate).toLocaleDateString()}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    className={btn_classes(item.status)}
                    onClick={() =>
                      changeStatus(
                        item._id,
                        item.status,
                        new Date(item.orderDate)
                      )
                    }
                  >
                    {checkStatus(item.status)[0]}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
