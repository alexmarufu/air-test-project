import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Divider: FC<Props> = ({ className }) => {
  return <div className={twMerge("h-px w-full bg-grey-100 my-2", className)} />;
};
