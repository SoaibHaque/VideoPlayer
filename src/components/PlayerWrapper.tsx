import { ReactNode } from "react";
import { VideoPlayerProps } from "./VideoPlayer.tsx";
import PlayerTop from "./PlayerTop.tsx";
import PlayerBottom from "./PlayerBottom.tsx";
import PlayerTouchSection from "./PlayerTouchSection.tsx";
import PlayerPlayButton from "./PlayerPlayButton.tsx";
import PlayerProvider from "@providers/PlayerProvider.tsx";

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
      <PlayerPlayButton />
      {children}
      <PlayerTouchSection />
      <PlayerBottom />
    </PlayerProvider>
  );
}
