import "./Constructor.css";
import AdsForm from "./AdsForm";
import AdsShow from "./AdsShow";

export default function Constructor() {
  return (
    <main className="Constructor">
      <div className="Constructor__left_column" />
      <AdsForm />
      <div className="Constructor__right_column">
        <AdsShow />
      </div>
    </main>
  );
}
