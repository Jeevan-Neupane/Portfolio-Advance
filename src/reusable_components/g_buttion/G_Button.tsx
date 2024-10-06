import { ReactNode } from "react";
import { ButtonContainer, IconDiv } from "./style";

type ButtonProps = {
  href?: string;  // If provided, it renders as a download link
  download?: boolean; // If true, it triggers download behavior
  onClick?: () => void;  // If provided, it renders as a clickable button
  text: string;
  icon: ReactNode;
  submit?: boolean; // If true, it will act as a form submit button
};

function G_Button({ href, download, onClick, text, icon, submit }: ButtonProps) {
  // Download link rendering
  if (href && download) {
    return (
      <ButtonContainer as="a" href={href} download>
        <span>{text}</span>
        <IconDiv>{icon}</IconDiv>
      </ButtonContainer>
    );
  }

  // Form submit button rendering
  if (submit) {
    return (
      <ButtonContainer as="button" type="submit">
        <span>{text}</span>
        <IconDiv>{icon}</IconDiv>
      </ButtonContainer>
    );
  }

  // Regular button rendering with click action
  return (
    <ButtonContainer as="button" onClick={onClick}>
      <span>{text}</span>
      <IconDiv>{icon}</IconDiv>
    </ButtonContainer>
  );
}

export default G_Button;