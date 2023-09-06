import React from "react";
import backgroundImage from "../assets/background-removebg.png";

interface Props {
  children?: React.ReactNode;
}

const SearchPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="h-screen w-screen bg-blue-200 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "25%",
      }}
    >
      <div className="pt-20 flex flex-col items-center justify-start">
        {children}
      </div>
    </div>
  );
};

export default SearchPageLayout;
