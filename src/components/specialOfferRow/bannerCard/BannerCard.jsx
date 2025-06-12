import "./BannerCard.scss";

const BannerCard = () => {
  return (
    <div className="banner-card">
      <img src="/images/product card.png"  className="banner-card__bg"/>

      <div className="banner-card__content">
        <p className="banner-card__title">!سوپرآفر سلامت شروع شد</p>
        <div className="banner-card__desc">
          <p className="banner-card__desc__p">
            {" "}
            تا 35٪ تخفیف روی پرفروش‌ترین محصولات
          </p>
          <p className="banner-card__desc__p">!همین حالا استفاده کن</p>
        </div>
      </div>

      <img
        src="/images/discount 1.png"
        alt="discount"
        className="banner-card__icon"
      />
    </div>
  );
};

export default BannerCard;
