import { FC } from "react";
import { AirtimeOperators } from "../components/AirtimeOperators";
import { AirtimeHeader } from "../components/AirtimeHeader";
import { Page } from "../components/Page";
import { Container } from "../components/Container";
import { Divider } from "../components/Divider";

interface Props {}

const testProps = [
  {
    name: "T-Mobile",
    logoUrl:
      "https://www.t-mobile.com/news/_admin/uploads/2020/06/T-Mobile_New_Logo_Primary_RGB_M-on-W.jpg",
  },
  {
    name: "T-Mobile",
    logoUrl:
      "https://www.t-mobile.com/news/_admin/uploads/2020/06/T-Mobile_New_Logo_Primary_RGB_M-on-W.jpg",
  },
  {
    name: "T-Mobile",
    logoUrl:
      "https://www.t-mobile.com/news/_admin/uploads/2020/06/T-Mobile_New_Logo_Primary_RGB_M-on-W.jpg",
  },
];


export const AirtimeOperatorsPage: FC<Props> = () => {
 
  return (
    <Page>
      <Container>
        <AirtimeHeader />
        <Divider className="mt-7" />
        <AirtimeOperators
          operators={testProps}
        />
      </Container>
    </Page>
  );
};
