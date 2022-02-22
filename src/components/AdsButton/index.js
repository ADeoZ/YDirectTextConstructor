import "./AdsButton.css";

export default function AdsButton({ text, callback }) {
  const handleClick = () => {
    callback();
  };

  return (
    <button className="AdsButton" onClick={handleClick}>
      {text}
    </button>
  );
}
