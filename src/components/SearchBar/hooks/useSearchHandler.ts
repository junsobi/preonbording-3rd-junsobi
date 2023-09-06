import { useContext, useEffect, useRef } from "react";
import { getSickList } from "../../../services/api/sickApi";
import { SearchContext } from "../../../contexts/SearchContext";

export const useSearchHandler = () => {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");
  const { setResults, setQuery, query } = searchCtx;

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const DEBOUNCE_TIME = 180;

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(async () => {
      if (query !== "") {
        const results = await getSickList(query);
        setResults(results);
      }
    }, DEBOUNCE_TIME);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [setResults, query]);

  return { handleChange: setQuery };
};
