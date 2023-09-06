import React, { useContext, useRef, useEffect } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import SearchModal from "../SearchModal/SearchModal";
import SearchBarLayout from "../../layouts/SearchBarLayout";
import { useSearchHandler } from "./hooks/useSearchHandler";
import { useSubmitHandler } from "./hooks/useSubmitHandler";

function SearchBar() {
  const searchCtx = useContext(SearchContext);

  if (!searchCtx) throw new Error("Cannot find search context");

  const { setIsFocused, isFocused, query } = searchCtx;
  const { handleChange } = useSearchHandler();
  const { handleSubmit: handleFormSubmit } = useSubmitHandler();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleFormSubmit(query);
  };
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsFocused]);

  return (
    <div ref={searchBarRef}>
      <SearchBarLayout>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <input
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="outline-none w-full h-full pl-4 text-lg"
          />
        </form>
      </SearchBarLayout>

      {isFocused && <SearchModal />}
    </div>
  );
}

export default SearchBar;
