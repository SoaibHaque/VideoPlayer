import { use } from "react";
import { cn } from "@utils/cn.ts";
import { PlayerContext } from "@context/PlayerContext.ts";
import SeekBar from "@components/controllers/SeekBar.tsx";

export default function PlayerBottom() {
  const { isMouseActive } = use(PlayerContext);
  return (
    <div
      className={cn(
        "h-2/5 flex flex-col justify-end w-full bg-gradient-to-b z-20 from-black/0 to-black/30 absolute bottom-0",
        {
          "animate-fade-out": !isMouseActive,
          "animate-fade-in": isMouseActive,
        },
      )}
    >
      <SeekBar />
    </div>
  );
}
