import styled from "styled-components"
import { mobileScreen } from "../../../styles/responsive"
export const ImageDiv = styled.div`
  background-color:transparent;
  width:60rem;
  height:50rem;
  position:relative;
  z-index:2;
  flex:4;

  ${mobileScreen(`
    width:100%;
    height:100%;
    padding:0 2rem;
    
    `)}

 

`

export const MeOnImage = styled.img`
  width:100%;
  height:100%;
  object-fit:contain;

`