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
  from: string; // Expected format: "YYYY-MM-DD"
  to: string;   // Expected format: "YYYY-MM-DD"
  icon: ReactNode;
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr; // Handle invalid dates

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

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
          {formatDate(from)} - {formatDate(to)}
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
