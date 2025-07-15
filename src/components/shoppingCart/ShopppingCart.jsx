import { useEffect, useState } from "react";
import "./ShopppingCart.scss";
import ShoppingCartTitle from "./components/shoppingCartTitle/ShoppingCartTitle";
import ShoppingCartSteps from "./components/shoppingCartSteps/ShoppingCartSteps";
import ShoppingCartTotalPrice from "./components/shoppingCartTotalPrice/ShoppingCartTotalPrice";
import ShoppingCartItems from "./components/shoppingCartItems/ShoppingCartItems";
import AddressSelection from "./components/addressSelection/AddressSelection";
import TimeSelection from "./components/timeSelection/TimeSelection";
import PaymentMethod from "./components/paymentMethod/PaymentMethod";
import AddressSelectionModal from "./components/modalPages/addressSelectionModal/AddressSelectionModal";
import { useModal } from "../../context/messanger";
import { items, addresses, times } from "./data";
import { Modal } from "../prescriptionModal/components/modal/Modal";

const ShopppingCart = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [numberOfItems, setNumberOfItems] = useState(0);
  const [priceSum, setPriceSum] = useState(0);
  const [discount, setDiscount] = useState(70000);
  const [shippingCost, setShippingCost] = useState();

  const [changedItems, setChangedItems] = useState(0);

  const [chosenAddress, setChosenAddress] = useState();
  const [chosenTime, setChosenTime] = useState();

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

  const { openModal } = useModal();

  return (
    <>
      <Modal />
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
                      openModal={() =>
                        openModal(
                          <AddressSelectionModal
                            setAddress={setChosenAddress}
                          />
                        )
                      }
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
                disabled={currentPage === 1 && (!chosenAddress || !chosenTime)}
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
    </>
  );
};

export default ShopppingCart;
