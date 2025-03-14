import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
} from "react";

export interface PlayerContextProps {
  ref: RefObject<HTMLVideoElement | null>;
  play: () => void;
  pause: () => void;
  src: string | { src: string; type?: string; quality?: number }[];
  isPlaying: boolean;
  isMouseActive: boolean;
  isEnded: boolean;
  setIsMouseActive: Dispatch<SetStateAction<boolean>>;
}

export const PlayerContext = createContext<PlayerContextProps>({
  src: "",
  pause: () => null,
  ref: createRef<HTMLVideoElement>(),
  play: () => null,
  isPlaying: false,
  isMouseActive: false,
  isEnded: false,
  setIsMouseActive: () => {},
});
