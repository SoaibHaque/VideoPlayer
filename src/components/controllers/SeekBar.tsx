import { use, useLayoutEffect, useRef } from "react";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function SeekBar() {
  const { ref } = use(PlayerContext);
  const seekBarRef = useRef<HTMLDivElement>(null);

  function updateSeekBar(e: Event) {
    const { currentTime, duration } = (e?.target as HTMLVideoElement) ?? {};
    const percentage = (currentTime / duration) * 100 || 0;

    if (seekBarRef?.current) {
      seekBarRef.current.style.setProperty("--seek-fill", `${percentage}%`);
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
      className="h-6 group mx-4 flex my-6 cursor-pointer items-center seek-bar-container"
      ref={seekBarRef}
    >
      <div className="h-1 bg-white/20 w-full group-hover:scale-y-150 transition-all rounded-md">
        <div className="bg-red-800 h-full transition-all w-[var(--seek-fill)]"></div>
      </div>
    </div>
  );
}
