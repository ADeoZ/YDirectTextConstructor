import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../../../reducers/adFormSlice";


export default function AdsFormSitelinkInput(props) {
  const { id, checkCallback, field } = props;
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ name, value }));
  };

  return (
    <div className="AdsForm__sitelinks-wrap">
      <input
        className={classNames("AdsForm__input", "AdsForm__input-sitelinks", {
          "AdsForm__input-warn": !checkCallback("sitelink", id, field),
        })}
        name={`sitelink_${id}_${field}`}
        id={`sitelink_${id}_${field}`}
        value={form.sitelink[id][field]}
        onChange={handleChange}
      />
      <div
        className={classNames("AdsForm__info", "AdsForm__info-sitelinks", {
          "AdsForm__info-warn": !checkCallback("sitelink", id, field),
        })}
      >
        {form.sitelink[id][field].length}
      </div>
    </div>
  );
}
