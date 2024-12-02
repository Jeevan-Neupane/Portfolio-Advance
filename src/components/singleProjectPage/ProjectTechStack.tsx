import React from "react";
import { Heading, TechItem, TechLink, TechList, TechStackContainer } from "./style";

interface TechStackProps {
  technologies: { name: string; link: string }[];
}



const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <TechStackContainer>
      <Heading>Tech Stack</Heading>
      <TechList>
        {technologies.map((tech, index) => (
          <TechItem key={index}>
            <TechLink
              href={tech.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {tech.name}
            </TechLink>
          </TechItem>
        ))}
      </TechList>
    </TechStackContainer>
  );
};

export default TechStack;
