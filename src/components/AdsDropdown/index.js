import "./AdsDropdown.css";
import { useState, useRef } from "react";
import classNames from "classnames/bind";

export default function AdsDropdown({ text }) {
  const [selected, setSelected] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setSelected(!selected);
    console.log(ref.current.getBoundingClientRect());
  };

  return (
    <div className="AdsDropdown">
      <button
        className={classNames("AdsDropdown__button", { "AdsDropdown__button--selected": selected })}
        onClick={handleClick}
        ref={ref}
      >
        {text}
      </button>  
      {selected &&    
      <ul className="AdsDropdown__list">
        <li className="AdsDropdown__list-item">Скопировать как текст</li>
        <li className="AdsDropdown__list-item">Сохранить в виде ссылки</li>
        <li className="AdsDropdown__list-item">Скачать в csv-формате</li>
      </ul>
      }
    </div>
  );
}
