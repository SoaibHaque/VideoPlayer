import PlayerWrapper from "./PlayerWrapper.tsx";
import Video from "./Video.tsx";
import { PlayerContextProps } from "@context/PlayerContext.ts";

export interface VideoPlayerProps {
  src: PlayerContextProps["src"];
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <PlayerWrapper {...props}>
      <Video />
    </PlayerWrapper>
  );
}
