import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPlainObj } from "../components/customHooks/func/createPlainObj";

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

// запрос на сохранение объявлений
export const saveAds = createAsyncThunk("adForm/saveAds", async (_, { getState }) => {
  // преобразуем объекты объявлений в плоский вид
  const ads = getState().adForm.map((ad) => {
    return createPlainObj(ad);
  });
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ads/post.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ads }),
  });
  const data = await response.json();
  return data;
});

// запрос на получение бъявлений
export const getAds = createAsyncThunk("adForm/getAds", async (link) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ads/get.php?link=${link}`);
  const data = await response.json();
  return data;
});

// парсинг и запись значений в форму объявления
const parseValue = (adObject, name, value) => {
  const compName = name.split("_");
  // если это значения в массив
  if (compName[1]) {
    // если это массив sitelink
    if (compName[2]) {
      adObject[compName[0]][compName[1]][compName[2]] = value || "";
    }
    // если это массив callout
    else {
      adObject[compName[0]][compName[1]] = value || "";
    }
  } else {
    adObject[name] = value || "";
  }
  return adObject;
};

const adFormSlice = createSlice({
  name: "adForm",
  initialState,
  reducers: {
    // добавление нового объявления
    addEmptyAd: (state) => {
      state.push(initialForm);
    },
    // дублирование предыдущего объявления
    copyLastAd: (state) => {
      state.push(state[state.length - 1]);
    },
    // изменение поля объявления
    changeField: (state, action) => {
      const { adId, name, value } = action.payload;
      parseValue(state[adId], name, value);
    },
    deleteAd: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAds.fulfilled, (state, action) => {
      const { ads } = action.payload;
      if (ads && ads.length) {
        const formattedAds = ads.reduce((res, ad, index) => {
          res[index] = JSON.parse(JSON.stringify(initialForm)); // здесь нужно глубокое клонирование
          for (const field in ad) {
            parseValue(res[index], field, ad[field]);
          }
          return res;
        }, []);
        state.push(...formattedAds);
      }
    });
  },
});

export const { addEmptyAd, copyLastAd, changeField, deleteAd } = adFormSlice.actions;
export default adFormSlice.reducer;
