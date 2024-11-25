import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled components for the slider
const SliderContainer = styled.div`
  width: 85%;
  margin: 0 auto;

  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 400px; /* Adjust this height for the slider */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Styled components for custom arrows
const Arrow = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 50%; /* Center the arrow vertically */
  transform: translateY(-50%); /* Ensure it's properly centered */
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  font-size: 3rem;
  @media (max-width: 768px) {
    display: none; /* Hide arrows on mobile view */
  }
`;

const LeftArrow = styled(Arrow)`
  left: -50px; /* Adjust left position */
`;

const RightArrow = styled(Arrow)`
  right: -50px; /* Adjust right position */
`;

// Define the type for slider media
interface SliderMediaItem {
  type: "image" | "video";
  url: string;
}

// Define props for the slideshow
interface ProjectSlideshowProps {
  media: SliderMediaItem[];
}

// Custom Arrow Components
const CustomLeftArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return <LeftArrow onClick={onClick}>&#8249;</LeftArrow>;
};

const CustomRightArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return <RightArrow onClick={onClick}>&#8250;</RightArrow>;
};

// The Slideshow Component
export const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({
  media,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {media.map((item, index) => (
          <MediaWrapper key={index}>
            {item.type === "image" ? (
              <StyledImage
                src={item.url}
                alt={`Slide ${index + 1}`}
              />
            ) : (
              <StyledVideo
                controls
                src={item.url}
              />
            )}
          </MediaWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
};
