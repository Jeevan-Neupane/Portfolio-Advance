import React from "react";
import { TimelineItem } from "./TimelineItem";
import { TimelineContainer } from "./style";

const events = [
  {
    date: '2020-09-01',
    title: "Started University",
    description: "Began studying Computer Science at XYZ University.",
    images: [
      "https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1730944042/vp9z8mt1oushfsszpdvg.jpg",
      "https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1730944042/vp9z8mt1oushfsszpdvg.jpg",
    ],
  },
  {
    date: '2021-06-15',
    title: "Internship",
    description: "Completed a summer internship at ABC Company.",
    images: ["https://via.placeholder.com/300"],
  },
  {
    date: '2021-06-15',
    title: "Graduated",
    description: "Graduated with honors and received my BSc degree.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
  },
];



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
