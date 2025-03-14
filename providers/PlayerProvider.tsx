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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseIntervalRef = useRef<number>(undefined);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMouseActive, setIsMouseActive] = useState<boolean>(true);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

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
    clearTimeout(mouseIntervalRef?.current);
    setIsPlaying(false);
  }

  function handleOnMouseEnter() {
    setIsMouseActive(true);
  }

  function handleOnMouseLeave() {
    if (isPlaying) setIsMouseActive(false);
  }

  function handleOnMouseMove() {
    if (!containerRef?.current) return;
    clearTimeout(mouseIntervalRef?.current);
    setIsMouseActive(true);
    containerRef.current.style.cursor = "unset";
    mouseIntervalRef.current = window.setTimeout(() => {
      if (document.fullscreenElement && isPlaying) {
        setIsMouseActive(false);
        if (!containerRef?.current) return;
        containerRef.current.style.cursor = "none";
      }
    }, 2000);
  }

  function handleOnVideoEnded() {
    setIsEnded(true);
    setIsPlaying(false);
    setIsMouseActive(true);
  }

  function handleFullScreen() {
    setIsFullScreen(!!document.fullscreenElement);
  }

  useEffect(() => {
    const video = ref?.current;
    const container = containerRef?.current;

    if (video) {
      video.addEventListener("ended", handleOnVideoEnded);
      video.addEventListener("loadeddata", (e) => console.log(e));
    }
    if (container) {
      container.addEventListener("fullscreenchange", handleFullScreen);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleOnVideoEnded);
      }
      if (container) {
        container.addEventListener("fullscreenchange", handleFullScreen);
      }
    };
  }, [ref]);

  return (
    <PlayerContext
      value={{
        ref,
        containerRef,
        src,
        play,
        pause,
        isPlaying,
        isFullScreen,
        isEnded,
        isMouseActive,
        setIsMouseActive,
      }}
    >
      <div
        className="aspect-video overflow-hidden relative rounded-md bg-neutral-800 grid place-items-center"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        onMouseMove={handleOnMouseMove}
        ref={containerRef}
      >
        {children}
      </div>
    </PlayerContext>
  );
}
