import React, { useState } from "react";

var data = require("./data.json");
const SearchBar = () => {


  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    if (
      searchTerm.toLocaleLowerCase() === "services" ||
      searchTerm.toLocaleLowerCase() === "creative entertainment platforms" ||
      searchTerm.toLocaleLowerCase() === "on-ground activations" ||
      searchTerm.toLocaleLowerCase() === "social media & public relations" ||
      searchTerm.toLocaleLowerCase() === "production btl & marketing" ||
      searchTerm.toLocaleLowerCase() === "event planning & management" ||
      searchTerm.toLocaleLowerCase() === "trade-marketing & distribution"
    ) {
      window.location.href = "/services";
    } else {
      if (
        searchTerm.toLocaleLowerCase() === "platforms" ||
        searchTerm.toLocaleLowerCase() === "battle of the bands" ||
        searchTerm.toLocaleLowerCase() === "battle of the wheels" ||
        searchTerm.toLocaleLowerCase() === "battle of the burgers"
      ) {
        window.location.href = "/platforms";
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          className="search-text"
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
        />
        <button onClick={() => onSearch(value)} className="searchButton">
          <img
            src="searchButtton.png"
            alt="searchButton"
            className="buttonImage"
          />
        </button>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchItem = value.toLowerCase();
            const searchTerm = item.search_term.toLocaleLowerCase();

            return searchItem && searchTerm.includes(searchItem);
          })
          .map((item) => (
            <div
              onClick={() => onSearch(item.search_term)}
              className="dropdown-row"
              key={item.search_term}
            >
              {item.search_term}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
