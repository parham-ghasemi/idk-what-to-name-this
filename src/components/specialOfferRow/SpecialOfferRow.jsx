import SingleProductCard from "./singleProductCard/SingleProductCard";
import "./SpecialOfferRow.scss";
import { categoryData, singleProduct } from "./data";
import BannerCard from "./BannerCard/BannerCard";
import CategoryCard from "./categoryCard/CategoryCard";
const SpecialOfferRow = () => {
  return (
    <div className="special-offer-row-container">
      <div className="special-offer-row-container__top-row">
        <div className="special-offer-row-container__top-row__more">
          <img src="/icons/3dots.svg" alt="" />
        </div>

        <div className="special-offer-row-container__top-row__title">
          تخفیفات ویزه
          <img src="/icons/Polygon 3 (red).svg" alt="" />
        </div>
      </div>
      <div className="special-offer-row-container__content">
        <div className="special-offer-row-container__content__right">
          <div className="special-offer-row-container__content__right__top">
            <div className="special-offer-row-container__content__right__top__image">
              <img src="/images/price-tag (1) 1.png" />
              <p className="special-offer-row-container__content__right__top__image__top-text">
                تخفیف ویژه
              </p>
              <p className="special-offer-row-container__content__right__top__image__bottom-text">
                %تا 35
              </p>
            </div>

            {singleProduct.map((product, index) => (
              <SingleProductCard key={index} data={product} />
            ))}
          </div>

          <div className="special-offer-row-container__content__right__bottom">
            <BannerCard />
          </div>
        </div>

        <div className="special-offer-row-container__content__right__left">
          <CategoryCard data={categoryData} />
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferRow;
