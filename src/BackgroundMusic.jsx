import { useEffect, useRef, useState } from "react";

export function BackgroundMusic() {
  const audioRef = useRef(new Audio("/field-grass-fragment.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.3;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        setIsPlaying(false);
      } else if (isPlaying) {
        audio.play().catch(err => {
          console.error("Error playing audio:", err);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='sound-control'>
      <button onClick={togglePlayPause} className={isPlaying ? "is-playing" : null} aria-label={isPlaying ? "pause music" : "play music"}>
        <svg focusable='false' tabIndex='-1' aria-hidden='true' style={{ pointerEvents: "none" }}>
          <use focusable='false' tabIndex='-1' xlinkHref={isPlaying ? "#icon-mute" : "#icon-play"}></use>
        </svg>
      </button>
    </div>
  );
}
