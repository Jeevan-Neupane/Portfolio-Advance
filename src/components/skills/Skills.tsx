import Progress from "../../reusable_components/progress/Progress";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import { SkillsContainer, SkillsSection } from "./style";

function Skills() {
  return (
    <>
      <SkillsSection>
        <SkillsContainer>
          <SmallTitle
            textAlign='center'
            title='Skills'
          />

          <Progress percentage={60}/>
        </SkillsContainer>
      </SkillsSection>
    </>
  );
}

export default Skills;
