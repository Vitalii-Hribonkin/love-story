import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./FifthPage.module.css";

export default function VideoPage() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  const handleVideoEnded = () => {
    setIsVideoPlayed(true);
  };

  const handleFaceTimeCall = () => {
    const facetimeLink = "facetime://+48604078201";
    window.location.href = facetimeLink;
  };

  return (
    <div className={s.page}>
      <div className={s.video_wrapper}>
        <h1 className={s.heading}>Відео для тебе 💖</h1>

        <video
          controls
          className={s.video}
          onEnded={handleVideoEnded}
        >
          <source src="/video.mp4" type="video/mp4" />
          Твій браузер не підтримує відео 🥺
        </video>

        <p className={s.text}>
          Я довго думав, як краще це сказати...
          <br />
          Тому просто — від серця ❤️
        </p>

        {isVideoPlayed && (
          <div className={s.button_group}>
            <button onClick={handleFaceTimeCall} className={s.next_button}>
              Дзвони 📞
            </button>
            <Link to="/sixth" className={s.next_button}>
              Продовжити 🌸
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
