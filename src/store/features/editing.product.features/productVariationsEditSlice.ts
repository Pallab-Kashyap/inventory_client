import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface OptionValueSelection {
  optionId: string; 
  optionValueId: string; 
}

export interface Variation {
  id?: string; 
  tempId?: string; 
  variationName: string;
  stockQuantity?: number;
  price?: number;
  sku?: string | null;
  images?: string[];
  selectedOptionValues?: OptionValueSelection[]; 
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

    setVariations: (state, action: PayloadAction<Variation[]>) => {
      state.variations = action.payload;
    },

    addVariation: (state, action: PayloadAction<Omit<Variation, 'tempId'>>) => {
      const newVariation = { ...action.payload };
      state.variations.push(newVariation);
    },

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