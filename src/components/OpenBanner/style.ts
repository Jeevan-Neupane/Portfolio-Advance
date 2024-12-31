// components/transition/PageTransitionStyles.ts
import styled, { keyframes } from "styled-components";

// Slide animations for left and right directions
const slideIn = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Slide animations for top and down directions
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const TransitionWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none; /* Prevents interaction with the transition */
`;

export const Panel = styled.div<{ direction: "left" | "right" | "top" | "down" }>`
  position: absolute;
  top: 0;
  ${(props) => (props.direction === "left" ? "left: 0;" : props.direction === "right" ? "right: 0;" : "")}
  ${(props) => (props.direction === "top" ? "top: 0;" : props.direction === "down" ? "bottom: 0;" : "")}
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.lightBackground};
  z-index: 10000;

  animation: ${(props) =>
        props.direction === "left" || props.direction === "right"
            ? props.direction === "left"
                ? slideIn
                : slideOut
            : props.direction === "top"
                ? slideDown
                : slideUp} 1s ease forwards;
`;
