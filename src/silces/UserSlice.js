import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data";


export const UserSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    updateUser(state, action) {
      const { id, name, email } = action.payload;
      const Upuser = state.find(f => f.id == id)
      if (Upuser) {
        Upuser.id = id;
        Upuser.name = name;
        Upuser.email = email;
      }
    },
    deleteUser(state, action) {
      const { id } = action.payload;
      const did = state.find(f => f.id == id);
      if (did) {
        return state.filter(f => f.id != id);
      }
    }
  },
});


export const { addUser, updateUser, deleteUser } = UserSlice.actions
export default UserSlice.reducer;
