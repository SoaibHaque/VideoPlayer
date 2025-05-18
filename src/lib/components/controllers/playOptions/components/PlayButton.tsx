import { use } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { PlayerContext } from "@context/PlayerContext";
import { usePlayerStore } from "@store/playerStore";

function getPlayOption(isEnded: boolean, isPlaying: boolean) {
  if (isEnded) return <RotateCcw className="size-4 md:size-5 lg:size-6" />;
  else if (isPlaying) return <Pause className="size-4 md:size-5 lg:size-6" />;
  else if (!isPlaying) return <Play className="size-4 md:size-5 lg:size-6" />;
}

export default function PlayButton() {
  const { ref, containerRef } = use(PlayerContext);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const play = usePlayerStore((state) => state.play);
  const pause = usePlayerStore((state) => state.pause);
  const isEnded = usePlayerStore((state) => state.isEnded);

  return (
    <button
      className="cursor-pointer rounded-full grid place-items-center size-10 md:size-14 lg:size-16 bg-black/20 text-white play-button"
      onClick={() => (isPlaying ? pause(ref) : play(ref, containerRef))}
    >
      {getPlayOption(isEnded, isPlaying)}
    </button>
  );
}
