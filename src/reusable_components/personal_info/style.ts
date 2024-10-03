import styled from "styled-components";

export const InformationDiv = styled.li`
list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  font-weight: 400 !important;
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.6rem;
`

export const TitleDiv = styled.span`
color:#8b97a0;

`


export const InfoDiv = styled.span`
color:${props => props.theme.lighttextColor};
opacity: .8;
  text-transform: capitalize;
  font-weight:600;
`