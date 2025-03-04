import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EditCategory {
  id: string;
  categoryName: string;
  displayName: string;
  // children?: Category[];
}

interface CategoryState {
  categories: EditCategory[]
}

const initialState: CategoryState = {
  categories: [{
    "id": "1",
    "categoryName": "men",
    "displayName": "Men",
  }]
}

const editCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
    setEditCategories: (state, action: PayloadAction<EditCategory[]>) => {
      state.categories = action.payload;
    },
    
    // setBaseCategory: (state, action: PayloadAction<string | null>) => {
    //   state.baseCategoryId = action.payload;
    // },

    getEditCategories: (state) => {
        return state
    }
  },
});

export const { setEditCategories, getEditCategories } = editCategorySlice.actions;
export default editCategorySlice.reducer;