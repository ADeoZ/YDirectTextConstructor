import AdsForm from "../AdsForm";
import AdsShow from "../AdsShow";

export default function AdsWrapper(props) {
  const { id } = props;

  return (
    <div className="Constructor__wrapper">
      <div className="Constructor__left_column" />
      <AdsForm adId={id} />
      <div className="Constructor__right_column">        
        <AdsShow adId={id} />
      </div>
    </div>
  );
}