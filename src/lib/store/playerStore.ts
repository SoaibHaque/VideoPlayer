import { create } from "zustand/react";
import { RefObject } from "react";

interface IPlayerStore {
  isPlaying: boolean;
  isFullScreen: boolean;
  isMouseActive: boolean;
  isEnded: boolean;
  play: (
    videoRef: RefObject<HTMLVideoElement | null>,
    containerRef: RefObject<HTMLDivElement | null>,
  ) => void;
  pause: (
    videoRef: RefObject<HTMLVideoElement | null>,
    containerRef?: RefObject<HTMLDivElement | null>,
  ) => void;
  setIsEnded: (isEnded: boolean) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsMouseActive: (isMouseActive: boolean) => void;
  setIsFullScreen: (isFullScreen: boolean) => void;
}

export const usePlayerStore = create<IPlayerStore>((set, get) => ({
  isPlaying: false,
  isFullScreen: false,
  isMouseActive: true,
  isEnded: false,
  play: (videoRef, containerRef) => {
    if (!videoRef.current) return;
    videoRef.current
      .play()
      .then(() => {
        set({ isPlaying: true });
        if (get().isEnded) set({ isEnded: false });
        if (!containerRef?.current) return;
        containerRef.current.classList.add("video-playing");
        containerRef.current.classList.remove("video-ended");
      })
      .catch((err) => console.log(err));
  },
  pause: (videoRef, containerRef) => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    set({ isPlaying: false });
    console.log(containerRef);
  },
  setIsEnded: (isEnded) => set({ isEnded }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setIsMouseActive: (isMouseActive) => set({ isMouseActive }),
  setIsFullScreen: (isFullScreen) => set({ isFullScreen }),
}));
