import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';
import { CopyrightText, FooterContainer, FooterContent, Section, SocialLinks } from './style';



export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h3>Jeevan Neupane</h3>
          <p>Passionate developer building solutions for the future.</p>
        </Section>

        <Section>
          <h3>Social</h3>
          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <FaMedium />
            </a>
          </SocialLinks>
        </Section>
      </FooterContent>

      <CopyrightText>© {new Date().getFullYear()} Jeevan Neupane. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};
