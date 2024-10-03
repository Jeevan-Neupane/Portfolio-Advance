import { SmallTitleText, SmallTitleWrapper } from "./style";

type SmallTitleProps = {
  title: string;
  textAlign: string;
};

const SmallTitle = ({ title, textAlign }: SmallTitleProps) => {
  return (
    <SmallTitleWrapper align={textAlign}>
      <SmallTitleText>{title}</SmallTitleText>
    </SmallTitleWrapper>
  );
};

export default SmallTitle;
