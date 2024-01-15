import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface product {
  name: String;
  price: String;
  id: String;
  imgSRC: String;
  desc: String;
}

interface productState {
  products: product[];
  loading: boolean;
  error: string | null;
}
const initialState: productState = {
  products: [],
  loading: false,
  error: null,
};
export const fetchData = createAsyncThunk(
  "get/productinfo",
  async (): Promise<product[]> => {
    const response = await axios("http://localhost:3000/products");
    return await response.data;
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productSlice.actions;

export default productSlice.reducer;
