import { ReactNode, useCallback, useEffect, useRef } from "react";
import { usePlayerStore } from "@store/playerStore";
import { PlayerContext, PlayerContextProps } from "@context/PlayerContext";

export default function PlayerProvider({
  children,
  src,
}: {
  children: ReactNode;
  src: PlayerContextProps["src"];
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const setIsEnded = usePlayerStore((state) => state.setIsEnded);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  const setIsMouseActive = usePlayerStore((state) => state.setIsMouseActive);

  const mouseIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(
    undefined,
  );

  function handleOnMouseEnter() {
    if (!containerRef?.current) return;
    containerRef.current.classList.add("mouse-enter");
  }

  function handleOnMouseLeave() {
    if (!containerRef?.current || !ref?.current) return;
    if (!ref.current.paused)
      containerRef.current.classList.remove("mouse-enter");
  }

  function handleOnMouseMove() {
    if (!containerRef.current) return;
    containerRef.current.classList.add("mouse-enter");
    containerRef.current.style.cursor = "unset";

    clearTimeout(mouseIntervalRef.current ?? 0);
    mouseIntervalRef.current = setTimeout(() => {
      if (!containerRef?.current || !ref?.current) return;
      if (document.fullscreenElement && !ref.current.paused) {
        containerRef.current?.classList.remove("mouse-enter");
        containerRef.current.style.cursor = "none";
      }
    }, 2000);
  }

  const handleOnVideoEnded = useCallback(() => {
    if (!containerRef?.current) return;
    containerRef.current.classList.add("mouse-enter");
    setIsEnded(true);
    setIsPlaying(false);
    setIsMouseActive(true);
  }, [setIsEnded, setIsMouseActive, setIsPlaying]);

  const handlePlayerInitState = () => {
    if (!containerRef?.current || !ref?.current) return;
    containerRef.current?.classList.add("mouse-enter");
  };

  useEffect(() => {
    const video = ref?.current;

    if (video) {
      video.addEventListener("ended", handleOnVideoEnded);
      video.addEventListener("loadeddata", handlePlayerInitState);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleOnVideoEnded);
        video.removeEventListener("loadeddata", handlePlayerInitState);
      }
    };
  }, [handleOnVideoEnded]);

  return (
    <PlayerContext
      value={{
        ref,
        containerRef,
        src,
      }}
    >
      <div
        className="aspect-video overflow-hidden player-container relative bg-neutral-800 grid place-items-center"
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
