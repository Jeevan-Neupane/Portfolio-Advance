import React from "react";
import styled from "styled-components";

const LaptopContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  aspect-ratio:1/1;
  
`;

const LaptopImage = styled.img`
  width: 100%;
    height: 100%;
`;

const ScreenOverlay = styled.div`
  position: absolute;
  top: 14%; /* Adjust depending on the mockup's screen position */
  left: 17.4%;
  width: 65%; /* Adjust to fit the laptop screen */
  height: 37%; /* Adjust to fit the laptop screen */
  background-color: transparent;
  border-radius: 10px; /* Optional: for rounded screen corners */
  background-color: green;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

interface LaptopWithScreenProps {
  laptopImage: string;
  projectImage: string;
  altText: string;
}

export const LaptopWithScreen: React.FC<LaptopWithScreenProps> = ({
  laptopImage,
  projectImage,
  altText,
}) => {
  return (
    <LaptopContainer>
      <LaptopImage
        src={laptopImage}
        alt='Laptop Mockup'
      />
      <ScreenOverlay>
        <ProjectImage
          src={projectImage}
          alt={altText}
        />
      </ScreenOverlay>
    </LaptopContainer>
  );
};
