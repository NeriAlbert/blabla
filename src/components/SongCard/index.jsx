import styles from "./style.module.css";
import { useContext } from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import SongNowContext from "../../context/SongNowContext";

function SongCard({ song }) {
  // const { setSongNow, setIsPlay } = useContext(SongNowContext);
  const { setSongNow, setIsPlay, songNow, isPlay } = useContext(SongNowContext);

  const clickPlay = () => {
    // setSongNow((prev) => (prev !== song ? song : prev));
    setSongNow(song);
    setIsPlay((prev) => (prev === "yes" ? "no" : "yes"));
  };

  return (
    <>
      <div className={styles.songCard} key={song.id}>
        <img
          className={styles.img}
          src={song.thumbnail.url}
          alt={song.thumbnail.title}
        />
        <p className={styles.title}>
          {song.title.length < 25
            ? song.title
            : song.title.slice(song.title.length - 25, song.title.length)}
        </p>
        <AiFillPlaySquare className={styles.play} onClick={clickPlay} />
      </div>
    </>
  );
}

export default SongCard;
