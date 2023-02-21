interface UsersData {
  id: string;
  name: string;
  email: string;
}

export const selectUsers = (state: UsersData[]) => (state.length ? state : []);
