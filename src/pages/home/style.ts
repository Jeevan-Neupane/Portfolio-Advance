import styled from "styled-components";

export const ColorBlock = styled.div`
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  background-color: ${props => props.theme.specialColor};
`

export const HomeContainerDetails = styled.div`
display:flex;
flex-wrap: wrap;
height:100vh;
width:100%;


`

export const IntroDiv=styled.div`
text-align: center !important;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-left:22%;

`