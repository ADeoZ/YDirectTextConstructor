import classNames from "classnames";
import "./AdsButton.css";

export default function AdsButton({ text, callback, simple = false }) {
  const handleClick = () => {
    callback();
  };

  return (
    <button className={classNames("AdsButton", { "AdsButton-simple": simple })} onClick={handleClick}>
      {text}
    </button>
  );
}
