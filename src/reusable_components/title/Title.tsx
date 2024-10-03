import {
  TitleDiv,
  TitleSectionDiv,
  Widget,
  WidgetTitleContainer,
} from "./style";

type TitleProps = {
  title: string;
  hilightTitle?: string;
  widget?: string;
};

const Title = ({ title, hilightTitle, widget }: TitleProps) => {
  return (
    <WidgetTitleContainer>
      <TitleSectionDiv>
        <TitleDiv>
          {title} <span>{hilightTitle}</span>
        </TitleDiv>
        <Widget>{widget}</Widget>
      </TitleSectionDiv>
    </WidgetTitleContainer>
  );
};

export default Title;
