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
        <span>Web Developer & AI Enthusiast </span>
      </NameRoleDiv>

      <ProfileDiv>
        I am a web developer with a focus on the MERN stack and a passion for AI. I build user-friendly, scalable
        web applications and am constantly exploring cloud and AI technologies to enhance my work.
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
