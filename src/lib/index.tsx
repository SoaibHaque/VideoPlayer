import PlayerWrapper from "./components/PlayerWrapper.tsx";
import Video from "./components/Video.tsx";
import { PlayerContextProps } from "./context/PlayerContext.ts";

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
