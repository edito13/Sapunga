interface UsersData {
  _id: string;
  name: string;
  email: string;
}

interface a {
  type: string;
  payload: UsersData | UsersData[];
}

const InitialState = localStorage.estado ? JSON.parse(localStorage.estado) : [];

export default (state: UsersData[] = InitialState, { type, payload }: a) => {
  switch (type) {
    case "ADICIONAR_USUARIOS":
      return [...(payload as UsersData[])];
      break;

    default:
      return state;
      break;
  }
};
