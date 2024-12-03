import { Link } from "react-router-dom";
import styled from "styled-components";
import { largeScreen, mediumScreen, mobileScreen } from "../../../styles/responsive";

export const TextDiv = styled.div`
width: 100%;
max-width: 65rem;
height: 100%;

${largeScreen
    `max-width: 52rem;`

  }
  ${mediumScreen(`
    
    display: flex;
    flex-direction: column;
    align-items: center;
`)}



`

export const NameRoleDiv = styled.h1`
font-size: 4.2rem;
line-height: 5rem;
text-transform: uppercase;
color:${props => props.theme.specialColor};
${mobileScreen(`
    font-size: 3.2rem;
    line-height: 4rem;
    `)}
span{
    color: #666;
    font-size: 3rem;
    display:block;
    ${mobileScreen(`
    font-size: 2rem;
    line-height: 4rem;
    `)}

}

${mediumScreen(`
    
   text-align:center;
`)}



`


export const ProfileDiv = styled.p`
margin: 1.5rem 0 2.8rem;
  font-size: 1.6rem;
  line-height: 3.5rem;
  color:${props => props.theme.lighttextColor};
text-align:justify;

${mediumScreen(`
    text-align:center;
`)}

${mobileScreen(`
    line-height: 2.5rem;
    padding: 0 2rem;  
    `)}

`


export const MoreAboutButton = styled(Link)`
  border: 2px solid ${props => props.theme.specialColor};
  display: flex;
  width: 24rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.lighttextColor}; /* Initial text color */
  text-decoration: none;
  font-size: 2rem;
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
`;
