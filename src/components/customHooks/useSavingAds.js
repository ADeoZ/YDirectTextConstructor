import { generateText } from "./generateText";
// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {
  console.log(ads);

  // копирование в буфер обмена
  const text = generateText(ads);
  const textCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const callbacks = [
    {
      text: "Скопировать как текст",
      success: "Текст скопирован в буфер обмена",
      callback: textCopy,
    },
    {
      text: "Сохранить в виде ссылки",
      callback: () => console.log("save link"),
    },
    {
      text: "Скачать в csv-формате",
      callback: () => console.log("download csv"),
    },
  ];

  return callbacks;
}
