// import { useState } from "react";
// import "./Dropdown.scss";

// const Dropdown = ({ label, items = [], onSelect, multi = false }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleSelect = (item) => {
//     if (multi) {
//       let newSelectedItems;
//       if (selectedItems.includes(item)) {
//         newSelectedItems = selectedItems.filter((i) => i !== item);
//       } else {
//         newSelectedItems = [...selectedItems, item];
//       }
//       setSelectedItems(newSelectedItems);
//       if (onSelect) onSelect(newSelectedItems);
//     } else {
//       setSelectedItems([item]);
//       setIsOpen(false);
//       if (onSelect) onSelect(item);
//     }
//   };

//   const displayLabel = () => {
//     if (!selectedItems.length) return label;
//     return multi ? selectedItems.join(", ") : selectedItems[0];
//   };

//   return (
//     <div className={`dropdown ${isOpen ? "open" : ""}`}>
//       <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
//         <span className="dropdown__header__label">{displayLabel()}</span>
//         <img
//           src="/icons/chevron-down.svg"
//           alt="arrow"
//           className={`dropdown__icon ${isOpen ? "rotate" : ""}`}
//         />
//       </div>

//       <ul className={`dropdown__list ${isOpen ? "open" : ""}`}>
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className={`dropdown__item ${
//               selectedItems.includes(item) ? "selected" : ""
//             }`}
//             onClick={() => handleSelect(item)}
//           >
//             {item}
//             {multi && (
//               <input
//                 type="checkbox"
//                 className="dropdown__check"
//                 checked={selectedItems.includes(item)}
//                 readOnly
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;

import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ label, items = [], onSelect, multi = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const getItemLabel = (item) => (typeof item === "string" ? item : item.label);
  const getItemImage = (item) => (typeof item === "string" ? null : item.image);

  const handleSelect = (item) => {
    const label = getItemLabel(item);

    if (multi) {
      let newSelectedItems;
      if (selectedItems.some((i) => getItemLabel(i) === label)) {
        newSelectedItems = selectedItems.filter((i) => getItemLabel(i) !== label);
      } else {
        newSelectedItems = [...selectedItems, item];
      }
      setSelectedItems(newSelectedItems);
      if (onSelect) onSelect(newSelectedItems);
    } else {
      setSelectedItems([item]);
      setIsOpen(false);
      if (onSelect) onSelect(item);
    }
  };

  const isSelected = (item) =>
    selectedItems.some((i) => getItemLabel(i) === getItemLabel(item));

  const displayLabel = () => {
    if (!selectedItems.length) return label;
    return multi
      ? selectedItems.map((item) => getItemLabel(item)).join(", ")
      : getItemLabel(selectedItems[0]);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown__header__label">{displayLabel()}</span>
        <img
          src="/icons/chevron-down.svg"
          alt="arrow"
          className={`dropdown__icon ${isOpen ? "rotate" : ""}`}
        />
      </div>

      <ul className={`dropdown__list ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => {
          const itemLabel = getItemLabel(item);
          const itemImage = getItemImage(item);
          return (
            <li
              key={index}
              className={`dropdown__item ${isSelected(item) ? "selected" : ""}`}
              onClick={() => handleSelect(item)}
            >
              <div className="dropdown__item__content">
                {itemImage && (
                  <img
                    src={itemImage}
                    alt=""
                    className="dropdown__item__image"
                  />
                )}
                <span className="dropdown__item__label">{itemLabel}</span>
              </div>
              {multi && (
                <input
                  type="checkbox"
                  className="dropdown__check"
                  checked={isSelected(item)}
                  readOnly
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
