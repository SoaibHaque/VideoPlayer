import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
} from "react";

export interface PlayerContextProps {
  ref: RefObject<HTMLVideoElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  play: () => void;
  pause: () => void;
  src: string | { src: string; type?: string; quality?: number }[];
  isPlaying: boolean;
  isFullScreen: boolean;
  isMouseActive: boolean;
  isEnded: boolean;
  setIsMouseActive: Dispatch<SetStateAction<boolean>>;
}

export const PlayerContext = createContext<PlayerContextProps>({
  src: "",
  pause: () => null,
  ref: createRef<HTMLVideoElement>(),
  containerRef: createRef<HTMLDivElement>(),
  play: () => null,
  isPlaying: false,
  isFullScreen: false,
  isMouseActive: false,
  isEnded: false,
  setIsMouseActive: () => {},
});
