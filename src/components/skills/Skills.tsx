import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import {
  SkillChip,
  SkillChipContainer,
  SkillGroupCard,
  SkillGroupTitle,
  SkillsContainer,
  SkillsSection,
  SkillsSetContainer,
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
            {SkillsSet.map((skillGroup) => (
              <SkillGroupCard key={skillGroup.category}>
                <SkillGroupTitle>{skillGroup.category}</SkillGroupTitle>
                <SkillChipContainer>
                  {skillGroup.items.map((skill) => (
                    <SkillChip key={skill}>{skill}</SkillChip>
                  ))}
                </SkillChipContainer>
              </SkillGroupCard>
            ))}
          </SkillsSetContainer>
        </SkillsContainer>
      </SkillsSection>
      <Seperator />
    </>
  );
}

export default Skills;
