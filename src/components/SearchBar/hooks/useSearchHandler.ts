import { useContext } from "react";
import { getSickList } from "../../../services/api/sickApi";
import { SearchContext } from "../../../contexts/SearchContext";

export const useSearchHandler = () => {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) throw new Error("Cannot find search context");
  const { setResults, setQuery } = searchCtx;

  const handleChange = async (newQuery: string) => {
    setQuery(newQuery);

    if (newQuery) {
      const results = await getSickList(newQuery);

      console.log(results);
      setResults(results);
    }
  };

  return { handleChange };
};
