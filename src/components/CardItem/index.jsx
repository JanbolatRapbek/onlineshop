import pizzaPic from "../../assets/img/1.jpg";
import "./CardItem.scss";

const CardItem = () => {
  return (
    <div className="card">
      <img alt="pizza" src={pizzaPic}></img>
      <h2>Чизбургер-пицца</h2>
      <div className="pizza-block__selector">
        <ul>
          <li style={{ width: 132, height: 18 }}>тонкое</li>
          <li>традиционное</li>
        </ul>

        <ul>
          <li>26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
