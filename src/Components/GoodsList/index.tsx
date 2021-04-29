import React, { FC, useContext, useEffect, useState } from "react";
import { Card, Button } from "antd";
import { useHistory } from "react-router";

import DescPopover from "../../Components/DescPopover";
import {
  createBasket,
  getBasketByUserId,
  updateGoodsOnBasket,
} from "../../API/basket";
import { Operation } from "../../utils/consts";
import { AppContext } from "../../Context";
import { CountContext } from "../../Context/CountContext";
import CustomPagination from "../../Components/CustomPagination";
import { QUANTITY_OF_PAGE_ITEMS } from "../../utils/consts";

import useStyles from "./style";
interface GoodsListProps {
  goodsArray: IGoods[];
}

const GoodsList: FC<GoodsListProps> = ({ goodsArray }) => {
  const classes = useStyles();
  const history = useHistory();

  const { auth } = useContext(AppContext);
  const { count, setCount } = useContext(CountContext);
  const [pageProps, setPageProps] = useState<IPage>({
    quantityOfItems: goodsArray.length,
    currentPage: 1,
    startIndex: 0,
    endIndex: QUANTITY_OF_PAGE_ITEMS,
  });

  const buy = (goodsId: string) => {
    if (auth) {
      getBasketByUserId(localStorage.userId)
        .then((res) => {
          if (res.data.length > 0) {
            updateGoodsOnBasket(
              localStorage.userId,
              goodsId,
              Operation.plus
            ).catch((error) => console.log(error));
          } else {
            createBasket(localStorage.userId, localStorage.address)
              .then(() => {
                updateGoodsOnBasket(
                  localStorage.userId,
                  goodsId,
                  Operation.plus
                ).catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));

      setCount(count + 1);
    } else {
      history.push("/signin");
    }
  };

  const getPageItems = (start: number, end: number) =>
    goodsArray.slice(start, end);

  return (
    <div className={classes.root}>
      <div className="goods_items">
        {getPageItems(pageProps.startIndex, pageProps.endIndex).map(
          (item, index) => (
            <Card key={index}>
              <div className="goods_card-imgBlock">
                <img
                  className="goods_card-img"
                  alt="bouquet"
                  src={item.goodsImage}
                />
              </div>
              <DescPopover
                title={item.name}
                desc={item.description}
                checkId={item._id}
              />
              <p className="goods_card-price">{item.price} ₴</p>
              <Button className="goods_card-btn" onClick={() => buy(item._id)}>
                Заказать
              </Button>
            </Card>
          )
        )}
      </div>
      <CustomPagination
        data={goodsArray}
        pageProps={pageProps}
        setPageProps={setPageProps}
      />
    </div>
  );
};

export default GoodsList;
