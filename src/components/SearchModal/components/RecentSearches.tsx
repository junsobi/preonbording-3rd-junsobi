import React, { useState, useEffect } from "react";
import { useSubmitHandler } from "../../SearchBar/hooks/useSubmitHandler";
import SearchHistoryList from "./SearchHistoryList";
import EmptySearchMessage from "./EmptySearchMessage";

function RecentSearches() {
  const { handleSubmit } = useSubmitHandler();
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const searchHistoryString = localStorage.getItem("searchHistory");
    if (searchHistoryString) {
      setSearchHistory(JSON.parse(searchHistoryString));
    }
  }, []);

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
          searches={sortedSearches}
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
