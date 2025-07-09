import { useState } from "react";
import "./SpecialistsSearch.scss";

const SpecialistsSearch = () => {
  const [specialistsSearchQuery, setSpecialistsSearchQuery] = useState("");
  const [selectedSearchItem, setSelectedSearchItem] = useState(0);
  const testRes = new Array(9).fill(" قلب و عروق");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="specialists-search-container">
      <form
        onSubmit={handleSearch}
        className="specialists-search-container__search-bar"
      >
        <input
          type="text"
          value={specialistsSearchQuery}
          onChange={(e) => setSpecialistsSearchQuery(e.target.value)}
          placeholder="بر اساس تخصص جستجو کنید"
          className="specialists-search-container__search-bar__input"
        />
        <button
          type="submit"
          className="specialists-search-container__search-bar__search-btn"
        >
          <img src="/icons/search-normal.svg" alt="search-icon" />
        </button>
      </form>

      <div className="specialists-search-container__result-container">
        {testRes.map((res, index) => (
          <div
            onMouseDown={() => setSelectedSearchItem(index)}
            key={`res-${index}`}
            className={`specialists-search-container__result-container__item ${
              index === selectedSearchItem
                ? "specialists-search-container__result-container__item--selected"
                : ""
            }`}
          >
            {res}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistsSearch;
