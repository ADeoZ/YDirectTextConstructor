import "./AdsControls.css";
import { useDispatch, useSelector } from "react-redux";
import AdsButton from "../AdsButton";
import { addEmptyAd, copyLastAd } from "../../reducers/adFormSlice";

export default function AdsControls() {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.adForm);

  return (
    <div className="AdsControls">
      <AdsButton text="Добавить объявление" callback={() => dispatch(addEmptyAd())} />
      {ads.length > 0 && (
        <AdsButton text="Дублировать предыдущее" callback={() => dispatch(copyLastAd())} simple />
      )}
    </div>
  );
}
