import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  placeholder?: string
  value: string;
  onChange: (text: string) => void;
}

export const TextAreaInput: FC<Props> = ({ className, value, onChange, placeholder }) => {
  return (
    <textarea
      className={twMerge("w-full border rounded-md h-24 outline-none p-2", className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
