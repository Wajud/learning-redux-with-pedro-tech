import { createSlice } from "@reduxjs/toolkit";

const initialState = "blue";
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeColor } = themeSlice.actions;
