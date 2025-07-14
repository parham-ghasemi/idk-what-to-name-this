import { useState } from "react";
import "./ShoppingCartItems.scss";

const ShoppingCartItems = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const incrementAmount = (index) => {
    const updatedItems = [...items];
    updatedItems[index].amount += 1;
    setItems(updatedItems);
  };

  const decrementAmount = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].amount > 1) {
      updatedItems[index].amount -= 1;
    } else {
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

  return (
    <div className="shopping-cart-items-container">
      {items.map((item, index) => (
        <div
          className="shopping-cart-items-container__item"
          key={`shopping-item-${index}`}
        >
          <img src={item.img} alt="item-image" />
          <div className="shopping-cart-items-container__item__title-price">
            <p className="shopping-cart-items-container__item__title-price__title">
              {item.name}
            </p>
            <p className="shopping-cart-items-container__item__title-price__title-en">
              {item.nameEn}
            </p>
            <p className="shopping-cart-items-container__item__title-price__price">
              {`${item.price} تومان`}
            </p>
          </div>
          <div className="shopping-cart-items-container__item__amount">
            <img
              src="/icons/Plus.svg"
              alt="Plus"
              onClick={() => incrementAmount(index)}
              style={{ cursor: "pointer" }}
            />
            <p>{item.amount}</p>
            <img
              src="/icons/Trash.svg"
              alt="Trash"
              onClick={() => decrementAmount(index)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartItems;
