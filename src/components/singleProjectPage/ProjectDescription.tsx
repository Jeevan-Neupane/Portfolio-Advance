import React from "react";
import styled from "styled-components";

interface ProjectDescriptionProps {
  paragraphOne: string;
  paragraphTwo: string;
}

const DescriptionContainer = styled.div`
  margin-top: 3rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  &:last-child {
    margin-bottom: 2rem;
  }
  font-size: 1.2rem;
  text-align: justify;
`;

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  paragraphOne,
  paragraphTwo,
}) => {
  return (
    <DescriptionContainer>
      <Heading>Overview</Heading>
      <Paragraph>{paragraphOne}</Paragraph>
      <Paragraph>{paragraphTwo}</Paragraph>
    </DescriptionContainer>
  );
};

export default ProjectDescription;
