// LoadingSpinner.tsx
import React from "react";
import { SpinnerWrapper, Spinner } from "./style";

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
