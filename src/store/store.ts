import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"
import editProductDetailsReducer from "./features/editing.product.features/productDetialsEditSlice"
import editProductCategorisReducer from "./features/editing.product.features/productCategoriesEditSlice"
import editProductOptoinsReducer from "./features/editing.product.features/productOptionsEditSlice"
import editProductVariationReducer from "./features/editing.product.features/productVariationsEditSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        editProduct: editProductDetailsReducer,
        editCategory: editProductCategorisReducer,
        editOptions: editProductOptoinsReducer,
        editVariations: editProductVariationReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch