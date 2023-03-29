export interface Data {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface UsersData {
  _id: string;
  name: string;
  email: string;
  password?: string;
}

export interface ProductsData {
  _id: string;
  urlPhoto: string;
  name: string;
  describe: string;
  price: number;
  category: {
    _id: string;
    name: string;
  };
  createdAt: Date;
}

export interface OrdersData {
  _id: string;
  user: UsersData | null;
  product: ProductsData | null;
  quantity: number;
  createdAt: Date;
}

export interface FavouritesData {
  _id: string;
  user: UsersData | null;
  product: ProductsData | null;
  createdAt: Date;
}

export interface InitialStateUsersI {
  authenticed: boolean;
  users: UsersData[];
  token: string | null;
  userSigned: UsersData | null;
}

export interface InitialStateProductsI {
  products: ProductsData[];
}

export interface InitialStateOrdersI {
  orders: OrdersData[];
  ordersUser: OrdersData[];
}

export interface InitialStateFavouritesI {
  favourites: FavouritesData[];
}

export interface logarUsuarioI {
  user: UsersData;
  token: string;
}
