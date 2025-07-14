import { useState } from "react";
import "./ShopppingCart.scss";
import ShoppingCartTitle from "./components/shoppingCartTitle/ShoppingCartTitle";
import ShoppingCartSteps from "./components/stepsIndicator/ShoppingCartSteps";

const ShopppingCart = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-page__shopping-cart-container">
        <ShoppingCartTitle
          title="سبد خرید"
          icon={"/icons/shopping-cart-black.svg"}
        />

        <div className="shopping-cart-page__shopping-cart-container__body">
          <ShoppingCartSteps
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopppingCart;
