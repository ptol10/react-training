import { configureStore } from "@reduxjs/toolkit";
import petSlice from "./slices/pet-slice";

const store = configureStore({ 
  reducer: {
    petSlice: petSlice,
  }
 });

 export default store;