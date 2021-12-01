import { useState } from "react";
import { useSelector } from "react-redux";
import AdsFormCallout from "./AdsFormCallout";
import AdsFormLine from "./AdsFormLine";
import AdsFormSitelink from "./AdsFormSitelink";

export default function AdsForm() {
  const FIELDS_PARAMS = {
    header: { length: 56 },
    extraheader: { length: 30, reg: /[.,"!;:]/g },
    headers: { sum: { length: 56, fields: ["header", "extraheader"] } },
    text: { length: 81, reg: /[.,"!;:]/g },
    url: { length: 1024 },
    showurl: { length: 20, forbidden: /[^a-zа-я0-9-№#/% ]/i },
    callout: { length: 25 },
    callouts: { sum: { length: 66, fields: ["callout"], index: [0, 1, 2, 3] } },
    sitelink: {
      name: { length: 30, forbidden: /[!?[\]]/g },
      descr: { length: 60, forbidden: /[!?[\]]/g },
      link: { length: 1016 },
    },
    sitelinks1: { sum: { length: 66, fields: ["sitelink"], index: [0, 1, 2, 3] } },
    sitelinks2: { sum: { length: 66, fields: ["sitelink"], index: [4, 5, 6, 7] } },
  };

  const form = useSelector((state) => state.adForm);

  const checkVal = (field, index, subfield) => {
    let fieldForm = form[field];
    let fieldConst = FIELDS_PARAMS[field];

    if (typeof index !== "undefined") {
      fieldForm = fieldForm[index];
    }
    if (subfield) {
      fieldForm = fieldForm[subfield];
      fieldConst = fieldConst[subfield];
    }
    if (fieldConst.reg) {
      fieldForm = fieldForm.replace(fieldConst.reg, "");
    }

    return fieldForm.length <= fieldConst.length;
  };

  const checkSum = (field, sumReturn = false, subfield) => {
    const sumName = FIELDS_PARAMS[field].sum;
    const fieldsSum = sumName.fields.reduce((sum, item) => {
      if (sumName.index) {
        sumName.index.forEach((i) => {
          const formField = subfield ? form[item][i][subfield] : form[item][i];
          sum += formField.length;
        });
      } else {
        const formField = subfield ? form[item][subfield] : form[item];
        sum += formField.length;
      }
      return sum;
    }, 0);
    return sumReturn ? fieldsSum : fieldsSum <= sumName.length;
  };

  const [extSitelinks, setExtSitelinks] = useState(false);
  const showExtSitelinks = () => setExtSitelinks(!extSitelinks);

  return (
    <form className="AdsForm">
      <div className="AdsForm__header">Заголовок объявления</div>
      <div className="AdsForm__description">
        Общая длина не более 56 символов, включая знаки препинания и пробелы
        <br />
        <span className={checkSum("headers") ? "" : "AdsForm__description-warn"}>
          Текущая общая длина: {checkSum("headers", true)}
        </span>
      </div>
      <label className="AdsForm__label" htmlFor="header">
        Основной заголовок <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 56 символов, включая знаки препинания и пробелы</div>
      <AdsFormLine field="header" check={checkVal("header")} />
      <label className="AdsForm__label" htmlFor="extraheader">
        Дополнительный заголовок
      </label>
      <div className="AdsForm__subdescription">
        До 30 символов, включая пробелы. Знаки препинания не считаются.
      </div>
      <AdsFormLine field="extraheader" check={checkVal("extraheader")} reg={FIELDS_PARAMS.extraheader.reg} />
      <div className="AdsForm__header">
        <label htmlFor="text">
          Текст объявления <span className="AdsForm__required">*</span>
        </label>
      </div>
      <div className="AdsForm__subdescription">
        До 81 символа, включая пробелы. Знаки препинания не считаются.
      </div>
      <AdsFormLine field="text" check={checkVal("text")} reg={FIELDS_PARAMS.text.reg} />
      <div className="AdsForm__header">Ссылка объявления</div>
      <label className="AdsForm__label" htmlFor="url">
        Целевой URL <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 1024 символов</div>
      <AdsFormLine field="url" check={checkVal("url")} />
      <label className="AdsForm__label" htmlFor="showurl">
        Отображаемая ссылка
      </label>
      <div className="AdsForm__subdescription">
        До 20 символов.{" "}
        <span
          className={!form.showurl.match(FIELDS_PARAMS.showurl.forbidden) ? "" : "AdsForm__description-warn"}
        >
          Допускаются только буквы, цифры и символы "-", "№", "/", "%", "#".
        </span>
      </div>
      <AdsFormLine field="showurl" check={checkVal("showurl")} />
      <div className="AdsForm__header">Уточнения</div>
      <div className="AdsForm__description">
        До 4 уточнений. Общая длина не более 66 символов.
        <br />
        <span className={checkSum("callouts") ? "" : "AdsForm__description-warn"}>
          Текущая общая длина: {checkSum("callouts", true)}
        </span>
      </div>
      {[0, 1, 2, 3].map((item) => (
        <AdsFormCallout id={item} check={checkVal("callout", item)} key={item} />
      ))}
      <div className="AdsForm__header">Быстрые ссылки</div>
      <div className="AdsForm__description">
        До 8 ссылок: две группы по 4 ссылки. Вторая группа показывается только на верхних позициях поиска.
        <br />
        Общая длина заголовков не более 66 символов для каждой группы.
        <br />
        <span className={checkSum("sitelinks1", false, "name") ? "" : "AdsForm__description-warn"}>
          Первая группа: текущая общая длина заголовков: {checkSum("sitelinks1", true, "name")}
        </span>
      </div>
      {[0, 1, 2, 3].map((item) => (
        <AdsFormSitelink id={item} checkCallback={checkVal} key={item} />
      ))}
      <div className="AdsForm__extsitelinks-show" onClick={showExtSitelinks}>
        {extSitelinks ? "Скрыть" : "Показать"} вторую группу быстрых ссылок
      </div>
      {extSitelinks ? (
        <div className="AdsForm__extsitelinks">
          <div className="AdsForm__description">
            <span className={checkSum("sitelinks2", false, "name") ? "" : "AdsForm__description-warn"}>
              Вторая группа: текущая общая длина заголовков: {checkSum("sitelinks2", true, "name")}
            </span>
          </div>
          {[4, 5, 6, 7].map((item) => (
            <AdsFormSitelink id={item} checkCallback={checkVal} key={item} />
          ))}
        </div>
      ) : null}
    </form>
  );
}
