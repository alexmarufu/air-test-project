import { FC } from "react";
import { ProductDetails } from "../components/ProductDetails";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <div>
      <ProductDetails
        photos={[]}
        socialShare={() => null}
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        review={""}
        onReviewChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        rating={0}
        onRatingChange={function (value: number): void {
          throw new Error("Function not implemented.");
        }}
        reviews={[]}
      />
    </div>
  );
};
