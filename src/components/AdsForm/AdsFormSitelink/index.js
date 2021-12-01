import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../../reducers/adFormSlice";

export default function AdsFormSitelink(props) {
  const { id, checkCallback } = props;
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ name, value }));
  };

  return (
    <div key={id}>
    №{id + 1}
    <div className="AdsForm__line AdsForm__sitelinks-headers">
      <div className="AdsForm__sitelinks-header">
        <label className="AdsForm__label" htmlFor={`sitelink_${id}_name`}>
          Заголовок
        </label>
        <div className="AdsForm__subdescription">До 30 символов</div>
      </div>
      <div className="AdsForm__sitelinks-header">
        <label className="AdsForm__label" htmlFor={`sitelink_${id}_descr`}>
          Описание
        </label>
        <div className="AdsForm__subdescription">До 60 символов</div>
      </div>
      <div className="AdsForm__sitelinks-header">
        <label className="AdsForm__label" htmlFor={`sitelink_${id}_link`}>
          Ссылка на сайт
        </label>
        <div className="AdsForm__subdescription">До 1016 символов</div>
      </div>
    </div>
    <div className="AdsForm__line">
      <input
        className={
          checkCallback("sitelink", id, "name")
            ? "AdsForm__input AdsForm__input-sitelinks"
            : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
        }
        name={`sitelink_${id}_name`}
        id={`sitelink_${id}_name`}
        value={form.sitelink[id].name}
        onChange={handleChange}
      />
      <div
        className={
          checkCallback("sitelink", id, "name")
            ? "AdsForm__info AdsForm__info-sitelinks"
            : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
        }
      >
        {form.sitelink[id].name.length}
      </div>
      <input
        className={
          checkCallback("sitelink", id, "descr")
            ? "AdsForm__input AdsForm__input-sitelinks"
            : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
        }
        name={`sitelink_${id}_descr`}
        id={`sitelink_${id}_descr`}
        value={form.sitelink[id].descr}
        onChange={handleChange}
      />
      <div
        className={
          checkCallback("sitelink", id, "descr")
            ? "AdsForm__info AdsForm__info-sitelinks"
            : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
        }
      >
        {form.sitelink[id].descr.length}
      </div>
      <input
        className={
          checkCallback("sitelink", id, "link")
            ? "AdsForm__input AdsForm__input-sitelinks"
            : "AdsForm__input AdsForm__input-sitelinks AdsForm__input-warn"
        }
        name={`sitelink_${id}_link`}
        id={`sitelink_${id}_link`}
        value={form.sitelink[id].link}
        onChange={handleChange}
      />
      <div
        className={
          checkCallback("sitelink", id, "link")
            ? "AdsForm__info AdsForm__info-sitelinks"
            : "AdsForm__info AdsForm__info-sitelinks AdsForm__info-warn"
        }
      >
        {form.sitelink[id].link.length}
      </div>
    </div>
  </div>
  );
}