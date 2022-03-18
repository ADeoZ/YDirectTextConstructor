import "./AdsDropdown.css";
import { useState } from "react";
import classNames from "classnames/bind";

export default function AdsDropdown({ text, selectList }) {
  const [selected, setSelected] = useState(false);
  const [status, setStatus] = useState(null);

  // потеря фокуса (срабатывает при клике и при переключении через tab)
  const handleBlur = () => {
    setSelected(false);
  }

  const handleClick = () => {
    setSelected(!selected);
  }

  const handleItemClick = (callback, success) => {
    callback().then((result) => setStatus(result));
    setTimeout(() => setStatus(null), 3000);
  }

  return (
    <div
      className="AdsDropdown"
      onBlur={handleBlur}
    >
      <button
        className={classNames("AdsDropdown__button",
          {
            "AdsDropdown__button--selected": selected,
            "AdsDropdown__button--status": status,
            "AdsDropdown__button--status-error": status && status.status === "error",
          })}
        onClick={handleClick}
      >
        {status ? status.message : text}
      </button>
      {selected &&
        <ul className="AdsDropdown__list">
          {selectList.map((item, index) =>
            <li
              className="AdsDropdown__list-item"
              onMouseDown={() => handleItemClick(item.callback, item.success)}
              key={index}
            >
              {item.text}
            </li>
          )}
        </ul>
      }
    </div>
  );
}
