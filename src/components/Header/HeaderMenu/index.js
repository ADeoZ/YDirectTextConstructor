import "./HeaderMenu.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAds } from "../../../reducers/adFormSlice";

export default function HeaderMenu() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAds());
  };

  return (
    <div className="HeaderMenu">
      <Link to="/" onClick={handleReset}>
        Сброс
      </Link>
      <NavLink to="/" className={({ isActive }) => (isActive ? "HeaderMenu__item-active" : undefined)}>
        Редактирование
      </NavLink>
      <NavLink to="/preview" className={({ isActive }) => (isActive ? "HeaderMenu__item-active" : undefined)}>
        Предпросмотр
      </NavLink>
    </div>
  );
}
