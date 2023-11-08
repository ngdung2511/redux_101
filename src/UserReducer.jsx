import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./mockData";
import { current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: usersList,
  // Write actions here
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      //   console.log(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      //   const user = state.find((user) => user.id === id);
      state.splice(id - 1, 1, { id, name, email });
      console.log(current(state));
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      state.splice(id - 1, 1);
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
