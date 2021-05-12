import React, { FC, useContext } from 'react';
import { Card, Button } from 'antd';
import { useHistory } from 'react-router';

import DescPopover from '../../Components/DescPopover';
import {
  createBasket,
  getBasketByUserId,
  updateGoodsOnBasket,
} from '../../API/basket';
import { Operation } from '../../utils/consts';
import { AppContext } from '../../Context';
import CustomPagination from '../../Components/CustomPagination';

import useStyles from './style';
interface GoodsListProps {
  goodsArray: IGoods[];
  pageData: IPage;
  setPageData: React.Dispatch<React.SetStateAction<IPage>>;
}

const GoodsList: FC<GoodsListProps> = ({
  goodsArray,
  pageData,
  setPageData,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const { userContext, setUserContext } = useContext(AppContext);

  const buy = (goodsId: string) => {
    if (userContext.auth) {
      getBasketByUserId(userContext.userId)
        .then((res) => {
          if (res.data.length > 0) {
            updateGoodsOnBasket(
              userContext.userId,
              goodsId,
              Operation.plus
            ).catch((error) => console.log(error));
          } else {
            createBasket(
              userContext.userId,
              userContext.address,
              userContext.phone,
              `${userContext.userSurName} ${userContext.userName} ${userContext.userLastName}`
            )
              .then(() => {
                updateGoodsOnBasket(
                  userContext.userId,
                  goodsId,
                  Operation.plus
                ).catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));

      setUserContext({
        goodsCount: userContext.goodsCount + 1,
        phone: userContext.phone,
        address: userContext.address,
        role: userContext.role,
        auth: userContext.auth,
        userId: userContext.userId,
        userName: userContext.userName,
        userSurName: userContext.userSurName,
        userLastName: userContext.userLastName,
      });
    } else {
      history.push('/signin');
    }
  };

  return (
    <div className={classes.root}>
      <div className="goods_items">
        {goodsArray.map((item, index) => (
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
        ))}
      </div>
      <CustomPagination pageData={pageData} setPageData={setPageData} />
    </div>
  );
};

export default GoodsList;
