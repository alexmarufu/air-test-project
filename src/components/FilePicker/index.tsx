import { FC, ReactNode } from "react";
import { MdFileUpload } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  uploadIcon?: ReactNode;
  onFileSelect(file: File | null): void;
  children?: ReactNode;
}

export const FilePicker: FC<Props> = ({
  className,
  onFileSelect,
  uploadIcon,
  children,
}) => {
  return (
    <label className={twMerge("text-dark flex justify-start", className)}>
      <div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => e.target.files && onFileSelect(e.target.files[0])}
        />
        <div className="text-center">
          {uploadIcon ?? (
            <MdFileUpload className="cursor-pointer mx-auto" size={30} />
          )}
          {children}
        </div>
      </div>
    </label>
  );
};
