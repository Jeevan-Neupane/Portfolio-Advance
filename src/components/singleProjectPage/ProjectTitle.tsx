import { ProjectTitleContainer, TagLineDiv, TitleDiv } from "./style";

type ProjectTitleProps = {
  title: string;
  tagline?: string;
};

function SingleProjectTitle({ title, tagline }: ProjectTitleProps) {
  return (
    <ProjectTitleContainer>
      <TitleDiv>
        {title} 
      </TitleDiv>
      <TagLineDiv>
        {tagline}
      </TagLineDiv>
    </ProjectTitleContainer>
  );
}

export default SingleProjectTitle;
