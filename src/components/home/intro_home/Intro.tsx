import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {
  IconDiv,
  MoreAboutButton,
  NameRoleDiv,
  ProfileDiv,
  TextDiv,
} from "./style";

const Intro = () => {
  return (
    <TextDiv>
      <NameRoleDiv>
        I'M Jeevan Neupane
        <span>WEB DEVELOPER</span>
      </NameRoleDiv>

      <ProfileDiv>
        I'm a Nepal based web designer & front‑end developer focused on
        crafting clean & user‑friendly experiences, I am passionate about
        building excellent software that improves the lives of those around me.
      </ProfileDiv>

      <MoreAboutButton to='/about'>
        <span>More About Me</span>
        <IconDiv>
          <FaRegArrowAltCircleRight />
        </IconDiv>
      </MoreAboutButton>
    </TextDiv>
  );
};

export default Intro;
