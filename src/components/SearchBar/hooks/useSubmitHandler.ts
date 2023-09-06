const EXTERNAL_URL = "https://clinicaltrialskorea.com/studies?conditions=";

const getSearchHistory = (): string[] => {
  const searchHistoryString = localStorage.getItem("searchHistory");
  return searchHistoryString ? JSON.parse(searchHistoryString) : [];
};

const saveSearchHistory = (searchHistory: string[]) => {
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};

export const useSubmitHandler = () => {
  const handleSubmit = (searchTerm: string) => {
    let searchHistory: string[] = getSearchHistory();

    if (!searchHistory.includes(searchTerm)) {
      searchHistory.push(searchTerm);
    }

    saveSearchHistory(searchHistory);

    window.open(`${EXTERNAL_URL}${encodeURIComponent(searchTerm)}`, "_blank");
  };

  return { handleSubmit };
};
