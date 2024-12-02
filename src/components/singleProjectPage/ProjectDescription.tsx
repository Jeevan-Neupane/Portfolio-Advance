import React from "react";
import { DescriptionContainer, Heading, Paragraph } from "./style";

interface ProjectDescriptionProps {
  paragraphOne: string;
  paragraphTwo: string;
}



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
