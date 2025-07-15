import "./ShoppingCartTotalPrice.scss";

const ShoppingCartTotalPrice = ({
  buttonText,
  buttonClick,
  disabled,
  disabledText,
  ogPrice,
  discount,
  priceAfterDiscount,
  shippingCost,
}) => {
  return (
    <div className="total-price-container">
      <p className="total-price-container__title">صورت حساب</p>
      <div className="total-price-container__price">
        <p className="total-price-container__price__og-price">
          قیمت محصولات
          <span>{`${ogPrice} تومان`}</span>
        </p>
        {shippingCost ? (
          <p className="total-price-container__price__og-price">
            هزینه ارسال
            <span>{`${shippingCost} تومان`}</span>
          </p>
        ) : (
          ""
        )}
        <p className="total-price-container__price__discount">
          تخفیف
          <span>{`${discount} تومان`}</span>
        </p>
      </div>
      <p className="total-price-container__after-discount">
        جمع سبد خرید
        <span>{`${priceAfterDiscount} تومان`}</span>
      </p>
      <button
        className={`total-price-container__sub-btn ${
          disabled ? "total-price-container__sub-btn--disabled" : ""
        }`}
        onClick={buttonClick}
        disabled={disabled}
      >
        {disabled && disabledText ? disabledText : buttonText}
      </button>
    </div>
  );
};

export default ShoppingCartTotalPrice;
