import "./AdsShow.css";

export default function AdsShow() {
  return (
    <div className="AdsShow">
    <h2 className="AdsShow__title">
      <a className="AdsShow__title-link" href="#1">
        <div className="AdsShow__favicon" style={{backgroundImage: 'url(https://favicon.yandex.net/favicon/cdm-moscow.ru?size=32)'}}/>
        <div className="AdsShow__title-text">ЦДМ на Лубянке — Приходите к нам!</div>
      </a>
      </h2>
      <div className="AdsShow__path">
        <a className="AdsShow__path_link" href="#1"><b>life-clinic.ru</b><span className="AdsShow__path_separator">&rsaquo;</span>медицинская-клиника</a>
        <div className="AdsShow__path_dots" />
      </div>
      <div className="AdsShow__content">
        <span className="AdsShow__content-adv">Реклама<span className="AdsShow__content-dot">&nbsp;· </span></span>
        Главное детское приключение! Магазины и развлечения на любой вкус. Шоу и конкурсы.
        <span className="AdsShow__content-dot">&nbsp;· </span>
        7 этажей. 365 дней в году. 91 магазин. 32 ресторана. 15 зон развлечений
      </div>
      <div className="AdsShow__sitelinks">
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Кинотеатр</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Кинотеатр</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Кинотеатр</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
        <div className="AdsShow__sitelinks-item">
          <a className="AdsShow__sitelinks-title" href="#1">Кинотеатр</a>
          <div className="AdsShow__sitelinks-description">Самые современные блокбастеры и детские сеансы в 8 залах</div>
        </div>
      </div>
    </div>
  )
}