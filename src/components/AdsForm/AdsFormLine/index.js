import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { changeField } from "../../../reducers/adFormSlice";

export default function AdsFormLine(props) {
  const { field, check, reg } = props;
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
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
    </div>
  );
}
