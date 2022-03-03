import { сountableEndings } from "./сountableEndings";

// сохранение в виде текста
export function generateText(ads) {
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
      ad.header && headers.add(ad.header);
      ad.extraheader && extraheaders.add(ad.extraheader);
      ad.text && texts.add(ad.text);
      ad.url && urls.add(ad.url);
      ad.showurl && showurls.add(ad.showurl);
      ad.callout.forEach((adCallout) => {
        if (adCallout && !callouts.find((callout) => adCallout === callout)) {
          callouts.push(adCallout);
        }
      });
      ad.sitelink.forEach((adSitelink) => {
        if (
          adSitelink.name &&
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
    if (headers.size) {
      text += `Основные заголовки соответствуют запросам, например:\n`;
      text += [...headers].join("\n");
      text += "\n\n";
    }
    if (extraheaders.size) {
      text += `Дополнительные заголовки (${extraheaders.size} ${сountableEndings(extraheaders.size, ['вариантов', 'варианта', 'вариант'])}):\n`;
      text += [...extraheaders].join("\n");
      text += "\n\n";
    }
    if (texts.size) {
      text += `Тексты объявлений (${texts.size} ${сountableEndings(texts.size, ['вариантов', 'варианта', 'вариант'])}):\n`;
      text += [...texts].join("\n");
      text += "\n\n";
    }
    if (urls.size) {
      text += `Целевые ссылки (${urls.size} ${сountableEndings(urls.size, ['вариантов', 'варианта', 'вариант'])}):\n`;
      text += [...urls].join("\n");
      text += "\n\n";
    }
    if (showurls.size) {
      text += `Отображаемые ссылки (${showurls.size} ${сountableEndings(showurls.size, ['вариантов', 'варианта', 'вариант'])}):\n`;
      text += [...showurls].join("\n");
      text += "\n\n";
    }
    if (callouts.length) {
      text += `Уточнения (${callouts.length} ${сountableEndings(callouts.length, ['вариантов', 'варианта', 'вариант'])}):\n`;
      text += callouts.join("\n");
      text += "\n\n";
    }
    if (sitelinks.length) {
      text += `Быстрые ссылки (${sitelinks.length} ${сountableEndings(sitelinks.length, ['вариантов', 'варианта', 'вариант'])}):\n`;
      sitelinks.forEach((sitelink, index) => {
        text += `${index + 1}.\n`;
        text += sitelink.name + "\n";
        text += sitelink.link ? sitelink.link + "\n" : "";
        text += sitelink.descr ? sitelink.descr + "\n" : "";
      });
      text += "\n";
    }
    text += "-------------------------------------\n";
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

  return text;
}