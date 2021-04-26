import React, { FC, useEffect, useState, useContext } from "react";
import { Card, Button } from "antd";

import { getGoodsList } from "../../API/goods";
import {
  createBasket,
  getBasketByUserId,
  updateGoodsOnBasket,
} from "../../API/basket";
import CategoryMenu from "../../Components/CategoryMenu";
import { AppContext } from "../../Context";

import useStyles from "./style";
import { useHistory, withRouter } from "react-router";

const Catalog: FC = () => {
  const classes = useStyles();
  const { auth } = useContext(AppContext);
  const history = useHistory();
  const [goods, setGoods] = useState<IGoods[]>([]);
  const [sortItems, setSortItems] = useState<ISortItems>();

  const buy = (goodsId: string) => {
    if (auth) {
      getBasketByUserId(localStorage.userId)
        .then((res) => {
          if (res.data.length > 0) {
            updateGoodsOnBasket(localStorage.userId, goodsId, "+")
              .then(() => console.log("Товар добавлен в корзину"))
              .catch((error) => console.log(error));
          } else {
            createBasket(localStorage.userId, localStorage.address)
              .then(() => {
                console.log("Корзина создана");
                updateGoodsOnBasket(localStorage.userId, goodsId, "+")
                  .then(() => console.log("Товар добавлен в корзину"))
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
    } else {
      history.push("/signin");
    }
  };

  const fillingSortItems = (goods: IGoods[]) => {
    let categoriesArray: string[] = [];
    let tagsArray: string[] = [];

    goods.forEach((item) => {
      item.type.forEach((type: string) => {
        if (!categoriesArray.includes(type)) {
          categoriesArray.push(type);
        }
      });
      item.tags.forEach((tag: string) => {
        if (!tagsArray.includes(tag)) {
          tagsArray.push(tag);
        }
      });
    });

    setSortItems({ categories: categoriesArray, tags: tagsArray });
  };

  useEffect(() => {
    getGoodsList().then((res) => {
      setGoods(res.data);
      fillingSortItems(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Каталог букетов</h2>

      <div className="catalogue_wrapper">
        <CategoryMenu sortItemsData={sortItems} setGoodsData={setGoods} />

        <div className="goods_items">
          {goods.map((item, index) => (
            <Card key={index}>
              <div className="goods_card-imgBlock">
                <img
                  className="goods_card-img"
                  alt="bouquet"
                  src={item.goodsImage}
                />
              </div>
              <h3 className="goods_card-title">{item.name}</h3>
              <p className="goods_card-desc">{item.description}</p>
              <Button className="goods_card-btn" onClick={() => buy(item._id)}>
                Заказать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Catalog);
