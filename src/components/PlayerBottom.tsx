import SeekBar from "@components/controllers/SeekBar.tsx";
import OptionPanel from "@components/controllers/OptionPanel.tsx";

export default function PlayerBottom() {
  return (
    <div className="h-2/5 flex flex-col justify-end w-full bg-gradient-to-b z-20 from-black/0 to-black/30 absolute bottom-0 player-bottom-bar">
      <SeekBar />
      <OptionPanel />
    </div>
  );
}
