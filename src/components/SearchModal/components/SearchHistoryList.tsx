import React from "react";
import ListMagnifier from "../../Buttons/ListMagnifier";
import RemoveButton from "../../Buttons/RemoveButton";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

interface SearchHistoryListProps {
  onClickItem: (search: string) => void;
  onDeleteItem: (search: string) => void;
}

const SearchHistoryList: React.FC<SearchHistoryListProps> = ({
  onClickItem,
  onDeleteItem,
}) => {
  const searchCtx = useContext(SearchContext);

  if (!searchCtx) throw new Error("Cannot find search context");
  const { controlHelper, searchHistory } = searchCtx;

  return (
    <ul>
      {searchHistory.map((search, index) => (
        <li
          key={index}
          onClick={() => onClickItem(search)}
          className={`mb-1 flex items-center hover:bg-gray-100 hover:pointer px-4 py-2 rounded ${
            index === controlHelper ? "bg-gray-200" : ""
          }`}
        >
          <ListMagnifier />
          <span className="text-lg text-gray-800">{search}</span>

          <RemoveButton onClick={() => onDeleteItem(search)} />
        </li>
      ))}
    </ul>
  );
};

export default SearchHistoryList;
