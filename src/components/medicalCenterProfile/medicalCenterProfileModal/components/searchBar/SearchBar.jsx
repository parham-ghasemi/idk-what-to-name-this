import "./SearchBar.scss";

const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="modal-searchbar">
      <input className="modal-searchbar__input" placeholder="نام پزشک یا تخصص را جستجو کنید" />
      <button type="submit" className="modal-searchbar__button">
        <img src="/icons/search-normal.svg" alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
