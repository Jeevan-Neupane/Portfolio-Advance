import {
  AchievementBoxContainer,
  AchievementBoxWrapper,
  TitleText,
  YearsBox,
} from "./style";

type AchivementBoxProps = {
  year: string;
  title: string;
  subtitle: string;
};

const AchivementBox = ({ title, year, subtitle }: AchivementBoxProps) => {
  return (
    <AchievementBoxWrapper>
      <AchievementBoxContainer>
        <YearsBox>
          {year}

          <span>+</span>
        </YearsBox>
        <TitleText>
          {title}
          <br />
          {subtitle}
        </TitleText>
      </AchievementBoxContainer>
    </AchievementBoxWrapper>
  );
};

export default AchivementBox;
