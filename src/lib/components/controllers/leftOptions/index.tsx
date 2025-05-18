import { SkipForward, Volume2 } from "lucide-react";
import OptionItem from "../components/OptionItem.tsx";
import Duration from "./components/Duration.tsx";

export default function LeftOptionPanel() {
  return (
    <div className="flex gap-2 items-center">
      <OptionItem Icon={SkipForward} />
      <OptionItem Icon={Volume2} />
      <Duration />
    </div>
  );
}
