import styles from "./style.module.css";
import Header from "../pages/Header";
import Navbar from "../pages/Navbar";
import Content from "../pages/Content";
import SongNowContext from "../context/SongNowContext";
import { useEffect, useState } from "react";
import axios from "axios";

function Layout() {
  const [songs, setSongs] = useState([]);
  const [inputOfSearch, setInputOfSearch] = useState("ביני לנדאו");
  const [songNow, setSongNow] = useState({});
  const [isPlay, setIsPlay] = useState("");

  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: {
      query: inputOfSearch,
      safesearch: "false",
    },
    headers: {
      "X-RapidAPI-Key": "bb24c6a982msh2b4598f30bba8d3p11f1fbjsn5b3077a8872e",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        const result = res.data.results; // new Set(res.data.results) ({}) [...result]
        setSongs(result);
        // console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [inputOfSearch]);

  return (
    <div className={styles.layout}>
      <Header setInputOfSearch={setInputOfSearch} />
      <div className={styles.body}>
        <Navbar />
        <SongNowContext.Provider
          value={{ songNow, setSongNow, isPlay, setIsPlay }}
        >
          <Content songs={songs} />
        </SongNowContext.Provider>
      </div>
    </div>
  );
}

export default Layout;
