
import { HomeContainer } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import BrandBar from "../../components/BrandBar";
import {JSX} from "react";

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <BrandBar />
      <Footer />
    </HomeContainer>
  );
};

export default Home;