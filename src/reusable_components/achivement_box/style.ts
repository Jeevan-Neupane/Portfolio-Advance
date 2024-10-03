import styled from "styled-components";

export const AchievementBoxWrapper = styled.div`
border: 1px solid #f1f1f1;
width: 45%;
`
export const AchievementBoxContainer = styled.div`
padding: 2rem;

`


export const YearsBox = styled.h3`
display: inline-block;
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  line-height: 110%;

  span{
    font-size: 33px;
  }
    color:${promps => promps.theme.specialColor};
`

export const TitleText = styled.p`
text-transform:uppercase;
position: relative;


&::before{
    content: "";
  position: absolute;
  left: 0;
  top: 13px;
  width: 30px;
  height: 1px;
  background: #777;
}
text-align: center;
color:${promps => promps.theme.lighttextColor};

`

