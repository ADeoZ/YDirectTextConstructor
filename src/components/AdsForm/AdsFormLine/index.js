import { useSelector, useDispatch } from "react-redux";
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
        className={check ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
        name={field}
        id={field}
        value={form[field]}
        onChange={handleChange}
      />
      <div className={check ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
        {reg ? form[field].replace(reg, "").length : form[field].length}
      </div>
    </div>
  );
}
