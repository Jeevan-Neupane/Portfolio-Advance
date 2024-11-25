import React from "react";
import styled from "styled-components";

interface KeyFeaturesProps {
  features: string[];
}

const FeaturesContainer = styled.div`
margin-bottom:2rem;
`;

const Heading = styled.h2`
    font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  font-size: 1.2rem;
  line-height: 1.8;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TickIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #4caf50; /* Green color for the tick */
  border-radius: 50%;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
`;

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  return (
    <FeaturesContainer>
      <Heading>Key Features</Heading>
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <TickIcon>✔</TickIcon>
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
    </FeaturesContainer>
  );
};

export default KeyFeatures;
