import { createSlice } from "@reduxjs/toolkit";

// поля объявления
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
    // добавление нового объявления
    addEmptyAd: (state) => {
      state.push(initialForm);
    },
    // изменение поля объявления
    changeField: (state, action) => {
      const { adId, name, value } = action.payload;
      const compName = name.split("_");
      // если это значения в массив
      if (compName[1]) {
        // если это массив sitelink
        if (compName[2]) {
          state[adId][compName[0]][compName[1]][compName[2]] = value;

        }
        // если это массив callout
        else {
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
