import { useSelector, useDispatch } from "react-redux";
import { changeField } from "../../../reducers/adFormSlice";

export default function AdsFormCallout(props) {
  const { id, check } = props;
  const form = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeField({ name, value }));
  };

  return (
    <div>
      <label className="AdsForm__label" htmlFor={`callout_${id}`}>
        №{id + 1}
      </label>
      <div className="AdsForm__subdescription">До 25 символов</div>
      <div className="AdsForm__line">
        <input
          className={check ? "AdsForm__input" : "AdsForm__input AdsForm__input-warn"}
          name={`callout_${id}`}
          id={`callout_${id}`}
          value={form.callout[id]}
          onChange={handleChange}
        />
        <div className={check <= 25 ? "AdsForm__info" : "AdsForm__info AdsForm__info-warn"}>
          {form.callout[id].length}
        </div>
      </div>
    </div>
  );
}
