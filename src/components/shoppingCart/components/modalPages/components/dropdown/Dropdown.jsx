import { useEffect, useRef, useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ title, items, setCity, initValue = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initValue);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (item) => {
    setSelected(item);
    setCity(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (initValue) {
      setSelected(initValue);
      setCity(initValue);
    }
  }, [initValue, setCity]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="modal-dropdown-container" ref={dropdownRef}>
      <label
        className={`modal-dropdown-container__label ${
          selected ? "modal-dropdown-container__label--selected" : ""
        }`}
      >
        {title}
      </label>
      <div
        className={`modal-dropdown-container__button ${
          selected ? "modal-dropdown-container__button--selected" : ""
        }`}
        onClick={toggleDropdown}
      >
        <span className="modal-dropdown-container__button__selected">
          {selected || title}
        </span>
        <img
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          className={`modal-dropdown-container__button__arrow ${
            isOpen ? "modal-dropdown-container__button__arrow--open" : ""
          }`}
        />
      </div>
      <div
        className={`modal-dropdown-container__list${
          isOpen ? " modal-dropdown-container__list--open" : ""
        }`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="modal-dropdown-container__list__item"
            onClick={() => handleSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
