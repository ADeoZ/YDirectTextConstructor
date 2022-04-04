import { useDispatch } from "react-redux";
import { saveLink, saveFile } from "../../reducers/adFormSlice";
import { createPlainObj } from "./func/createPlainObj";
import { generateText } from "./func/generateText";

// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {
  const dispatch = useDispatch();

  // копирование текста в буфер обмена
  const textCopy = () => {
    if (!checkEmpty()) {
      return new Promise((res) => res({ status: "error", message: "Пустое объявление" }));
    }
    const text = generateText(ads);
    return navigator.clipboard
      .writeText(text)
      .then(() => ({ status: "success", message: "Текст скопирован" }))
      .catch(() => ({ status: "error", message: "Ошибка копирования" }));
  };

  // копирование ссылки в буфер обмена
  const saveToLink = () => {
    if (!checkEmpty()) {
      return new Promise((res) => res({ status: "error", message: "Пустое объявление" }));
    }
    return dispatch(saveLink())
      .then((res) => {
        const link = window.location.origin + "/" + res.payload.link;
        return navigator.clipboard.writeText(link);
      })
      .then(() => ({ status: "success", message: "Ссылка скопирована" }))
      .catch(() => ({ status: "error", message: "Ошибка сохранения" }));
  };

  // копирование ссылки в буфер обмена
  const saveToFile = () => {
    if (!checkEmpty()) {
      return new Promise((res) => res({ status: "error", message: "Пустое объявление" }));
    }
    return dispatch(saveFile())
      .unwrap()
      .then(() => ({ status: "success", message: "Файл сформирован" }))
      .catch(() => ({ status: "error", message: "Ошибка сохранения" }));
  };

  // проверка на пустоту полей
  const checkEmpty = () => {
    return ads.every((ad) => Object.entries(createPlainObj(ad)).filter((field) => field[1] !== "").length);
  };

  const callbacks = [
    {
      text: "Скопировать как текст",
      callback: textCopy,
    },
    {
      text: "Сохранить в виде ссылки",
      callback: saveToLink,
    },
    {
      text: "Скачать в csv-формате",
      callback: saveToFile,
    },
  ];

  return callbacks;
}
