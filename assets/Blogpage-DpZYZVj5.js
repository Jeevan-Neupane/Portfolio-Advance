import{d as o,j as t,r as l,W as m}from"./index-CpXTxkxy.js";import{F as g}from"./Footer-ElLcag31.js";import{S as h}from"./ScrollTop-BZ4cdGoL.js";import{T as x}from"./Title-D74nk6sl.js";const p=o.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
`,u=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, max-content)); 
  gap: 2rem;
  justify-content: center; /* Centers the grid items when there's only one */
`,d=o.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${e=>e.theme.singleProjectPage.headingColor};
`,f=o.article`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.blogPage.cardBackground};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

 
`,b=o.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,j=o.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,v=o.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${e=>e.theme.textColor};
  margin: 0 0 1rem;
`,w=o.div`
  font-size: 1.2rem;
  color: ${e=>e.theme.blogPage.lighttextColor};
  margin-bottom: 16px;
`,k=o.a`
  margin-top: 1rem;
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: ${e=>e.theme.lighttextColor};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: 4px;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${e=>e.theme.specialColor};
    color: ${e=>e.theme.whiteTextColor};
  }
`,C=o.div`
display: flex;
justify-content:center;
align-items:center;
height:40rem;

/* HTML: <div class="loader"></div> */
.loader {
  width: 5rem;
  height: 3rem;
  --c:no-repeat radial-gradient(farthest-side,#000 93%,#0000);
  background:
    var(--c) 0    0,
    var(--c) 50%  0,
    var(--c) 100% 0;
  background-size: 8px 8px;
  position: relative;
  animation: l4-0 1s linear infinite alternate;
}
.loader:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  background: #000;
  left: 0;
  top: 0;
  animation: 
    l4-1 1s  linear infinite alternate,
    l4-2 0.5s cubic-bezier(0,200,.8,200) infinite;
}
@keyframes l4-0 {
  0%      {background-position: 0  100%,50% 0   ,100% 0}
  8%,42%  {background-position: 0  0   ,50% 0   ,100% 0}
  50%     {background-position: 0  0   ,50% 100%,100% 0}
  58%,92% {background-position: 0  0   ,50% 0   ,100% 0}
  100%    {background-position: 0  0   ,50% 0   ,100% 100%}
}
@keyframes l4-1 {
  100% {left:calc(100% - 8px)}
}
@keyframes l4-2 {
  100% {top:-0.1px}
}
`,y=o.div`
display: flex;
gap: 1rem;
flex-wrap: wrap;

`,T=o.p`
font-size: 1.2rem;
border: 1px solid ${e=>e.theme.borderColor};
padding: 0.5rem 1rem;
`,$=o.p`
margin: 1rem 0;
font-size: 1.5rem;
font-weight: bold;

`,z=({title:e,author:n,date:i,imageUrl:a,link:r,categories:s})=>(console.log(s),t.jsxs(f,{children:[t.jsx(b,{children:t.jsx("img",{src:a,alt:`Cover for ${e}`})}),t.jsxs(j,{children:[t.jsxs("div",{children:[t.jsx(v,{children:e}),t.jsxs(w,{children:["By ",n," • ",new Date(i).toLocaleDateString()]})]}),t.jsx(y,{children:s.map(c=>t.jsx(T,{children:c},c))}),t.jsx(k,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Read More"})]})]})),A=e=>{const i=/<img[^>]+src="([^">]+)"/.exec(e);return i?i[1]:null},B=()=>{const[e,n]=l.useState([]),[i,a]=l.useState(!0);return l.useEffect(()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jeevan.neupane003").then(r=>r.json()).then(r=>{n(r.items),a(!1)})},[]),i?t.jsx(C,{children:t.jsx("div",{className:"loader"})}):e.length===0?t.jsx(d,{children:"Articles Are Not Found Due To Error"}):t.jsxs(p,{children:[t.jsx(d,{children:"Medium Articles"}),t.jsxs($,{children:["Total Articles: ",e.length]}),t.jsx(u,{children:e==null?void 0:e.map(r=>{const s=r.thumbnail||A(r.content);return t.jsx(z,{title:r.title,date:r.pubDate,link:r.link,author:r.author,imageUrl:s,categories:r.categories},r.guid)})})]})},M=o(m)`
max-width:1120px;

`,F=()=>t.jsxs(t.Fragment,{children:[t.jsxs(M,{children:[t.jsx(h,{}),t.jsx(x,{title:"My",hilightTitle:"Blogs",widget:"Posts"}),t.jsx(B,{})]}),t.jsx(g,{})]});export{F as default};
