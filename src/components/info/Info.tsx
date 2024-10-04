import AchivementBox from "../../reusable_components/achivement_box/AchivementBox";
import Personalinfo from "../../reusable_components/personal_info/Personalinfo";
import Seperator from "../../reusable_components/seprator/Seperator";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import {
  InfoContainer,
  InfoContainerDiv,
  InfoSection,
  LeftInfoContainer,
  LeftInfoDiv,
  LeftInfoListContainer,
  RightInfoDiv,
  RightInfoListContainer,
} from "./style";

const Info = () => {
  const personalInfoLeft = [
    { title: "First Name", info: " John" },
    { title: "Last Name", info: " Doe" },
    { title: "Age", info: " 25 Years" },
    { title: "Nationality", info: "American" },
    { title: "Freelance", info: "Available" },
  ];

  const personalInfoRight = [
    { title: "Address", info: "New York, USA" },
    { title: "Phone", info: "+123 456 7890" },
    { title: "Email", info: "jhon@gmail.com" },
    { title: "Languages", info: "English" },
    { title: "Hobbies", info: "Swimming" },
  ];

  const achievements = [
    { year: "12", title: "Years of", subtitle: "Experience" },
    { year: "81", title: "Happy", subtitle: "customers" },
    { year: "12", title: "Years of", subtitle: "Experience" },
    { year: "53", title: "Awards", subtitle: "Won" },
  ];

  return (
    <>
      <InfoSection>
        <InfoContainer>
          <LeftInfoDiv>
            <SmallTitle
              title='Personal Infos'
              textAlign='left'
            />
            <InfoContainerDiv>
              <LeftInfoContainer>
                <LeftInfoListContainer>
                  {personalInfoLeft.map((info, index) => (
                    <Personalinfo
                      key={index}
                      title={info.title}
                      info={info.info}
                    />
                  ))}
                </LeftInfoListContainer>
                <RightInfoListContainer>
                  {personalInfoRight.map((info, index) => (
                    <Personalinfo
                      key={index}
                      title={info.title}
                      info={info.info}
                    />
                  ))}
                </RightInfoListContainer>
                
              </LeftInfoContainer>
            </InfoContainerDiv>
          </LeftInfoDiv>
          <RightInfoDiv>
            {achievements.map((achievement, index) => (
              <AchivementBox
                key={index}
                year={achievement.year}
                title={achievement.title}
                subtitle={achievement.subtitle}
              />
            ))}
          </RightInfoDiv>
        </InfoContainer>
      </InfoSection>
      <Seperator />
    </>
  );
};

export default Info;
