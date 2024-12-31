// PageTransition.tsx
import React, { useState, useEffect } from "react";
import { TransitionWrapper, Panel } from "./style";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const OpenBanner: React.FC<PageTransitionProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // End animation after 1s
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isAnimating && (
        <TransitionWrapper>
          <Panel direction='left' />
          <Panel direction='right' />
        </TransitionWrapper>
      )}
      {!isAnimating && children}
    </>
  );
};

export default OpenBanner;
