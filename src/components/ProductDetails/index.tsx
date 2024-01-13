import { FC, ReactNode, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../Button";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Review } from "../Review";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: ReactNode;
  photos: string[];
  socialShare(social: "twitter" | "instagram" | "facebook"): void;
  onSubmit(): void;
  review: string;
  onReviewChange(value: string): void;
  rating: number;
  reviews: {
    review: string;
    rating: number;
    user: {
      fullName: string;
    };
    date: string;
  }[];
  onRatingChange: (value: number) => void;
}

const testArgs = {
  id: 1,
  price: 900,
  totalQuantity: 6,
  name: "Pineapple Juice",
  reviews: [
    {
      id: 1,
      review: "Awsome",
      user: {
        name: "Colll",
      },
    },
  ],
  photos: [
    "https://cdn.localexpress.io/img/yecWbpJvIiOiLn1WaXZzV3YWNvI0MzN4ZhdjYSZmRjVGcq5iwiInOi02dWavIil2Ln1z52bjYlVzLTY1EmFDN0cuYjMjIn5Gc2ciwiISZ6l3Jye6M1ojImIsADQjOig91HMw.jpeg",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D",
    "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=",
  ],
  description:
    "Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.",
};

function tabs(value: number) {
  switch (value) {
    case value:
      break;

    default:
      break;
  }
}

function onFileSelect(file: File | null): void {}

const { photos, price, name, totalQuantity, description } = testArgs;

export const ProductDetails: FC<Props> = ({
  socialShare,
  review,
  onRatingChange,
  onReviewChange,
  rating,
  onSubmit,
  reviews,
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div>
      <div className="flex text-dark">
        <div className="border">
          <img src={photos[0]} />
        </div>
        <div className="lg:ml-3">
          <button className="text-sm text-[blue] underline underline-offset-4">
            Reviews
          </button>
          <div className="flex text-start items-center gap-x-2">
            <h5 className="text-lg font-semibold">{name}</h5>
            <span className="border-blue rounded-full px-2 py-1 font-bold ">
              {totalQuantity < 1 ? "Out of Stock" : "In Stock"}
            </span>
          </div>
          <h4 className="text-blue text-2xl font-bold">${price}</h4>
          <p className="my-8 w-[60%]">{description}</p>
          <div className="flex items-center gap-x-1">
            <div className="flex items-center gap-x-1 border bg-grey rounded-full p-1 px-1.5">
              <button>
                <HiOutlinePlusCircle size={25} />
              </button>
              <span>{2}</span>
              <button>
                <IoRemoveCircleOutline size={25} />
              </button>
            </div>
            <Button className="flex ml-2 text-sm p-1.5 px-2.5">
              <MdOutlineAddShoppingCart className="mr-0.5" size={20} />
              Add to cart
            </Button>
          </div>
          <div className="flex item-center gap-x-3 my-5">
            <h6 className="font-semibold">Share:</h6>
            <button onClick={() => socialShare("facebook")}>
              <FaFacebook size={25} />
            </button>
            <button onClick={() => socialShare("instagram")}>
              <IoLogoInstagram size={25} />
            </button>
            <button onClick={() => socialShare("twitter")}>
              <FaXTwitter size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="font-medium flex gap-x-3 my-4">
        <button
          onClick={() => setActiveTab("description")}
          className={twMerge(
            activeTab === "description" && "underline underline-offset-4"
          )}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={twMerge(
            activeTab === "reviews" && "underline underline-offset-4"
          )}
        >
          Reviews
        </button>
      </div>

      {activeTab === "description" ? (
        <div>Description</div>
      ) : (
        <>
          <ReviewForm
            review={review}
            onReviewChange={onReviewChange}
            rating={rating}
            onRatingChange={onRatingChange}
            onSubmit={onSubmit}
            onFileSelect={onFileSelect}
          />
          <h5 className="text-lg my-5">Customers reviews</h5>
          {reviews.map((item) => (
            <Review
              rating={item.rating}
              CustomerName={item.user.fullName}
              date={item.date}
              review={item.review}
            />
          ))}
        </>
      )}
    </div>
  );
};