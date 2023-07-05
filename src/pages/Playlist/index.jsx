import styles from "./style.module.css";
import SongCard from "../../components/SongCard";
import SoundPlayer from "../../components/SoundPlayer";

function Playlist({ songs }) {
  console.log(songs);
  return (
    <div className={styles.playlistCard}>
      {songs.length > 0 &&
        songs.map((song) => <SongCard song={song} key={song.id} />)}
      <SoundPlayer />
    </div>
  );
}

export default Playlist;
