import api from './config';

export const getGoodsList = () => api.get('/goods/');

export const getGoodsById = (goodsId: string) => api.get(`/goods/${goodsId}`);
