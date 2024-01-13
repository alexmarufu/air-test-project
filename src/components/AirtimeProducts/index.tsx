import { FC } from "react";
import { Button } from "../Button";
import { Title } from "../Title";

interface PricesInterface {
  CustomerFee: number;
  DistributorFee: number;
  ReceiveValue: number;
  ReceiveCurrencyIso: string;
  ReceiveValueExcludingTax: number;
  TaxRate: number;
  TaxName: null;
  TaxCalculation: null;
  SendValue: number;
  SendCurrencyIso: string;
}

export type ServiceOption = "Airtime" | "Data";

interface Props {
  option: ServiceOption;
  airtimeProducts: PricesInterface[];
  onAmountSelect(amount: number): void;
  onServiceSelect?: (service: "Airtime" | "Data") => void;
}

export const AirtimeProducts: FC<Props> = ({
  onAmountSelect,
  airtimeProducts,
}) => {
  return (
    <>
      <div className="grid gap-y-1.5">
        {airtimeProducts.map(({ SendValue }) => (
          <button
            key={SendValue}
            onClick={() => onAmountSelect(SendValue)}
            className="flex items-center justify-between p-2 bg-white border hover:border-blue rounded-lg"
          >
            <div className="font-medium text-2xl">{SendValue}</div>
            <div className="bg-blue rounded-full text-white font-semibold p-1 px-2">
              Select
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
