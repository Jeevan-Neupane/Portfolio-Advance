import React from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineContainer } from "./style";
import { events } from "../../data/journey_events";





export const Timeline: React.FC = () => {
  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          date={event.date}
          title={event.title}
          description={event.description}
          images={event.images}
        />
      ))}
    </TimelineContainer>
  );
};
