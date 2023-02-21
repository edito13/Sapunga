interface a {
  type: string;
  payload: {};
}

interface UsersData {
  id: string;
  name: string;
  email: string;
}

const InitialState = localStorage.estado ? JSON.parse(localStorage.estado) : [];

export default (state: UsersData[] = InitialState, { type, payload }: a) => {
  switch (type) {
    case "SELECIONAR_USUARIOS":
      return [...state];
      break;

    default:
      return state;
      break;
  }
};
