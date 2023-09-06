import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import SearchModalLayout from "../../layouts/SearchModalLayout";
import RecentSearches from "./components/RecentSearches";
import SearchResults from "./components/SearchResults";

function SearchModal() {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");
  const { query } = searchCtx;

  return (
    <SearchModalLayout>
      {!query ? <RecentSearches /> : <SearchResults />}
    </SearchModalLayout>
  );
}

export default SearchModal;
