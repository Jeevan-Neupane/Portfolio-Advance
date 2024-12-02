import styled from "styled-components";
import { mobileScreen } from "../../styles/responsive";


export const WidgetTitleContainer = styled.div`
position: relative;
`

export const TitleSectionDiv = styled.div`
transform: none !important;
text-align: center !important;
margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 70px 0;
`


export const TitleDiv = styled.h1`
font-size: 5.6rem;
  font-weight: 900 !important;
  color: #fff !important;
  text-transform: uppercase;
  margin: 0;
  color: #666 !important;

  span{
  font-size: 5.6rem;
  font-weight: 900 !important;
  text-transform: uppercase;
  color:${props => props.theme.specialColor};
  ${mobileScreen(`
  font-size: 4.2rem;
  `)}
  }

  ${mobileScreen(`
  font-size: 3.6rem;
  `)}
`


export const Widget = styled.span`
font-size: 10rem;
  left: 0;
  letter-spacing: 10px;
  line-height: 0.7;
  position: absolute;
  right: 0;
  top: 50%;
  text-transform: uppercase;
  font-weight: 800;
  
 transform: translateY(-50%);
 color: rgba(30, 37, 48, 0.07);

 ${mobileScreen(`
  font-size: 8rem;
  `)}

`



