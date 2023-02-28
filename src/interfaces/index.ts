export interface Data {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface UsersData {
  _id: string;
  name: string;
  email: string;
  password?: string
}

export interface ProductsData {
  _id: string;
  urlPhoto: string;
  name: string;
  descricao: string;
  preco: number
}

export interface InitialStateUserI {
  authenticed: boolean;
  users: UsersData[];
  token: string | null;
  userLogado: UsersData | null
}

export interface InitialStateProductI {
  products: ProductsData[];
  products_loved: ProductsData[];
}

export interface logarUsuarioI {
  user: UsersData;
  token: string;
}