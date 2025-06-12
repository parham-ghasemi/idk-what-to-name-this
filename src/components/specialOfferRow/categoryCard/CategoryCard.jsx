import "./CategoryCard.scss";


const CategoryCard = ({data}) => {
  return (
    <div className="category-card">
      <div className="category-card__top">
        <div className="category-card__top__text">
          <p className="category-card__top__text__title">
            {data.title}
          </p>
          <p className="category-card__top__text__description">
            {data.description}
          </p>
        </div>
        <button className="category-card__top__button">مشاهده محصولات</button>
      </div>
      <div className="category-card__bottom">
        <div className="category-card__bottom__image-container1">
          <img
            src={data.image1}
            alt=""
            className="category-card__bottom__image-container1__img"
          />
        </div>
        <div className="category-card__bottom__image-container2">
          <img
            src={data.image2}
            alt=""
            className="category-card__bottom__image-container2__img"
          />
        </div>
        <div className="category-card__bottom__image-container3">
          <img
            src={data.image3}
            alt=""
            className="category-card__bottom__image-container3__img"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
