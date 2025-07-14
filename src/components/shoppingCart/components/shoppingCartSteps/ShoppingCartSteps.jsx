import "./ShoppingCartSteps.scss";

const steps = [
  {
    label: "سبد خرید",
    iconPast: "/icons/shopping-cart-past.svg",
    iconCurrent: "/icons/shopping-cart-current.svg",
  },
  {
    label: "اطلاعات ارسال",
    iconFuture: "/icons/truck-fast-future.svg",
    iconCurrent: "/icons/truck-fast-current.svg",
    iconPast: "/icons/truck-fast-past.svg",
  },
  {
    label: "سبد خرید",
    iconFuture: "/icons/wallet-check(deactive).svg",
    iconCurrent: "/icons/wallet-check(current).svg",
  },
];

const ShoppingCartSteps = ({ currentPage }) => {
  return (
    <div className="shopping-cart-steps-container">
      <div className="shopping-cart-steps-container__steps">
        {steps.map((step, index) => (
          <div
            className={`shopping-cart-steps-container__steps__step ${
              index < currentPage &&
              "shopping-cart-steps-container__steps__step--past"
            } ${
              index === currentPage &&
              "shopping-cart-steps-container__steps__step--current"
            } ${
              index > currentPage &&
              "shopping-cart-steps-container__steps__step--future"
            }`}
          >
            <div
              className={`shopping-cart-steps-container__steps__step__circle ${
                index < currentPage &&
                "shopping-cart-steps-container__steps__step__circle--past"
              } ${
                index === currentPage &&
                "shopping-cart-steps-container__steps__step__circle--current"
              } ${
                index > currentPage &&
                "shopping-cart-steps-container__steps__step__circle--future"
              }`}
            >
              {index < currentPage && <img src={step.iconPast} alt="" />}
              {index === currentPage && <img src={step.iconCurrent} alt="" />}
              {index > currentPage && <img src={step.iconFuture} alt="" />}
            </div>
            <p>{step.label}</p>
          </div>
        ))}
        {/* <div className="shopping-cart-steps-container__steps__sep"></div> */}
      </div>
    </div>
  );
};

export default ShoppingCartSteps;
