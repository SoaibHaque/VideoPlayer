import SkipBackButton from "./components/SkipBackButton.tsx";
import PlayButton from "./components/PlayButton.tsx";
import SkipForwardButton from "./components/SkipForwardButton.tsx";

export default function PlayOptionPanel() {
  return (
    <div className="absolute top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2 flex gap-6">
      <SkipBackButton />
      <PlayButton />
      <SkipForwardButton />
    </div>
  );
}
