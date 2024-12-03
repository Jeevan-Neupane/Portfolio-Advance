import React from 'react';
import { ContentContainer, DateText, DescriptionText, ImageGrid, ItemContainer, TitleText } from './style';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  images: string[];
}


export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  images,
}) => {
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
  return (
    <ItemContainer>
      <ContentContainer>
      <DateText>{formatDate(date)}</DateText>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
        <ImageGrid>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} image ${index + 1}`} />
          ))}
        </ImageGrid>
      </ContentContainer>
    </ItemContainer>
  );
};
