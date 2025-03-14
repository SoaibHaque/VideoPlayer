import OptionItem from "@components/controllers/components/OptionItem.tsx";
import {
  Captions,
  Maximize,
  Minimize,
  PictureInPicture2Icon,
  Settings,
} from "lucide-react";
import { use } from "react";
import { PlayerContext } from "@context/PlayerContext.ts";

export default function RightOptionPanel() {
  const { containerRef, isFullScreen } = use(PlayerContext);
  const canLockOrientation =
    "orientation" in screen && "lock" in screen.orientation;

  async function handleFullScreen() {
    if (!containerRef?.current) return;
    containerRef.current.requestFullscreen().then(async () => {
      if (canLockOrientation) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        screen.orientation.lock("landscape").then(() => console.log("supported")).catch(() => console.log("Not Supported"));
      }
    });
  }

  async function handleExitFullScreen() {
    await document.exitFullscreen();
  }

  return (
    <div className="flex gap-2 items-center">
      <OptionItem Icon={<Captions />} />
      <OptionItem Icon={<PictureInPicture2Icon />} />
      <OptionItem Icon={<Settings />} />
      <OptionItem
        Icon={!isFullScreen ? <Maximize /> : <Minimize />}
        onClick={!isFullScreen ? handleFullScreen : handleExitFullScreen}
      />
    </div>
  );
}
