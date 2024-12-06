import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.footerColor.footerBackground};
  color: ${(props) => props.theme.footerColor.footerTextColor};
  padding: 2rem 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 75rem; 
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }

  
`;

export const Section = styled.div`
  margin: 1rem 0;
  text-align: center;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin-top: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    font-size: 2rem; 
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.footerColor.socialLinkHover};
    }
  }
`;

export const CopyrightText = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
`;

export const HorizontalLine = styled.hr`
width:50%;
margin:0 auto;

`