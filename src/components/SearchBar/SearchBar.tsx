import React, { useState } from "react";
import { getSickList } from "../../services/api/sickApi";
import SearchModal from "../SearchModal/SearchModal";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = async (e: any) => {
    setQuery(e.target.value);

    // 쿼리가 변경될 때마다 API 호출.
    if (query) {
      const results = await getSickList(query);
      // TODO: 결과 처리 로직 추가.
      console.log(results);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {/* TODO: Modal에 필요한 props 전달 */}
      {query && <SearchModal />}
    </div>
  );
}

export default SearchBar;
