import styles from "./style.module.css";
import { useContext, useRef } from "react";
import SongNowContext from "../../context/SongNowContext";
import { useEffect } from "react";
import  YouTube  from "react-youtube";
function SoundPlayer() {
  // { show } - להביא מהקונטקסט אפשרות לעשות show לplayer
  let show = false
  const showClass = show ? styles.show : styles.noShow

  const { songNow, isPlay } = useContext(SongNowContext);
  const youtubeRef = useRef();

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      autoplay: 1,
      // fs: 1,
      // controls: 0,
      // disablekb: 1,
      // modestbranding: 1,
      // showinfo: 0,
      // rel: 0,
    },
  };

  const onPlayerReady = (e) => {
    console.log(e);
    youtubeRef.current = e.target;
  };

  useEffect(() => {
    // console.log(youtubeRef.current);
    // console.log(isPlay);
    if (youtubeRef.current&&isPlay === "yes") youtubeRef.current.playVideo();
    else if (youtubeRef.current&&isPlay === "no") youtubeRef.current.pauseVideo();
  }, [isPlay]);

  return (
    <div className={`${styles.youtubeCard} ${showClass}`}>
      {(isPlay === "yes" || isPlay === "no")&& (
        <YouTube
          videoId={songNow.id}
          opts={opts}
          autoplay
          onReady={onPlayerReady}
        />
      )}
    </div>
  );
}

export default SoundPlayer;
