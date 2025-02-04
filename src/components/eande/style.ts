import styled from "styled-components";

import { WrapperContainer } from "../../styles/Container";
import { mediumScreen, mobileScreen } from "../../styles/responsive";

export const EandESection = styled.section`
margin-bottom:5rem;

`


export const EandEContainer = styled(WrapperContainer)`
max-width:1120px;
display: flex;
align-items: center;
justify-content:center;
gap: 1rem 10rem;
margin-top: 3rem;

${mediumScreen(`
    flex-direction: column;
    gap: 3rem;
     align-items: center;
     justify-content: center;
     
    `)}
    
    ${mobileScreen(`
    gap: 3rem;
    `)}
`

export const EducationContainer = styled.div`
flex:1;

${mediumScreen(`
    width: 80%;
    
    `)}
    
    ${mobileScreen(`
    width: 100%;
    `)}
`


export const ExperienceContainer = styled.div`
flex:1;
margin-top: 10rem;
${mediumScreen(`
    width: 80%;
    
    `)}
    
    ${mobileScreen(`
    width: 100%;
    `)}


`