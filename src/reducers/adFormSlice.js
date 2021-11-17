import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const adFormSlice = createSlice({
  name: "adForm",
  initialState,
  reducers: {
    changeField: (state, action) => {
      const { name, value } = action.payload;
      const compName = name.split("_");
      if (compName[1]) {
        if (compName[2]) {
          state[compName[0]][compName[1]][compName[2]] = value;
        } else {
          state[compName[0]][compName[1]] = value;
        }
      } else {
        state[name] = value;
      }
    },
  },
});

export const { changeField } = adFormSlice.actions;
export default adFormSlice.reducer;
