import { createContext, createRef, RefObject } from "react";

export interface PlayerContextProps {
  ref: RefObject<HTMLVideoElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  src: string | { src: string; type?: string; quality?: number }[];
}

export const PlayerContext = createContext<PlayerContextProps>({
  src: "",
  ref: createRef<HTMLVideoElement>(),
  containerRef: createRef<HTMLDivElement>(),
});
