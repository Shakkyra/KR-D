import React, { useState, useEffect } from "react";

const Searchbar = ({ onSearchChange }) => {
  const [data, setData] = useState([]);
  const [previousSearchValue, setPreviousSearchValue] = useState("");

  const handleSearchChange = async (searchValue) => {
    console.log("Valor del campo de búsqueda en searchbar.jsx:", searchValue);
    if (searchValue !== previousSearchValue) {
      const response = await fetch(`/api/getData2?searchValue=${searchValue}`);
      const data = await response.json();
      setData(data);
      setPreviousSearchValue(searchValue);
      onSearchChange(searchValue);
    }
  };

  return (
    <>
      <label
        htmlFor="Search"
        className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
      >
        <input
          type="text"
          id="Search"
          placeholder="Search"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          onChange={(event) => handleSearchChange(event.target.value)}
        />

        <span
          className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
        >
          SearchbyID
        </span>
      </label>
    </>
  );
};

export default Searchbar;