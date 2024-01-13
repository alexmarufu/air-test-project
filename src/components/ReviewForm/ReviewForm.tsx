import { FC, useCallback } from "react";
import { TextAreaInput } from "../TextAreaInput";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "../Button";
import { ImagePicker } from "../ImagePicker";
import { FilePicker } from "../FilePicker";

interface Props {
  className?: string;
  review: string;
  onReviewChange(value: string): void;
  rating: number;
  onRatingChange: (value: number) => void;
  onSubmit(): void;
  onFileSelect: (file: File | null) => void;
}

export const ReviewForm: FC<Props> = ({
  className,
  review,
  onReviewChange,
  rating,
  onRatingChange,
  onSubmit,
  onFileSelect,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <h5 className="text-lg mb-3">Add your review</h5>
      {/* <p>Please login to write review!</p> */}
      <Rating
        style={{ maxWidth: 90 }}
        onChange={onRatingChange}
        value={rating}
      />
      <TextAreaInput
        className="mt-4"
        placeholder="Write your review"
        value={review}
        onChange={onReviewChange}
      />
      <div>
        <FilePicker
          className="border-dashed border-2 rounded-md w-24 p-2 my-3"
          onFileSelect={onFileSelect}
        >
          Add Photo
        </FilePicker>
      </div>
      <Button className="px-5" type="submit">Submit</Button>
    </form>
  );
};
