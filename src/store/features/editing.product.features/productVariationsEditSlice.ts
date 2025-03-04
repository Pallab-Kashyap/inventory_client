import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface OptionValueSelection {
  optionId: string; // ID of the option (e.g., Size)
  optionValueId: string; // ID of the option value (e.g., 6)
}

interface Variation {
  id?: string; // For existing variations (from DB)
  tempId?: string; // For new variations (generated client-side)
  variationName: string;
  stockQuantity: number;
  price: number;
  sku: string | null;
  images: string[]; // Array of image IDs
  selectedOptionValues: OptionValueSelection[]; // e.g., [{optionId: "Size", optionValueId: "6"}, {optionId: "Color", optionValueId: "White"}]
}

interface VariationsState {
  variations: Variation[];
}

const initialState: VariationsState = {
  variations: [],
};

const variationsSlice = createSlice({
  name: 'variations',
  initialState,
  reducers: {
    // Set the entire array of variations (e.g., when loading data)
    setVariations: (state, action: PayloadAction<Variation[]>) => {
      state.variations = action.payload;
    },
    // Add a new variation with a temporary ID
    addVariation: (state, action: PayloadAction<Omit<Variation, 'tempId'>>) => {
      const newVariation = { ...action.payload };
      state.variations.push(newVariation);
    },
    // Update a variation by identifier (id or tempId)
    updateVariation: (
      state,
      action: PayloadAction<{ identifier: string; updatedFields: Partial<Variation> }>
    ) => {
      const { identifier, updatedFields } = action.payload;
      const index = state.variations.findIndex(
        (v) => v.id === identifier || v.tempId === identifier
      );
      if (index !== -1) {
        state.variations[index] = { ...state.variations[index], ...updatedFields };
      }
    },
    // Remove a variation by identifier (id or tempId)
    removeVariation: (state, action: PayloadAction<string>) => {
      const identifier = action.payload;
      const index = state.variations.findIndex(
        (v) => v.id === identifier || v.tempId === identifier
      );
      if (index !== -1) {
        state.variations.splice(index, 1);
      }
    },
  },
});

export const { setVariations, addVariation, updateVariation, removeVariation } =
  variationsSlice.actions;
export default variationsSlice.reducer;