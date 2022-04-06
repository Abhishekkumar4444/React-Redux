import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    chngTextClr: (state, action) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chngTextClr } = themeSlice.actions;

export default themeSlice.reducer;
