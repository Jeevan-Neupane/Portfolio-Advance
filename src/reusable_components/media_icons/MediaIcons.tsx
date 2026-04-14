import { ReactNode } from "react";
import { IconDiv, MediaIconsContainer } from "./style";

type MediaIconsProps = {
  href: string;
  icon: ReactNode;
};

function MediaIcons({ href, icon }: MediaIconsProps) {
  const isExternalHttpLink = href.startsWith("http://") || href.startsWith("https://");

  return (
    <MediaIconsContainer
      href={href}
      target={isExternalHttpLink ? "_blank" : undefined}
      rel={isExternalHttpLink ? "noopener noreferrer" : undefined}
    >
      <IconDiv>{icon}</IconDiv>
    </MediaIconsContainer>
  );
}

export default MediaIcons;
