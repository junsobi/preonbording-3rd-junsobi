import React, { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { useSubmitHandler } from "../../SearchBar/hooks/useSubmitHandler";
import ListMagnifier from "../../Buttons/ListMagnifier";
import NoResultsMessage from "./NoResultsMessage";
import ResultsList from "./ResultsList";

function SearchResults() {
  const { handleSubmit } = useSubmitHandler();
  const searchCtx = useContext(SearchContext);

  if (!searchCtx) throw new Error("Cannot find search context");

  const { query, results } = searchCtx;

  return (
    <div className="py-6 text-lg">
      <div
        onClick={() => handleSubmit(query)}
        className="flex border-b items-center px-4 p-4 hover:bg-gray-100 hover:cursor-pointer"
      >
        <ListMagnifier />
        <span>{query}</span>
      </div>

      {results.length > 0 ? (
        <ResultsList results={results} onClickItem={handleSubmit} />
      ) : (
        <NoResultsMessage />
      )}
    </div>
  );
}

export default SearchResults;
