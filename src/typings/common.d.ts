declare interface IUser {
  name: string;
  surname: string;
  lastname: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  checkPass: string;
  basketId: string;
}

declare interface IGoods {
  _id: string;
  name: string;
  price: number;
  description: string;
  existence: boolean;
  type: string[];
  tags: string[];
  goodsImage: string;
}

declare interface ISelectedItems {
  type: string;
  tags: string;
}

declare interface IFilterItems {
  type: string[];
  tags: string[];
}

declare interface IClientBasket {
  price: number;
  comment: string;
  address: string;
  orderDate: Date;
  goods: IBasketGoodsProps[];
}

declare interface IBasketGoodsProps {
  goods: IGoods;
  count: number;
}

declare interface IServerBasket {
  price: number;
  comment: string;
  address: string;
  orderDate: Date;
  goods: {
    goodsId: string;
    count: number;
  }[];
}

declare interface IPage {
  quantityOfItems: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
}
