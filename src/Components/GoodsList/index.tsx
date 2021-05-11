import React, { FC, useContext } from "react";
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

import useStyles from "./style";
interface GoodsListProps {
  goodsArray: IGoods[];
  pageData: IPage;
  setPageData: React.Dispatch<React.SetStateAction<IPage>>;
}

const GoodsList: FC<GoodsListProps> = ({ goodsArray, pageData, setPageData }) => {
  const classes = useStyles();
  const history = useHistory();

  const { auth } = useContext(AppContext);
  const { count, setCount } = useContext(CountContext);

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

  return (
    <div className={classes.root}>
      <div className="goods_items">
        {goodsArray.map(
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
        pageData={pageData}
        setPageData={setPageData}
      />
    </div>
  );
};

export default GoodsList;
