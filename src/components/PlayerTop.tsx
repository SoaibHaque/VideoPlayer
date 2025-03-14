import { use } from "react";
import { cn } from "@utils/cn.ts";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function PlayerTop() {
  const { isMouseActive } = use(PlayerContext);
  return (
    <div
      className={cn(
        "h-1/10 flex flex-col justify-start w-full bg-gradient-to-b z-20 from-black/10 to-black/0 absolute top-0",
        {
          "animate-fade-out": !isMouseActive,
          "animate-fade-in": isMouseActive,
        },
      )}
    ></div>
  );
}
