import styled from "styled-components"
export const ProjectTitleContainer = styled.div`
transform: none !important;
text-align: left !important;
margin: 0 auto;
  width: 100%;

`


export const TitleDiv = styled.h1`
font-size: 3rem;
  font-weight: 700 !important;
  text-transform: uppercase;
  margin: 0;
  color:${props => props.theme.specialColor};

 
`

export const TagLineDiv = styled.p`
  font-size: 1.6rem;
  font-weight: 600 !important;
  text-transform: uppercase;
  color:${props => props.theme.singleProjectPage.lightTagColor};
  
`
