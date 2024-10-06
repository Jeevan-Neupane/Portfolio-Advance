import { ReactNode } from "react";
import { IconDiv, MediaIconsContainer } from "./style";

type MediaIconsProps = {
  href: string;
  icon: ReactNode;
};

function MediaIcons({ href, icon }: MediaIconsProps) {
  return (
    <MediaIconsContainer href={href} target="_blank">
      <IconDiv>{icon}</IconDiv>
    </MediaIconsContainer>
  );
}

export default MediaIcons;
