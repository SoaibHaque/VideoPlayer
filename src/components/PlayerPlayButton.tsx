import { use } from "react";
import { Pause, Play } from "lucide-react";
import { PlayerContext } from "@context/PlayerContext.ts";
import { cn } from "@utils/cn.ts";

export default function PlayerPlayButton() {
  const { isPlaying, play, pause, isMouseActive } = use(PlayerContext);

  return (
    <button
      className={cn(
        "cursor-pointer rounded-full z-30 grid place-items-center p-4 bg-black/20 text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
        {
          "animate-fade-out": !isMouseActive,
          "animate-fade-in": isMouseActive,
        },
      )}
      onClick={() => (isPlaying ? pause() : play())}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
