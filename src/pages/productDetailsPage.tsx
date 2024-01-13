import { FC, useCallback, useState } from "react";
import { ProductDetails } from "../components/ProductDetails";
import { Page } from "../components/Page";

interface Props {}

function socialShare(social: "twitter" | "instagram" | "facebook") {}

export const ProductDetailsPage: FC<Props> = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  //   const [state, setState] = useState({
  //     rating: 0,
  //     review: "",
  //   });

  const onSubmit = useCallback(() => {}, []);

  return (
    <Page>
      <ProductDetails
        rating={rating}
        onRatingChange={setRating}
        photos={[]}
        socialShare={socialShare}
        onSubmit={onSubmit}
        review={review}
        onReviewChange={setReview}
        reviews={[]}
      />
    </Page>
  );
};
