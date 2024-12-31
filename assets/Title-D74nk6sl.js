import{d as e,a as n,j as t}from"./index-CpXTxkxy.js";const s=e.div`
position: relative;
`,a=e.div`
transform: none !important;
text-align: center !important;
margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 70px 0;
`,p=e.h1`
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
  color:${i=>i.theme.specialColor};
  ${n(`
  font-size: 4.2rem;
  `)}
  }

  ${n(`
  font-size: 3.6rem;
  `)}
`,l=e.span`
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

 ${n(`
  font-size: 6.5rem;
  `)}

`,c=({title:i,hilightTitle:o,widget:r})=>t.jsx(s,{children:t.jsxs(a,{children:[t.jsxs(p,{children:[i," ",t.jsx("span",{children:o})]}),t.jsx(l,{children:r})]})});export{c as T};
