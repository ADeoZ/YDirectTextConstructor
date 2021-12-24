import { useSelector } from "react-redux";
import "./AdsShow.css";

export default function AdsShow() {

  const data = useSelector((state) => state.adForm);

  const checkURL = (url) => {
    const domain = url.match(/^(?:https?:\/\/)?(?:www\.)?([^:/?=]+)/i);
    console.log(domain);
    return domain ? domain[1] : 'yandex.ru';
  }

  return (
    <div className="AdsShow">
    <h2 className="AdsShow__title">
      <a className="AdsShow__title-link" href="#1">
        <div className="AdsShow__favicon" style={{backgroundImage: 'url(https://favicon.yandex.net/favicon/' + checkURL(data.url) + '?size=32)'}}/>
        <div className="AdsShow__title-text">{data.header || 'Заголовок объявления'} {data.extraheader}</div>
      </a>
      </h2>
      <div className="AdsShow__path">
        <a className="AdsShow__path_link" href="#1"><b>{data.url || 'домен'}</b><span className="AdsShow__path_separator">&rsaquo;</span>{data.showurl || data.header || 'Заголовок объявления'}</a>
        <div className="AdsShow__path_dots" />
      </div>
      <div className="AdsShow__content">
        <span className="AdsShow__content-adv">Реклама<span className="AdsShow__content-dot">&nbsp;· </span></span>
        {data.text || 'Текст объявления'}
        {data.callout.length ? 
          <span className="AdsShow__content-dot">&nbsp;· </span> + ( 
        data.callout.map((callout) => callout ? callout + '. ' : "")
        ) : null }
      </div>
      <div className="AdsShow__sitelinks">
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Ссылка 1</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Ссылка 2</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Ссылка 3</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Ссылка 4</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
      </div>
    </div>
  )
}