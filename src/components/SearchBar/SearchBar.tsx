import React, { useContext, useRef } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import SearchModal from "../SearchModal/SearchModal";
import SearchBarLayout from "../../layouts/SearchBarLayout";
import { useSearchHandler } from "./hooks/useSearchHandler";
import { useSubmitHandler } from "./hooks/useSubmitHandler";
import { useClickOutside } from "./hooks/useClickOutside";
import { useEscapeKey } from "./hooks/useEscapeKey";
import { useControlHelper } from "./hooks/useControlHelper";

function SearchBar() {
  const searchCtx = useContext(SearchContext);

  if (!searchCtx) throw new Error("Cannot find search context");

  const { setIsFocused, isFocused, query, setQuery } = searchCtx;
  const { handleChange } = useSearchHandler();
  const { handleSubmit: handleFormSubmit } = useSubmitHandler();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleFormSubmit(query);
  };
  const handleKeyDown = useControlHelper();
  const searchBarRef = useRef<HTMLDivElement>(null);
  useClickOutside(searchBarRef, () => setIsFocused(false));
  useEscapeKey(() => setQuery(""));

  return (
    <div ref={searchBarRef}>
      <SearchBarLayout>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <input
            type="text"
            placeholder="질환명을 입력해주세요."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="outline-none w-full h-full pl-4 text-lg"
          />
        </form>
      </SearchBarLayout>

      {isFocused && <SearchModal />}
    </div>
  );
}

export default SearchBar;
