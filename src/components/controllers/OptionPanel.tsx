import LeftOptionPanel from "@components/controllers/leftOptions/LeftOptionPanel.tsx";
import RightOptionPanel from "@components/controllers/rightOptions/RightOptionPanel.tsx";

export default function OptionPanel() {
  return (
    <div className="flex mx-4 mb-4 justify-between items-center">
      <LeftOptionPanel />
      <RightOptionPanel />
    </div>
  );
}
