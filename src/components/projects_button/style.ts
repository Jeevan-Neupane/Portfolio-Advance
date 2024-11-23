import styled from "styled-components";
import { Link } from "react-router-dom";

type styleTypeProps = {
  isActive: boolean;
}

export const ProjectButtonsDiv = styled.div`
 
  border: 1px solid ${(props) => props.theme.lighttextColor};
  width:fit-content;
  margin: 0 auto;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
  
`;

export const ProjectButton = styled.button<styleTypeProps>`
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? props.theme.specialColor : "transparent"};
  color: ${(props) =>
    props.isActive ? "white" : props.theme.lighttextColor};

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.specialColor};
  }

`;

export const ProjectButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.lighttextColor};

  &:hover {
    color: white;
  }
`;
