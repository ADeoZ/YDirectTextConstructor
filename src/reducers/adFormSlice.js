import { createSlice } from "@reduxjs/toolkit";

const initialForm = {
  header: "",
  extraheader: "",
  text: "",
  url: "",
  showurl: "",
  callout: ["", "", "", ""],
  sitelink: [
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
    { name: "", link: "", descr: "" },
  ],
}; 

const initialState = [];

const adFormSlice = createSlice({
  name: "adForm",
  initialState,
  reducers: {
    addEmptyAd: (state) => {
      state.push(initialForm);
    },
    changeField: (state, action) => {
      const { adId, name, value } = action.payload;
      const compName = name.split("_");
      if (compName[1]) {
        if (compName[2]) {
          state[adId][compName[0]][compName[1]][compName[2]] = value;
        } else {
          state[adId][compName[0]][compName[1]] = value;
        }
      } else {
        state[adId][name] = value;
      }
    },
  },
});

export const { addEmptyAd, changeField } = adFormSlice.actions;
export default adFormSlice.reducer;
