import { cn } from "@utils/cn";
import { SkipForward } from "lucide-react";
import { usePlayerStore } from "@store/playerStore";

export default function SkipForwardButton() {
  const isEnded = usePlayerStore((state) => state.isEnded);

  return (
    <button
      className={cn(
        "cursor-pointer rounded-full grid place-items-center size-10 md:size-14 lg:size-16 bg-black/20 text-white",
        {
          "pointer-events-none !opacity-0": !isEnded,
        },
      )}
    >
      <SkipForward className="size-4 md:size-5 lg:size-6" />
    </button>
  );
}
