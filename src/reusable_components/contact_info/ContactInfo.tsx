import { ReactNode } from "react";
import {
  ContactInfoDiv,
  IconDiv,
  InfoDiv,
  InfoTitleDiv,
  TextTitle,
} from "./style";

type ContactInfoProps = {
  title: string;
  info: string;
  icon: ReactNode;
};

function ContactInfo({ title, info, icon }: ContactInfoProps) {
  return (
    <ContactInfoDiv>
      <IconDiv>
        {icon}
      </IconDiv>
      <InfoTitleDiv>
        <TextTitle>
            {title}
        </TextTitle>
        <InfoDiv>
            {info}
        </InfoDiv>
      </InfoTitleDiv>
    </ContactInfoDiv>
  );
}

export default ContactInfo;
