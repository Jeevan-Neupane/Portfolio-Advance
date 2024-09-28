import { createGlobalStyle } from "styled-components";
import { computer, labtop, mobile, smallMobile, tab } from "./responsive";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;

    



     ${computer({


})}


${labtop({
    fontSize: "60%"
})}

${tab({
    fontSize: "55%"

})}

 ${mobile({
    fontSize: "50%"
})}
 ${smallMobile({
    fontSize: "38%"
})}
scroll-behavior:smooth;
}
body{
    font-family: "Poppins", sans-serif;
}

`

export default GlobalStyle;