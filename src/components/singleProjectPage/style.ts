import styled from "styled-components"
export const ProjectTitleContainer = styled.div`
transform: none !important;
text-align: left !important;
margin: 0 auto;
  width: 100%;
  margin-top: 2rem;

`


export const TitleDiv = styled.h1`
font-size: 3rem;
  font-weight: 700 !important;
  text-transform: uppercase;
  margin: 0;
  color:${props => props.theme.specialColor};
  text-align: center;


 
`

export const TagLineDiv = styled.p`
  font-size: 1.6rem;
  font-weight: 600 !important;
  text-transform: uppercase;
  color:${props => props.theme.singleProjectPage.lightTagColor};
  text-align: center;
  margin-bottom: 2rem;
  
`

//Project Slides 

export const SliderContainer = styled.div`
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

export const MediaWrapper = styled.div`
  width: 100%;
  height: 400px; /* Adjust this height for the slider */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Styled components for custom arrows
export const Arrow = styled.div`
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

export const LeftArrow = styled(Arrow)`
  left: -50px; /* Adjust left position */
`;

export const RightArrow = styled(Arrow)`
  right: -50px; /* Adjust right position */
`;


//Prtoject Description

export const DescriptionContainer = styled.div`
  margin-top: 3rem;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  &:last-child {
    margin-bottom: 2rem;
  }
  font-size: 1.6rem;
  text-align: justify;
`;

//Features
export const FeaturesContainer = styled.div`
margin-bottom:2rem;
`;

export const FeatHeading = styled.h2`
    font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  font-size: 1.6rem;
  line-height: 1.8;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TickIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #4caf50; /* Green color for the tick */
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
`;


//Project Links

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;


export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: #fff;
  }
`;

export const IconWrapper = styled.span`
  font-size: 1.2rem;
`;


//Tech Stack

export const TechStackContainer = styled.div`
  margin-bottom: 2rem;
`;



export const TechList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TechItem = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid #ddd;
  padding: 10px 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: #fff;
    border-color: #4caf50;
    cursor: pointer;
  }
`;

export const TechLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.singleProjectPage.textColor};

`;