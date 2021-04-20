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
  name: string;
  price: number;
  description: string;
  existence: boolean;
  type: string[];
  tag: string[];
  productImage: string;
}
