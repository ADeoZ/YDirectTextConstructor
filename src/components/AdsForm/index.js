import './AdsForm.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import AdsFormCallout from "./AdsFormCallout";
import AdsFormLine from "./AdsFormLine";
import AdsFormSitelink from "./AdsFormSitelink";
import { FIELDS_PARAMS } from '../fieldsParams';

export default function AdsForm(props) {
  const { adId } = props;
  const form = useSelector((state) => state.adForm[adId]);

  // проверка суммы длин значений в группе полей
  const checkSum = (ruleGroup, returnSum = false) => {
    // какие поля суммируем по данной группе
    const sumFields = ruleGroup.fields;

    const fieldsSum = sumFields.name.reduce((sum, item) => {
      // суммы по массивам полей (callout, sitelink)
      if (sumFields.index) {
        sumFields.index.forEach((i) => {
          const formField = sumFields.subfield ? form[item][i][sumFields.subfield] : form[item][i];
          sum += formField.length;
        });
      }
      // суммы по простым полям
      else {
        const formField = sumFields.subfield ? form[item][sumFields.subfield] : form[item];
        sum += formField.length;
      }
      return sum;
    }, 0);
    // возвращаем или сумму, или boolean
    return returnSum ? fieldsSum : fieldsSum <= sumFields.sum;
  };

  // скрыть/показать вторую группу быстрых ссылок
  const [extSitelinks, setExtSitelinks] = useState(false);
  const showExtSitelinks = () => setExtSitelinks(!extSitelinks);

  return (
    <form className="AdsForm">
      <div className="AdsForm__header">Заголовок объявления</div>
      <div className="AdsForm__description">
        Рекомендуемая общая длина не более 56 символов, включая знаки препинания и пробелы.
        <br />
        <span className={classNames({ "AdsForm__description-warn": !checkSum(FIELDS_PARAMS.headers) })}>
          Текущая общая длина: {checkSum(FIELDS_PARAMS.headers, true)}
        </span>
      </div>
      <label className="AdsForm__label" htmlFor="header">
        Основной заголовок <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 56 символов, включая знаки препинания и пробелы</div>
      <AdsFormLine
        adId={adId}
        field="header"
      />

      <label className="AdsForm__label" htmlFor="extraheader">
        Дополнительный заголовок
      </label>
      <div className="AdsForm__subdescription">
        До 30 символов, включая пробелы. Знаки препинания не считаются.
      </div>
      <AdsFormLine
        adId={adId}
        field="extraheader"
        reg={FIELDS_PARAMS.extraheader.reg}
      />

      <div className="AdsForm__header">
        <label htmlFor="text">
          Текст объявления <span className="AdsForm__required">*</span>
        </label>
      </div>
      <div className="AdsForm__subdescription">
        До 81 символа, включая пробелы. Знаки препинания не считаются.
      </div>
      <AdsFormLine
        adId={adId}
        field="text"
        reg={FIELDS_PARAMS.text.reg}
      />

      <div className="AdsForm__header">Ссылка объявления</div>
      <label className="AdsForm__label" htmlFor="url">
        Целевой URL <span className="AdsForm__required">*</span>
      </label>
      <div className="AdsForm__subdescription">До 1024 символов</div>
      <AdsFormLine
        adId={adId}
        field="url"
      />

      <label className="AdsForm__label" htmlFor="showurl">
        Отображаемая ссылка
      </label>
      <div className="AdsForm__subdescription">До 20 символов.</div>
      <AdsFormLine
        adId={adId}
        field="showurl"
        forbidden={FIELDS_PARAMS.showurl.forbidden}
      />

      <div className="AdsForm__header">Уточнения</div>
      <div className="AdsForm__description">
        До 4 уточнений. Общая длина не более 66 символов.
        <br />
        <span className={classNames({ "AdsForm__description-warn": !checkSum(FIELDS_PARAMS.callouts) })}>
          Текущая общая длина: {checkSum(FIELDS_PARAMS.callouts, true)}
        </span>
      </div>
      {FIELDS_PARAMS.callouts.fields.index.map((item) => (
        <AdsFormCallout
          adId={adId}
          id={item}
          checkSum={checkSum(FIELDS_PARAMS.callouts)}
          forbidden={FIELDS_PARAMS.callout.forbidden}
          key={item}
        />
      ))}

      <div className="AdsForm__header">Быстрые ссылки</div>
      <div className="AdsForm__description">
        До 8 ссылок: две группы по 4 ссылки. Вторая группа показывается только на верхних позициях поиска.
        <br />
        Общая длина заголовков не более 66 символов для каждой группы.
        <br />
        <span className={classNames({ "AdsForm__description-warn": !checkSum(FIELDS_PARAMS.sitelinks1) })}>
          Первая группа: текущая общая длина заголовков: {checkSum(FIELDS_PARAMS.sitelinks1, true)}
        </span>
      </div>
      {FIELDS_PARAMS.sitelinks1.fields.index.map((item) => (
        <AdsFormSitelink
          adId={adId}
          id={item}
          checkSum={checkSum(FIELDS_PARAMS.sitelinks1)}
          forbidden={{
            name: FIELDS_PARAMS.sitelink.name.forbidden,
            descr: FIELDS_PARAMS.sitelink.descr.forbidden,
          }}
          key={item}
        />
      ))}

      <div className="AdsForm__extsitelinks-show" onClick={showExtSitelinks}>
        {extSitelinks ? "Скрыть" : "Показать"} вторую группу быстрых ссылок
      </div>
      {extSitelinks ? (
        <div className="AdsForm__extsitelinks">
          <div className="AdsForm__description">
            Показываются только при заполнении всех полей.
            <br />
            <span
              className={classNames({ "AdsForm__description-warn": !checkSum(FIELDS_PARAMS.sitelinks2) })}
            >
              Вторая группа: текущая общая длина заголовков: {checkSum(FIELDS_PARAMS.sitelinks2, true)}
            </span>
          </div>
          {FIELDS_PARAMS.sitelinks2.fields.index.map((item) => (
            <AdsFormSitelink
              adId={adId}
              id={item}
              checkSum={checkSum(FIELDS_PARAMS.sitelinks2)}
              forbidden={{
                name: FIELDS_PARAMS.sitelink.name.forbidden,
                descr: FIELDS_PARAMS.sitelink.descr.forbidden,
              }}
              key={item}
            />
          ))}
        </div>
      ) : null}
    </form>
  );
}
