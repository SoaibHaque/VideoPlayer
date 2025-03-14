import { ReactNode, useEffect, useRef, useState } from "react";
import { PlayerContext, PlayerContextProps } from "@context/PlayerContext.ts";

export default function PlayerProvider({
  children,
  src,
}: {
  children: ReactNode;
  src: PlayerContextProps["src"];
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMouseActive, setIsMouseActive] = useState<boolean>(true);
  const [isEnded, setIsEnded] = useState<boolean>(false);

  function play() {
    if (!ref.current) return;
    ref.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsEnded(false);
      })
      .catch((err) => console.log(err));
  }

  function pause() {
    if (!ref.current) return;
    ref.current.pause();
    setIsPlaying(false);
  }

  function handleOnMouseEnter() {
    setIsMouseActive(true);
  }

  function handleOnMouseLeave() {
    if (isPlaying) setIsMouseActive(false);
  }

  function handleOnVideoEnded() {
    setIsEnded(true);
    setIsPlaying(false);
  }

  useEffect(() => {
    const video = ref?.current;
    if (video) {
      video.addEventListener("ended", handleOnVideoEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleOnVideoEnded);
      }
    };
  }, [ref]);

  return (
    <PlayerContext
      value={{
        ref,
        src,
        play,
        pause,
        isPlaying,
        isEnded,
        isMouseActive,
        setIsMouseActive,
      }}
    >
      <div
        className="overflow-hidden relative rounded-md"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {children}
      </div>
    </PlayerContext>
  );
}
