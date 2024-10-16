import { createSlice } from "@reduxjs/toolkit";

export const petSlice = createSlice({
  name: "petSlice",
  initialState: {
    pets: [],
  },
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload;
    },
  },
});

export const { setPets } = petSlice.actions;

export default petSlice.reducer;
