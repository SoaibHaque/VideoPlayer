import { use } from "react";
import { PlayerContext } from "@context/PlayerContext";

export default function Duration() {
  const { ref } = use(PlayerContext);

  return (
    <div className="text-white text-sm">
      {ref?.current?.currentTime} / {ref?.current?.duration}
    </div>
  );
}
