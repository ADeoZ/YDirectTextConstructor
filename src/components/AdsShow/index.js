import "./AdsShow.css";
import { useSelector } from "react-redux";
import { FIELDS_PARAMS } from '../fieldsParams';
import AdsShowCallouts from "./AdsShowCallouts";
import AdsShowSitelinks from "./AdsShowSitelinks";
import AdsShowTitle from "./AdsShowTitle";

export default function AdsShow(props) {
  const { adId } = props;
  const data = useSelector((state) => state.adForm[adId]);

  // обрезаем значение под ограничение длины
  const cutString = (field, index, subfield) => {
    let fieldForm = data[field];
    let fieldConst = FIELDS_PARAMS[field];

    if (typeof index !== "undefined") {
      fieldForm = fieldForm[index];
    }
    // если значение из массива полей (callout, sitelink)
    if (subfield) {
      fieldForm = fieldForm[subfield];
      fieldConst = fieldConst[subfield];
    }
    // если какие-то символы не учитываются
    if (fieldConst.reg) {
      fieldForm = fieldForm.replace(fieldConst.reg, "");
    }

    const stringDiff = data[field].length - fieldForm.length;
    return data[field].substring(0, fieldConst.length + stringDiff);
  };

  // проверяем целевой URL
  const checkURL = (url) => {
    const domain = url.match(/^(?:https?:\/\/)?(?:www\.)?([^:/?=]+)/i);
    return domain ? domain[1] : 'yandex.ru';
  }

  return (
    <div className="AdsShow">
      <h2>Объявление №{adId + 1}</h2>
      <div className="AdsShow__wrapper">
        <h3 className="AdsShow__title">
          <a className="AdsShow__title-link" href="#plug">
            <div className="AdsShow__favicon" style={{ backgroundImage: 'url(https://favicon.yandex.net/favicon/' + checkURL(data.url) + '?size=32)' }} />
            <AdsShowTitle
              header={data.header}
              extraheader={data.extraheader}
            />
          </a>
        </h3>
        <div className="AdsShow__path">
          <a className="AdsShow__path_link" href="#plug"><b>{checkURL(data.url) || 'домен'}</b><span className="AdsShow__path_separator">&rsaquo;</span>{cutString("showurl") || cutString("header") || 'Заголовок объявления'}</a>
          <div className="AdsShow__path_dots" />
        </div>
        <div className="AdsShow__content">
          <span className="AdsShow__content-adv">Реклама<span className="AdsShow__content-dot">&nbsp;· </span></span>
          {cutString("text") || 'Текст объявления'}
          <AdsShowCallouts
            callouts={data.callout}
          />
        </div>
        <AdsShowSitelinks
          sitelinks={data.sitelink}
        />
      </div>
    </div>
  )
}