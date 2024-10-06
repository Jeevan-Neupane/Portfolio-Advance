import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";


export const ContactpageSecion = styled.section`

`

export const ContactContainer = styled(WrapperContainer)`
max-width:1120px;
display: flex;

`


export const LeftContactContainer = styled.div`
flex: 1;
`


export const InfoDiv=styled.p`
font-size: 1.4rem;
text-align: justify;
color: ${(props) => props.theme.lighttextColor};

`

export const ContactInfoDiv = styled.div`
margin-top: 2rem;
`

export const RightContactContainer = styled.div`
flex: 1;

`