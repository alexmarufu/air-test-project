import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"div"> {}

export const Container: FC<Props> = ({ className, ...props }) => (
  <div
    {...props}
    className={twMerge(
      "bg-grey lg:w-[50%] w-full p-5 rounded-md text-black-jet mx-auto",
      className
    )}
  />
);
