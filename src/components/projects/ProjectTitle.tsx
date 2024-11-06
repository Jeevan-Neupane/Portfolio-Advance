import { ProjectTitleContainer, TitleDiv } from "./style";

type ProjectTitleProps = {
  title: string;
  hilightTitle?: string;
};

function ProjectTitle({ title, hilightTitle }: ProjectTitleProps) {
  return (
    <ProjectTitleContainer>
      <TitleDiv>
        {title} <span>{hilightTitle}</span>
      </TitleDiv>
    </ProjectTitleContainer>
  );
}

export default ProjectTitle;
