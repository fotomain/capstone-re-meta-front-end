import { FC, HTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }): any => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;