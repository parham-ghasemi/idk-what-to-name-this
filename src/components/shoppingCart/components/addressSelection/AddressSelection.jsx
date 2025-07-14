import "./AddressSelection.scss";

const AddressSelection = ({
  chosenAddress,
  setChosenAddress,
  addresses,
  openModal,
}) => {
  return (
    <div className="address-selection-container">
      <p className="address-selection-container__title">
        <img src="/icons/location-2-blue.svg" alt="location blue" />
        انتخاب آدرس
      </p>
      <div className="address-selection-container__card">
        <p className="address-selection-container__card__title">آدرس تحویل</p>
        <p className="address-selection-container__card__address">
          {chosenAddress ? chosenAddress : "آدرس انتخاب نشده است."}
        </p>
        <p
          className="address-selection-container__card__change-address"
          onClick={openModal}
        >
          تغییر آدرس
          <img src="/icons/arrow-left-blue.svg" alt="arrow-left-blue" />
        </p>
      </div>
    </div>
  );
};

export default AddressSelection;
