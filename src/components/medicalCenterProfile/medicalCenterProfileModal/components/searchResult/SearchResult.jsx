import "./SearchResult.scss";

const specialties = ["متخصص غدد", "فوق تحصص جراحی غدد"];
const doctors = [
  {
    avatar: "/images/avatar.png",
    name: "دکتر فروغ موحدزاده",
    specialty: "متخصص غدد",
  },
  {
    avatar: "/images/avatar.png",
    name: "دکتر فروغ موحدزاده",
    specialty: "متخصص غدد",
  },
];

const SearchResult = ({ onItemClick }) => {
  // const searchTerm = "غدد";
  const searchTerm = "دکتر موحدزاده";

  const highlightMatch = (text, query) => {
    if (!query) return text;

    const terms = query.trim().split(/\s+/).filter(Boolean); // split
    const regex = new RegExp(`(${terms.join("|")})`, "gi");

    const parts = text.split(regex);
    return parts.map((part, i) =>
      terms.some((term) => part.toLowerCase() === term.toLowerCase()) ? (
        <mark key={i}>{part}</mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="search-result-container">
      <div>
        {specialties && specialties.length > 0 && (
          <>
            <div className="search-result-container__title-container">
              <p className="search-result-container__title-container__title">
                براساس تخصص
              </p>
              <div className="search-result-container__title-container__line"></div>
            </div>
            {specialties.map((item, index) => (
              <div
                onClick={onItemClick}
                className="search-result-container__specialties-res"
                key={`spec-res-${index}`}
              >
                <p>{highlightMatch(item, searchTerm)}</p>
                <button>
                  <img
                    src="/icons/arrow-left-circle-blue.svg"
                    alt="arrow-left-circle-blue"
                  />
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <div>
        <div className="search-result-container__title-container">
          <p className="search-result-container__title-container__title">
            پزشک
          </p>
          <div className="search-result-container__title-container__line"></div>
          <p className="search-result-container__title-container__more">
            مشاهده همه
            <img
              src="/icons/arrow-left-light-blue.svg"
              alt="arrow-left-light-blue"
            />
          </p>
        </div>
        {doctors.map((item, index) => (
          <div
            className="search-result-container__doctors-res"
            key={`doc-res-${index}`}
            onClick={onItemClick}
          >
            <div className="search-result-container__doctors-res__right">
              <img
                className="search-result-container__doctors-res__right__avatar"
                src={item.avatar}
              />
              <div className="search-result-container__doctors-res__right__name-spec">
                <p className="search-result-container__doctors-res__right__name-spec__name">
                  {highlightMatch(item.name, searchTerm)}
                </p>
                <p className="search-result-container__doctors-res__right__name-spec__spec">
                  {highlightMatch(item.specialty, searchTerm)}
                </p>
              </div>
            </div>

            <div className="search-result-container__doctors-res__left">
              <button>
                <img
                  src="/icons/arrow-left-circle-blue.svg"
                  alt="arrow-left-circle-blue"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
