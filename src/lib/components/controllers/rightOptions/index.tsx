import FullScreenButton from "./components/FullScreenButton.tsx";
import CaptionsButton from "./components/CaptionsButton.tsx";
import PictureInPictureButton from "./components/PictureInPictureButton.tsx";
import SettingsButton from "./components/SettingsButton.tsx";

export default function RightOptionPanel() {
  return (
    <div className="flex gap-2 items-center">
      <CaptionsButton />
      <PictureInPictureButton />
      <SettingsButton />
      <FullScreenButton />
    </div>
  );
}
