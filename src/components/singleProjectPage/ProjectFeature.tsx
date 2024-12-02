import React from "react";
import {
  FeatHeading,
  FeatureItem,
  FeatureList,
  FeaturesContainer,
  TickIcon,
} from "./style";

interface KeyFeaturesProps {
  features: string[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ features }) => {
  return (
    <FeaturesContainer>
      <FeatHeading>Key Features</FeatHeading>
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
