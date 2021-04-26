import api from "./config";

export const getBasketById = (basketId: string) =>
  api.get(`/basket/${basketId}`);

export const getBasketByUserId = (userId: string) =>
  api.get(`/basket/user/${userId}`);

export const createBasket = (userId: string, address: string) =>
  api.post(`/basket/create/${userId}`, {
    address,
  });

export const updateGoodsOnBasket = (
  userId: string,
  goodsId: string,
  op: string
) =>
  api.put(`/basket/update-goods/${userId}`, {
    goodsId,
    op,
  });

export const confirmBasket = (userId: string, body: any) =>
  api.post(`/basket/confirm/${userId}`, {
    ...body,
  });

  export const delGoodsFromBasket = (userId: string, goodsId: string) =>
  api.patch(`/basket/delete-goods/${userId}`, {
    goodsId,
  });
