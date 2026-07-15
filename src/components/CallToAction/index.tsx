import { FC } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {CTAContainer, CTAContent, Image} from "./styles";
import restaurant_food from "../../assets/restaurantfood.jpg";

const CallToAction: FC = () => {
  const navigate = useNavigate();
    // div style={{flexDirection:'column', flex:1, gap:'24px'}}
  return (
    <CTAContainer>
      <CTAContent>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
          <Button
              style={{width: '100%'}}
              onClick={() => navigate("/bookings")} aria-label="Go to reservation table page."
          >
              Reserve a Table
          </Button>

      </CTAContent>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </CTAContainer>
  );
};

export default CallToAction;