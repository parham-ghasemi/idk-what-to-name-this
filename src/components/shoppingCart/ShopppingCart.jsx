import "./ShopppingCart.scss";
import ShoppingCartTitle from "./components/shoppingCartTitle/ShoppingCartTitle";

const ShopppingCart = () => {
  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-page__shopping-cart-container">
        <ShoppingCartTitle title='سبد خرید' icon={'/icons/shopping-cart-black.svg'} />
      </div>
    </div>
  );
};

export default ShopppingCart;
