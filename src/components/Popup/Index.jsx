import styles from "./style.module.css";
import { AiTwotoneHeart } from "react-icons/ai";

import React from "react";

function Popup(song) {
  return (
    <div>
      <title>{song.thumbnail.title}</title>
      <img src={song.thumbnail.url} alt={song.thumbnail.title} />
      <AiTwotoneHeart className={styles.favorite} />
    </div>
  );
}

export default Popup;
