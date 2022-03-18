import { useDispatch } from "react-redux";
import { generateText } from "./func/generateText";
import { saveAds } from "../../reducers/adFormSlice";
import { createPlainObj } from "./func/createPlainObj";
// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {
  const dispatch = useDispatch();

  // копирование текста в буфер обмена
  const textCopy = () => {
    if (!checkEmpty()) {
      return new Promise((res) => res({ status: 'error', message: 'Пустое объявление' }));
    }
    const text = generateText(ads);
    return navigator.clipboard.writeText(text)
      .then(() => ({ status: 'success', message: 'Текст скопирован' }))
      .catch(() => ({ status: 'error', message: 'Ошибка копирования' }));
  };

  // копирование ссылки в буфер обмена
  const saveToLink = () => {
    if (!checkEmpty()) {
      return new Promise((res) => res({ status: 'error', message: 'Пустое объявление' }));
    }
    return dispatch(saveAds())
      .then((res) => {
        const link = window.location.href + res.payload.link;
        return navigator.clipboard.writeText(link);
      })
      .then(() => ({ status: 'success', message: 'Ссылка скопирована' }))
      .catch(() => ({ status: 'error', message: 'Ошибка сохранения' }));
  };

  // проверка на пустоту полей
  const checkEmpty = () => {
    return ads.every(
      ad => Object.entries(
        createPlainObj(ad)
      ).filter(
        (field) => field[1] !== ""
      ).length
    );
  }

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
      callback: () => console.log("download csv"),
    },
  ];

  return callbacks;
}
