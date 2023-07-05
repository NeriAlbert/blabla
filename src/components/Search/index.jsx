import styles from "./style.module.css";

import React from "react";

function Search({ setInputOfSearch }) {
  const setInput = (e) => setInputOfSearch(e.target.value);
  return (
    <div className={styles.search}>
      <input
        type="string"
        className={styles.input}
        placeholder="search"
        onKeyDown={(e) => (e.code == "Enter" ? setInput(e) : null)}
      ></input>
    </div>
  );
}

export default Search;
