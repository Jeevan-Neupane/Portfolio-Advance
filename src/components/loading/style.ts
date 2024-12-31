// LoadingSpinnerStyles.ts
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full-screen height for centering
  background-color: ${(props) => props.theme.backgroundColor}; // Optional theme-based background
`;

export const Spinner = styled.div`
  border: 0.8rem solid ${(props) => props.theme.lightBackground};
  border-top: 0.8rem solid ${(props) => props.theme.specialColor};
  border-radius: 50%;
  width: 6.4rem;
  height: 6.4rem;
  animation: ${spin} 1s linear infinite;
`;
