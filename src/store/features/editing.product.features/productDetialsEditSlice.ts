import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  id: string;
  productName: string;
  description?: string | null;
//   isActive: boolean;
//   isSellable: boolean;
//   storeId: string;
  image: string[]
}

const initialState: ProductState = {
  id: '',
  productName: '',
  description: null,
//   isActive: true,
//   isSellable: true,
//   storeId: '',
  image: []
};

const editProductDetailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    setEditProduct: (state, action: PayloadAction<ProductState>) => {
      Object.assign(state, action.payload);
    },

    updateProductField: (state, action: PayloadAction<Partial<ProductState>>) => {
      Object.assign(state, action.payload);
    },

    getEditProduct: (state) => {
        return state
    }
  },
});

export const { setEditProduct, updateProductField } = editProductDetailsSlice.actions;
export default editProductDetailsSlice.reducer;