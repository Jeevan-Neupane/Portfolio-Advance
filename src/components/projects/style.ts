import styled from "styled-components";
import { FaRegSadCry } from "react-icons/fa"; // Empty icon


export const ProjectSectionContainer = styled.div`


`


//Web development project styles

export const ProjectContainer = styled.div`
margin-top: 2rem;
`

export const ProjectsWrapper = styled.div`
display: grid;
  margin-top: 2rem;
  padding: 1rem;
  gap: 1rem;
  
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  

`


//* Project Title Styles

export const ProjectTitleContainer = styled.div`
transform: none !important;
text-align: left !important;
margin: 0 auto;
  width: 100%;

`


export const TitleDiv = styled.h1`
font-size: 3rem;
  font-weight: 900 !important;
  color: #fff !important;
  text-transform: uppercase;
  margin: 0;
  color: #666 !important;

  span{
  font-size: 3rem;
  font-weight: 900 !important;
  text-transform: uppercase;
  color:${props => props.theme.specialColor};
  }
`


//Empyt Div
// Styled components
export const Container = styled.div`
  text-align: center;
  padding: 2rem;
  border: 2px dashed #ccc;
  border-radius: 1rem;
  margin-top: 2rem;
  background-color: ${props => props.theme.lightBackground};

  margin-bottom:4rem;
  height:40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const EmptyIcon = styled(FaRegSadCry)`
  font-size: 50px;
  color: ${props => props.theme.specialColor};
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: ${props => props.theme.lighttextColor};
  font-size: 1.6rem;
`;