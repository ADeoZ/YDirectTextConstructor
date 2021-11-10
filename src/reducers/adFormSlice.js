import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: "",
  extraheader: "",
  text: "",
  url: "",
  showurl: "",
  callout1: "",
  callout2: "",
  callout3: "",
  callout4: "",
  sitelink1name: "",
  sitelink2name: "",
  sitelink3name: "",
  sitelink4name: "",
  sitelink5name: "",
  sitelink6name: "",
  sitelink7name: "",
  sitelink8name: "",
  sitelink1link: "",
  sitelink2link: "",
  sitelink3link: "",
  sitelink4link: "",
  sitelink5link: "",
  sitelink6link: "",
  sitelink7link: "",
  sitelink8link: "",
  sitelink1descr: "",
  sitelink2descr: "",
  sitelink3descr: "",
  sitelink4descr: "",
  sitelink5descr: "",
  sitelink6descr: "",
  sitelink7descr: "",
  sitelink8descr: "",
};

const adFormSlice = createSlice({
  name: "adForm",
  initialState,
  reducers: {
    changeField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
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

export const { changeField } = adFormSlice.actions;
export default adFormSlice.reducer;
