import React, { useEffect, useState } from 'react';

import { getAdminBasketList, updateBasketStatus } from '../../API/basket';
import { BasketStatus } from '../../utils/enums';

import useStyles from './style';

const AdminPage = () => {
  const classes = useStyles();

  const [data, setData] = useState([
    {
      _id: '',
      fullName: '',
      phone: '',
      address: '',
      price: '',
      status: '',
    },
  ]);

  const changeStatus = (basketId: string, status: string) => {
    updateBasketStatus(basketId, status)
      .then((res) => {})
      .catch((error) => console.log(`Error ${error}`));
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
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Адрес доставки</th>
              <th>Сумма заказа</th>
              <th>Статус</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                  {item.status === BasketStatus.sended ? (
                    <button
                      onClick={() =>
                        changeStatus(item._id, BasketStatus.received)
                      }
                    >
                      Принять
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        changeStatus(item._id, BasketStatus.staffed)
                      }
                    >
                      Укомплетовать
                    </button>
                  )}
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
