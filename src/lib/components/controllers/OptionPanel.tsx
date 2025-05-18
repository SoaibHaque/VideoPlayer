import LeftOptionPanel from "./leftOptions";
import RightOptionPanel from "./rightOptions";

export default function OptionPanel() {
  return (
    <div className="flex mx-4 mb-4 justify-between items-center">
      <LeftOptionPanel />
      <RightOptionPanel />
    </div>
  );
}
