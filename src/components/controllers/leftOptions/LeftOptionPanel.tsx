import { SkipForward, Volume2 } from "lucide-react";
import OptionItem from "@components/controllers/components/OptionItem.tsx";
import Duration from "@components/controllers/leftOptions/components/Duration.tsx";

export default function LeftOptionPanel() {
  return (
    <div className="flex gap-2 items-center">
      <OptionItem Icon={<SkipForward />} />
      <OptionItem Icon={<Volume2 />} />
      <Duration />
    </div>
  );
}
