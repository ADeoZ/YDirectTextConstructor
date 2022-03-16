import { useDispatch } from "react-redux";
import { generateText } from "./generateText";
import { saveAds } from "../../reducers/adFormSlice";
// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {
  const dispatch = useDispatch();

  // копирование текста в буфер обмена
  const text = generateText(ads);
  const textCopy = () => {
    navigator.clipboard.writeText(text);
  };

  // копирование ссылки в буфер обмена
  const saveToLink = () => {
    // dispatch(saveAds()).then((res) => {
    //   const link = window.location.href + res.payload.link;
    //   navigator.clipboard.writeText(link);
    // });
    dispatch(saveAds());
  };

  const callbacks = [
    {
      text: "Скопировать как текст",
      success: "Текст скопирован",
      callback: textCopy,
    },
    {
      text: "Сохранить в виде ссылки",
      success: "Ссылка скопирована",
      callback: saveToLink,
    },
    {
      text: "Скачать в csv-формате",
      callback: () => console.log("download csv"),
    },
  ];

  return callbacks;
}
