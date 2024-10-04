import { ReactNode } from "react";
import {
  Description,
  DurationDiv,
  EandEDurationDiv,
  EandEwrapper,
  IconDiv,
  Place,
  Title,
} from "./style";

type EandEDurationProps = {
  title: string;
  place: string;
  description: string;
  from: string;
  to: string;
  icon: ReactNode;
};

function EandEDuration({
  title,
  place,
  description,
  from,
  to,
  icon,
}: EandEDurationProps) {
  return (
    <EandEwrapper>
        <IconDiv>{icon}</IconDiv>
      <EandEDurationDiv>
        <DurationDiv>
          {from}-{to}
        </DurationDiv>
        <Title>
          {title}
          <Place>{place}</Place>
        </Title>
        <Description>{description}</Description>
      </EandEDurationDiv>
    </EandEwrapper>
  );
}

export default EandEDuration;
