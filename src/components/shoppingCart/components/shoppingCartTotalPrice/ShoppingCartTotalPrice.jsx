import "./ShoppingCartTotalPrice.scss";

const price = {
  ogPrice: "1,200,000",
  discount: "70,000",
  PriceAfterDiscount: "1,130,000",
  numberOfItems: 3,
};

const ShoppingCartTotalPrice = ({ buttonText, buttonClick }) => {
  return (
    <div className="total-price-container">
      <p className="total-price-container__title">صورت حساب</p>
      <div className="total-price-container__price">
        <p className="total-price-container__price__og-price">
          قیمت محصولات
          <span>{`${price.ogPrice} تومان`}</span>
        </p>
        <p className="total-price-container__price__discount">
          تخفیف
          <span>{`${price.discount} تومان`}</span>
        </p>
      </div>
      <p className="total-price-container__after-discount">
        جمع سبد خرید
        <span>{`${price.PriceAfterDiscount} تومان`}</span>
      </p>
      <button className="total-price-container__sub-btn" onClick={buttonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ShoppingCartTotalPrice;
