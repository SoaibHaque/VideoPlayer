import { HTMLProps, ReactNode } from "react";

export default function OptionItem({
  Icon,
  type = "button",
  ...props
}: {
  Icon: ReactNode;
} & Omit<HTMLProps<HTMLButtonElement>, "type"> & {
    type?: "submit" | "reset" | "button";
  }) {
  return (
    <button
      className="p-2 rounded-md hover:bg-white/10 cursor-pointer text-white transition-colors"
      type={type}
      {...props}
    >
      {Icon}
    </button>
  );
}
