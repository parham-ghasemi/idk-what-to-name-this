import { useState } from "react";
import "./ShopppingCart.scss";
import ShoppingCartTitle from "./components/shoppingCartTitle/ShoppingCartTitle";
import ShoppingCartSteps from "./components/shoppingCartSteps/ShoppingCartSteps";
import ShoppingCartTotalPrice from "./components/shoppingCartTotalPrice/ShoppingCartTotalPrice";
import ShoppingCartItems from "./components/shoppingCartItems/ShoppingCartItems";

const items = [
  {
    name: "بالشت طبی مدل کربن",
    nameEn: "Orthopedic Pillow",
    price: "1,200,000",
    img: "/images/pillow.png",
    amount: 1,
  },
  {
    name: "بالشت طبی مدل کربن",
    nameEn: "Orthopedic Pillow",
    price: "1,200,000",
    img: "/images/pillow.png",
    amount: 1,
  },
  {
    name: "بالشت طبی مدل کربن",
    nameEn: "Orthopedic Pillow",
    price: "1,200,000",
    img: "/images/pillow.png",
    amount: 1,
  },
  {
    name: "بالشت طبی مدل کربن",
    nameEn: "Orthopedic Pillow",
    price: "1,200,000",
    img: "/images/pillow.png",
    amount: 1,
  },
];

const ShopppingCart = () => {
  const [currentPage, setCurrentPage] = useState(0);

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
          <div className="shopping-cart-page__shopping-cart-container__body__items">
            <ShoppingCartItems initialItems={items} />

            <ShoppingCartTotalPrice
              buttonText="تکمیل سفارش"
              buttonClick={() => setCurrentPage(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopppingCart;
