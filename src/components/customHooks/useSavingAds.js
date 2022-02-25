// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {

  console.log(ads);

  // сохранение в виде текста
  let text = '';
  ads.forEach(ad => {
    text += "Основной заголовок:\n";
    text += ad.header ? ad.header + "\n\n" : "—\n\n";
    if (ad.extraheader) {
      text += "Дополнительный заголовок:\n";
      text += ad.extraheader + "\n\n";
    }
    text += "Текст объявления:\n";
    text += ad.text ? ad.text + "\n\n" : "—\n\n";
    text += "Целевая ссылка:\n";
    text += ad.url ? ad.url + "\n\n" : "—\n\n";
    if (ad.showurl) {
      text += "Отображаемая ссылка:\n";
      text += ad.showurl + "\n\n";
    }
    const callouts = ad.callout.filter(callout => callout.length > 0);
    if (callouts.length) {
      text += "Уточнения:\n";
      callouts.forEach(callout => {
        text += callout + "\n";
      });
      text += "\n";
    }
    const sitelinks = ad.sitelink.filter(sitelink => sitelink.name.length > 0);
    if (sitelinks.length) {
      text += "Быстрые ссылки:\n";
      sitelinks.forEach((sitelink, index) => {
        text += `№${index + 1}\n`;
        text += sitelink.name + "\n";
        text += sitelink.link ? sitelink.link + "\n" : "";
        text += sitelink.descr ? sitelink.descr + "\n" : "";
      });
      text += "\n";
    }
    text += "-------------------------------------\n";
  });
  // копирование в буфер обмена
  const textCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const callbacks = [
    {
      text: "Скопировать как текст",
      success: "Текст скопирован в буфер обмена",
      callback: textCopy,
    },
    {
      text: "Сохранить в виде ссылки",
      callback: () => console.log('save link'),
    },
    {
      text: "Скачать в csv-формате",
      callback: () => console.log('download csv'),
    },
  ];

  return callbacks;
}