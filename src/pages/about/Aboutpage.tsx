import EandE from "../../components/eande/EandE";
import Info from "../../components/info/Info";
import Skills from "../../components/skills/Skills";
import Title from "../../reusable_components/title/Title";
import { AboutPageDiv } from "./style";

const Aboutpage = () => {
  return (
    <AboutPageDiv>
      <Title
        title='About'
        hilightTitle='Me'
        widget='Resume'
      />

      <Info />
      <Skills />
      <EandE />
    </AboutPageDiv>
  );
};

export default Aboutpage;
