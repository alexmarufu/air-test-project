import { FC, useState } from "react";
import { Page } from "../components/Page";
import { AirtimeProducts, ServiceOption } from "../components/AirtimeProducts";
import { Container } from "../components/Container";
import { Title } from "../components/Title";
import { AirtimeHeader } from "../components/AirtimeHeader";
import { Divider } from "../components/Divider";
import { ToggleButton } from "../components/ToggleButton";

const testArgs = [
  {
    CustomerFee: 124,
    DistributorFee: 8,
    ReceiveValue: 5,
    ReceiveCurrencyIso: 56,
    ReceiveValueExcludingTax: 14,
    TaxRate: 17,
    TaxName: null,
    TaxCalculation: null,
    SendValue: 20,
    SendCurrencyIso: 63,
  },
  {
    CustomerFee: 124,
    DistributorFee: 8,
    ReceiveValue: 5,
    ReceiveCurrencyIso: 56,
    ReceiveValueExcludingTax: 14,
    TaxRate: 17,
    TaxName: null,
    TaxCalculation: null,
    SendValue: 20,
    SendCurrencyIso: 63,
  },
  {
    CustomerFee: 124,
    DistributorFee: 8,
    ReceiveValue: 5,
    ReceiveCurrencyIso: 56,
    ReceiveValueExcludingTax: 14,
    TaxRate: 17,
    TaxName: null,
    TaxCalculation: null,
    SendValue: 20,
    SendCurrencyIso: 63,
  },
  {
    CustomerFee: 124,
    DistributorFee: 8,
    ReceiveValue: 5,
    ReceiveCurrencyIso: 56,
    ReceiveValueExcludingTax: 14,
    TaxRate: 17,
    TaxName: null,
    TaxCalculation: null,
    SendValue: 20,
    SendCurrencyIso: 63,
  },
];

interface Props {}

function onAmountSelect(amount: number) {
  //TODO
}

const country = {
  name: "America",
  flag: "data:image/png;base64,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",
};

const phoneNumber = 123456789;

const serviceOptions = ["Airtime", "Data"];

export const AirtimeProductsPage: FC<Props> = () => {
  const [service, setService] = useState<ServiceOption>("Airtime");
  return (
    <Page>
      <Container>
        <AirtimeHeader phoneNumber={phoneNumber} country={country} />
        <Divider className="mt-7 z-10" />
        <Title className="my-5">How much would you like to send?</Title>
        <ToggleButton
          value={service}
          options={serviceOptions}
          onChange={(val) => setService(val as ServiceOption)}
        />
        <AirtimeProducts
          onAmountSelect={onAmountSelect}
          airtimeProducts={testArgs}
          option={service}
          onServiceSelect={setService}
        />
      </Container>
    </Page>
  );
};
