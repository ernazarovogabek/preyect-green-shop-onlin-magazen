










// redux/shopp/shop-slice.ts (Yangi amallar qo'shish)
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductType } from "../../@types";

// Type kengaytirilgan (counter bor)
interface CartItem extends ProductType {
  counter: number;
  userPrice: number; // Umumiy narx (price * counter)
}

interface ShopState {
  data: CartItem[];
}

const initialState: ShopState = {
  data: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.data.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.counter += 1;
        existingItem.userPrice = existingItem.price * existingItem.counter;
      } else {
        state.data.push({ ...action.payload, counter: 1, userPrice: action.payload.price });
      }
    },
    // YANGI: Increment
    increment: (state, action: PayloadAction<string>) => {
      const item = state.data.find((item) => item._id === action.payload);
      if (item) {
        item.counter += 1;
        item.userPrice = item.price * item.counter;
      }
    },
    // YANGI: Decrement
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.data.find((item) => item._id === action.payload);
      if (item && item.counter > 1) {
        item.counter -= 1;
        item.userPrice = item.price * item.counter;
      }
    },
    // YANGI: Delete
    removeItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item._id !== action.payload);
    },
  },
});

export const { getData, increment, decrement, removeItem } = shopSlice.actions;
export default shopSlice.reducer;













