export interface Data {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface UsersData {
  _id: string;
  name: string;
  email: string;
}

export interface InitialStateI {
  authenticed: boolean;
  users: UsersData[];
  token: string | null;
  userLogado: UsersData | null
}