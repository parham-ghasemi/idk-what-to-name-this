import { useEffect, useState } from "react";
import "./ShopppingCart.scss";
import ShoppingCartTitle from "./components/shoppingCartTitle/ShoppingCartTitle";
import ShoppingCartSteps from "./components/shoppingCartSteps/ShoppingCartSteps";
import ShoppingCartTotalPrice from "./components/shoppingCartTotalPrice/ShoppingCartTotalPrice";
import ShoppingCartItems from "./components/shoppingCartItems/ShoppingCartItems";
import AddressSelection from "./components/addressSelection/AddressSelection";
import TimeSelection from "./components/timeSelection/TimeSelection";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";

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
const addresses = [
  "تهران، قلهک، سیمای جنوبی، ساختمان سیما، طبقه دوم، زنگ سوم",
  "تهران، قلهک، سیمای جنوبی، ساختمان سیما، طبقه دوم، زنگ سوم",
  "تهران، قلهک، سیمای جنوبی، ساختمان سیما، طبقه دوم، زنگ سوم",
];
const times = [
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
  {
    day: "دوشنبه",
    date: "8/04",
    hours: ["ساعت 9 تا 15", "ساعت 15 تا 21"],
  },
];

const ShopppingCart = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [numberOfItems, setNumberOfItems] = useState(0);
  const [priceSum, setPriceSum] = useState(0);
  const [discount, setDiscount] = useState(70000);
  const [shippingCost, setShippingCost] = useState();

  const [changedItems, setChangedItems] = useState(0);

  const [chosenAddress, setChosenAddress] = useState(addresses[1]);
  const [chosenTime, setChosenTime] = useState(
    "دوشنبه 1404/04/08 ساعت 9 تا 15"
  );

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const buttonLabels = ["تکمیل سفارش", "ثبت سفارش", "پرداخت"];
    setButtonText(buttonLabels[currentPage] || "");
    if (currentPage === 2) {
      const shippingCostTst = 7000;
      setShippingCost(shippingCostTst);
      setPriceSum((prev) => prev + shippingCostTst);
    }
  }, [currentPage]);

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
            <div className="shopping-cart-page__shopping-cart-container__body__items__right">
              {currentPage === 0 && (
                <ShoppingCartItems
                  initialItems={items}
                  setNumberOfItems={setNumberOfItems}
                  setChangedItems={setChangedItems}
                  setPriceSum={setPriceSum}
                />
              )}
              {currentPage === 1 && (
                <>
                  <AddressSelection
                    chosenAddress={chosenAddress}
                    setChosenAddress={setChosenAddress}
                    addresses={addresses}
                    openModal={() => {}}
                  />
                  <TimeSelection
                    chosenTime={chosenTime}
                    setChosenTime={setChosenTime}
                    times={times}
                    openModal={() => {}}
                  />
                </>
              )}
              {currentPage === 2 && (
                <PaymentMethod
                  address={chosenAddress}
                  time={chosenTime}
                  numberOfItems={numberOfItems}
                  items={changedItems}
                  priceSum={priceSum}
                />
              )}
            </div>

            <ShoppingCartTotalPrice
              buttonText={buttonText}
              disabled={currentPage === 1 && !chosenAddress && !chosenTime}
              disabledText={currentPage === 1 && "ثبت زمان تحویل"}
              ogPrice={priceSum}
              discount={discount}
              priceAfterDiscount={priceSum - discount}
              shippingCost={shippingCost}
              buttonClick={() =>
                currentPage === 0
                  ? setCurrentPage(1)
                  : currentPage === 1
                  ? setCurrentPage(2)
                  : () => {}
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopppingCart;
