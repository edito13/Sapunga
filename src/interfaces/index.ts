export interface Data {
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

export interface UsersData {
  _id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
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

export interface ProductsCategory {
  _id: string;
  products: ProductsData[];
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

export interface CategoriesData {
  _id: string;
  name: string;
}

export interface AdminsData {
  _id: string;
  name: string;
}

export interface InitialStateUsersI {
  authenticed: boolean;
  users: UsersData[];
  token: string | null;
  userSigned: UsersData | null;
}

export interface InitialStateProductsI {
  products: ProductsData[];
  productsCategory: ProductsCategory[];
}

export interface InitialStateOrdersI {
  orders: OrdersData[];
  ordersUser: OrdersData[];
}

export interface InitialStateFavouritesI {
  favourites: FavouritesData[];
}

export interface InitialStateCategoriesI {
  categories: CategoriesData[];
}

export interface InitialStateAdminsI {
  authenticed: boolean;
  admins: AdminsData[];
  token: string | null;
  adminSigned: AdminsData | null;
}

export interface logarUsuarioI {
  user: UsersData;
  token: string;
}

export interface SignInAdminI {
  admin: AdminsData;
  token: string;
}
