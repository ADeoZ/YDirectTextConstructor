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
    text += "ВСЕ ОБЪЯВЛЕНИЯ:\r\n";
    if (headers.size) {
      text += `Основные заголовки соответствуют запросам, например:\r\n`;
      text += [...headers].join("\r\n");
      text += "\r\n\r\n";
    }
    if (extraheaders.size) {
      text += `Дополнительные заголовки (${extraheaders.size} ${сountableEndings(extraheaders.size, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      text += [...extraheaders].join("\r\n");
      text += "\r\n\r\n";
    }
    if (texts.size) {
      text += `Тексты объявлений (${texts.size} ${сountableEndings(texts.size, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      text += [...texts].join("\r\n");
      text += "\r\n\r\n";
    }
    if (urls.size) {
      text += `Целевые ссылки (${urls.size} ${сountableEndings(urls.size, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      text += [...urls].join("\r\n");
      text += "\r\n\r\n";
    }
    if (showurls.size) {
      text += `Отображаемые ссылки (${showurls.size} ${сountableEndings(showurls.size, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      text += [...showurls].join("\r\n");
      text += "\r\n\r\n";
    }
    if (callouts.length) {
      text += `Уточнения (${callouts.length} ${сountableEndings(callouts.length, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      text += callouts.join("\r\n");
      text += "\r\n\r\n";
    }
    if (sitelinks.length) {
      text += `Быстрые ссылки (${sitelinks.length} ${сountableEndings(sitelinks.length, ['вариантов', 'варианта', 'вариант'])}):\r\n`;
      sitelinks.forEach((sitelink, index) => {
        text += `${index + 1}.\r\n`;
        text += sitelink.name + "\r\n";
        text += sitelink.link ? sitelink.link + "\r\n" : "";
        text += sitelink.descr ? sitelink.descr + "\r\n" : "";
      });
      text += "\r\n";
    }
    text += "-------------------------------------\r\n";
    text += "ОТДЕЛЬНЫЕ ОБЪЯВЛЕНИЯ:\r\n";
  }

  // отдельные объявления
  ads.forEach((ad) => {
    text += "Основной заголовок:\r\n";
    text += ad.header ? ad.header + "\r\n\r\n" : "—\r\n\r\n";
    if (ad.extraheader) {
      text += "Дополнительный заголовок:\r\n";
      text += ad.extraheader + "\r\n\r\n";
    }
    text += "Текст объявления:\r\n";
    text += ad.text ? ad.text + "\r\n\r\n" : "—\r\n\r\n";
    text += "Целевая ссылка:\r\n";
    text += ad.url ? ad.url + "\r\n\r\n" : "—\r\n\r\n";
    if (ad.showurl) {
      text += "Отображаемая ссылка:\r\n";
      text += ad.showurl + "\r\n\r\n";
    }
    const callouts = ad.callout.filter((callout) => callout.length > 0);
    if (callouts.length) {
      text += "Уточнения:\r\n";
      callouts.forEach((callout) => {
        text += callout + "\r\n";
      });
      text += "\r\n";
    }
    const sitelinks = ad.sitelink.filter((sitelink) => sitelink.name.length > 0);
    if (sitelinks.length) {
      text += "Быстрые ссылки:\r\n";
      sitelinks.forEach((sitelink, index) => {
        text += `№${index + 1}\r\n`;
        text += sitelink.name + "\r\n";
        text += sitelink.link ? sitelink.link + "\r\n" : "";
        text += sitelink.descr ? sitelink.descr + "\r\n" : "";
      });
      text += "\r\n";
    }
    text += "-------------------------------------\r\n";
  });

  return text;
}