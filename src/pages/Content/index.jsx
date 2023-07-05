import styles from "./style.module.css";
import { Route, Routes } from "react-router-dom";
import Playlist from "../Playlist";
import FavoritesList from "../FavoritesList";
import LogOut from "../LogOut";

function Content({ songs }) {
  return (
    <div className={styles.content}>
      <Routes>
        <Route index element={<Playlist songs={songs} />} />
        <Route path="favorites" element={<FavoritesList />} />
        <Route path="logOut" element={<LogOut />} />
      </Routes>
    </div>
  );
}

export default Content;

// <Route path="Song">
//  <Route index element={<>SongIndex</>} />
//  <Route path=":idOfSong" element={<>Song</>} />
// </Route>;
