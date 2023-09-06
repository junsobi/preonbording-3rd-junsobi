import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { useSubmitHandler } from "../../SearchBar/hooks/useSubmitHandler";
import { FaSearch } from "react-icons/fa";

function SearchResults() {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");
  const { query, results } = searchCtx;
  const { handleSubmit } = useSubmitHandler();
  return (
    <div className="py-6 text-lg">
      <div
        onClick={() => handleSubmit(query)}
        className="flex border-b items-center px-4 p-4 hover:bg-gray-100 hover:cursor-pointer"
      >
        <FaSearch className="mr-4 text-gray-600" />
        <span>{query}</span>
      </div>
      <div className="text-gray-600 px-4 pt-4">추천 검색어</div>

      <ul className="mt-2 flex flex-col">
        {results.map((result, index) => (
          <li
            key={index}
            onClick={() => handleSubmit(result.sickNm)}
            className="hover:bg-gray-100 flex items-center px-4 py-4 hover:cursor-pointer"
          >
            <FaSearch className="mr-4 text-gray-600" />
            <div>{result.sickNm}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
