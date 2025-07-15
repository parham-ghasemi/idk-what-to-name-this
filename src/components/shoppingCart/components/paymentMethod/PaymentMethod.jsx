import "./PaymentMethod.scss";

const PaymentMethod = ({ address, time, numberOfItems, items, priceSum }) => {
  return (
    <div className="payment-method-container">
      <p className="payment-method-container__title">
        <img src="/icons/card.svg" alt="card" />
        انتخاب روش پرداخت
      </p>
      <div className="payment-method-container__card">
        <div className="payment-method-container__card__online-payment">
          <p className="payment-method-container__card__online-payment__title">
            <img src="/icons/circle.svg" alt="circle" />
            پرداخت اینترنتی
          </p>
          <p className="payment-method-container__card__online-payment__desc">
            پرداخت آنلاین با تمام کارت‌های بانکی عضو شتاب
          </p>
        </div>
      </div>

      <p className="payment-method-container__title">
        <img src="/icons/percentage-square.svg" alt="card" />
        انتخاب روش پرداخت
      </p>
      <div className="payment-method-container__card">
        <div className="payment-method-container__card__discount">
          <div className="payment-method-container__card__discount__input-container">
            <label htmlFor="discount-input">کد تخفیف</label>
            <input
              type="text"
              id="discount-input"
              placeholder="کد تخفیف خود را وراد کنید"
            />
          </div>

          <button className="payment-method-container__card__discount__button">
            اعمال کد تخفیف
          </button>
        </div>
      </div>

      <p className="payment-method-container__title">
        <img src="/icons/receipt-text-blue-24.svg" alt="card" />
        انتخاب روش پرداخت
      </p>
      <div className="payment-method-container__card">
        <div className="payment-method-container__card__summary">
          <div className="payment-method-container__card__summary__address-date">
            <img src="/icons/truck-fast-current.svg" alt="truck-fast" />
            <div className="payment-method-container__card__summary__address-date__text">
              <p className="payment-method-container__card__summary__address-date__text__date">
                {`${time.date} ${time.day} ${time.selectedHour}`}
              </p>
              <p className="payment-method-container__card__summary__address-date__text__address">
                {`آدرس: ${address}`}
              </p>
            </div>
          </div>
          <div className="payment-method-container__card__summary__number-of-items">
            <p>{`تعداد محصولات: ${numberOfItems}`}</p>
          </div>
          <div className="payment-method-container__card__summary__items-container">
            {items
              ? items.map((item, index) => (
                  <div
                    className="payment-method-container__card__summary__items-container__item"
                    key={`item-index-${index}`}
                  >
                    <img src={item.img} alt="item.name" />
                  </div>
                ))
              : ""}
          </div>
          <div className="payment-method-container__card__summary__price-sum">
            <p>{`جمع سبد خرید: ${priceSum} تومان`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
