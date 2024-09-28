import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuHeader = styled.div``

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

    

`


export const MenuLink = styled(Link)`
list-style: none;
text-align: center;
color:${props => props.theme.lighttextColor};



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