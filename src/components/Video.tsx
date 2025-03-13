import { use } from "react";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function Video() {
  const { src, ref } = use(PlayerContext);

  return <video src={typeof src === "string" ? src : src[0].src} ref={ref} />;
}
