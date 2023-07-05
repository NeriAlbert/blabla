import Search from "../../components/Search";
import styles from "./style.module.css";
import playlistImg from "../../image\\943bb5_9bd16a1dd29743c39a5f2e4172e52f6d~mv2.jpg";

function Header({ setInputOfSearch }) {
  return (
    <div className={styles.header}>
      <img className={styles.image} src={playlistImg} alt="playlistImg" />
      <h1>PLAYLIST</h1>
      <Search setInputOfSearch={setInputOfSearch} />
      <button>תצוגה</button>
    </div>
  );
}

export default Header;
