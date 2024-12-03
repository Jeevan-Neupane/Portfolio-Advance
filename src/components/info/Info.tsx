import {
  achievements,
  personalInfoLeft,
  personalInfoRight,
} from "../../data/about";
import AchivementBox from "../../reusable_components/achivement_box/AchivementBox";
import Personalinfo from "../../reusable_components/personal_info/Personalinfo";
import Seperator from "../../reusable_components/seprator/Seperator";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import DownloadCVButton from "./DownloadCVButton";
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
              <DownloadCVButton />
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
