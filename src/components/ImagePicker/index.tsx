import { FC, ReactNode } from "react";
import { FilePicker } from "../FilePicker";

interface Props {
  uploadIcon?: ReactNode;
  onFileSelect(file: File | null): void;
  children?: ReactNode;
}

export const ImagePicker: FC<Props> = ({ uploadIcon, onFileSelect, children }) => {
  
  return (
    <div>
      <FilePicker className="border-dashed border-2 rounded-md w-24 p-2 my-3" onFileSelect={onFileSelect}>Add Photo</FilePicker>
    </div>
  );
};
