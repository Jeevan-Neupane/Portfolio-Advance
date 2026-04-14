import G_Button from "../g_buttion/G_Button";
import {
  Description,
  DescriptionDiv,
  ExpoloreButtonDiv,
  ExpoloreButtonOuterDiv,
  GithubButton,
  ProjectImage,
  ProjectImageContainer,
  ProjectName,
  ProjectNameDiv,
  ProjectNameGithubDiv,
  ProjectType,
  ProjectTypeDiv,
  SingleProjectWrapper,
  Technologies,
  TechnologiesDiv,
} from "./style";
import { LuGithub } from "react-icons/lu";
type ProjectProps = {
  name: string;
  description: string;
  image: string;
  type: string;
  technologies: string[];
  github: string;
  projectPath?: string;
};
import { CiCircleMore } from "react-icons/ci";
function Project({
  image,
  name,
  description,
  github,
  technologies,
  type,
  projectPath,
}: ProjectProps) {
  return (
    <SingleProjectWrapper>
      <ProjectImageContainer>
        <ProjectImage
          src={image}
          alt={name}
        />
      </ProjectImageContainer>
      <ProjectTypeDiv>
        <ProjectType>{type}</ProjectType>
      </ProjectTypeDiv>

      <ProjectNameGithubDiv>
        <ProjectNameDiv>
          <ProjectName>{name}</ProjectName>
        </ProjectNameDiv>
        <GithubButton>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
          >
            <LuGithub />
          </a>
        </GithubButton>
      </ProjectNameGithubDiv>

      <TechnologiesDiv>
        {technologies.map((tech) => (
          <Technologies key={tech}>{tech}</Technologies>
        ))}
      </TechnologiesDiv>

      <DescriptionDiv>
        <Description>{description}</Description>
      </DescriptionDiv>
      <ExpoloreButtonOuterDiv>
        <ExpoloreButtonDiv
          to={projectPath ?? `${name}`}
          onClick={() => {
            if (window.location.pathname === "/") {
              window.sessionStorage.setItem(
                "homeScrollRestoreY",
                String(window.scrollY)
              );
            }
          }}
        >
          <G_Button
            icon={<CiCircleMore />}
            text='Explore More'
          />
        </ExpoloreButtonDiv>
      </ExpoloreButtonOuterDiv>
    </SingleProjectWrapper>
  );
}

export default Project;
