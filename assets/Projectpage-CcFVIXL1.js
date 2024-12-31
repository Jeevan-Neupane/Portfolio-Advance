import{d as e,W as s,L as l,u as c,j as t,O as a}from"./index-CpXTxkxy.js";import{T as d}from"./Title-D74nk6sl.js";import{S as m}from"./ScrollTop-BZ4cdGoL.js";import{F as h}from"./Footer-ElLcag31.js";const u=e.section`
`,x=e(s)`
max-width:1120px;

`,j=e.div`
 
  border: 1px solid ${o=>o.theme.lighttextColor};
  width:fit-content;
  margin: 0 auto;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  overflow: hidden;
  
`,p=e.button`
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: ${o=>o.isActive?o.theme.specialColor:"transparent"};
  color: ${o=>o.isActive?"white":o.theme.lighttextColor};

  &:hover {
    color: white;
    background-color: ${o=>o.theme.specialColor};
  }

`,g=e(l)`
  text-decoration: none;
  color: ${o=>o.theme.lighttextColor};

  &:hover {
    color: white;
  }
`;function k(){const o=c(),i=[{id:1,name:"Web",link:"/works/web"},{id:2,name:"AI/ML",link:"/works/ai_ml"},{id:3,name:"College",link:"/works/college"}];return t.jsx(j,{children:i.map(r=>{const n=o.pathname===r.link;return t.jsx(g,{to:r.link,children:t.jsx(p,{isActive:n,children:r.name})},r.id)})})}const C=()=>t.jsxs(u,{children:[t.jsx(m,{}),t.jsx(d,{title:"My",hilightTitle:"Portfolio",widget:"Works"}),t.jsxs(x,{children:[t.jsx(k,{}),t.jsx(a,{})]}),t.jsx(h,{})]});export{C as default};
