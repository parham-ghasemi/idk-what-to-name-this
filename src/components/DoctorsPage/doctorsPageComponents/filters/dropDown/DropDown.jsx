import "./Dropdown.scss";

const Dropdown = ({
  label,
  items = [],
  onSelect,
  multi = false,
  value,
  isOpen,
  onToggle,
}) => {

  const getItemLabel = (item) => (typeof item === "string" ? item : item.label);
  const getItemImage = (item) => (typeof item === "string" ? null : item.image);

  const selectedItems = value
    ? multi
      ? value
      : value !== ""
      ? [value]
      : []
    : [];

  const handleSelect = (item) => {
    if (multi) {
      let newSelectedItems;
      if (selectedItems.some((i) => getItemLabel(i) === getItemLabel(item))) {
        newSelectedItems = selectedItems.filter(
          (i) => getItemLabel(i) !== getItemLabel(item)
        );
      } else {
        newSelectedItems = [...selectedItems, item];
      }
      onSelect?.(newSelectedItems);
    } else {
      onSelect?.(item);
      onToggle();
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
      <div className="dropdown__header" onClick={onToggle}>
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
