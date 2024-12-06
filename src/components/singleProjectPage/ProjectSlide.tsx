import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { LeftArrow, MediaWrapper, RightArrow, SliderContainer, StyledImage, StyledReactPlayerWrapper } from "./style";

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
              <StyledReactPlayerWrapper>
                <ReactPlayer
                  url={item.url}
                  playing={true} // Autoplay enabled
                  muted={true}  // Disable audio
                  controls={true} // Keep video controls
                  width="100%"
                  height="100%"
                />
              </StyledReactPlayerWrapper>
            )}
          </MediaWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
};
