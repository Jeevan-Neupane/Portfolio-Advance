import Progress from "../../reusable_components/progress/Progress";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import {
  SkillsContainer,
  SkillsSection,
  SkillsSetContainer,
  SkillsSetItem,
  SkillTitle,
} from "./style";
import SkillsSet from "../../data/Skills";
import Seperator from "../../reusable_components/seprator/Seperator";

function Skills() {
  return (
    <>
      <SkillsSection>
        <SkillsContainer>
          <SmallTitle
            textAlign='center'
            title='Skills'
          />

          <SkillsSetContainer>
            {SkillsSet.map((skill, index) => (
              <SkillsSetItem>
                <Progress
                  key={index}
                  percentage={skill.percentage}
                  width={skill.width}
                  color={skill.color}
                  textSize={skill.textSize}
                />
                <SkillTitle>{skill.name}</SkillTitle>
              </SkillsSetItem>
            ))}
          </SkillsSetContainer>
        </SkillsContainer>
      </SkillsSection>
      <Seperator />
    </>
  );
}

export default Skills;
