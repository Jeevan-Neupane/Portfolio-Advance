import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
import { mediumScreen, mobileScreen } from "../../styles/responsive";

export const InfoSection = styled.section`
`

export const InfoContainer = styled(WrapperContainer)`
max-width:1120px;
display: flex;

${mediumScreen(`
  flex-direction: column;
  gap: 3rem;
   align-items: center;
   justify-content: center;
   
  `)}
`

export const LeftInfoDiv = styled.div`
width:50%;

${mediumScreen(`
  width: 80%;

  `)}

`

export const InfoContainerDiv = styled.div`

`

export const LeftInfoContainer = styled.div`
display: flex;
gap: 3rem;

${mediumScreen(`
  gap:10rem;

  `)}

  ${mobileScreen(`
  flex-direction: column;
  gap: 3rem;    
  `)}


`

export const LeftInfoListContainer = styled.ul``

export const RightInfoListContainer = styled.ul``


export const RightInfoDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;

${mediumScreen(`
  width: 80%;
  margin-top:3rem;

  `)}


`

export const DownloadButtonDiv = styled.div`
//Make it to right
display: flex;
  justify-content: flex-end; /* Change this to 'center' for center alignment */
  align-items: center;
  height: 100%; 
  padding-right: 4rem;

  ${mediumScreen(`
  padding-right: 0;
  margin-top: 2rem;
  `)}



`

export const DownloadButton = styled.a`
  border: 2px solid ${props => props.theme.specialColor};
  display: flex;
  width: 20rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.lighttextColor}; /* Initial text color */
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  position: relative;
  font-weight: 600;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.specialColor};
    z-index: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
    border-radius: 3rem; 
  }

  &:hover::before {
    transform: scaleX(1); 
    z-index: -1; 
  }

  &:hover {
    color: #fff; 
  }

  
  z-index: 1;
`;

export const IconDiv = styled.div`
font-size: 2rem;
  background-color: ${props => props.theme.specialColor};
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  color: #fff;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2; 

`