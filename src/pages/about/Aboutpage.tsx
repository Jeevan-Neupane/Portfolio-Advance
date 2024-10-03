import Info from "../../components/info/Info";
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
    </AboutPageDiv>
  );
};

export default Aboutpage;
