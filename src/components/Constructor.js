import "./Constructor.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addEmptyAd, getAds } from "../reducers/adFormSlice";
import AdsWrapper from "./AdsWrapper";
import AdsButton from "./AdsButton";

export default function Constructor() {
  const ads = useSelector((state) => state.adForm);
  const dispatch = useDispatch();
  let params = useParams();

  // создаём первичное пустое объявление
  useEffect(() => {
    if (params.link) {
      dispatch(getAds(params.link));      
    } else {
      dispatch(addEmptyAd());
    }
  }, [params.link, dispatch]);

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
