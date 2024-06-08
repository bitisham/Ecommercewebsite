import { createSlice } from "@reduxjs/toolkit";
import { fetchcarouselData } from "../../services/AllProduct";
const initialState = {
  loading: false,

  error: null,
  data: [],
};
const caoruselSLice = createSlice({
  name: "caoruseldata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchcarouselData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchcarouselData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchcarouselData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { logout } = caoruselSLice.actions;
export default caoruselSLice.reducer;
