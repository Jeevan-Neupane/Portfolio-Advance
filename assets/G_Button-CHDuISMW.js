import{d as s,j as r}from"./index-CpXTxkxy.js";const n=s.button`
  border: 2px solid ${e=>e.theme.specialColor};
  display: flex;
  width: 24rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${e=>e.theme.lighttextColor};
  text-decoration: none;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  position: relative;
  font-weight: 600;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;

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
  text-align: left;
`,i=s.div`
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
`;function h({href:e,download:a,onClick:d,text:t,icon:o,submit:l}){return e&&a?r.jsxs(n,{as:"a",href:e,download:!0,children:[r.jsx("span",{children:t}),r.jsx(i,{children:o})]}):l?r.jsxs(n,{as:"button",type:"submit",children:[r.jsx("span",{children:t}),r.jsx(i,{children:o})]}):r.jsxs(n,{as:"button",onClick:d,children:[r.jsx("span",{children:t}),r.jsx(i,{children:o})]})}export{h as G};
