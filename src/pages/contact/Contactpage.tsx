import {
  ContactContainer,
  ContactInfoDiv,
  ContactpageSecion,
  InfoDiv,
  LeftContactContainer,
} from "./style";
import Title from "../../reusable_components/title/Title";
import SmallTitle from "../../reusable_components/small_title/SmallTitle";
import ContactInfo from "../../reusable_components/contact_info/ContactInfo";
import MyContactInfo from "../../data/Contact_info";
const Contactpage = () => {
  return (
    <ContactpageSecion>
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
        </LeftContactContainer>
      </ContactContainer>
    </ContactpageSecion>
  );
};

export default Contactpage;
