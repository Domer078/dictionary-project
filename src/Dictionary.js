import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.CSS";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
