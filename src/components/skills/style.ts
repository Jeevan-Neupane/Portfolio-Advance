import styled from "styled-components"
import { WrapperContainer } from "../../styles/Container"

export const SkillsSection = styled.section``

export const SkillsContainer = styled(WrapperContainer)`
max-width:1120px;

`

export const SkillsSetContainer = styled.div`
margin-top: 3rem;
display: flex;
gap: 1rem 10rem; 
flex-wrap: wrap;
justify-content: center;
align-items: center;
`


export const SkillsSetItem = styled.div`
padding: 1rem;
display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;
`


export const SkillTitle = styled.h3`
text-align: center;
font-size: 1.6rem;
text-transform: uppercase;
color:${props=>props.theme.lighttextColor};
`