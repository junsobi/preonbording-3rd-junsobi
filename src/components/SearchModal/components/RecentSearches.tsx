import React, { useEffect, useContext } from "react";
import { useSubmitHandler } from "../../SearchBar/hooks/useSubmitHandler";
import SearchHistoryList from "./SearchHistoryList";
import EmptySearchMessage from "./EmptySearchMessage";
import { SearchContext } from "../../../contexts/SearchContext";

function RecentSearches() {
  const { handleSubmit } = useSubmitHandler();

  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");

  const { searchHistory, setSearchHistory } = searchCtx;

  useEffect(() => {
    const searchHistoryString = localStorage.getItem("searchHistory");
    if (searchHistoryString) {
      setSearchHistory(JSON.parse(searchHistoryString));
    }
  }, [setSearchHistory]);

  const sortedSearches = [...searchHistory].reverse().slice(0, 5);

  const handleDelete = (searchToDelete: string) => {
    const updatedSearches = searchHistory.filter(
      (search) => search !== searchToDelete
    );

    localStorage.setItem("searchHistory", JSON.stringify(updatedSearches));

    setSearchHistory(updatedSearches);
  };

  return (
    <div className="pb-4">
      <h2 className="text-lg text-gray-400 mb-2 p-4">최근 검색어</h2>

      {sortedSearches.length > 0 ? (
        <SearchHistoryList
          onClickItem={handleSubmit}
          onDeleteItem={handleDelete}
        />
      ) : (
        <EmptySearchMessage />
      )}
    </div>
  );
}

export default RecentSearches;
