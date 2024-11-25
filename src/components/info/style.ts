import styled from "styled-components";
import { WrapperContainer } from "../../styles/Container";

export const InfoSection = styled.section`
`

export const InfoContainer = styled(WrapperContainer)`
max-width:1120px;
display: flex;
`

export const LeftInfoDiv = styled.div`
width:50%;

`

export const InfoContainerDiv = styled.div`

`

export const LeftInfoContainer = styled.div`
display: flex;
gap: 3rem;

`

export const LeftInfoListContainer = styled.ul``

export const RightInfoListContainer = styled.ul``


export const RightInfoDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;
`

export const DownloadButtonDiv = styled.div`
text-align:right;
padding-right:4rem;
`

export const DownloadButton = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  padding: 1.2rem 2rem;
  background-color: ${(props) => props.theme.backgroundColor};

  color: ${(props) => props.theme.textColor};   
  text-decoration: none;
  text-align: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size:1.2rem;
  font-weight:500;

  &:hover {
    background-color: ${(props) => props.theme.specialColor};
    color: ${(props) => props.theme.whiteTextColor};
  }
`;