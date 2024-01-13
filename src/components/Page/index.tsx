import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "../Header";

interface Props {
  className?: string;
  columnSize?: number;
  children: ReactNode;
}

function getGridColumnSize(columns?: number) {
  switch (columns) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 4:
      return "grid-cols-3";
    default:
      return "grid-cols-4";
  }
}

export const Page = ({ children, className }: Props) => {
  return (
    <div className={twMerge("lg:mx-[13%]", className)}>
      <Header />
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};
