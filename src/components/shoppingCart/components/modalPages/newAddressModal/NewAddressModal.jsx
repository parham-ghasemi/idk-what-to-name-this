import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Dropdown from "../components/dropdown/Dropdown";
import ModalHeader from "../components/modalHeader/ModalHeader";
import "./NewAddressModal.scss";
import { useModal } from "../../../../../context/messanger";

const NewAddressModal = ({
  setOnNewAddress,
  initCity = undefined,
  initAddress = "",
  initPostalCode = "",
  initPelak = "",
  initVahed = "",
}) => {
  const [city, setCity] = useState(initCity);
  const [address, setAddress] = useState(initAddress);
  const [postalCode, setPostalCode] = useState(initPostalCode);
  const [pelak, setPelak] = useState(initPelak);
  const [vahed, setVahed] = useState(initVahed);

  return (
    <div className="new-address-modal">
      <ModalHeader title="آدرس" blackTitle />
      <Dropdown
        title="شهر"
        items={["تهران", "اصفهان", "شیراز", "مشهد"]}
        setCity={setCity}
        initValue={city}
      />
      <div
        className={`new-address-modal__address-container ${
          address.trim() ? "new-address-modal__address-container--written" : ""
        }`}
      >
        <p className="new-address-modal__address-container__label">آدرس</p>
        <textarea
          name="address-input"
          id="address-input"
          className="new-address-modal__address-container__input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="new-address-modal__address-details">
        <div className="new-address-modal__address-details__container">
          <span
            className={`new-address-modal__address-details__container__label ${
              postalCode.trim()
                ? "new-address-modal__address-details__container__label--written"
                : ""
            }`}
          >
            کدپستی
          </span>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className={`new-address-modal__address-details__container__input ${
              postalCode.trim()
                ? "new-address-modal__address-details__container__input--written"
                : ""
            }`}
          />
        </div>
        <div className="new-address-modal__address-details__container">
          <span
            className={`new-address-modal__address-details__container__label ${
              pelak.trim()
                ? "new-address-modal__address-details__container__label--written"
                : ""
            }`}
          >
            پلاک
          </span>
          <input
            type="text"
            value={pelak}
            onChange={(e) => setPelak(e.target.value)}
            className={`new-address-modal__address-details__container__input ${
              pelak.trim()
                ? "new-address-modal__address-details__container__input--written"
                : ""
            }`}
          />
        </div>
        <div className="new-address-modal__address-details__container">
          <span
            className={`new-address-modal__address-details__container__label ${
              vahed.trim()
                ? "new-address-modal__address-details__container__label--written"
                : ""
            }`}
          >
            واحد
          </span>
          <input
            type="text"
            value={vahed}
            onChange={(e) => setVahed(e.target.value)}
            className={`new-address-modal__address-details__container__input ${
              vahed.trim()
                ? "new-address-modal__address-details__container__input--written"
                : ""
            }`}
          />
        </div>
      </div>

      <div className="new-address-modal__map">
        <MapContainer
          center={[35.6892, 51.389]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "300px", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>

      <button
        className="new-address-modal__button"
        onClick={() => setOnNewAddress(false)}
      >
        ثبت آدرس
      </button>
    </div>
  );
};

export default NewAddressModal;
