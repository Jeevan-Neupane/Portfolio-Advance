import styled from "styled-components";


export const EandEwrapper = styled.div`
position:relative;

&::before{
    content: "";
  position: absolute;
  top: 0;
  left: 20px;
  bottom: 0;
  background-color:${props=>props.theme.lighttextColor};
  width: 2px;
  height:10rem;
}
`

export const EandEDurationDiv = styled.div`
padding:2rem;
padding:1rem 5rem;

`

export const IconDiv = styled.div`
width: 40px;
  height: 40px;
font-size: 20px;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content:  center;
  background-color:${props => props.theme.specialColor};
  position: absolute;
`

export const DurationDiv = styled.span`
font-size: 1.2rem;
  padding: .5rem 1rem;
  display: inline-block;
  margin-bottom: 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  background-color: #eeeeee;
  opacity: .8;
  color: #666;

`

export const Title = styled.h3`
font-size: 1.8rem;
color:${props=>props.theme.lighttextColor};
margin: 7px 0 10px;
`

export const Place = styled.span`

opacity: .8;
  font-weight: 600;
  font-size: 1.5rem;
  position: relative;
  padding-left: 2.6rem;
  text-transform: uppercase ;

&::before{
    position: absolute;
  content: '';
  width: 10px;
  height: 2px;
  background-color: ${props => props.theme.specialColor};
  left: 7px;
  top: 9px;
  opacity: .8;
}

`


export const Description = styled.p`
color:${props=>props.theme.lighttextColor};
font-size:1.6rem;

`

