import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OptionsState {
  selectedOptions: string[]; 
}

const initialState: OptionsState = {
  selectedOptions: [],
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {

    setEditOptions: (state, action: PayloadAction<string[]>) => {
      state.selectedOptions = action.payload;
    },

    getEditOptions: (state) => {
        return state
    }
  },
});

export const { setEditOptions, getEditOptions } = optionsSlice.actions;
export default optionsSlice.reducer;