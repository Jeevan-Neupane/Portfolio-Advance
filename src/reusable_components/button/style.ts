import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled(Link)`
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

`

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