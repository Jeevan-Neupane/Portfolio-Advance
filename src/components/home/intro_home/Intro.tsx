import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {

  NameRoleDiv,
  ProfileDiv,
  TextDiv,
} from "./style";
import Button from "../../../reusable_components/button/Button";

const Intro = () => {
  return (
    <TextDiv>
      <NameRoleDiv>
        I'M Jeevan Neupane
        <span>WEB DEVELOPER</span>
      </NameRoleDiv>

      <ProfileDiv>
        I'm a Nepal based web designer & front‑end developer focused on crafting
        clean & user‑friendly experiences, I am passionate about building
        excellent software that improves the lives of those around me.
      </ProfileDiv>

      <Button
        to='/about_me'
        text='More About Me'
        icon={<FaRegArrowAltCircleRight />}
      />
    </TextDiv>
  );
};

export default Intro;
