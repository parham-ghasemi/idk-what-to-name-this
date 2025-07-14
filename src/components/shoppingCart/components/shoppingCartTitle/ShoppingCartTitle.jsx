import "./ShoppingCartTitle.scss";

const ShoppingCartTitle = ({ icon, title }) => {
  return (
    <div className="shopping-cart-title-container">
      <img src={icon} alt="title-icon" />
      <p>{title}</p>
    </div>
  );
};

export default ShoppingCartTitle;
