import{b as g,c as y,d as o,j as t,m as l,a as p,W as h,e as R,r as c}from"./index-CpXTxkxy.js";import{S as b}from"./SmallTitle-DeOPE6dY.js";import{F as z}from"./Footer-ElLcag31.js";import{T as D}from"./Title-D74nk6sl.js";const $=[{title:"Bachelor's Degree",place:"Pulchowk Campus",description:"I am currently studying Bachelor's Degree in Computer Engineering from Pulchowk Campus.",from:"2022",to:"2026",icon:g},{title:"+2",place:"Xavier International College",description:"I completed my Higher Secondary Education from Xavier International College in 2020.",from:"2018",to:"2020",icon:g},{title:"SEE",place:"Shuvakamana English Boarding School",description:"I completed my School Leaving Certificate from Shuvakamana English Boarding School in 2018.",from:"2017",to:"2018",icon:g}],B=[{title:"Software Engineering Intern",place:"Pulchowk Campus",description:"Currently working as a Software Engineering Intern, contributing to software development and learning new technologies in a real-world environment.",from:"2024",to:"Present",icon:y},{title:"Web Developer",place:"LOST",description:"Involved in building the Locus website, focusing on creating an intuitive, scalable, and user-friendly web platform.",from:"2024",to:"Present",icon:y}],L=o.div`
position:relative;

&::before{
    content: "";
  position: absolute;
  top: 0;
  left: 20px;
  bottom: 0;
  background-color:${e=>e.theme.lighttextColor};
  width: 2px;
  height:10rem;
}
`,N=o.div`
padding:2rem;
padding:1rem 5rem;

`,W=o.div`
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
  background-color:${e=>e.theme.specialColor};
  position: absolute;
`,A=o.span`
font-size: 1.2rem;
  padding: .5rem 1rem;
  display: inline-block;
  margin-bottom: 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  background-color: #eeeeee;
  opacity: .8;
  color: #666;

`,T=o.h3`
font-size: 1.8rem;
color:${e=>e.theme.lighttextColor};
margin: 7px 0 10px;
`,_=o.span`

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
  background-color: ${e=>e.theme.specialColor};
  left: 7px;
  top: 9px;
  opacity: .8;
}

`,V=o.p`
color:${e=>e.theme.lighttextColor};
font-size:1.6rem;

`;function k({title:e,place:r,description:i,from:n,to:a,icon:s}){return t.jsxs(L,{children:[t.jsx(W,{children:s}),t.jsxs(N,{children:[t.jsxs(A,{children:[n,"-",a]}),t.jsxs(T,{children:[e,t.jsx(_,{children:r})]}),t.jsx(V,{children:i})]})]})}const F=o.section`
margin-bottom:5rem;

`,M=o(h)`
max-width:1120px;
display: flex;
align-items: center;
justify-content:center;
gap: 1rem 10rem;
margin-top: 3rem;

${l(`
    flex-direction: column;
    gap: 3rem;
     align-items: center;
     justify-content: center;
     
    `)}
    
    ${p(`
    gap: 3rem;
    `)}
`,O=o.div`
flex:1;

${l(`
    width: 80%;
    
    `)}
    
    ${p(`
    width: 100%;
    `)}
`,H=o.div`
flex:1;
${l(`
    width: 80%;
    
    `)}
    
    ${p(`
    width: 100%;
    `)}


`;function X(){return t.jsx(t.Fragment,{children:t.jsxs(F,{children:[t.jsx(b,{textAlign:"center",title:"Education & Experience"}),t.jsxs(M,{children:[t.jsx(O,{children:$.map((e,r)=>t.jsx(k,{title:e.title,description:e.description,from:e.from,to:e.to,icon:t.jsx(e.icon,{}),place:e.place},r))}),t.jsx(H,{children:B.map((e,r)=>t.jsx(k,{title:e.title,description:e.description,from:e.from,to:e.to,icon:t.jsx(e.icon,{}),place:e.place},r))})]})]})})}const Y=[{title:"First Name",info:"Jeevan"},{title:"Last Name",info:"Neupane"},{title:"Age",info:"21 Years"},{title:"Nationality",info:"Nepali"},{title:"Freelance",info:"Available"}],G=[{title:"Address",info:"Kathmandu,Nepal"},{title:"Phone",info:"9745956296"},{title:"Email",info:"jeevan.neupane003@gmail.com"},{title:"Languages",info:"Nepali, English,Hindi"},{title:"Hobbies",info:"Reading Books, Research"}],Q=[{year:"2",title:"Years of",subtitle:"Web Development Experience"},{year:"3",title:"Hackathon",subtitle:"Awards Won"},{year:"1",title:"AI & ML",subtitle:"Projects Completed"},{year:"5",title:"Programming Languages",subtitle:"Learned"}],J=o.div`
border: 1px solid #f1f1f1;
width: 45%;

${p(`
width: 100%;
`)}
margin-left:1rem;
`,K=o.div`
padding: 2rem;


`,q=o.h3`
display: inline-block;
  margin: 0;
  font-size: 5rem;
  font-weight: 700;
  line-height: 110%;

  span{
    font-size: 3.3rem;
  }
    color:${e=>e.theme.specialColor};
`,U=o.p`
text-transform:uppercase;
position: relative;


&::before{
    content: "";
  position: absolute;
  left: 0;
  top: 13px;
  width: 30px;
  height: 1px;
  background: #777;
}
text-align: center;
color:${e=>e.theme.lighttextColor};

`,Z=({title:e,year:r,subtitle:i})=>t.jsx(J,{children:t.jsxs(K,{children:[t.jsxs(q,{children:[r,t.jsx("span",{children:"+"})]}),t.jsxs(U,{children:[e,t.jsx("br",{}),i]})]})}),ee=o.li`
list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  font-weight: 400 !important;
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 1.6rem;
`,te=o.span`
color:#8b97a0;

`,re=o.span`
color:${e=>e.theme.lighttextColor};
opacity: .8;
  font-weight:600;
`,C=({title:e,info:r})=>t.jsxs(ee,{children:[t.jsx(te,{children:e}),t.jsx("span",{children:" : "}),t.jsx(re,{children:r})]}),oe=o.div`
margin: 3rem auto;
width: 30%;
height: 1px;
background-color: ${e=>e.theme.borderColor};
text-align: center;

`,I=()=>t.jsx(oe,{}),ie=o.section`
`,ne=o(h)`
max-width:1120px;
display: flex;

${l(`
  flex-direction: column;
  gap: 3rem;
   align-items: center;
   justify-content: center;
   
  `)}
`,ae=o.div`
width:50%;

${l(`
  width: 80%;

  `)}

`,se=o.div`

`,le=o.div`
display: flex;
gap: 3rem;

${l(`
  gap:10rem;

  `)}

  ${p(`
  flex-direction: column;
  gap: 3rem;    
  `)}


`,ce=o.ul``,de=o.ul``,me=o.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;

${l(`
  width: 80%;
  margin-top:3rem;

  `)}


`,pe=o.div`
//Make it to right
display: flex;
  justify-content: flex-end; /* Change this to 'center' for center alignment */
  align-items: center;
  height: 100%; 
  padding-right: 4rem;

  ${l(`
  padding-right: 0;
  margin-top: 2rem;
  `)}



`,he=o.a`
  border: 2px solid ${e=>e.theme.specialColor};
  display: flex;
  width: 20rem;
  border-radius: 3rem;
  align-items: center;
  justify-content: space-between;
  color: ${e=>e.theme.lighttextColor}; /* Initial text color */
  text-decoration: none;
  font-size: 1.6rem;
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
`,ge=o.div`
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

`,ue="/assets/jeevan_neupane_resume-oYsLlYxm.pdf";function xe(){return t.jsx(pe,{children:t.jsxs(he,{href:ue,target:"_blank",children:[t.jsx("span",{children:"Download CV"}),t.jsx(ge,{children:t.jsx(R,{})})]})})}const fe=()=>t.jsxs(t.Fragment,{children:[t.jsx(ie,{children:t.jsxs(ne,{children:[t.jsxs(ae,{children:[t.jsx(b,{title:"Personal Infos",textAlign:"left"}),t.jsxs(se,{children:[t.jsxs(le,{children:[t.jsx(ce,{children:Y.map((e,r)=>t.jsx(C,{title:e.title,info:e.info},r))}),t.jsx(de,{children:G.map((e,r)=>t.jsx(C,{title:e.title,info:e.info},r))})]}),t.jsx(xe,{})]})]}),t.jsx(me,{children:Q.map((e,r)=>t.jsx(Z,{year:e.year,title:e.title,subtitle:e.subtitle},r))})]})}),t.jsx(I,{})]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var u=function(e,r){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var a in n)n.hasOwnProperty(a)&&(i[a]=n[a])},u(e,r)};function be(e,r){u(e,r);function i(){this.constructor=e}e.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)}var je=100,we=100,S=50,x=50,f=50;function E(e){var r=e.className,i=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,d=e.style;return c.createElement("path",{className:r,style:Object.assign({},d,ye({pathRadius:a,dashRatio:n,counterClockwise:i})),d:ve({pathRadius:a,counterClockwise:i}),strokeWidth:s,fillOpacity:0})}function ve(e){var r=e.pathRadius,i=e.counterClockwise,n=r,a=i?1:0;return`
      M `+x+","+f+`
      m 0,-`+n+`
      a `+n+","+n+" "+a+" 1 1 0,"+2*n+`
      a `+n+","+n+" "+a+" 1 1 0,-"+2*n+`
    `}function ye(e){var r=e.counterClockwise,i=e.dashRatio,n=e.pathRadius,a=Math.PI*2*n,s=(1-i)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-s:s)+"px"}}var ke=function(e){be(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return S-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var i=this.props,n=i.value,a=i.minValue,s=i.maxValue,d=Math.min(Math.max(n,a),s);return(d-a)/(s-a)},r.prototype.render=function(){var i=this.props,n=i.circleRatio,a=i.className,s=i.classes,d=i.counterClockwise,m=i.styles,j=i.strokeWidth,w=i.text,v=this.getPathRadius(),P=this.getPathRatio();return c.createElement("svg",{className:s.root+" "+a,style:m.root,viewBox:"0 0 "+je+" "+we,"data-test-id":"CircularProgressbar"},this.props.background?c.createElement("circle",{className:s.background,style:m.background,cx:x,cy:f,r:S}):null,c.createElement(E,{className:s.trail,counterClockwise:d,dashRatio:n,pathRadius:v,strokeWidth:j,style:m.trail}),c.createElement(E,{className:s.path,counterClockwise:d,dashRatio:P*n,pathRadius:v,strokeWidth:j,style:m.path}),w?c.createElement("text",{className:s.text,style:m.text,x,y:f},w):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(c.Component);function Ce({percentage:e,width:r,color:i,textSize:n}){return t.jsx(ke,{value:e,text:`${e}%`,styles:{root:{width:`${r}`},path:{stroke:`${i}`,strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},text:{fill:"green",fontSize:`${n}`}}})}const Se=o.section``,Ee=o(h)`
max-width:1120px;

`,Ie=o.div`
margin-top: 3rem;
display: flex;
gap: 1rem 10rem; 
flex-wrap: wrap;
justify-content: center;
align-items: center;
`,Pe=o.div`
padding: 1rem;
display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;
`,Re=o.h3`
text-align: center;
font-size: 1.6rem;
text-transform: uppercase;
color:${e=>e.theme.lighttextColor};
`,ze=[{name:"React.js",percentage:80,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Node.js",percentage:70,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"TypeScript",percentage:75,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"MongoDB",percentage:65,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Python",percentage:60,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"AI/ML Tools",percentage:70,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Express.js",percentage:70,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"FastAPI",percentage:60,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Docker",percentage:50,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"AWS",percentage:50,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Redux",percentage:65,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Next.js",percentage:60,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"Socket.io",percentage:55,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"HTML/CSS",percentage:80,color:"#72b626",textSize:"1.6rem",width:"10rem"},{name:"SQL (MySQL)",percentage:60,color:"#72b626",textSize:"1.6rem",width:"10rem"}];function De(){return t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsxs(Ee,{children:[t.jsx(b,{textAlign:"center",title:"Skills"}),t.jsx(Ie,{children:ze.map((e,r)=>t.jsxs(Pe,{children:[t.jsx(Ce,{percentage:e.percentage,width:e.width,color:e.color,textSize:e.textSize},r),t.jsx(Re,{children:e.name})]}))})]})}),t.jsx(I,{})]})}const $e=o(h)`


`,Ae=()=>t.jsxs(t.Fragment,{children:[t.jsxs($e,{children:[t.jsx(D,{title:"About",hilightTitle:"Me",widget:"Resume"}),t.jsx(fe,{}),t.jsx(De,{}),t.jsx(X,{})]}),t.jsx(z,{})]});export{Ae as default};
