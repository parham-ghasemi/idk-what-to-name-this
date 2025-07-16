import ModalHeader from "../components/modalHeader/ModalHeader";
import "./AddressSelectionModal.scss";
import { addresses } from "../../../data";
import { useState } from "react";
import NewAddressModal from "../newAddressModal/NewAddressModal";
import { useModal } from "../../../../../context/messanger";

const AddressSelectionModal = ({ setAddress }) => {
  const [onNewAddress, setOnNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  const { closeModal } = useModal();

  const handleSelect = (address) => {
    setAddress(address);
    closeModal();
  };

  const handleEdit = (address) => {
    setEditAddress(address);
    setOnNewAddress(true);
  };

  return (
    <>
      {onNewAddress ? (
        <NewAddressModal
          setOnNewAddress={setOnNewAddress}
          initCity={editAddress?.city}
          initAddress={editAddress?.address}
          initPostalCode={editAddress?.postalCode}
          initPelak={editAddress?.pelak}
          initVahed={editAddress?.vahed}
        />
      ) : (
        <div className="address-selection-modal">
          <ModalHeader title="آدرس‌های ثبت شده" />
          <div className="address-selection-modal__addresses-container">
            {addresses.map((address, index) => (
              <div
                className="address-selection-modal__addresses-container__address-item"
                key={index}
              >
                <input
                  type="radio"
                  id={`address-${index}`}
                  name="address"
                  onChange={() => handleSelect(address)}
                />
                <label htmlFor={`address-${index}`}>
                  {`${address.city}، ${address.address}، پلاک ${address.pelak}، واحد ${address.vahed}`}
                </label>
                <button
                  className="address-selection-modal__addresses-container__address-item__edit"
                  onClick={() => handleEdit(address)}
                >
                  <img src="/icons/edit.svg" alt="edit" />
                </button>
              </div>
            ))}
          </div>
          <button
            className="address-selection-modal__add-new"
            onClick={() => {
              setEditAddress(null);
              setOnNewAddress(true);
            }}
          >
            <img src="/icons/add.svg" alt="add" />
            ثبت آدرس جدید
          </button>
        </div>
      )}
    </>
  );
};

export default AddressSelectionModal;
