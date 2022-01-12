import { useSelector } from "react-redux";
import { FIELDS_PARAMS } from "../../fieldsParams";

export default function AdsShowTitle() {
  const { header, extraheader } = useSelector((state) => state.adForm);
  
  let fullTitle = 'Заголовок объявления';

  if (header.trim().length) {
    if (extraheader.trim().length) {
      let cutHeader = header.trim().substring(0, FIELDS_PARAMS.header.length);
      let cutExtraheader = extraheader.trim().substring(0, FIELDS_PARAMS.extraheader.length);

      if(!/[.!?,:;]$/.test(cutHeader)) {
        cutHeader += '.';
      }

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
