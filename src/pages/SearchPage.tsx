import React from "react";
import HeadLine from "../components/HeadLine";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchPageLayout from "../layouts/SearchPageLayout";

const SearchPage = () => {
  return (
    <SearchPageLayout>
      <HeadLine />
      <SearchBar />
    </SearchPageLayout>
  );
};

export default SearchPage;
