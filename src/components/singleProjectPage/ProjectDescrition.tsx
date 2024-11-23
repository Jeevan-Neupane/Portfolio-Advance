import styled from "styled-components";
const IntroContainer = styled.div`
  margin: 2rem 0;
`;

const IntroText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

interface IntroProps {
  description: string;
}

export const Introduction: React.FC<IntroProps> = ({ description }) => (
  <IntroContainer>
    <IntroText>{description}</IntroText>
  </IntroContainer>
);
