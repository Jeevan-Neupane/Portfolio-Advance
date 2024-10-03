import { InfoDiv, InformationDiv, TitleDiv } from "./style";

type PersonalinfoProps = {
  title: string;
  info: string;
};

const Personalinfo = ({ title, info }: PersonalinfoProps) => {
  return (
    <InformationDiv>
      <TitleDiv>{title}</TitleDiv>
      <span> : </span>
      <InfoDiv>{info}</InfoDiv>
    </InformationDiv>
  );
};

export default Personalinfo;
