// генерация callbacks для сохранения переданных объявлений
export function useSavingAds(ads) {
  console.log(ads);

  // сохранение в виде текста
  let text = "";
  if (ads.length > 1) {
    // суммарная информация
    const headers = new Set();
    const extraheaders = new Set();
    const texts = new Set();
    const urls = new Set();
    const showurls = new Set();
    const callouts = [];
    const sitelinks = [];
    ads.forEach((ad) => {
      headers.add(ad.header);
      extraheaders.add(ad.extraheader);
      texts.add(ad.text);
      urls.add(ad.url);
      showurls.add(ad.showurl);
      ad.callout.forEach((adCallout) => {
        if (!callouts.find((callout) => adCallout === callout)) {
          callouts.push(adCallout);
        }
      });
      ad.sitelink.forEach((adSitelink) => {
        if (
          !sitelinks.find(
            (sitelink) =>
              adSitelink.name === sitelink.name &&
              adSitelink.link === sitelink.link &&
              adSitelink.descr === sitelink.descr
          )
        ) {
          sitelinks.push(adSitelink);
        }
      });
    });
    text += "ВСЕ ОБЪЯВЛЕНИЯ:\n";
    text += `Основные заголовки соответствуют запросам, например:\n`;
    text += [...headers].join("\n");
    text += "\n\n";
    text += `Дополнительные заголовки (${extraheaders.size} варианта):\n`;
    text += [...extraheaders].join("\n");
    text += "\n\n";
    text += `Тексты объявлений (${texts.size} варианта):\n`;
    text += [...texts].join("\n");
    text += "\n\n";
    text += `Целевые ссылки (${urls.size} варианта):\n`;
    text += [...urls].join("\n");
    text += "\n\n";
    text += `Отображаемые ссылки (${showurls.size} варианта):\n`;
    text += [...showurls].join("\n");
    text += "\n\n";
    text += `Уточнения (${callouts.length} варианта):\n`;
    text += callouts.join("\n");
    text += "\n\n";
    text += `Быстрые ссылки (${sitelinks.length} варианта):\n`;
    sitelinks.forEach((sitelink, index) => {
      text += `${index + 1}.\n`;
      text += sitelink.name + "\n";
      text += sitelink.link + "\n";
      text += sitelink.descr + "\n";
    });
    text += "\n\n-------------------------------------\n";
    text += "ОТДЕЛЬНЫЕ ОБЪЯВЛЕНИЯ:\n";
  }
  // отдельные объявления
  ads.forEach((ad) => {
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
    const callouts = ad.callout.filter((callout) => callout.length > 0);
    if (callouts.length) {
      text += "Уточнения:\n";
      callouts.forEach((callout) => {
        text += callout + "\n";
      });
      text += "\n";
    }
    const sitelinks = ad.sitelink.filter((sitelink) => sitelink.name.length > 0);
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
