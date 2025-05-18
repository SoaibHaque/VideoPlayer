import { use, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";
import { usePlayerStore } from "@store/playerStore";
import { PlayerContext } from "@context/PlayerContext";
import OptionItem from "@components/controllers/components/OptionItem";

type OrientationLockType =
  | "any"
  | "natural"
  | "landscape"
  | "portrait"
  | "portrait-primary"
  | "portrait-secondary"
  | "landscape-primary"
  | "landscape-secondary";

interface IScreenOrientation extends ScreenOrientation {
  lock(orientation: OrientationLockType): Promise<void>;
}

export default function FullScreenButton() {
  const { containerRef } = use(PlayerContext);
  const isFullScreen = usePlayerStore((state) => state.isFullScreen);
  const setIsFullScreen = usePlayerStore((state) => state.setIsFullScreen);

  const canLockOrientation =
    typeof screen !== "undefined" &&
    screen.orientation &&
    typeof (screen.orientation as IScreenOrientation).lock === "function";

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [setIsFullScreen]);

  async function handleFullScreen() {
    if (!containerRef?.current) return;

    try {
      await containerRef.current.requestFullscreen();

      if (canLockOrientation) {
        try {
          await (screen.orientation as IScreenOrientation).lock("landscape");
          console.log({ message: "Orientation lock supported" });
        } catch (error) {
          console.log({ message: "Orientation lock not supported", error });
        }
      }

      setIsFullScreen(true);
    } catch (error) {
      console.error({ message: "Error entering fullscreen:", error });
    }
  }

  async function handleExitFullScreen() {
    try {
      await document.exitFullscreen();
      setIsFullScreen(false);
    } catch (error) {
      console.error({ message: "Error exiting fullscreen:", error });
    }
  }

  return (
    <OptionItem
      Icon={!isFullScreen ? Maximize : Minimize}
      onClick={!isFullScreen ? handleFullScreen : handleExitFullScreen}
    />
  );
}
