import "./Constructor.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmptyAd } from "../../reducers/adFormSlice";
import AdsWrapper from "../AdsWrapper";
import AdsControls from "../AdsControls";

export default function Constructor() {
  const ads = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  // создаём первичное пустое объявление
  useEffect(() => {
    if (!ads.length) {
      dispatch(addEmptyAd());
    }
  }, [ads.length, dispatch]);

  return (
    <main className="AdsConstructor">
      {ads.map((_, index) => (
        <AdsWrapper id={index} key={index} />
      ))}
      <AdsControls />
    </main>
  );
}
