import { FC } from "react";
import { Button } from "../Button";
import { twMerge } from "tailwind-merge";
import { Title } from "../Title";
import { useAppSelector } from "../../hooks";

interface Props {
  className?: string;
}

export const AirtimeHeader: FC<Props> = ({
  className,
}) => {
  const { phoneNumber, operator, orderAmount, country } = useAppSelector(
    (state) => state.airtimeOrderReducer
  );

  return (
    <>
      <Title className="mb-5">Top up details</Title>
      <div className={twMerge("grid gap-y-1 font-medium", className)}>
        {country?.name && country?.flag && (
          <div className="flex justify-between items-center">
            <div>
              Country: <span className="pl-1">{country.name}</span>{" "}
            </div>
            <img
              className="h-4"
              src={country.flag}
              alt={`${country.name} flag`}
            />
            <Button className="p-0 m-0 text-blue bg-white">Edit</Button>
          </div>
        )}
        {phoneNumber && (
          <div className="flex justify-between items-center">
            <div>
              Phone: <span className="pl-1">{phoneNumber}</span>
            </div>
            <Button className="p-0 m-0 text-blue bg-white">Edit</Button>
          </div>
        )}
        {operator?.name && operator?.logoUrl && (
          <div className="flex justify-between items-center">
            <div>
              Operator: <span className="pl-1">{operator.name}</span>{" "}
            </div>
            <img className="h-4" src={operator.logoUrl} />
            <Button className="p-0 m-0 text-blue bg-white">Edit</Button>
          </div>
        )}
        {orderAmount.subTotal && orderAmount.fee && (
          <div className="flex justify-between items-center">
            <div>
              Amount:{" "}
              <span className="pl-1 text-dark font-bold">
                ${orderAmount.subTotal + orderAmount.fee}
              </span>{" "}
            </div>
            <Button className="p-0 m-0 text-blue bg-white">Edit</Button>
          </div>
        )}
      </div>
    </>
  );
};
