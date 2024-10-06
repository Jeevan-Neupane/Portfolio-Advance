import MySocialMedia from "../../data/Social_Media";
import MediaIcons from "../../reusable_components/media_icons/MediaIcons";
import { MediaIconsContainer } from "./style";

function Social_Media() {
  return (
    <MediaIconsContainer>
      {MySocialMedia.map((item) => {
        return (
          <MediaIcons
            href={item.href}
            icon={<item.icon />}
          />
        );
      })}
    </MediaIconsContainer>
  );
}

export default Social_Media;
