import {
  ContactContainer,
  ContactInfoDiv,
  ContactpageSecion,
  InfoDiv,
  LeftContactContainer,
  RightContactContainer,
} from "./style";
import Title from "../../reusable_components/title/Title";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import ContactInfo from "../../reusable_components/contact_info/ContactInfo";
import MyContactInfo from "../../data/Contact_info";
import Form from "../../components/form/Form";
import Social_Media from "../../components/social_media_icons/Social_Media";
import ScrollToTop from "../../components/scollTop/ScrollTop";
import { Footer } from "../../components/footer/Footer";
const Contactpage = () => {
  return (
    <ContactpageSecion>
      <ScrollToTop />
      <Title
        title='Get In'
        hilightTitle='Touch'
        widget='Contact'
      />
      <ContactContainer>
        <LeftContactContainer>
          <SmallTitle
            textAlign='left'
            title="DON'T BE SHY!"
          />

          <InfoDiv>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </InfoDiv>

          <ContactInfoDiv>
            {MyContactInfo.map((info, indes) => {
              return (
                <ContactInfo
                  key={indes}
                  title={info.title}
                  info={info.info}
                  icon={<info.icon />}
                />
              );
            })}
          </ContactInfoDiv>
          <Social_Media />
        </LeftContactContainer>

        <RightContactContainer>
          <Form />
        </RightContactContainer>
      </ContactContainer>
      <Footer />
    </ContactpageSecion>
  );
};

export default Contactpage;
