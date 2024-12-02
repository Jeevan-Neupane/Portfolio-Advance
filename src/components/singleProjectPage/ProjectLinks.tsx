import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Heading, IconWrapper, LinksContainer, ProjectLink } from "./style";

interface ProjectLinksProps {
  links: {
    github: string;
    livePreview?: string;
    showLiveLabel?: boolean;
  };
}


const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const { github, livePreview, showLiveLabel = true } = links;

  return (
    <div>
      <Heading>Project Links</Heading>
      <LinksContainer>
        {/* GitHub Link */}
        <ProjectLink
          href={github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <IconWrapper>
            <FaGithub />
          </IconWrapper>
          GitHub Repository
        </ProjectLink>

        {/* Live Preview Link */}
        {livePreview && (
          <ProjectLink
            href={livePreview}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconWrapper>
              <FiExternalLink />
            </IconWrapper>
            {showLiveLabel ? "Live Preview" : ""}
          </ProjectLink>
        )}
      </LinksContainer>
    </div>
  );
};

export default ProjectLinks;
