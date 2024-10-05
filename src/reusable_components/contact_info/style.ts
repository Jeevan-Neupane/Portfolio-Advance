import styled from "styled-components";

export const ContactInfoDiv = styled.div`
display: flex;
gap: 1rem;
margin-top:2rem;
`

export const IconDiv = styled.div`

font-size: 4rem;
color:${props=>props.theme.specialColor};   
display: flex;
align-items: center;
justify-content: center;
`

export const InfoTitleDiv = styled.div`
display: flex;
flex-direction: column;

justify-content: center;
line-height: 1.3;
`


export const TextTitle = styled.p`
font-size: 1.5rem;
color:${props=>props.theme.lighttextColor};
text-transform: uppercase;
`

export const InfoDiv = styled.p`
font-size: 1.2rem;
color:${props=>props.theme.lighttextColor};
font-weight: 600;
`