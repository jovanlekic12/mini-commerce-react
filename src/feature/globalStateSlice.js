import { createSlice } from "@reduxjs/toolkit";
import items from "../menuItems";

const initialState = {
  menuItems: items,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    search: (state, action) => {
      state.menuItems =
        action.payload.length > 0
          ? state.menuItems.filter((item) =>
              item.name.toLowerCase().includes(action.payload.toLowerCase())
            )
          : [...items];
    },
  },
});

export const { search } = globalSlice.actions;

export default globalSlice.reducer;
