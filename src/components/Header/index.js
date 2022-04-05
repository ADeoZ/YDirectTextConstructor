import "./Header.css";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="header">
      <h1>Предпросмотр объявлений Яндекс.Директ</h1>
      <HeaderMenu />
    </header>
  );
}
