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

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults,
        isFocused,
        setIsFocused,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
