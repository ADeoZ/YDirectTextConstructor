import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../reducers/adFormSlice";

export default function AdsForm() {
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ name, value }));
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
      <label className="AdsForm__label" htmlFor="callout_1">
        №1
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout1.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout_1"
          id="callout_1"
          value={form.callout1}
          onChange={handleChange}
        />
        <div className={form.callout1.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout1.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout_2">
        №2
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout2.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout_2"
          id="callout_2"
          value={form.callout2}
          onChange={handleChange}
        />
        <div className={form.callout2.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout2.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout_3">
        №3
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout3.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout_3"
          id="callout_3"
          value={form.callout3}
          onChange={handleChange}
        />
        <div className={form.callout3.length <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout3.length}
        </div>
      </div>
      <label className="AdsForm__label" htmlFor="callout_4">
        №4
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={form.callout4.length <= 25 ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name="callout_4"
          id="callout_4"
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
          <label className="AdsForm__label" htmlFor="sitelink_1_name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_1_descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_1_link">
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
          name="sitelink_1_name"
          id="sitelink_1_name"
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
          name="sitelink_1_descr"
          id="sitelink_1_descr"
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
          name="sitelink_1_link"
          id="sitelink_1_link"
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
          <label className="AdsForm__label" htmlFor="sitelink_2_name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_2_descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_2_link">
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
          name="sitelink_2_name"
          id="sitelink_2_name"
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
          name="sitelink_2_descr"
          id="sitelink_2_descr"
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
          name="sitelink_2_link"
          id="sitelink_2_link"
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
          <label className="AdsForm__label" htmlFor="sitelink_3_name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_3_descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_3_link">
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
          name="sitelink_3_name"
          id="sitelink_3_name"
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
          name="sitelink_3_descr"
          id="sitelink_3_descr"
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
          name="sitelink_3_link"
          id="sitelink_3_link"
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
          <label className="AdsForm__label" htmlFor="sitelink_4_name">
            Заголовок
          </label>
          <div className="AdsForm__subdescription">До 30 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_4_descr">
            Описание
          </label>
          <div className="AdsForm__subdescription">До 60 символов</div>
        </div>
        <div className="AdsForm__sitelinks-header">
          <label className="AdsForm__label" htmlFor="sitelink_4_link">
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
          name="sitelink_4_name"
          id="sitelink_4_name"
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
          name="sitelink_4_descr"
          id="sitelink_4_descr"
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
          name="sitelink_4_link"
          id="sitelink_4_link"
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
              <label className="AdsForm__label" htmlFor="sitelink_5_name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_5_descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_5_link">
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
              name="sitelink_5_name"
              id="sitelink_5_name"
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
              name="sitelink_5_descr"
              id="sitelink_5_descr"
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
              name="sitelink_5_link"
              id="sitelink_5_link"
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
              <label className="AdsForm__label" htmlFor="sitelink_6_name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_6_descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_6_link">
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
              name="sitelink_6_name"
              id="sitelink_6_name"
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
              name="sitelink_6_descr"
              id="sitelink_6_descr"
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
              <label className="AdsForm__label" htmlFor="sitelink_7_name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_7_descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_7_link">
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
              name="sitelink_7_name"
              id="sitelink_7_name"
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
              name="sitelink_7_descr"
              id="sitelink_7_descr"
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
              name="sitelink_7_link"
              id="sitelink_7_link"
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
              <label className="AdsForm__label" htmlFor="sitelink_8_name">
                Заголовок
              </label>
              <div className="AdsForm__subdescription">До 30 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_8_descr">
                Описание
              </label>
              <div className="AdsForm__subdescription">До 60 символов</div>
            </div>
            <div className="AdsForm__sitelinks-header">
              <label className="AdsForm__label" htmlFor="sitelink_8_link">
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
              name="sitelink_8_name"
              id="sitelink_8_name"
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
              name="sitelink_8_descr"
              id="sitelink_8_descr"
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
              name="sitelink_8_link"
              id="sitelink_8_link"
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
