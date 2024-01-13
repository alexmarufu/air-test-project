import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";

interface Props {
    value: string;
    options: string[];
    onChange(value: string): void;

}

export const ToggleButton: FC<Props> = ({ value, options, onChange }) => {
    return (
        <div className="border mx-auto border-black-jet rounded-full w-[141.6px] my-5 z-10">
        {options.map((item) => (
          <Button
            key={item}
            onClick={() => onChange(item)}
            className={twMerge(
              "w-[70px]",
              value === item ? "bg-black-jet" : "text-black-jet bg-white"
            )}
          >
            {item}
          </Button>
        ))}
      </div>
    )
}