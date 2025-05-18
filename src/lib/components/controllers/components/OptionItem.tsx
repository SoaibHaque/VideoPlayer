import { HTMLProps,  SVGProps } from "react";

export default function OptionItem({
  Icon,
  type = "button",
  ...props
}: {
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
} & Omit<HTMLProps<HTMLButtonElement>, "type"> & {
    type?: "submit" | "reset" | "button";
  }) {
  return (
    <button
      className="p-2 rounded-md hover:bg-white/10 cursor-pointer text-white transition-colors"
      type={type}
      {...props}
    >
      <Icon className='size-3 md:size-4 lg:size-5' />
    </button>
  );
}
