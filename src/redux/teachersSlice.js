import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,

  reducers: {},
  extraReducers: (builder) => builder,
});

export const {} = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
