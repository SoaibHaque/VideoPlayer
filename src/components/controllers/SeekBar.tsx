import { use, useLayoutEffect, useRef } from "react";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function SeekBar() {
  const { ref } = use(PlayerContext);
  const seekBarRef = useRef<HTMLDivElement>(null);
  const seekBarContainerRef = useRef<HTMLDivElement>(null);

  function updateSeekBar(e: Event) {
    const { currentTime, duration } = (e?.target as HTMLVideoElement) ?? {};
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

  useLayoutEffect(() => {
    const video = ref.current;
    if (video) video.addEventListener("timeupdate", updateSeekBar);

    return () => {
      if (video) video.removeEventListener("timeupdate", updateSeekBar);
    };
  }, [ref]);

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
      <div className="size-4 rounded-full bg-red-800 absolute lef-0 transition-all translate-x-[calc(var(--turtle-position)-.5rem)] top-1/2 -translate-y-1/2"></div>
    </div>
  );
}
