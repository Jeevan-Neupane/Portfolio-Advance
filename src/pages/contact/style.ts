import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";
import { mediumScreen } from "../../styles/responsive";


export const ContactpageSecion = styled(WrapperContainer)`
max-width:1120px;
`

export const ContactContainer = styled(WrapperContainer)`

display: flex;
gap: 2rem;

${mediumScreen(`
flex-direction: column;
gap: 2rem;
`)}
margin-bottom:3rem;


`


export const LeftContactContainer = styled.div`
flex: 1;
`


export const InfoDiv = styled.p`
font-size: 1.4rem;
text-align: justify;
color: ${(props) => props.theme.lighttextColor};

`

export const ContactInfoDiv = styled.div`
margin-top: 2rem;
`

export const RightContactContainer = styled.div`
flex: 1;
border: 1px solid ${(props) => props.theme.borderColor};
border-radius:1rem;
${mediumScreen(`
width: 100%;
`)}
`