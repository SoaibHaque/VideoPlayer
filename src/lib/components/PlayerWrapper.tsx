import { ReactNode } from "react";
import { VideoPlayerProps } from "../index.tsx";
import PlayerProvider from "@providers/PlayerProvider.tsx";
import PlayerTop from "./PlayerTop.tsx";
import PlayerBottom from "./PlayerBottom.tsx";
import PlayerTouchSection from "./PlayerTouchSection.tsx";
import PlayOptionPanel from "./controllers/playOptions";

export default function PlayerWrapper({
  children,
  src,
}: {
  children: ReactNode;
  src: VideoPlayerProps["src"];
}) {
  return (
    <PlayerProvider src={src}>
      <PlayerTop />
      <PlayOptionPanel />
      {children}
      <PlayerTouchSection />
      <PlayerBottom />
    </PlayerProvider>
  );
}
