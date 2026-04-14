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
        <span>Full-Stack Developer & AI Engineer </span>
      </NameRoleDiv>

      <ProfileDiv>
        Full-Stack Developer & AI Engineer focused on building intelligent, scalable applications combining web technologies and AI.
      </ProfileDiv>

      <Button
        to='/#about'
        text='More About Me'
        icon={<FaRegArrowAltCircleRight />}
      />
    </TextDiv>
  );
};

export default Intro;
