import React from "react";
import styled from "styled-components";

interface TechStackProps {
  technologies: { name: string; link: string }[];
}

const TechStackContainer = styled.div`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

const TechList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TechItem = styled.li`
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

const TechLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

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
