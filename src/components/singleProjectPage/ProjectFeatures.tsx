import styled from "styled-components";
const FeaturesContainer = styled.div`
  margin: 2rem 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;

  &:before {
    content: "✔️";
    margin-right: 0.5rem;
    color: green;
  }
`;

interface FeaturesProps {
  features: string[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => (
  <FeaturesContainer>
    <h2>Key Features</h2>
    <FeatureList>
      {features.map((feature, index) => (
        <FeatureItem key={index}>{feature}</FeatureItem>
      ))}
    </FeatureList>
  </FeaturesContainer>
);
