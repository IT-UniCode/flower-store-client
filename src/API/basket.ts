import api from './config';

export const getBasketById = (basketId: string) => api.get(`/basket/${basketId}`);

export const getBasketByUserId = (userId: string) => api.get(`/basket/user/${userId}`);

export const createBasket = (userId: string) => api.post(`/basket/create/${userId}`);

export const addGoodsToBasket = (goodsId: string) => api.post(`/basket/add-goods/${goodsId}`);
