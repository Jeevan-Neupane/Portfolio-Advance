import styled from "styled-components";
import { extraLargeScreen, largeScreen, mediumScreen, } from "../styles/responsive";

type MenuBarIconProps = {
    isOpen: boolean;
}

export const MenuBarIcon = styled.div<MenuBarIconProps>`
    

color:${({ theme }) => theme.mobileNavbarColor.menuBarColor};
font-size:4rem;
position:fixed;
top:1rem;
right:1rem;
cursor: pointer;

display:${({ isOpen }) => isOpen ? "none" : "block"};
z-index:1000;
display:none;


 ${extraLargeScreen(`
    display:none;
    `)}   

${largeScreen(`
    display:block;
    `)}
`

