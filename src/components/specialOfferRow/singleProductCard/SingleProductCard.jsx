import "./SingleProductCard.scss";

const SingleProductCard = ({data}) => {
  return (
    <div className="single-product-card">
      <div className="single-product-card__content">
        <div className="single-product-card__content__left">
          <img src={data.image} alt="" />
        </div>
        <div className="single-product-card__content__right">
          <h2 className="single-product-card__title">{data.name}</h2>
          <p className="single-product-card__content__right__description">
            {data.description}
          </p>
          <button className="single-product-card__content__right__button">
            <img src="./icons/shopping-cart.svg" alt="shopping-cart" />
            خرید محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
