import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPets = createAsyncThunk("petSlice/fetchPets", async () => {
  const response = await fetch("http://pets-v2.dev-apis.com/pets");
  const data = await response.json();
  return data.pets;
});

export const filterPets = createAsyncThunk("petSlice/filterPets", async () => {
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}`)
  const data = await res.json();
  return data.pets;
});