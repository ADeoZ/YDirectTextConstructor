import { useState } from "react";

export default function AdsForm() {
  const clearForm = {
    header: "",
    extraheader: "",
    text: "",
    url: "",
    showurl: "",
    callout1: "",
    callout2: "",
    callout3: "",
    callout4: "",
    sitelink1name: "",
    sitelink2name: "",
    sitelink3name: "",
    sitelink4name: "",
    sitelink5name: "",
    sitelink6name: "",
    sitelink7name: "",
    sitelink8name: "",
    sitelink1link: "",
    sitelink2link: "",
    sitelink3link: "",
    sitelink4link: "",
    sitelink5link: "",
    sitelink6link: "",
    sitelink7link: "",
    sitelink8link: "",
    sitelink1descr: "",
    sitelink2descr: "",
    sitelink3descr: "",
    sitelink4descr: "",
    sitelink5descr: "",
    sitelink6descr: "",
    sitelink7descr: "",
    sitelink8descr: "",
  };
  //   const clearLength = { header: 0, extraheader: 0, sumheader: 0 };
  //   const clearStyles = { header: true, extraheader: true };
  const [form, setForm] = useState(clearForm);
  const [extSitelinks, setExtSitelinks] = useState(false);
  //   const [length, setLength] = useState(clearLength);
  //   const [styles, setStyles] = useState(clearStyles);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
    // calculateLength(name, value);
  };

  //   const calculateLength = (input, value) => {
  //     let valueLength = value.length;

  //     if (input === "header") {
  //       setLength((prevState) => ({ ...prevState, sumheader: form.extraheader.length + valueLength }));
  //       setStyles((prevState) => ({ ...prevState, header: valueLength <= 56 }));
  //     }
  //     if (input === "extraheader") {
  //       setLength((prevState) => ({ ...prevState, sumheader: form.gheader.length + valueLength }));
  //       valueLength = value.replace(/[.,"!;:]/g, "").length;
  //       setStyles((prevState) => ({ ...prevState, extraheader: valueLength <= 30 }));
  //     }

  //     setLength((prevState) => ({ ...prevState, [input]: valueLength }));
  //   };

  const showExtSitelinks = () => setExtSitelinks(!extSitelinks);

  return (
    <form className="AdsForm">
      <div className="AdsForm__header">Заголовок объявления</div>
      <div className="AdsForm__description">
        Общая длина не более 56 символов, включая знаки препинания и пробелы
        <br />
        <span
          className={form.header.length + form.extraheader.length <= 56 ? "" : "AdsForm__description-warn"}
        >
          Текущая общая длина: {form.header.length + form.extraheader.length}
        </span>
      </div>
      <label className="AdsForm__label" htmlFor="header">
        Основной заголовок <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 56 символов, включая знаки препинания и пробелы</div>
      <div className="AdsForm__line">
        <input
          className={form.header.length <= 56 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="header"
          id="header"
          value={form.header}
          onChange={handleChange}
        />
        <div className={form.header.length <= 56 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.header.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="extraheader">
        Дополнительный заголовок
      </label>
      <div className="AdsForm__subdescription">
        До 30 символов, включая пробелы. Знаки препинания не считаются.
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.extraheader.replace(/[.,"!;:]/g, "").length <= 30
              ? "AdsForm__input"
              : "AdsForm__input AdsForm__input-warn"
          }
          name="extraheader"
          id="extraheader"
          value={form.extraheader}
          onChange={handleChange}
        />
        <div
          className={
            form.extraheader.replace(/[.,"!;:]/g, "").length <= 30
              ? "AdsForm__info"
              : "AdsForm__info AdsForm__info-warn"
          }
        >
          {form.extraheader.replace(/[.,"!;:]/g, "").length}
        </div>
      </div>
      <div className="AdsForm__header">
        <label htmlFor="text">
          Текст объявления <span className="AdsForm__required">*</span>
        </label>
      </div>
      <div className="AdsForm__subdescription">
        До 81 символа, включая пробелы. Знаки препинания не считаются.
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.text.replace(/[.,"!;:]/g, "").length <= 81
              ? "AdsForm__input"
              : "AdsForm__input AdsForm__input-warn"
          }
          name="text"
          id="text"
          value={form.text}
          onChange={handleChange}
        />
        <div
          className={
            form.text.replace(/[.,"!;:]/g, "").length <= 81
              ? "AdsForm__info"
              : "AdsForm__info AdsForm__info-warn"
          }
        >
          {form.text.replace(/[.,"!;:]/g, "").length}
        </div>
      </div>
      <div className="AdsForm__header">Ссылка объявления</div>
      <label className="AdsForm__label" htmlFor="url">
        Целевой URL <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 1024 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.url.length <= 1024 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="url"
          id="url"
          value={form.url}
          onChange={handleChange}
        />
        <div className={form.url.length <= 1024 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.url.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="showurl">
        Отображаемая ссылка
      </label>
      <div className="AdsForm__subdescription">
        До 20 символов.{" "}
        <span className={!form.showurl.match(/[^a-zа-я0-9-№#/%]/i) ? "" : "AdsForm__description-warn"}>
          Допускаются только буквы, цифры и символы "-", "№", "/", "%", "#"
        </span>
        .
      </div>
      <div className="AdsForm__line">
        <input
          className={form.showurl.length <= 20 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="showurl"
          id="showurl"
          value={form.showurl}
          onChange={handleChange}
        />
        <div className={form.showurl.length <= 20 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.showurl.length}
        </div>
      </div>
      <div className="AdsForm__header">Уточнения</div>
      <div className="AdsForm__description">
        До 4 уточнений. Общая длина не более 66 символов.
        <br />
        <span
          className={
            form.callout1.length + form.callout2.length + form.callout3.length + form.callout4.length <= 66
              ? ""
              : "AdsForm__description-warn"
          }
        >
          Текущая общая длина:{" "}
          {form.callout1.length + form.callout2.length + form.callout3.length + form.callout4.length}
        </span>
      </div>
      <label className="AdsForm__label" htmlFor="callout1">
        №1
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout1.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout1"
          id="callout1"
          value={form.callout1}
          onChange={handleChange}
        />
        <div className={form.callout1.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout1.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout2">
        №2
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout2.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout2"
          id="callout2"
          value={form.callout2}
          onChange={handleChange}
        />
        <div className={form.callout2.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout2.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout3">
        №3
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout3.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout3"
          id="callout3"
          value={form.callout3}
          onChange={handleChange}
        />
        <div className={form.callout3.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout3.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout4">
        №4
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout4.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout4"
          id="callout4"
          value={form.callout4}
          onChange={handleChange}
        />
        <div className={form.callout4.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout4.length}
        </div>
      </div>
      <div className="AdsForm__header">Быстрые ссылки</div>
      <div className="AdsForm__description">
        До 8 ссылок: две группы по 4 ссылки. Вторая группа показывается только на верхних позициях поиска.
        <br />
        Общая длина заголовков не более 66 символов для каждой группы.
        <br />
        <span
          className={
            form.sitelink1name.length +
              form.sitelink2name.length +
              form.sitelink3name.length +
              form.sitelink4name.length <=
            66
              ? ""
              : "AdsForm__description-warn"
          }
        >
          Первая группа: текущая общая длина заголовков:{" "}
          {form.sitelink1name.length +
            form.sitelink2name.length +
            form.sitelink3name.length +
            form.sitelink4name.length}
        </span>
      </div>
      №1
      <div className="AdsForm__line AdsForm__sitelinks-headers">
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink1name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink1descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink1link">
            Ссылка на сайт
          </label>
          <div className="AdsForm__subdescription">До 1016 символов</div>
        </div>
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.sitelink1name.length <= 30
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink1name"
          id="sitelink1name"
          value={form.sitelink1name}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink1name.length <= 30
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink1name.length}
        </div>
        <input
          className={
            form.sitelink1descr.length <= 60
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink1descr"
          id="sitelink1descr"
          value={form.sitelink1descr}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink1descr.length <= 60
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink1descr.length}
        </div>
        <input
          className={
            form.sitelink1link.length <= 1016
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink1link"
          id="sitelink1link"
          value={form.sitelink1link}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink1link.length <= 1016
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink1link.length}
        </div>
      </div>
      №2
      <div className="AdsForm__line AdsForm__sitelinks-headers">
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink2name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink2descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink2link">
            Ссылка на сайт
          </label>
          <div className="AdsForm__subdescription">До 1016 символов</div>
        </div>
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.sitelink2name.length <= 30
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink2name"
          id="sitelink2name"
          value={form.sitelink2name}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink2name.length <= 30
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink2name.length}
        </div>
        <input
          className={
            form.sitelink2descr.length <= 60
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink2descr"
          id="sitelink2descr"
          value={form.sitelink2descr}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink2descr.length <= 60
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink2descr.length}
        </div>
        <input
          className={
            form.sitelink2link.length <= 1016
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink2link"
          id="sitelink2link"
          value={form.sitelink2link}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink2link.length <= 1016
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink2link.length}
        </div>
      </div>
      №3
      <div className="AdsForm__line AdsForm__sitelinks-headers">
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink3name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink3descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink3link">
            Ссылка на сайт
          </label>
          <div className="AdsForm__subdescription">До 1016 символов</div>
        </div>
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.sitelink3name.length <= 30
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink3name"
          id="sitelink1name"
          value={form.sitelink3name}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink3name.length <= 30
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink3name.length}
        </div>
        <input
          className={
            form.sitelink3descr.length <= 60
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink3descr"
          id="sitelink3descr"
          value={form.sitelink3descr}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink3descr.length <= 60
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink3descr.length}
        </div>
        <input
          className={
            form.sitelink3link.length <= 1016
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink3link"
          id="sitelink3link"
          value={form.sitelink3link}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink3link.length <= 1016
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink3link.length}
        </div>
      </div>
      №4
      <div className="AdsForm__line AdsForm__sitelinks-headers">
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink4name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink4descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink4link">
            Ссылка на сайт
          </label>
          <div className="AdsForm__subdescription">До 1016 символов</div>
        </div>
      </div>
      <div className="AdsForm__line">
        <input
          className={
            form.sitelink4name.length <= 30
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink4name"
          id="sitelink4name"
          value={form.sitelink4name}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink4name.length <= 30
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink4name.length}
        </div>
        <input
          className={
            form.sitelink4descr.length <= 60
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink4descr"
          id="sitelink4descr"
          value={form.sitelink4descr}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink4descr.length <= 60
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink4descr.length}
        </div>
        <input
          className={
            form.sitelink4link.length <= 1016
              ? "AdsForm__input AdsForm__input-sitelinks"
              : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
          }
          name="sitelink4link"
          id="sitelink4link"
          value={form.sitelink4link}
          onChange={handleChange}
        />
        <div
          className={
            form.sitelink4link.length <= 1016
              ? "AdsForm__info AdsForm__info-sitelinks"
              : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
          }
        >
          {form.sitelink4link.length}
        </div>
      </div>
      <div className="AdsForm__extsitelinks-show" onClick={showExtSitelinks}>
        {extSitelinks ? "Скрыть" : "Показать"} вторую группу быстрых ссылок
      </div>
      {extSitelinks ? (
        <div className="AdsForm__extsitelinks">
          <div className="AdsForm__description">
            <span
              className={
                form.sitelink5name.length +
                  form.sitelink6name.length +
                  form.sitelink7name.length +
                  form.sitelink8name.length <=
                66
                  ? ""
                  : "AdsForm__description-warn"
              }
            >
              Вторая группа: текущая общая длина заголовков:{" "}
              {form.sitelink5name.length +
                form.sitelink6name.length +
                form.sitelink7name.length +
                form.sitelink8name.length}
            </span>
          </div>
          №5
          <div className="AdsForm__line AdsForm__sitelinks-headers">
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink5name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink5descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink5link">
                Ссылка на сайт
              </label>
              <div className="AdsForm__subdescription">До 1016 символов</div>
            </div>
          </div>
          <div className="AdsForm__line">
            <input
              className={
                form.sitelink5name.length <= 30
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink5name"
              id="sitelink5name"
              value={form.sitelink5name}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink5name.length <= 30
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink5name.length}
            </div>
            <input
              className={
                form.sitelink5descr.length <= 60
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink5descr"
              id="sitelink5descr"
              value={form.sitelink5descr}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink5descr.length <= 60
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink5descr.length}
            </div>
            <input
              className={
                form.sitelink5link.length <= 1016
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink5link"
              id="sitelink5link"
              value={form.sitelink5link}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink5link.length <= 1016
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink5link.length}
            </div>
          </div>
          №6
          <div className="AdsForm__line AdsForm__sitelinks-headers">
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink6name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink6descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink6link">
                Ссылка на сайт
              </label>
              <div className="AdsForm__subdescription">До 1016 символов</div>
            </div>
          </div>
          <div className="AdsForm__line">
            <input
              className={
                form.sitelink6name.length <= 30
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink6name"
              id="sitelink6name"
              value={form.sitelink6name}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink6name.length <= 30
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink6name.length}
            </div>
            <input
              className={
                form.sitelink6descr.length <= 60
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink6descr"
              id="sitelink6descr"
              value={form.sitelink6descr}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink6descr.length <= 60
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink6descr.length}
            </div>
            <input
              className={
                form.sitelink6link.length <= 1016
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink6link"
              id="sitelink6link"
              value={form.sitelink6link}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink6link.length <= 1016
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink6link.length}
            </div>
          </div>
          №7
          <div className="AdsForm__line AdsForm__sitelinks-headers">
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink7name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink7descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink7link">
                Ссылка на сайт
              </label>
              <div className="AdsForm__subdescription">До 1016 символов</div>
            </div>
          </div>
          <div className="AdsForm__line">
            <input
              className={
                form.sitelink7name.length <= 30
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink7name"
              id="sitelink7name"
              value={form.sitelink7name}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink7name.length <= 30
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink7name.length}
            </div>
            <input
              className={
                form.sitelink7descr.length <= 60
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink7descr"
              id="sitelink7descr"
              value={form.sitelink7descr}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink7descr.length <= 60
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink7descr.length}
            </div>
            <input
              className={
                form.sitelink7link.length <= 1016
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink7link"
              id="sitelink7link"
              value={form.sitelink7link}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink7link.length <= 1016
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink7link.length}
            </div>
          </div>
          №8
          <div className="AdsForm__line AdsForm__sitelinks-headers">
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink8name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink8descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink8link">
                Ссылка на сайт
              </label>
              <div className="AdsForm__subdescription">До 1016 символов</div>
            </div>
          </div>
          <div className="AdsForm__line">
            <input
              className={
                form.sitelink8name.length <= 30
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink8name"
              id="sitelink8name"
              value={form.sitelink8name}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink8name.length <= 30
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink8name.length}
            </div>
            <input
              className={
                form.sitelink8descr.length <= 60
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink8descr"
              id="sitelink8descr"
              value={form.sitelink8descr}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink8descr.length <= 60
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink8descr.length}
            </div>
            <input
              className={
                form.sitelink8link.length <= 1016
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name="sitelink8link"
              id="sitelink8link"
              value={form.sitelink8link}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink8link.length <= 1016
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink8link.length}
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
