import { IClassName } from "@app/shared/types";
import { twMerge } from "tailwind-merge";

interface IHeader extends IClassName {
  height: number;
}

export default function Header({ height, className }: IHeader) {
  return (
    <header
      style={{ height: `${height}px` }}
      className={twMerge(
        "border-b border-b-[#ccc] flex items-center px-[20px] font-bold",
        className
      )}
    >
      Header
    </header>
  );
}
