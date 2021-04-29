import React, { FC, useEffect, useState } from "react";
import { withRouter } from "react-router";

import CategoryMenu from "../../Components/CategoryMenu";
import { getGoodsList } from "../../API/goods";

import GoodsList from "../../Components/GoodsList";

import useStyles from "./style";

const Catalog: FC = () => {
  const classes = useStyles();

  const [goods, setGoods] = useState<IGoods[]>([]);
  const [sortItems, setSortItems] = useState<ISortItems>();

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
        <GoodsList goodsArray={goods} />
      </div>
    </div>
  );
};

export default withRouter(Catalog);
