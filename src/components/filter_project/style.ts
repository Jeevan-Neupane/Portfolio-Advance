import styled from "styled-components";

interface FilterButtonProps {
  isActive: boolean;
}

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.specialColor : "transparent"};
  color: ${(props) => (props.isActive ? "white" : props.theme.lighttextColor)};
  border: ${(props) =>
    props.isActive ? "2px solid transparent" : `2px solid ${props.theme.lighttextColor}`};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.specialColor};
    color: white;
  }
`;
