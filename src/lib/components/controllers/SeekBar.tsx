import { use, useCallback, useLayoutEffect, useRef } from "react";
import { usePlayerStore } from "@store/playerStore";
import { PlayerContext } from "@context/PlayerContext";

export default function SeekBar() {
  const { ref } = use(PlayerContext);
  const isFullScreen = usePlayerStore((state) => state.isFullScreen);
  const seekBarRef = useRef<HTMLDivElement>(null);
  const seekBarContainerRef = useRef<HTMLDivElement>(null);

  function updateSeekBar(currentTime: number, duration: number) {
    const percentage = (currentTime / duration) * 100 || 0;

    if (seekBarContainerRef?.current && seekBarRef?.current) {
      seekBarContainerRef.current.style.setProperty(
        "--seek-fill",
        `${percentage}%`,
      );
      seekBarContainerRef.current.style.setProperty(
        "--turtle-position",
        `${(seekBarRef?.current?.clientWidth * percentage) / 100}px`,
      );
    }
  }

  const handleTimeupdate = useCallback(() => {
    const video = ref.current;
    if (!video) return;
    const { currentTime, duration } = video;
    updateSeekBar(currentTime, duration);
  }, [ref]);

  useLayoutEffect(() => {
    const video = ref.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeupdate);
      handleTimeupdate();
    }

    return () => {
      if (video) video.removeEventListener("timeupdate", handleTimeupdate);
    };
  }, [handleTimeupdate, isFullScreen, ref]);

  return (
    <div
      className="h-6 group mx-4 flex cursor-pointer items-center seek-bar-container relative"
      ref={seekBarContainerRef}
    >
      <div
        className="h-1 bg-white/20 w-full group-hover:scale-y-150 transition-all rounded-md"
        ref={seekBarRef}
      >
        <div className="bg-red-800 h-full transition-all w-[var(--seek-fill)]"></div>
      </div>
      <div className="size-4 rounded-full bg-red-800 absolute left-0 transition-all translate-x-[calc(var(--turtle-position)-.5rem)] top-1/2 -translate-y-1/2"></div>
    </div>
  );
}
