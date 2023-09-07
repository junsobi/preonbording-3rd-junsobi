import React, { useContext } from "react";
import ListMagnifier from "../../Buttons/ListMagnifier";
import { SearchContext } from "../../../contexts/SearchContext";
import { HighlightedText } from "./HighlightedText";

interface ResultsListProps {
  results: any[];
  onClickItem: (item: string) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ results, onClickItem }) => {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");

  const { controlHelper, query } = searchCtx;

  return (
    <>
      <div className="text-gray-600 px-4 pt-4">추천 검색어</div>

      <ul className="mt-2 flex flex-col">
        {results.map((result, index) => {
          const parts = result.sickNm.split(new RegExp(`(${query})`, "gi"));

          return (
            <button key={result.id}>
              <li
                onClick={() => onClickItem(result.sickNm)}
                className={`hover:bg-gray-100 flex items-center px-4 py-4 hover:cursor-pointer ${
                  controlHelper === index ? "bg-gray-200" : ""
                }`}
              >
                <ListMagnifier />

                <div>
                  {parts.map((part: string, i: number) => (
                    <HighlightedText key={i} part={part} query={query} />
                  ))}
                </div>
              </li>
            </button>
          );
        })}
      </ul>
    </>
  );
};

export default ResultsList;
