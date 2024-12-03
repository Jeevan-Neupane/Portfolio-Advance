import { Footer } from "../../components/footer/Footer";
import { Timeline } from "../../components/journey/Timeline";
import ScrollToTop from "../../components/scollTop/ScrollTop";
import Title from "../../reusable_components/title/Title";
import { JourneySection } from "./style";

function JourneyPage() {
  return (
    <>
      <JourneySection>
        <ScrollToTop />
        <Title
          title='My '
          hilightTitle='Journey'
          widget='Timeline'
        />
        <Timeline />
      </JourneySection>
      <Footer />
    </>
  );
}

export default JourneyPage;
