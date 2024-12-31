import { createSlice } from "@reduxjs/toolkit";
import items from "../menuItems";

const initialState = {
  menuItems: items,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export default globalSlice.reducer;
