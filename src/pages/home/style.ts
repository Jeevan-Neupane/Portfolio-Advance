import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
import { mediumScreen, mobileScreen } from "../../styles/responsive";

export const HomePageSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
`;

export const HomeSection = styled(WrapperContainer)`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1120px;
  padding: 10rem 2rem;
  scroll-margin-top: 8rem;
`;

export const HomeSectionFull = styled(HomeSection)`
  max-width: 1440px;
`;

export const HomeProjectStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 4rem;
`;

export const HomeContactGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;

  ${mediumScreen(`
    flex-direction: column;
  `)}
`;

export const ColorBlock = styled.div`
  position: absolute;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  background-color: ${props => props.theme.specialColor};
  opacity: 0.18;
  pointer-events: none;
  z-index: 1;

  ${mediumScreen(`
    display:none;
  `)}
`

export const HomeContainerDetails = styled.div`
display:flex;
height:100vh;
width:100%;
display: flex;
align-items:center;
position: relative;
z-index: 2;
scroll-margin-top: 8rem;

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