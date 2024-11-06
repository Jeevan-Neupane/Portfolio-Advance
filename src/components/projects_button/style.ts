import styled from "styled-components";
import { Link } from "react-router-dom";

type styleTypeProps = {
    isActive: boolean;
}

export const ProjectButtonsDiv = styled.div`
  text-align: center;
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
