import { use } from "react";
import { cn } from "@utils/cn.ts";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function PlayerBottom() {
  const { isMouseActive } = use(PlayerContext);
  return (
    <div
      className={cn(
        "h-1/10 w-full bg-gradient-to-b z-20 from-black/0 to-black/20 absolute bottom-0",
        {
          "animate-fade-out": !isMouseActive,
          "animate-fade-in": isMouseActive,
        },
      )}
    >
        
    </div>
  );
}
