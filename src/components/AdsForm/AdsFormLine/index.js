import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { changeField } from "../../../reducers/adFormSlice";

export default function AdsFormLine(props) {
  const { field, check, reg, forbidden } = props;
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name } = event.target;
    const value = name === "showurl" ? event.target.value.replace(" ", "-") : event.target.value;
    dispatch(changeField({ name, value }));
  };

  return (
    <div className="AdsForm__line">
      <input
        className={classNames("AdsForm__input", { "AdsForm__input-warn": !check })}
        name={field}
        id={field}
        value={form[field]}
        onChange={handleChange}
      />
      <div className={classNames("AdsForm__info", { "AdsForm__info-warn": !check })}>
        {reg ? form[field].replace(reg, "").length : form[field].length}
      </div>
      {forbidden && form[field].match(forbidden.reg) ? (
        <div className="AdsForm__input-error">{forbidden.error}</div>
      ) : null}
    </div>
  );
}
