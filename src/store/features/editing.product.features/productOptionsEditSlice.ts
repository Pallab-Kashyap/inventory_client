import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EditOption {
  optionId: string,
  optionName: string,
  displayName: string,
  optionValues: string[]
}

interface OptionsState {
  selectedOptions: EditOption[]; 
}


const initialState: OptionsState = {
  selectedOptions: [],
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {

    setEditOptions: (state, action: PayloadAction<EditOption[]>) => {
      state.selectedOptions = action.payload;
    },

    getEditOptions: (state) => {
        return state
    },

    updateEditOption: (state, action: PayloadAction<EditOption>) => {
      console.log('did');
      state.selectedOptions = state.selectedOptions.map(curr => curr.optionId !== action.payload.optionId ? curr : action.payload)
      console.log(state);
    },

    addEditOption: (state, action: PayloadAction<EditOption>) => {
      state.selectedOptions.push(action.payload)
    }
  },
});

export const { setEditOptions, getEditOptions, updateEditOption, addEditOption } = optionsSlice.actions;
export default optionsSlice.reducer;