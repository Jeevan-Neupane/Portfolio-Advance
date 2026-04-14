import MySocialMedia from "../../data/Social_Media";
import MediaIcons from "../../reusable_components/media_icons/MediaIcons";
import { MediaIconsContainer } from "./style";

type SocialMediaProps = {
  floating?: boolean;
};

function Social_Media({ floating = false }: SocialMediaProps) {
  return (
    <MediaIconsContainer $floating={floating}>
      {MySocialMedia.map((item, index) => {
        return (
          <MediaIcons
            key={index}
            href={item.href}
            icon={<item.icon />}
          />
        );
      })}
    </MediaIconsContainer>
  );
}

export default Social_Media;
