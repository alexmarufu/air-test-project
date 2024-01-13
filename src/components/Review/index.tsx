import { FC } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface Props {
  CustomerName: string;
  date: string;
  rating: number;
  review: string;
  className?: string;
}

export const Review: FC<Props> = ({
  CustomerName,
  date,
  rating,
  review,
  className,
}) => {
  return (
    <div className={className}>
      <h5 className="font-semibold">
        {CustomerName}
        <span className="font-normal ml-4">{date}</span>
      </h5>
      <div>
        <Rating
          style={{ maxWidth: 90 }}
          readOnly
          value={rating}
        />
      </div>
      <p>{review}</p>
    </div>
  );
};
