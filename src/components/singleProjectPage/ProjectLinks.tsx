import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectLinksProps {
  links: {
    github: string;
    livePreview?: string;
    showLiveLabel?: boolean;
  };
}

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${(props) => props.theme.singleProjectPage.headingColor};
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.singleProjectPage.textColor};
  padding: 1rem 1.5rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: #fff;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
`;

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const { github, livePreview, showLiveLabel = true } = links;

  return (
    <div>
      <Heading>Project Links</Heading>
      <LinksContainer>
        {/* GitHub Link */}
        <Link
          href={github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          GitHub Repository
        </Link>

        {/* Live Preview Link */}
        {livePreview && (
          <Link
            href={livePreview}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconWrapper>
              <FiExternalLink />
            </IconWrapper>
            {showLiveLabel ? "Live Preview" : ""}
          </Link>
        )}
      </LinksContainer>
    </div>
  );
};

export default ProjectLinks;
