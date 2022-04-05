import "./AdsPreview.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdsShow from "../AdsShow";
import { getAds } from "../../reducers/adFormSlice";

export default function AdsPreview() {
  const ads = useSelector((state) => state.adForm);
  const dispatch = useDispatch();
  let params = useParams();

  // создаём первичное пустое объявление
  useEffect(() => {
    if (params.link) {
      dispatch(getAds(params.link));
    }
  }, [params.link, dispatch]);

  return (
    <main className="AdsPreview">
      {ads.map((_, index) => (
        <AdsShow adId={index} controls={false} key={index} />
      ))}
    </main>
  );
}
