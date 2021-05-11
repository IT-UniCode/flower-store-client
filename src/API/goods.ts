import api from "./config";

export const getGoodsList = () => api.get("/goods/");
export const getGoodsById = (goodsId: string) =>
  api.get(`/goods/by-id/${goodsId}`);

export const getGoodsByIdArray = (goodsIdArray: string[]) =>
  api.post("/goods/by-idArr/", {
    goodsIdArray,
  });

export const filterGoods = (type: string, tags: string) =>
  api.post("/goods/filter", {
    type,
    tags,
  });

export const getGoodsListPage = (
  type: string,
  tags: string,
  startId: number,
  endId: number
) =>
  api.post("/goods/page", {
    type,
    tags,
    startId,
    endId,
  });
