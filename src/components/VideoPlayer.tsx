import PlayerWrapper from "./PlayerWrapper.tsx";
import Video from "./Video.tsx";
import { PlayerContextProps } from "../../context/PlayerContext.ts";

export interface VideoPlayerProps {
  src: PlayerContextProps["src"];
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <div className="bg-neutral-800 w-full aspect-video grid place-items-center">
      <PlayerWrapper {...props}>
        <Video />
      </PlayerWrapper>
    </div>
  );
}
