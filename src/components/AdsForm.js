import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../reducers/adFormSlice";

export default function AdsForm() {
  const FIELDS_PARAMS = {
    header: { length: 56 },
    extraheader: { length: 30, reg: /[.,"!;:]/g },
    headers: { sum: { length: 56, fields: ["header", "extraheader"] } },
    text: { length: 81, reg: /[.,"!;:]/g },
    url: { length: 1024 },
    showurl: { length: 20, forbidden: /[^a-zа-я0-9-№#/%]/i },
    callout: { length: 25 },
    callouts: { sum: { length: 66, fields: this.callout } },
    sitelink: {
      name: { length: 30, forbidden: /[!?[\]]/g },
      descr: { length: 60, forbidden: /[!?[\]]/g },
      link: { length: 1016 },
    },
    sitelinks: { sum: { length: 66, fields: this.sitelink.name } },
  };

  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ name, value }));
  };

  const checkVal = (field) => {
    const fieldValue = FIELDS_PARAMS[field].reg
      ? form[field].replace(FIELDS_PARAMS[field].reg, "")
      : form[field];
    return fieldValue.length <= FIELDS_PARAMS[field].length;
  };

  const [extSitelinks, setExtSitelinks] = useState(false);
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
          className={checkVal("header") ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="header"
          id="header"
          value={form.header}
          onChange={handleChange}
        />
        <div className={checkVal("header") ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
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
          className={checkVal("extraheader") ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="extraheader"
          id="extraheader"
          value={form.extraheader}
          onChange={handleChange}
        />
        <div className={checkVal("extraheader") ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.extraheader.replace(FIELDS_PARAMS.extraheader.reg, "").length}
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
          className={checkVal("text") ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="text"
          id="text"
          value={form.text}
          onChange={handleChange}
        />
        <div className={checkVal("text") ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.text.replace(FIELDS_PARAMS.text.reg, "").length}
        </div>
      </div>
      <div className="AdsForm__header">Ссылка объявления</div>
      <label className="AdsForm__label" htmlFor="url">
        Целевой URL <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 1024 символов</div>
      <div className="AdsForm__line">
        <input
          className={checkVal("url") ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="url"
          id="url"
          value={form.url}
          onChange={handleChange}
        />
        <div className={checkVal("url") ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.url.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="showurl">
        Отображаемая ссылка
      </label>
      <div className="AdsForm__subdescription">
        До 20 символов.{" "}
        <span
          className={!form.showurl.match(FIELDS_PARAMS.showurl.forbidden) ? "" : "AdsForm__description-warn"}
        >
          Допускаются только буквы, цифры и символы "-", "№", "/", "%", "#"
        </span>
        .
      </div>
      <div className="AdsForm__line">
        <input
          className={checkVal("showurl") ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="showurl"
          id="showurl"
          value={form.showurl}
          onChange={handleChange}
        />
        <div className={checkVal("showurl") ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.showurl.length}
        </div>
      </div>
      <div className="AdsForm__header">Уточнения</div>
      <div className="AdsForm__description">
        До 4 уточнений. Общая длина не более 66 символов.
        <br />
        <span
          className={
            form.callout[0].length +
              form.callout[1].length +
              form.callout[2].length +
              form.callout[3].length <=
            66
              ? ""
              : "AdsForm__description-warn"
          }
        >
          Текущая общая длина:{" "}
          {form.callout[0].length + form.callout[1].length + form.callout[2].length + form.callout[3].length}
        </span>
      </div>
      {[0, 1, 2, 3].map((item) => (
        <div key={item}>
          <label className="AdsForm__label" htmlFor={`callout_${item}`}>
            №{item + 1}
          </label>
          <div className="AdsForm__subdescription">До 25 символов</div>
          <div className="AdsForm__line">
            <input
              className={
                form.callout[item].length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"
              }
              name={`callout_${item}`}
              id={`callout_${item}`}
              value={form.callout[item]}
              onChange={handleChange}
            />
            <div
              className={
                form.callout[item].length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"
              }
            >
              {form.callout[item].length}
            </div>
          </div>
        </div>
      ))}
      <div className="AdsForm__header">Быстрые ссылки</div>
      <div className="AdsForm__description">
        До 8 ссылок: две группы по 4 ссылки. Вторая группа показывается только на верхних позициях поиска.
        <br />
        Общая длина заголовков не более 66 символов для каждой группы.
        <br />
        <span
          className={
            form.sitelink[0].name.length +
              form.sitelink[1].name.length +
              form.sitelink[2].name.length +
              form.sitelink[3].name.length <=
            66
              ? ""
              : "AdsForm__description-warn"
          }
        >
          Первая группа: текущая общая длина заголовков:{" "}
          {form.sitelink[0].name.length +
            form.sitelink[1].name.length +
            form.sitelink[2].name.length +
            form.sitelink[3].name.length}
        </span>
      </div>
      {[0, 1, 2, 3].map((item) => (
        <div key={item}>
          №{item + 1}
          <div className="AdsForm__line AdsForm__sitelinks-headers">
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor={`sitelink_${item}_name`}>
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor={`sitelink_${item}_descr`}>
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor={`sitelink_${item}_link`}>
                Ссылка на сайт
              </label>
              <div className="AdsForm__subdescription">До 1016 символов</div>
            </div>
          </div>
          <div className="AdsForm__line">
            <input
              className={
                form.sitelink[item].name.length <= 30
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name={`sitelink_${item}_name`}
              id={`sitelink_${item}_name`}
              value={form.sitelink[item].name}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink[item].name.length <= 30
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink[item].name.length}
            </div>
            <input
              className={
                form.sitelink[item].descr.length <= 60
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name={`sitelink_${item}_descr`}
              id={`sitelink_${item}_descr`}
              value={form.sitelink[item].descr}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink[item].descr.length <= 60
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink[item].descr.length}
            </div>
            <input
              className={
                form.sitelink[item].link.length <= 1016
                  ? "AdsForm__input AdsForm__input-sitelinks"
                  : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
              }
              name={`sitelink_${item}_link`}
              id={`sitelink_${item}_link`}
              value={form.sitelink[item].link}
              onChange={handleChange}
            />
            <div
              className={
                form.sitelink[item].link.length <= 1016
                  ? "AdsForm__info AdsForm__info-sitelinks"
                  : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
              }
            >
              {form.sitelink[item].link.length}
            </div>
          </div>
        </div>
      ))}
      <div className="AdsForm__extsitelinks-show" onClick={showExtSitelinks}>
        {extSitelinks ? "Скрыть" : "Показать"} вторую группу быстрых ссылок
      </div>
      {extSitelinks ? (
        <div className="AdsForm__extsitelinks">
          <div className="AdsForm__description">
            <span
              className={
                form.sitelink[4].name.length +
                  form.sitelink[5].name.length +
                  form.sitelink[6].name.length +
                  form.sitelink[7].name.length <=
                66
                  ? ""
                  : "AdsForm__description-warn"
              }
            >
              Вторая группа: текущая общая длина заголовков:{" "}
              {form.sitelink[4].name.length +
                form.sitelink[5].name.length +
                form.sitelink[6].name.length +
                form.sitelink[7].name.length}
            </span>
          </div>
          {[4, 5, 6, 7].map((item) => (
            <div key={item}>
              №{item + 1}
              <div className="AdsForm__line AdsForm__sitelinks-headers">
                <div className="AdsForm__sitelinks-header">
                  <label className="AdsForm__label" htmlFor={`sitelink_${item}_name`}>
                    Заголовок
                  </label>
                  <div className="AdsForm__subdescription">До 30 символов</div>
                </div>
                <div className="AdsForm__sitelinks-header">
                  <label className="AdsForm__label" htmlFor={`sitelink_${item}_descr`}>
                    Описание
                  </label>
                  <div className="AdsForm__subdescription">До 60 символов</div>
                </div>
                <div className="AdsForm__sitelinks-header">
                  <label className="AdsForm__label" htmlFor={`sitelink_${item}_link`}>
                    Ссылка на сайт
                  </label>
                  <div className="AdsForm__subdescription">До 1016 символов</div>
                </div>
              </div>
              <div className="AdsForm__line">
                <input
                  className={
                    form.sitelink[item].name.length <= 30
                      ? "AdsForm__input AdsForm__input-sitelinks"
                      : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
                  }
                  name={`sitelink_${item}_name`}
                  id={`sitelink_${item}_name`}
                  value={form.sitelink[item].name}
                  onChange={handleChange}
                />
                <div
                  className={
                    form.sitelink[item].name.length <= 30
                      ? "AdsForm__info AdsForm__info-sitelinks"
                      : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
                  }
                >
                  {form.sitelink[item].name.length}
                </div>
                <input
                  className={
                    form.sitelink[item].descr.length <= 60
                      ? "AdsForm__input AdsForm__input-sitelinks"
                      : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
                  }
                  name={`sitelink_${item}_descr`}
                  id={`sitelink_${item}_descr`}
                  value={form.sitelink[item].descr}
                  onChange={handleChange}
                />
                <div
                  className={
                    form.sitelink[item].descr.length <= 60
                      ? "AdsForm__info AdsForm__info-sitelinks"
                      : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
                  }
                >
                  {form.sitelink[item].descr.length}
                </div>
                <input
                  className={
                    form.sitelink[item].link.length <= 1016
                      ? "AdsForm__input AdsForm__input-sitelinks"
                      : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
                  }
                  name={`sitelink_${item}_link`}
                  id={`sitelink_${item}_link`}
                  value={form.sitelink[item].link}
                  onChange={handleChange}
                />
                <div
                  className={
                    form.sitelink[item].link.length <= 1016
                      ? "AdsForm__info AdsForm__info-sitelinks"
                      : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
                  }
                >
                  {form.sitelink[item].link.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </form>
  );
}
