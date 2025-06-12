import "./Card.scss";

const Card = ({data}) =>{

  return (
    <div className="card">
      <div className="card__img">
        <img src={data.imageURL} alt="" />
      </div>

      <div className="card__body">
        <h2 className="card__body__title">{data.title}</h2>
        <h2 className="card__body__translated-title">
          {data.translatedTitle}
        </h2>
        <p className="card__body__price">
          <span className="card__body__price__currency">تومان</span>
          {data.price}
          </p>
        <button className="card__body__button">
          {data.needsPrescription 
          ? <img src="./icons/document-upload.svg" alt="document-upload" />
          : <img src="./icons/shopping-cart.svg" alt="shopping-cart" />
          }
          {data.needsPrescription ? "آپلود نسخه" : "خرید محصول"}
        </button>
      </div>
    </div>
  );
};

export default Card;
