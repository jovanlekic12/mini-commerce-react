import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, { payload }) => {
      if (!state.cartItems.some((item) => item.id === payload.props.id)) {
        let item = payload.props;
        item = { ...item, amount: payload.amount };
        state.cartItems.push(item);
      } else {
        const cartItem = state.cartItems.find(
          (item) => item.id === payload.props.id
        );
        cartItem.amount = Number(cartItem.amount) + Number(payload.amount);
      }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.amount === 1) {
        return;
      } else {
        cartItem.amount = cartItem.amount - 1;
      }
    },
  },
});

const selectItems = (state) => state.cart.cartItems;

export const selectTotalAmount = createSelector([selectItems], (items) =>
  items.reduce((amount, item) => Number(amount) + Number(item.amount), 0)
);

export const selectTotalPrice = createSelector([selectItems], (items) =>
  items.reduce((price, item) => price + item.price * item.amount, 0)
);

export const { addCartItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
