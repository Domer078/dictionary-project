import React, { useState } from "react";
import "./Dictionary.CSS";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    return alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
    </div>
  );
}
