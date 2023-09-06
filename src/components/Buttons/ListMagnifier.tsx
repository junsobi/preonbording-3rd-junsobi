import React from "react";
import { FaSearch } from "react-icons/fa";

interface ListMagnifierProps {
  onClick?: (event: React.MouseEvent) => void;
}

const ListMagnifier: React.FC<ListMagnifierProps> = ({ onClick }) => (
  <FaSearch
    onClick={(e) => {
      e.stopPropagation();
      if (onClick) {
        onClick(e);
      }
    }}
    className="mr-4 text-gray-600 cursor-pointer"
  />
);

export default ListMagnifier;
