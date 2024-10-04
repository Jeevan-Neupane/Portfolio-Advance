import { ButtonContainer, IconDiv } from "./style";
import { ReactNode } from "react";

type ButtonProps = {
  to: string;
  text: string;
  icon: ReactNode;
};

function Button({ to, text, icon }: ButtonProps) {
  return (
    <ButtonContainer to={to}>
      <span>
        {text}
      </span>
        <IconDiv>{icon}</IconDiv>
    </ButtonContainer>
  );
}

export default Button;
