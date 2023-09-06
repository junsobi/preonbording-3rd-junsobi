import React from "react";
import { FaTimes } from "react-icons/fa";

interface RemoveButtonProps {
  onClick: (event: React.MouseEvent) => void;
  size?: string | number;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({
  onClick,
  size = "1.5em",
}) => (
  <FaTimes
    onClick={(e) => {
      e.stopPropagation();
      onClick(e);
    }}
    className="
      ml-auto cursor-pointer 
      rounded-full p-1 
      bg-gray-400 text-white 
      hover:bg-gray-500"
    size={size}
  />
);

export default RemoveButton;
