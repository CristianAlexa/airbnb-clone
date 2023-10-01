import Card from "../Card/Card";
import "./Content.css";
import data from "../../assets/data/data";

export default function Content() {
  const cards = data.map((item) => <Card {...item} key={item.id} />);
  return (
    <section>
      <div className="content">{cards}</div>
    </section>
  );
}
