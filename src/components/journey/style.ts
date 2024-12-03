import styled from "styled-components";


export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 2rem;
  border-left: .4rem solid ${(props) => props.theme.specialColor};
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 20px;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.specialColor};
    border-radius: 50%;
    border: 2px solid white;
    z-index: 1;
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
`;

export const DateText = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.JourneyPageStyle.dateTextColor};
  margin-bottom: 5px;
`;

export const TitleText = styled.h3`
  margin: 0;
  font-size:2rem;
  color: ${(props) => props.theme.JourneyPageStyle.titleColor};
`;

export const DescriptionText = styled.p`
  margin: .5rem 0 1.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.JourneyPageStyle.descriptionColor};
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); 
  gap: 1.5rem;

  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
    border-radius: .8rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
