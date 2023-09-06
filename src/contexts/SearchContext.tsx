import React, { createContext, useState } from "react";

interface SearchResult {
  sickCd: string;
  sickNm: string;
}

interface SearchContextProps {
  results: SearchResult[];
  setResults: (results: SearchResult[]) => void;
  isFocused: boolean;
  setIsFocused: (isFocused: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  controlHelper: number;
  setControlHelper: (value: number) => void;
  searchHistory: string[];
  setSearchHistory: (value: string[]) => void;
}
export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const [isFocused, setIsFocused] = useState(false);

  const [query, setQuery] = useState("");
  const [controlHelper, setControlHelper] = useState(-1);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults,
        isFocused,
        setIsFocused,
        query,
        setQuery,
        controlHelper,
        setControlHelper,
        searchHistory,
        setSearchHistory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
