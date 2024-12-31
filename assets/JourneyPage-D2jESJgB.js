import{d as i,j as t,W as c}from"./index-CpXTxkxy.js";import{F as m}from"./Footer-ElLcag31.js";import{S as l}from"./ScrollTop-BZ4cdGoL.js";import{T as p}from"./Title-D74nk6sl.js";const g=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem
`,u=i.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 2rem;
  border-left: .4rem solid ${e=>e.theme.specialColor};
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 20px;
    width: 20px;
    height: 20px;
    background: ${e=>e.theme.specialColor};
    border-radius: 50%;
    border: 2px solid white;
    z-index: 1;
  }
`,h=i.div`
  flex-grow: 1;
  margin-left: 2rem;
`,x=i.div`
  font-size: 1.2rem;
  color: ${e=>e.theme.JourneyPageStyle.dateTextColor};
  margin-bottom: 5px;
`,y=i.h3`
  margin: 0;
  font-size:2rem;
  color: ${e=>e.theme.JourneyPageStyle.titleColor};
`,f=i.p`
  margin: .5rem 0 1.5rem;
  font-size: 1.2rem;
  color: ${e=>e.theme.JourneyPageStyle.descriptionColor};
`,v=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); 
  gap: 1.5rem;

  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
    border-radius: .8rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,z=({date:e,title:o,description:r,images:s})=>{const d=n=>{const a={day:"numeric",month:"long",year:"numeric"};return new Date(n).toLocaleDateString(void 0,a)};return t.jsx(u,{children:t.jsxs(h,{children:[t.jsx(x,{children:d(e)}),t.jsx(y,{children:o}),t.jsx(f,{children:r}),t.jsx(v,{children:s.map((n,a)=>t.jsx("img",{src:n,alt:`${o} image ${a+1}`},a))})]})})},j=[{date:"2024-12-03",title:"APIE Camp @UB 2025 Participation Selection",description:"I have been selected to participate in the APIE Camp at Universitas Brawijaya (UB) in Malang, Indonesia, to gain hands-on experience in network deployment, cloud computing, and security.",images:["https://res.cloudinary.com/de1yfnzdz/image/upload/v1733451177/events/iq0vd17yuado2dvqda9x.png"]},{date:"2024-11-17",title:"Track Winner at KU Hackfest 2024",description:"We won the KU Hackfest 2024 in track of Data Science and AI.",images:["https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/ywcsqi9ocasubdsvugtv.jpg","https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449710/events/hnhj2nb1kgobqvget2kp.jpg"]},{date:"2024-09-29",title:"AWS Community Day Participation",description:"Participated in AWS Community Day 2024 and learned about the latest AWS services.",images:["https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/q62eqqsaluzgmd0nij7v.jpg","https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/ke4z76wrllakczt7waoc.jpg","https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/sqymu2tcm3ofidd97hxv.jpg"]},{date:"2024-09-22",title:"Won Hackademia 2.0 Hackathon",description:"We won the Hackademia 2.0 in title of Best AI Integration with our project video content generator.",images:["https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/nw6ytdtok0kidaddp4io.webp","https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449709/events/zmpiwtzszxlstuzmmzsu.jpg"]},{date:"2023-12-02",title:"Won Hackademia 1.0 Hackathon",description:"We won the Hackademia 1.0 in title of Best Presentation with our project autograder.",images:["https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449710/events/l03csho80r258sw4dj31.jpg","https://res.cloudinary.com/de1yfnzdz/image/upload/v1733449710/events/f1tcleldyu79khcsxz3n.jpg"]}],w=()=>t.jsx(g,{children:j.map((e,o)=>t.jsx(z,{date:e.date,title:e.title,description:e.description,images:e.images},o))}),b=i(c)`
max-width: 1120px;
margin: 0 auto;

`;function W(){return t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(l,{}),t.jsx(p,{title:"My ",hilightTitle:"Journey",widget:"Timeline"}),t.jsx(w,{})]}),t.jsx(m,{})]})}export{W as default};
