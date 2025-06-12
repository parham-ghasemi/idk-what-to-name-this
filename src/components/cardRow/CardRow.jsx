import Card from "./card/Card";
import cardData from "./data";
import "./CardRow.scss";

const CardRow = ({ title }) => {
  return (
    <div className="card-row-container">
      <div className="card-row-container__top-row">
        <div className="card-row-container__top-row__more">
          <img src="/icons/3dots.svg" alt="" />
        </div>

        <div className="card-row-container__top-row__title">
          {title}
          <img src="/icons/Polygon 3.svg" alt="" />
        </div>
      </div>
      <div className="card-row-container__card-row">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default CardRow;
