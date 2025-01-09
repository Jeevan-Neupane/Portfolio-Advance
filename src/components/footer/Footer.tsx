import React from "react";

import {
  CopyrightText,
  FooterContainer,
  FooterContent,
  HorizontalLine,
  Section,
} from "./style";
import Social_Media from "../social_media_icons/Social_Media";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h3>Jeevan Neupane</h3>
          <p>Passionate developer building solutions for the future.</p>
        </Section>

        <Section>
          <Social_Media />
        </Section>
      </FooterContent>

      <HorizontalLine />
      <CopyrightText>
        © {new Date().getFullYear()} Jeevan Neupane. All rights reserved.
      </CopyrightText>
    </FooterContainer>
  );
};
