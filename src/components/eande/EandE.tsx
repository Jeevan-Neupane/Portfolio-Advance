import MyEducation from "../../data/Education";
import MyExperiences from "../../data/Experience";
import EandEDuration from "../../reusable_components/eande/EandEDuration";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import {
  EandEContainer,
  EandESection,
  EducationContainer,
  ExperienceContainer,
} from "./style";
function EandE() {
  return (
    <>
      <EandESection>
        <SmallTitle
          textAlign='center'
          title='Education & Experience'
        />
        <EandEContainer>
          <EducationContainer>
            {MyEducation.map((education, index) => {
              return (
                <EandEDuration
                  key={index}
                  title={education.title}
                  description={education.description}
                  from={education.from}
                  to={education.to}
                  icon={<education.icon />}
                  place={education.place}
                />
              );
            })}
          </EducationContainer>

          <ExperienceContainer>
            {MyExperiences.map((experience, index) => {
              return (
                <EandEDuration
                  key={index}
                  title={experience.title}
                  description={experience.description}
                  from={experience.from}
                  to={experience.to}
                  icon={<experience.icon />}
                  place={experience.place}
                />
              );
            })}
          </ExperienceContainer>
        </EandEContainer>
      </EandESection>
    </>
  );
}

export default EandE;
