import { FC } from "react";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { AirtimeHeader } from "../AirtimeHeader";
import { Title } from "../Title";
import { useAppSelector } from "../../hooks";
import { Container } from "../Container";

interface Props {
  onCheckout(): void;
}

export const AirtimeCheckout: FC<Props> = ({ onCheckout }) => {
  const { orderAmount } = useAppSelector((state) => state.airtimeOrderReducer);

  const totalAmout =
    orderAmount.subTotal &&
    orderAmount.fee &&
    orderAmount.subTotal + orderAmount.fee;

  return (
    <Container>
      <Title>Your order</Title>
      <AirtimeHeader />
      <div className="flex justify-between items-center text-lg mt-5">
        <span>Receives</span>
        <span className="font-semibold">${orderAmount.receiveAmount}</span>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div>Sub total</div>
        <div>${orderAmount.subTotal}</div>
      </div>
      <div className="flex justify-between items-center">
        <div>Fee</div>
        <div>${orderAmount.fee}</div>
      </div>
      <div className="flex justify-between items-center text-2xl">
        <div>Total</div>
        <div className="font-semibold">${totalAmout}</div>
      </div>
      <div className="flex">
        <Button onClick={onCheckout} className="my-4 px-5 mx-auto">
          Checkout
        </Button>
      </div>
    </Container>
  );
};
