import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { extraLargeScreen, largeScreen, mediumScreen, smallScreen, mobileScreen, extraSmallScreen } from "../../styles/responsive";

export const MenuHeader = styled.div`

    ${extraLargeScreen(`
        display:block;
    `)}

    ${mediumScreen(`
        display:none;
    `)}

    

`

export const PrimaryMenu = styled.ul`
    position: fixed;
    right: 3rem;
    bottom: 0;
    z-index: 3;
    opacity: 1;
    top: 0;
    height: 100%;
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const MenuItem = styled.li`
    width: 5rem;
    height: 5rem;
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    transition: .3s;
    margin: 0 0 20px;
    border-radius: 50%;
    background: #2b2a2a;
    background-color: ${props => props.theme.lightBackground};
    text-align: center;
    justify-content: center;
    font-size:2rem;

    &:hover{
        background-color: ${props => props.theme.specialColor};
    }

    &:hover a{
        color: #fff;
    }

    &:hover span{
        right: 3rem;
        opacity: 1;
    }


    &.active {
    background-color: ${(props) => props.theme.specialColor};
    color: white;
  }
    

`

export const MenuName = styled.span`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    color: #fff;
    line-height: 50px;
    font-weight: 500;
    transition: all .3s;
    text-transform: uppercase;
    padding: 0 25px 0 30px;
    height: 5rem;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color:${props => props.theme.specialColor};

    
   
`

export const MenuLink = styled(NavLink)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.lightBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.lighttextColor};
  text-decoration: none;
  font-size: 2rem;
  transition: 0.3s;

  &:hover{
    background-color:${props => props.theme.specialColor};
  }

  &.active {
    background-color: ${(props) => props.theme.specialColor};
    color: white;
  }

  /* Target the sibling MenuName when MenuLink is active */
  &.active + ${MenuName} {
    background-color: ${(props) => props.theme.specialColor};
    color: white;
    opacity: 1;
    right: 3rem;
  }
`;


//* Mobile Navbar

export const SmallDeviceMenuBar = styled.div`

position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.mobileNavbarColor.mmbackgroundColor};
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.whiteTextColor}; 
`

export const CloseBarDiv = styled.div`
position:absolute;
font-size:3rem;
top:1rem;
right:1rem;
color:${({ theme }) => theme.mobileNavbarColor.menuBarColor};
cursor:pointer;

`
export const MobilePrimaryMenuDiv = styled.div`

`

export const MobilePrimaryMenu = styled.ul`
   
`


export const MobileMenuItem = styled.li`
    
list-style:none;
text-align:center;
padding:1rem;
margin:1rem;
    

`

export const MobileMenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.mobileNavbarColor.menuBarColor};
  font-size: 2rem;
  display:flex;
  align-items:center;
  gap:3rem;

  &.active {
    background-color: ${(props) => props.theme.specialColor};
    color: white;
  }

  &:hover{
    background-color:${props => props.theme.specialColor};
    color: white;

  }
  padding: 1rem;
  border-radius:1rem;
`

export const MobileMenuName = styled.span`
  `