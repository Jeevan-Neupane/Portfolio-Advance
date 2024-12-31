import{d as t,q as i,t as a,v as s,w as c,j as o}from"./index-CpXTxkxy.js";const l=t.footer`
  background-color: ${e=>e.theme.footerColor.footerBackground};
  color: ${e=>e.theme.footerColor.footerTextColor};
  padding: 2rem 0;
  text-align: center;
`,d=t.div`
  max-width: 75rem; 
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }

  
`,n=t.div`
  margin: 1rem 0;
  text-align: center;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin-top: 0;
  }
`;t.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    font-size: 2rem; 
    transition: color 0.3s;

    &:hover {
      color: ${e=>e.theme.footerColor.socialLinkHover};
    }
  }
`;const h=t.p`
  margin-top: 2rem;
  font-size: 1rem;
`,m=t.hr`
width:50%;
margin:0 auto;

`,u=[{href:"https://www.linkedin.com/in/jeevan-neupane-16a407258/",icon:i},{href:"https://github.com/Jeevan-Neupane",icon:a},{href:"https://x.com/JeevanNeup38484",icon:s},{href:"https://www.youtube.com/@6thSemester-y9x",icon:c}],f=t.a`
text-decoration: none;
`,p=t.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.lighttextColor};
  padding: 1rem;
  border-radius: 50%;
background-color:#eeeeee;
font-size: 1.6rem;
transition: 0.3s ease-in-out; 

&:hover{
    background-color: ${e=>e.theme.specialColor};
    color: #fff;
}
  `;function x({href:e,icon:r}){return o.jsx(f,{href:e,target:"_blank",children:o.jsx(p,{children:r})})}const g=t.div`
display: flex;
gap:1rem;
margin-top:2rem;

`;function j(){return o.jsx(g,{children:u.map(e=>o.jsx(x,{href:e.href,icon:o.jsx(e.icon,{})}))})}const w=()=>o.jsxs(l,{children:[o.jsxs(d,{children:[o.jsxs(n,{children:[o.jsx("h3",{children:"Jeevan Neupane"}),o.jsx("p",{children:"Passionate developer building solutions for the future."})]}),o.jsx(n,{children:o.jsx(j,{})})]}),o.jsx(m,{}),o.jsxs(h,{children:["© ",new Date().getFullYear()," Jeevan Neupane. All rights reserved."]})]});export{w as F,j as S};
