import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

// this is thunk

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemoved = state.tags.indexOf(action.payload);
      if (indexToRemoved !== -1) {
        state.tags.splice(indexToRemoved, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searched, tagRemoved, tagSelected } = filterSlice.actions;
