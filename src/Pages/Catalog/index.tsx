import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";

import { getGoodsList } from "../../API/goods";
import { createBasket, getBasketByUserId } from "../../API/basket";
import CategoryMenu from "../../Components/CategoryMenu";

import useStyles from "./style";

const Catalog = () => {
  const classes = useStyles();

  const [goods, setGoods] = useState<IGoods[]>([]);

  const buy = () => {
    getBasketByUserId(localStorage.userId)
      .then(basket => {
        console.log(basket);
        
        
      })
      .catch(() => {
        createBasket(localStorage.userId)
          .then(() => console.log("Корзина создана"))
          .catch((error) => console.log(error));
      });
  };

  useEffect(() => {
    getGoodsList().then((res) => {
      setGoods(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Каталог букетов</h2>

      <div className="catalogue_wrapper">
        <CategoryMenu />

        <div className="goods_items">
          {goods.map((item, index) => (
            <Card key={index}>
              <div className="goods_card-imgBlock">
                <img
                  className="goods_card-img"
                  alt="bouquet"
                  src={item.productImage}
                />
              </div>
              <h3 className="goods_card-title">{item.name}</h3>
              <p className="goods_card-desc">{item.description}</p>
              <Button className="goods_card-btn" onClick={buy}>
                Заказать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
