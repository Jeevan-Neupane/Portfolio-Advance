import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobileScreen, smallScreen } from "../../styles/responsive";


export const SingleProjectWrapper = styled.div`

border-radius:1rem;
padding:1rem;
border:1px solid ${props => props.theme.borderColor}; 
`

export const ProjectImageContainer = styled.div`
width:100%;
border-radius:1rem;
`



export const ProjectImage = styled.img`
width:100%;
border-radius:1rem;
`


export const ProjectTypeDiv = styled.div``

export const ProjectType = styled.p`
font-size:1.5rem;
font-weight:bold;
color:${props => props.theme.specialColor};
margin-top:1rem;

`

export const ProjectNameGithubDiv = styled.div`
display:flex;
justify-content:space-between;
margin-top:1rem;

${smallScreen(`
flex-direction:column;
`)}

`

export const ProjectNameDiv = styled.div`


`

export const ProjectName = styled.h3`
font-size:2rem;

${smallScreen(`

height:6rem;
`)}

`

export const GithubButton = styled.button`
text-decoration:none;
outline:none;
border:1px solid ${props => props.theme.borderColor};
border-radius:0.5rem;
font-size:1.5rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
a{
    
    padding-left:0.5rem;
    padding-right:0.5rem;
    color:${props => props.theme.lighttextColor};
    
    
}

&:hover{
    border:1px solid ${props => props.theme.specialColor};
    transition:0.5s ease;
}

a:hover{
    color:${props => props.theme.specialColor};
    transition:0.5s ease;
}

${smallScreen(`
margin-top:1rem;
padding:0.5rem;
font-size:2rem;
`)}

`


export const TechnologiesDiv = styled.div`
display:flex;
flex-wrap:wrap;
gap:1rem;
font-size:1.2rem;
margin-top:1.5rem;
margin-bottom:1rem;


`

export const Technologies = styled.p`
background-color:${props => props.theme.lightBackground};
padding:0.5rem;
border-radius:0.5rem;
color:${props => props.theme.lighttextColor};

${smallScreen(`
font-size:1.2rem;
`)}

`

export const DescriptionDiv = styled.div`
font-size:1.2rem;
text-align:justify;
height:8rem;

`

export const Description = styled.p`
color:${props => props.theme.lighttextColor};
padding:1rem;

`

export const ExpoloreButtonDiv = styled(Link)`
margin-top:1rem;
text-decoration:none;
`

export const ExpoloreButtonOuterDiv = styled.div`
`