import React from "react";
import { FaSearch } from "react-icons/fa";

function RecentSearches() {
  const searchHistoryString = localStorage.getItem("searchHistory");
  let searchHistory = [];

  if (searchHistoryString) {
    searchHistory = JSON.parse(searchHistoryString);
  }

  const sortedSearches = [...searchHistory].reverse().slice(0, 5);

  return (
    <div className="pb-4">
      <h2 className="text-lg text-gray-400 mb-2 p-4">최근 검색어</h2>
      {sortedSearches.length > 0 ? (
        <ul>
          {sortedSearches.map((search, index) => (
            <li
              key={index}
              className="mb-1 flex items-center hover:bg-gray-100 px-4 py-2 rounded"
            >
              <FaSearch className="mr-4 text-gray-600" />
              <span className="text-lg text-gray-800">{search}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="p-4 text-gray-500">최근 검색어가 없습니다.</p>
      )}
    </div>
  );
}

export default RecentSearches;
