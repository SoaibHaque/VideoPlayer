import { ReactNode, useRef, useState } from "react";
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
  const [isMouseActive, setIsMouseActive] = useState<boolean>(false);

  function play() {
    if (!ref.current) return;
    ref.current
      .play()
      .then(() => {
        setIsPlaying(true);
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

  return (
    <PlayerContext
      value={{
        ref,
        play,
        pause,
        src,
        isPlaying,
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
