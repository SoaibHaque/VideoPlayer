import { use } from "react";
import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { PlayerContext } from "@context/PlayerContext.ts";
import { cn } from "@utils/cn.ts";

function getPlayOption(isEnded: boolean, isPlaying: boolean) {
  if (isEnded) return <RotateCcw className="size-6" />;
  else if (isPlaying) return <Pause className="size-6" />;
  else if (!isPlaying) return <Play className="size-6" />;
}

export default function PlayerPlayButton() {
  const { isPlaying, play, pause, isEnded, isMouseActive } = use(PlayerContext);

  return (
    <div className="absolute top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2 flex gap-6">
      <button
        className={cn(
          "cursor-pointer rounded-full grid place-items-center size-16 bg-black/20 text-white",
          {
            "animate-fade-out": !isMouseActive,
            "animate-fade-in": isMouseActive,
            "pointer-events-none !opacity-0": !isEnded,
          },
        )}
      >
        <SkipBack className="size-6" />
      </button>
      <button
        className={cn(
          "cursor-pointer rounded-full grid place-items-center size-16 bg-black/20 text-white",
          {
            "animate-fade-out": !isMouseActive,
            "animate-fade-in": isMouseActive,
          },
        )}
        onClick={() => (isPlaying ? pause() : play())}
      >
        {getPlayOption(isEnded, isPlaying)}
      </button>
      <button
        className={cn(
          "cursor-pointer rounded-full grid place-items-center size-16 bg-black/20 text-white",
          {
            "animate-fade-out": !isMouseActive,
            "animate-fade-in": isMouseActive,
            "pointer-events-none !opacity-0": !isEnded,
          },
        )}
      >
        <SkipForward className="size-6" />
      </button>
    </div>
  );
}
