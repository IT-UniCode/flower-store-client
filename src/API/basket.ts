import api from './config';

export const getBasketById = (basketId: string) =>
  api.get(`/basket/${basketId}`);

export const getBasketByUserId = (userId: string) =>
  api.get(`/basket/user/${userId}`);

export const getAdminBasketList = () => api.get('/basket/get-to-admin');

export const createBasket = (
  userId: string,
  address: string,
  phone: string,
  fullName: string
) =>
  api.post(`/basket/create/${userId}`, {
    address,
    phone,
    fullName,
  });

export const updateGoodsOnBasket = (
  userId: string,
  goodsId: string,
  op: string
) =>
  api.patch(`/basket/update-goods/${userId}`, {
    goodsId,
    op,
  });

export const updateBasketStatus = (basketId: string, status: string, email: string) =>
  api.patch('/basket/update-status', {
    basketId,
    status,
    email
  });

export const confirmBasket = (userId: string, body: any) =>
  api.post(`/basket/confirm/${userId}`, {
    ...body,
  });

export const delGoodsFromBasket = (userId: string, goodsId: string) =>
  api.patch(`/basket/delete-goods/${userId}`, {
    goodsId,
  });

export const delBasketById = (basketId: string) =>
  api.delete(`/basket/del-by-id/${basketId}`)
