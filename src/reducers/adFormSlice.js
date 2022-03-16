import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const saveAds = createAsyncThunk("adForm/saveAds", async (_, { getState }) => {
  const ads = getState().adForm.map((ad) => {
    return Object.entries(ad).reduce((plainAd, field) => {
      if (Array.isArray(field[1])) {
        field[1].forEach((fieldValue, index) => {
          if (fieldValue instanceof Object && fieldValue !== null) {
            for (const key in fieldValue) {
              fieldValue[key] && (plainAd[`${field[0]}_${index + 1}_${key}`] = fieldValue[key]);
            }
          } else {
            fieldValue && (plainAd[`${field[0]}_${index + 1}`] = fieldValue);
          }
        });
      } else {
        field[1] && (plainAd[`${field[0]}`] = field[1]);
      }
      return plainAd;
    }, {});
  });
  console.log("ads", JSON.stringify({ ads }));

  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ads/post.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ads }),
  });
  const data = await response.json();
  return data;
});

export const getAds = createAsyncThunk("adForm/getAds", async (link) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ads/get.php?link=${link}`);
  const data = await response.json();
  return data;
});

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
  extraReducers: (builder) => {
    builder.addCase(getAds.fulfilled, (state, action) => {
      const { ads } = action.payload;
      ads.forEach((ad) => {
        
      });
      state.push(...action.payload.ads);
      console.log(state);
    });
  },
});

export const { addEmptyAd, changeField } = adFormSlice.actions;
export default adFormSlice.reducer;
