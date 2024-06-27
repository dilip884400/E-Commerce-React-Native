import { createSlice } from "@reduxjs/toolkit";
import { ProductsProps } from "../screens/type";

interface storeState {
  productData: ProductsProps[];
}
const initialState = {
  productData: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductsProps) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductsProps) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductsProps) => item._id === action.payload._id
      );

      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = orebiSlice.actions;
export default orebiSlice.reducer;
