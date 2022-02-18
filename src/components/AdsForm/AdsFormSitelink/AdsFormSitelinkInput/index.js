import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../../../reducers/adFormSlice";
import { useCheckVal } from "../../../customHooks/useCheckVal";
import { FIELDS_PARAMS } from '../../../fieldsParams';

export default function AdsFormSitelinkInput(props) {
  const { adId, id, checkSum, forbidden, field } = props;
  const form = useSelector((state) => state.adForm[adId]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ adId, name, value }));
  };

  const check = useCheckVal(form.sitelink[id][field], FIELDS_PARAMS.sitelink[field]);

  return (
    <div className="AdsForm__sitelinks-wrap">
      <input
        className={classNames("AdsForm__input", "AdsForm__input-sitelinks", {
          "AdsForm__input-warn": !check || !checkSum,
        })}
        name={`sitelink_${id}_${field}`}
        id={`sitelink_${id}_${field}`}
        value={form.sitelink[id][field]}
        onChange={handleChange}
      />
      <div
        className={classNames("AdsForm__info", "AdsForm__info-sitelinks", {
          "AdsForm__info-warn": !check,
        })}
      >
        {form.sitelink[id][field].length}
      </div>
      {forbidden[field] && form.sitelink[id][field].match(forbidden[field].reg) ? (
        <div className="AdsForm__input-error AdsForm__sitelinks__input-error">{forbidden[field].error}</div>
      ) : null}
    </div>
  );
}
