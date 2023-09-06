import React from "react";

interface Props {
  children: React.ReactNode;
}

const SearchModalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-500px h-auto bg-white shadow-md rounded-3xl mt-2">
      {children}
    </div>
  );
};

export default SearchModalLayout;
