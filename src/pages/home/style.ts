import styled from "styled-components";
import { extraLargeScreen, largeScreen, mediumScreen, smallScreen, mobileScreen, extraSmallScreen } from "../../styles/responsive";
export const ColorBlock = styled.div`
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  background-color: ${props => props.theme.specialColor};
  z-index: 1;

  ${mediumScreen(`
    display:none;
  `)}
`

export const HomeContainerDetails = styled.div`
display:flex;
height:100vh;
width:100vw;
display: flex;
align-items:center;

${mediumScreen(`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`)}
padding-left:2rem;

${mobileScreen(`
padding-left:0; 
`)}

`

export const IntroDiv = styled.div`

flex:6;

${mediumScreen(`
  flex:4;
`)}

${mobileScreen(`
   
  `)}

`