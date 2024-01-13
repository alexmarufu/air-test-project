import { ComponentPropsWithoutRef, FC } from "react";
import { twMerge } from "tailwind-merge";

export const Title: FC<ComponentPropsWithoutRef<"h5">> = (props) => {
  return (
    <h5
      {...props}
      className={twMerge("text-2xl font-semibold my-1", props.className)}
    />
  );
};
