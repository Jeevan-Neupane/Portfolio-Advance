import styled from "styled-components";

export const MediaIconsContainer = styled.a`
text-decoration: none;
`

export const IconDiv = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.lighttextColor};
  padding: 1rem;
  border-radius: 50%;
background-color:#eeeeee;
font-size: 1.6rem;
transition: 0.3s ease-in-out; 

&:hover{
    background-color: ${(props) => props.theme.specialColor};
    color: #fff;
}
  `


