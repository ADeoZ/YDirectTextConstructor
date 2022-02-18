import { FIELDS_PARAMS } from "../../fieldsParams";

export default function AdsShowTitle(props) {
  const { header, extraheader } = props;
  
  let fullTitle = 'Заголовок объявления';

  // компонуем заголовок объявления
  if (header.trim().length) {
    // если есть дополнительный заголовок, объединяем его с основным
    if (extraheader.trim().length) {
      // обрезаем заголовки по длине
      let cutHeader = header.trim().substring(0, FIELDS_PARAMS.header.length);
      let cutExtraheader = extraheader.trim().substring(0, FIELDS_PARAMS.extraheader.length);

      // меняем знак в конце основного заголовка на точку
      if(!/[.!?,:;]$/.test(cutHeader)) {
        cutHeader += '.';
      }

      // обрезаем дополнительный заголовок, если не проходим по сумме заголовков
      if (cutHeader.length + cutExtraheader.length + 1 > FIELDS_PARAMS.headers.fields.sum) {
        const availablePosition = FIELDS_PARAMS.headers.fields.sum - 1 - cutHeader.length;
        cutExtraheader = cutExtraheader.substring(0, cutExtraheader.lastIndexOf(' ', availablePosition)).trim() + '…';
      }

      fullTitle = cutHeader + ' ' + cutExtraheader;
    } else {
      fullTitle = header.substring(0, FIELDS_PARAMS.headers.fields.sum);
    }
  }

  return (
    <div className="AdsShow__title-text">{fullTitle}</div>
  );
}
