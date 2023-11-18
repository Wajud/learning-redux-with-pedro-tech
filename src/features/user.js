import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Username",
  age: 0,
  email: "Useremail",
};

export const userSlice = createSlice({
  name: "usery",
  initialState: {
    value: initialState,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
