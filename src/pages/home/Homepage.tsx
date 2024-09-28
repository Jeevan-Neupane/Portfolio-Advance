import Intro from "../../components/home/intro_home/Intro";
import MyImage from "../../components/home/my_photo/MyImage";
import { ColorBlock, HomeContainerDetails, IntroDiv } from "./style";

const Homepage = () => {
  return (
    <section>
      <ColorBlock />
      <HomeContainerDetails>
        <MyImage />
        <IntroDiv>
          <Intro />
        </IntroDiv>
      </HomeContainerDetails>
    </section>
  );
};

export default Homepage;
