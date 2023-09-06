import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useSubmitHandler } from "../components/SearchBar/hooks/useSubmitHandler";
import RemoveButton from "../components/Buttons/RemoveButton";

const SearchBarLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");

  const { isFocused, query, setQuery } = searchCtx;
  const { handleSubmit: handleFormSubmit } = useSubmitHandler();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleFormSubmit(query);
  };

  return (
    <div
      className={`flex items-center justify-between w-500px h-16 border-2 bg-white mt-10 ${
        isFocused ? "border-blue-500" : "border-gray-300"
      } rounded-full px-4 py-2 shadow-md`}
    >
      {!isFocused && <AiOutlineSearch className="text-gray-500 text-xl" />}

      {children}

      {isFocused && <RemoveButton onClick={() => setQuery("")} />}
      <button
        className="bg-blue-500 rounded-full p-3 ml-2"
        onClick={handleSubmit}
      >
        <AiOutlineSearch className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default SearchBarLayout;
