import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { useSubmitHandler } from "./useSubmitHandler";

export const useControlHelper = () => {
  const searchCtx = useContext(SearchContext);

  if (!searchCtx) throw new Error("Cannot find search context");

  const {
    controlHelper,
    isFocused,
    setControlHelper,
    results,
    query,
    searchHistory,
  } = searchCtx;

  const { handleSubmit: handleFormSubmit } = useSubmitHandler();

  useEffect(() => {
    if (!isFocused) {
      setControlHelper(-1);
    }
  }, [setControlHelper, isFocused]);

  useEffect(() => {
    setControlHelper(-1);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isFocused) {
      // ArrowUp key logic
      if (e.key === "ArrowUp" && controlHelper > -1) {
        e.preventDefault();
        setControlHelper(controlHelper - 1);
        console.log(`controlHelper after ArrowUp: ${controlHelper - 1}`);
      }

      // ArrowDown key logic
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        let maxIndex;
        if (results.length > 0) maxIndex = results.length - 1;
        else maxIndex = searchHistory ? searchHistory.length - 1 : -1;

        if (controlHelper < maxIndex) {
          setControlHelper(controlHelper + 1);
          console.log(`controlhelper after ArrowDown: ${controlHelper + 1}`);
        }
      }

      // Enter key logic
      else if (e.key === "Enter") {
        e.preventDefault();

        let searchTermToSubmit;

        if (query.length === 0 && controlHelper >= 0) {
          searchTermToSubmit = searchHistory[controlHelper];
        } else if (query.length > 0 && results.length === 0) {
          searchTermToSubmit = query;
        } else if (
          query.length > 0 &&
          results.length > 0 &&
          controlHelper >= 0
        ) {
          searchTermToSubmit = results[controlHelper].sickNm;
        }

        searchTermToSubmit = searchTermToSubmit || query;

        handleFormSubmit(searchTermToSubmit);
      }
    }
  };

  return handleKeyDown;
};
