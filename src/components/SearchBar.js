import React from "react";

const SearchBar = ({ onSearch, onSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form
        className="form-inline d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search tasks..."
          aria-label="Search"
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;

