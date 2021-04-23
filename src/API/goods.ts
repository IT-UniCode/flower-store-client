import api from './config';

export const getGoodsList = () => api.get('/goods/');
export const getGoodsById = (goodsId: string) => api.get(`/goods/by-id/${goodsId}`);

export const getGoodsByIdArray = (goodsIdArray: string[]) => api.post(`/goods/by-idArr/`, {
  goodsIdArray,
});

export const sortGoodsByOr = (type: string, tags: string) => api.post(`/goods/sort-or`, {
  type,
  tags,
});

export const sortGoodsByAnd = (type: string, tags: string) => api.post(`/goods/sort-and`, {
  type,
  tags,
});
