
import { ConfirmationContainer } from "./styles";
import Header from "../../components/Header";
import ConfirmedBooking from "../../components/ConfirmedBooking";
import Footer from "../../components/Footer";
import {JSX} from "react";

const ConfirmationPage = (): JSX.Element => {
  return (
    <ConfirmationContainer>
      <Header />
      <ConfirmedBooking  />
      <Footer />
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;