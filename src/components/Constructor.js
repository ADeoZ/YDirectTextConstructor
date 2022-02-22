import "./Constructor.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmptyAd } from "../reducers/adFormSlice";
import AdsWrapper from "./AdsWrapper";
import AdsButton from "./AdsButton";

export default function Constructor() {
  const ads = useSelector((state) => state.adForm);
  const dispatch = useDispatch();

  // создаём первичное пустое объявление
  useEffect(() => {
    dispatch(addEmptyAd());
  }, [dispatch]);

  return (
    <main className="Constructor">
      {ads.map((_, index) =>
        <AdsWrapper id={index} key={index} />
      )}
      <AdsButton
        text="Добавить объявление"
        callback={() => dispatch(addEmptyAd())}
      />
    </main>
  );
}
