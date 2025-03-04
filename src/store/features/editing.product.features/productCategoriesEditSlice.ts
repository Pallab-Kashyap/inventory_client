import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
  id: string;
  categoryName: string;
  displayName: string;
  children?: Category[];
  isSelected: boolean
}

interface CategoryState {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: [
    {
      "id": "1",
      "categoryName": "men",
      "displayName": "Men",
      "isSelected": true,
      "children": [
        {
          "id": "1-1",
          "categoryName": "men_clothing",
          "displayName": "Men's Clothing",
          "isSelected": false,
          "children": [
            {
              "id": "1-1-1",
              "categoryName": "men_clothing_shirts",
              "displayName": "Men's Shirts",
              "isSelected": false,
              "children": []
            },
            {
              "id": "1-1-2",
              "categoryName": "men_clothing_tshirts",
              "displayName": "Men's T-Shirts",
              "isSelected": false,
              "children": []
            },
            {
              "id": "1-1-3",
              "categoryName": "men_clothing_pants",
              "displayName": "Men's Pants",
              "isSelected": false,
              "children": []
            }
          ]
        },
        {
          "id": "1-2",
          "categoryName": "men_footwear",
          "displayName": "Men's Footwear",
          "isSelected": false,
          "children": [
            {
              "id": "1-2-1",
              "categoryName": "men_footwear_sneakers",
              "displayName": "Men's Sneakers",
              "isSelected": false,
              "children": []
            },
            {
              "id": "1-2-2",
              "categoryName": "men_footwear_formal",
              "displayName": "Men's Formal Shoes",
              "isSelected": false,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "categoryName": "women",
      "displayName": "Women",
      "isSelected": false,
      "children": [
        {
          "id": "2-1",
          "categoryName": "women_clothing",
          "displayName": "Women's Clothing",
          "isSelected": false,
          "children": [
            {
              "id": "2-1-1",
              "categoryName": "women_clothing_dresses",
              "displayName": "Women's Dresses",
              "isSelected": false,
              "children": []
            },
            {
              "id": "2-1-2",
              "categoryName": "women_clothing_tops",
              "displayName": "Women's Tops",
              "isSelected": false,
              "children": []
            }
          ]
        },
        {
          "id": "2-2",
          "categoryName": "women_footwear",
          "displayName": "Women's Footwear",
          "isSelected": false,
          "children": [
            {
              "id": "2-2-1",
              "categoryName": "women_footwear_heels",
              "displayName": "Women's Heels",
              "isSelected": false,
              "children": []
            },
            {
              "id": "2-2-2",
              "categoryName": "women_footwear_flats",
              "displayName": "Women's Flats",
              "isSelected": false,
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "3",
      "categoryName": "kids",
      "displayName": "Kids",
      "isSelected": false,
      "children": [
        {
          "id": "3-1",
          "categoryName": "kids_clothing",
          "displayName": "Kids' Clothing",
          "isSelected": false,
          "children": [
            {
              "id": "3-1-1",
              "categoryName": "kids_clothing_shirts",
              "displayName": "Kids' Shirts",
              "isSelected": false,
              "children": []
            },
            {
              "id": "3-1-2",
              "categoryName": "kids_clothing_tshirts",
              "displayName": "Kids' T-Shirts",
              "isSelected": false,
              "children": []
            }
          ]
        },
        {
          "id": "3-2",
          "categoryName": "kids_footwear",
          "displayName": "Kids' Footwear",
          "isSelected": false,
          "children": [
            {
              "id": "3-2-1",
              "categoryName": "kids_footwear_sneakers",
              "displayName": "Kids' Sneakers",
              "isSelected": false,
              "children": []
            },
            {
              "id": "3-2-2",
              "categoryName": "kids_footwear_sandals",
              "displayName": "Kids' Sandals",
              "isSelected": false,
              "children": []
            }
          ]
        }
      ]
    },
]
}

const editCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
    setEditCategories: (state, action: PayloadAction<Category[]>) => {
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