interface UsersData {
  _id: string;
  name: string;
  email: string;
}

interface typeF {
  type: string;
  payload: UsersData | UsersData[];
}

export const adicionarUsuarios: (users: UsersData[]) => typeF = (users) => ({
  type: "ADICIONAR_USUARIOS",
  payload: users,
});
