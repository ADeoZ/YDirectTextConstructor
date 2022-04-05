import AdsForm from "../AdsForm";
import AdsShow from "../AdsShow";
import './AdsWrapper.css';

export default function AdsWrapper(props) {
  const { id } = props;

  return (
    <div className="AdsWrapper">
      <div className="AdsWrapper__left_column" />
      <AdsForm adId={id} />
      <div className="AdsWrapper__right_column">        
        <AdsShow adId={id} className="AdsShow-scticky"/>
      </div>
    </div>
  );
}