import{d as o,l,m as r,a as i,L as n,j as t,F as d}from"./index-CpXTxkxy.js";const c=o.div`
width: 100%;
max-width: 65rem;
height: 100%;

${l`max-width: 52rem;`}
  ${r(`
    
    display: flex;
    flex-direction: column;
    align-items: center;
`)}



`,h=o.h1`
font-size: 4.2rem;
line-height: 5rem;
text-transform: uppercase;
color:${e=>e.theme.specialColor};
${i(`
    font-size: 3.2rem;
    line-height: 4rem;
    `)}
span{
    color: #666;
    font-size: 3rem;
    display:block;
    ${i(`
    font-size: 2rem;
    line-height: 4rem;
    `)}

}

${r(`
    
   text-align:center;
`)}



`,m=o.p`
margin: 1.5rem 0 2.8rem;
  font-size: 1.6rem;
  line-height: 3.5rem;
  color:${e=>e.theme.lighttextColor};
text-align:justify;

${r(`
    text-align:center;
`)}

${i(`
    line-height: 2.5rem;
    padding: 0 2rem;  
    `)}

`;o(n)`
  border: 2px solid ${e=>e.theme.specialColor};
  display: flex;
  width: 24rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${e=>e.theme.lighttextColor}; /* Initial text color */
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 2rem;
  position: relative;
  font-weight: 600;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.specialColor};
    z-index: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
    border-radius: 3rem; 
  }

  &:hover::before {
    transform: scaleX(1); 
    z-index: -1; 
  }

  &:hover {
    color: #fff; 
  }

  
  z-index: 1;
`;o.div`
  font-size: 2rem;
  background-color: ${e=>e.theme.specialColor};
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  color: #fff;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2; 
`;const f=o(n)`
border: 2px solid ${e=>e.theme.specialColor};
  display: flex;
  width: 24rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${e=>e.theme.lighttextColor}; /* Initial text color */
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 2rem;
  position: relative;
  font-weight: 600;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${e=>e.theme.specialColor};
    z-index: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
    border-radius: 3rem; 
  }

  &:hover::before {
    transform: scaleX(1); 
    z-index: -1; 
  }

  &:hover {
    color: #fff; 
  }

  
  z-index: 1;

`,g=o.div`
font-size: 2rem;
  background-color: ${e=>e.theme.specialColor};
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  color: #fff;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  z-index: 2; 

`;function p({to:e,text:s,icon:a}){return t.jsxs(f,{to:e,children:[t.jsx("span",{children:s}),t.jsx(g,{children:a})]})}const x=()=>t.jsxs(c,{children:[t.jsxs(h,{children:["I'M Jeevan Neupane",t.jsx("span",{children:"Web Developer & AI Enthusiast "})]}),t.jsx(m,{children:"I am a web developer with a focus on the MERN stack and a passion for AI. I build user-friendly, scalable web applications and am constantly exploring cloud and AI technologies to enhance my work."}),t.jsx(p,{to:"/about_me",text:"More About Me",icon:t.jsx(d,{})})]}),u=o.div`
  background-color:transparent;
  width:60rem;
  height:50rem;
  position:relative;
  z-index:2;
  flex:4;

  ${i(`
    width:100%;
    height:100%;
    padding:0 2rem;
    
    `)}

 

`,b=o.img`
  width:100%;
  height:100%;
  object-fit:contain;

`,v=()=>t.jsx(u,{children:t.jsx(b,{src:"https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1730944042/vp9z8mt1oushfsszpdvg.jpg",alt:"Me_Jeevan_Neupane"})}),j=o.div`
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
  background-color: ${e=>e.theme.specialColor};
  z-index: 1;

  ${r(`
    display:none;
  `)}
`,w=o.div`
display:flex;
height:100vh;
width:100vw;
display: flex;
align-items:center;

${r(`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`)}
padding-left:2rem;

${i(`
padding-left:0; 
`)}

`,$=o.div`

flex:6;

${r(`
  flex:4;
`)}

${i(`
   
  `)}

`,y=()=>t.jsxs("section",{children:[t.jsx(j,{}),t.jsxs(w,{children:[t.jsx(v,{}),t.jsx($,{children:t.jsx(x,{})})]})]});export{y as default};
