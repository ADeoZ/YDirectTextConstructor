import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: [],
  categoryId: 0,
  showMore: true,
  searchQ: "",
  status: { catalog: "idle", offset: "idle", categories: "idle" },
};

const adFormSlice = createSlice({
  name: "adForm",
  initialState,
  reducers: {
    resetCatalogState: (state) => {
      return initialState;
    },
    selectCategory: (state, action) => {
      state.items = [];
      state.showMore = true;
      state.categoryId = action.payload;
    },
    putSearch: (state, action) => {
      state.items = [];
      state.showMore = true;
      state.searchQ = action.payload;
    },
  },
});

export const { resetCatalogState, selectCategory, putSearch } = adFormSlice.actions;
export default adFormSlice.reducer;
