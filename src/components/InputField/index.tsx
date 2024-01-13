import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  value: string;
  onChange: (text: string) => void;
}

export const InputField: FC<Props> = ({ className, value, onChange }) => {
  return (
    <input
      className={twMerge("", className)}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
