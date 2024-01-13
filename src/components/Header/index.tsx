import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";
import { useWindowWidthResize } from "../../hooks/useWindowWidthResize";
import { midScreenSize } from "../../constants";
import { useAppSelector } from "../../hooks";

const Links = ({
  className,
  userToken,
}: {
  className?: string;
  userToken: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex font-semibold gap-x-2 gap-y-1.5 text-sm items-center",
        className
      )}
    >
      <Link to="">Airtime</Link>
      <Link to="">Products</Link>
      <Link to="">Contact Us</Link>
      {userToken ? (
        <Link to="">My Account</Link>
      ) : (
        <div className="flex items-center gap-x-2">
          <Button>Sign up</Button>
          <Button className="bg-white text-blue">Login</Button>
        </div>
      )}
    </div>
  );
};

interface Props {}

export const Header: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidthResize();
  const { user } = useAppSelector((state) => state.authReducer);
  const isSmallSize = windowWidth < midScreenSize;

  console.log(windowWidth, isSmallSize);
  useEffect(() => {
    if (!isSmallSize) {
      setOpen(true);
    }
  }, [windowWidth]);

  return (
    <div className="flex justify-between border-b py-2 px-3">
      <div className="font-bold">Logo</div>
      {open && (
        <Links
          className={twMerge(
            isSmallSize &&
              "flex-col items-start p-2 absolute shadow-md bg-white top-10 left-0 "
          )}
          userToken={user.token}
        />
      )}
      {isSmallSize && (
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full hover:bg-grey p-1"
        >
          <MdMenu />
        </button>
      )}
    </div>
  );
};
