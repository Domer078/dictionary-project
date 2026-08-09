import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.CSS";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}

// export default function Dictionary() {
//   const [keyword, setKeyWord] = useState("");
//   const [results, setResults] = useState(null);

//   function handleResponse(response) {
//     setResults(response.data[0]);
//   }

//   function handleSearch(event) {
//     event.preventDefault();
//     let apiKey = "63340413at53cc6c6ba7a81a11oc3f05";
//     let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

//     axios.get(apiUrl).then(handleResponse);
//   }

//   function handleKeywordChange(event) {
//     setKeyWord(event.target.value);
//   }

//   return (
//     <div className="Dictionary">
//       <form onSubmit={handleSearch}>
//         <input type="search" onChange={handleKeywordChange}></input>
//       </form>
//       <Results results={results} />
//     </div>
//   );
// }
