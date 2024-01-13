import { AirtimeCheckout } from "../components/AirtimeCheckout";
import { Page } from "../components/Page";

function onCheckout() {}

export const AirtimeCheckoutPage = () => {
 
  
  const testProps = {
    operator: {
      name: "T-mobile",
      logo: "https://www.t-mobile.com/news/_admin/uploads/2020/06/T-Mobile_New_Logo_Primary_RGB_M-on-W.jpg",
    },
    phoneNumber: 12124445656,
    orderAmount: {
      receiveAmount: 25,
      amount: 10,
    },
    total: {
      subTotal: 15,
      fee: 10,
    },
  };

  return (
    <Page>
      <div className="flex justify-center">
        <AirtimeCheckout
          onCheckout={onCheckout}
          phoneNumber={testProps.phoneNumber}
          operator={testProps.operator}
          orderAmount={testProps.orderAmount}
          total={testProps.total}
        />
      </div>
    </Page>
  );
};
