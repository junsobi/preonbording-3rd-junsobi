import React from "react";
import ListMagnifier from "../../Buttons/ListMagnifier";
import RemoveButton from "../../Buttons/RemoveButton";

interface SearchHistoryListProps {
  searches: string[];
  onClickItem: (search: string) => void;
  onDeleteItem: (search: string) => void;
}

const SearchHistoryList: React.FC<SearchHistoryListProps> = ({
  searches,
  onClickItem,
  onDeleteItem,
}) => (
  <ul>
    {searches.map((search, index) => (
      <li
        key={index}
        onClick={() => onClickItem(search)}
        className="mb-1 flex items-center hover:bg-gray-100 hover:cursor-pointer px-4 py-2 rounded"
      >
        <ListMagnifier />
        <span className="text-lg text-gray-800">{search}</span>

        <RemoveButton onClick={() => onDeleteItem(search)} />
      </li>
    ))}
  </ul>
);

export default SearchHistoryList;
