import "./Constructor.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmptyAd } from "../reducers/adFormSlice";
import AdsWrapper from "./AdsWrapper";

export default function Constructor() {
  const ads = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addEmptyAd());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addEmptyAd());
  }

  return (
    <main className="Constructor">
      {ads.map((_, index) =>
        <AdsWrapper id={index} key={index} />
      )}
      <button
        className="Constructor__button"
        onClick={handleClick}
      >
        Добавить объявление
      </button>
    </main>
  );
}
