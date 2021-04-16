import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";

import { getGoodsList } from "../../API/goods";

import CategoryMenu from '../../Components/CategoryMenu';

import useStyles from "./style";

interface IGoods {
  name: string;
  price: number;
  description: string;
  existence: boolean;
  type: string[];
  tag: string[];
  productImage: string;
}

const Catalog = () => {
  const classes = useStyles();

  const [goods, setGoods] = useState<IGoods[]>([]);

  useEffect(() => {
    getGoodsList().then((res) => {
      setGoods(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <h2 className="page_title">Каталог букетов</h2>

      <div className='catalogue_wrapper'>
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
              <Button className="goods_card-btn">Заказать</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
