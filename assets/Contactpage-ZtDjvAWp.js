import{d as A,m as Pe,W as ot,j as v,I as Tt,f as Ct,R as q,r as Ye,g as Lt}from"./index-CpXTxkxy.js";import{T as Pt}from"./Title-D74nk6sl.js";import{S as Rt}from"./SmallTitle-DeOPE6dY.js";import{G as It}from"./G_Button-CHDuISMW.js";import{S as Ot,F as Mt}from"./Footer-ElLcag31.js";import{S as Nt}from"./ScrollTop-BZ4cdGoL.js";const Bt=A(ot)`
max-width:1120px;
margin-bottom:17rem;
`,Ut=A(ot)`

display: flex;
gap: 2rem;

${Pe(`
flex-direction: column;
gap: 2rem;
`)}
margin-bottom:3rem;


`,qt=A.div`
flex: 1;
`,$t=A.p`
font-size: 1.4rem;
text-align: justify;
color: ${e=>e.theme.lighttextColor};

`,Ht=A.div`
margin-top: 2rem;
`,Kt=A.div`
flex: 1;
border: 1px solid ${e=>e.theme.borderColor};
border-radius:1rem;
${Pe(`
width: 100%;
`)}
`,Wt=A.div`
display: flex;
gap: 1rem;
margin-top:2rem;
`,Jt=A.div`

font-size: 4rem;
color:${e=>e.theme.specialColor};   
display: flex;
align-items: center;
justify-content: center;
`,Gt=A.div`
display: flex;
flex-direction: column;

justify-content: center;
line-height: 1.3;
`,zt=A.p`
font-size: 1.5rem;
color:${e=>e.theme.lighttextColor};
text-transform: uppercase;
`,Yt=A.p`
font-size: 1.2rem;
color:${e=>e.theme.lighttextColor};
font-weight: 600;
`;function Qt({title:e,info:r,icon:t}){return v.jsxs(Wt,{children:[v.jsx(Jt,{children:t}),v.jsxs(Gt,{children:[v.jsx(zt,{children:e}),v.jsx(Yt,{children:r})]})]})}const Xt=[{title:"Mail Me",info:"jeevan.neupane003@gmail.com",icon:Tt},{title:"Call Me",info:"+977-9745956296",icon:Ct}];var fe=e=>e.type==="checkbox",ae=e=>e instanceof Date,I=e=>e==null;const lt=e=>typeof e=="object";var S=e=>!I(e)&&!Array.isArray(e)&&lt(e)&&!ae(e),Zt=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,er=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tr=(e,r)=>e.has(er(r)),rr=e=>{const r=e.constructor&&e.constructor.prototype;return S(r)&&r.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function U(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Re&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(r=t?[]:{},!t&&!rr(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=U(e[n]));else return e;return r}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],V=e=>e===void 0,f=(e,r,t)=>{if(!r||!S(e))return t;const n=Ve(r.split(/[,[\].]+?/)).reduce((l,a)=>I(l)?l:l[a],e);return V(n)||n===e?V(e[r])?t:e[r]:n},K=e=>typeof e=="boolean",Ie=e=>/^\w*$/.test(e),ut=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),F=(e,r,t)=>{let n=-1;const l=Ie(r)?[r]:ut(r),a=l.length,y=a-1;for(;++n<a;){const h=l[n];let L=t;if(n!==y){const k=e[h];L=S(k)||Array.isArray(k)?k:isNaN(+l[n+1])?{}:[]}if(h==="__proto__")return;e[h]=L,e=e[h]}return e};const Qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var sr=(e,r,t,n=!0)=>{const l={defaultValues:r._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const y=a;return r._proxyFormState[y]!==H.all&&(r._proxyFormState[y]=!n||H.all),e[y]}});return l},O=e=>S(e)&&!Object.keys(e).length,ir=(e,r,t,n)=>{t(e);const{name:l,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find(y=>r[y]===H.all)},be=e=>Array.isArray(e)?e:[e];function nr(e){const r=q.useRef(e);r.current=e,q.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",ar=(e,r,t,n,l)=>W(e)?(n&&r.watch.add(e),f(t,e,l)):Array.isArray(e)?e.map(a=>(n&&r.watch.add(a),f(t,a))):(n&&(r.watchAll=!0),t),or=(e,r,t,n,l)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:l||!0}}:{},Xe=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),Ze=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const de=(e,r,t,n)=>{for(const l of t||Object.keys(e)){const a=f(e,l);if(a){const{_f:y,...h}=a;if(y){if(y.refs&&y.refs[0]&&r(y.refs[0],l)&&!n)return!0;if(y.ref&&r(y.ref,y.name)&&!n)return!0;if(de(h,r))break}else if(S(h)&&de(h,r))break}}};var lr=(e,r,t)=>{const n=be(f(e,t));return F(n,"root",r[t]),F(e,t,n),e},Oe=e=>e.type==="file",Q=e=>typeof e=="function",xe=e=>{if(!Re)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},pe=e=>W(e),Me=e=>e.type==="radio",_e=e=>e instanceof RegExp;const et={value:!1,isValid:!1},tt={value:!0,isValid:!0};var ct=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!V(e[0].attributes.value)?V(e[0].value)||e[0].value===""?tt:{value:e[0].value,isValid:!0}:tt:et}return et};const rt={isValid:!1,value:null};var dt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,rt):rt;function st(e,r,t="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||K(e)&&!e)return{type:t,message:pe(e)?e:"",ref:r}}var ne=e=>S(e)&&!_e(e)?e:{value:e,message:""},it=async(e,r,t,n,l)=>{const{ref:a,refs:y,required:h,maxLength:L,minLength:k,min:w,max:m,pattern:ge,validate:X,name:M,valueAsNumber:Ae,mount:J,disabled:Z}=e._f,p=f(r,M);if(!J||Z)return{};const G=y?y[0]:a,z=b=>{n&&G.reportValidity&&(G.setCustomValidity(K(b)?"":b||""),G.reportValidity())},D={},se=Me(a),he=fe(a),te=se||he,ie=(Ae||Oe(a))&&V(a.value)&&V(p)||xe(a)&&a.value===""||p===""||Array.isArray(p)&&!p.length,N=or.bind(null,M,t,D),me=(b,x,j,R=Y.maxLength,$=Y.minLength)=>{const B=b?x:j;D[M]={type:b?R:$,message:B,ref:a,...N(b?R:$,B)}};if(l?!Array.isArray(p)||!p.length:h&&(!te&&(ie||I(p))||K(p)&&!p||he&&!ct(y).isValid||se&&!dt(y).isValid)){const{value:b,message:x}=pe(h)?{value:!!h,message:h}:ne(h);if(b&&(D[M]={type:Y.required,message:x,ref:G,...N(Y.required,x)},!t))return z(x),D}if(!ie&&(!I(w)||!I(m))){let b,x;const j=ne(m),R=ne(w);if(!I(p)&&!isNaN(p)){const $=a.valueAsNumber||p&&+p;I(j.value)||(b=$>j.value),I(R.value)||(x=$<R.value)}else{const $=a.valueAsDate||new Date(p),B=ue=>new Date(new Date().toDateString()+" "+ue),oe=a.type=="time",le=a.type=="week";W(j.value)&&p&&(b=oe?B(p)>B(j.value):le?p>j.value:$>new Date(j.value)),W(R.value)&&p&&(x=oe?B(p)<B(R.value):le?p<R.value:$<new Date(R.value))}if((b||x)&&(me(!!b,j.message,R.message,Y.max,Y.min),!t))return z(D[M].message),D}if((L||k)&&!ie&&(W(p)||l&&Array.isArray(p))){const b=ne(L),x=ne(k),j=!I(b.value)&&p.length>+b.value,R=!I(x.value)&&p.length<+x.value;if((j||R)&&(me(j,b.message,x.message),!t))return z(D[M].message),D}if(ge&&!ie&&W(p)){const{value:b,message:x}=ne(ge);if(_e(b)&&!p.match(b)&&(D[M]={type:Y.pattern,message:x,ref:a,...N(Y.pattern,x)},!t))return z(x),D}if(X){if(Q(X)){const b=await X(p,r),x=st(b,G);if(x&&(D[M]={...x,...N(Y.validate,x.message)},!t))return z(x.message),D}else if(S(X)){let b={};for(const x in X){if(!O(b)&&!t)break;const j=st(await X[x](p,r),G,x);j&&(b={...j,...N(x,j.message)},z(j.message),t&&(D[M]=b))}if(!O(b)&&(D[M]={ref:G,...b},!t))return D}}return z(!0),D};function ur(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=V(e)?n++:e[r[n++]];return e}function cr(e){for(const r in e)if(e.hasOwnProperty(r)&&!V(e[r]))return!1;return!0}function E(e,r){const t=Array.isArray(r)?r:Ie(r)?[r]:ut(r),n=t.length===1?e:ur(e,t),l=t.length-1,a=t[l];return n&&delete n[a],l!==0&&(S(n)&&O(n)||Array.isArray(n)&&cr(n))&&E(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}},we=e=>I(e)||!lt(e);function ee(e,r){if(we(e)||we(r))return e===r;if(ae(e)&&ae(r))return e.getTime()===r.getTime();const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const l of t){const a=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const y=r[l];if(ae(a)&&ae(y)||S(a)&&S(y)||Array.isArray(a)&&Array.isArray(y)?!ee(a,y):a!==y)return!1}}return!0}var ft=e=>e.type==="select-multiple",dr=e=>Me(e)||fe(e),Te=e=>xe(e)&&e.isConnected,yt=e=>{for(const r in e)if(Q(e[r]))return!0;return!1};function Fe(e,r={}){const t=Array.isArray(e);if(S(e)||t)for(const n in e)Array.isArray(e[n])||S(e[n])&&!yt(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Fe(e[n],r[n])):I(e[n])||(r[n]=!0);return r}function gt(e,r,t){const n=Array.isArray(e);if(S(e)||n)for(const l in e)Array.isArray(e[l])||S(e[l])&&!yt(e[l])?V(r)||we(t[l])?t[l]=Array.isArray(e[l])?Fe(e[l],[]):{...Fe(e[l])}:gt(e[l],I(r)?{}:r[l],t[l]):t[l]=!ee(e[l],r[l]);return t}var ve=(e,r)=>gt(e,r,Fe(r)),ht=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>V(e)?e:r?e===""?NaN:e&&+e:t&&W(e)?new Date(e):n?n(e):e;function Ce(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Oe(r)?r.files:Me(r)?dt(e.refs).value:ft(r)?[...r.selectedOptions].map(({value:t})=>t):fe(r)?ct(e.refs).value:ht(V(r.value)?e.ref.value:r.value,e)}var fr=(e,r,t,n)=>{const l={};for(const a of e){const y=f(r,a);y&&F(l,a,y._f)}return{criteriaMode:t,names:[...e],fields:l,shouldUseNativeValidation:n}},ce=e=>V(e)?e:_e(e)?e.source:S(e)?_e(e.value)?e.value.source:e.value:e;const nt="AsyncFunction";var yr=e=>(!e||!e.validate)&&!!(Q(e.validate)&&e.validate.constructor.name===nt||S(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===nt)),gr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function at(e,r,t){const n=f(e,t);if(n||Ie(t))return{error:n,name:t};const l=t.split(".");for(;l.length;){const a=l.join("."),y=f(r,a),h=f(e,a);if(y&&!Array.isArray(y)&&t!==a)return{name:t};if(h&&h.type)return{name:a,error:h};l.pop()}return{name:t}}var hr=(e,r,t,n,l)=>l.isOnAll?!1:!t&&l.isOnTouch?!(r||e):(t?n.isOnBlur:l.isOnBlur)?!e:(t?n.isOnChange:l.isOnChange)?e:!0,mr=(e,r)=>!Ve(f(e,r)).length&&E(e,r);const vr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function br(e={}){let r={...vr,...e},t={submitCount:0,isDirty:!1,isLoading:Q(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},l=S(r.defaultValues)||S(r.values)?U(r.defaultValues||r.values)||{}:{},a=r.shouldUnregister?{}:U(l),y={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,k=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Ee(),array:Ee(),state:Ee()},ge=Xe(r.mode),X=Xe(r.reValidateMode),M=r.criteriaMode===H.all,Ae=s=>i=>{clearTimeout(k),k=setTimeout(s,i)},J=async s=>{if(w.isValid||s){const i=r.resolver?O((await te()).errors):await N(n,!0);i!==t.isValid&&m.state.next({isValid:i})}},Z=(s,i)=>{(w.isValidating||w.validatingFields)&&((s||Array.from(h.mount)).forEach(o=>{o&&(i?F(t.validatingFields,o,i):E(t.validatingFields,o))}),m.state.next({validatingFields:t.validatingFields,isValidating:!O(t.validatingFields)}))},p=(s,i=[],o,d,c=!0,u=!0)=>{if(d&&o){if(y.action=!0,u&&Array.isArray(f(n,s))){const g=o(f(n,s),d.argA,d.argB);c&&F(n,s,g)}if(u&&Array.isArray(f(t.errors,s))){const g=o(f(t.errors,s),d.argA,d.argB);c&&F(t.errors,s,g),mr(t.errors,s)}if(w.touchedFields&&u&&Array.isArray(f(t.touchedFields,s))){const g=o(f(t.touchedFields,s),d.argA,d.argB);c&&F(t.touchedFields,s,g)}w.dirtyFields&&(t.dirtyFields=ve(l,a)),m.state.next({name:s,isDirty:b(s,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else F(a,s,i)},G=(s,i)=>{F(t.errors,s,i),m.state.next({errors:t.errors})},z=s=>{t.errors=s,m.state.next({errors:t.errors,isValid:!1})},D=(s,i,o,d)=>{const c=f(n,s);if(c){const u=f(a,s,V(o)?f(l,s):o);V(u)||d&&d.defaultChecked||i?F(a,s,i?u:Ce(c._f)):R(s,u),y.mount&&J()}},se=(s,i,o,d,c)=>{let u=!1,g=!1;const _={name:s},T=!!(f(n,s)&&f(n,s)._f&&f(n,s)._f.disabled);if(!o||d){w.isDirty&&(g=t.isDirty,t.isDirty=_.isDirty=b(),u=g!==_.isDirty);const C=T||ee(f(l,s),i);g=!!(!T&&f(t.dirtyFields,s)),C||T?E(t.dirtyFields,s):F(t.dirtyFields,s,!0),_.dirtyFields=t.dirtyFields,u=u||w.dirtyFields&&g!==!C}if(o){const C=f(t.touchedFields,s);C||(F(t.touchedFields,s,o),_.touchedFields=t.touchedFields,u=u||w.touchedFields&&C!==o)}return u&&c&&m.state.next(_),u?_:{}},he=(s,i,o,d)=>{const c=f(t.errors,s),u=w.isValid&&K(i)&&t.isValid!==i;if(e.delayError&&o?(L=Ae(()=>G(s,o)),L(e.delayError)):(clearTimeout(k),L=null,o?F(t.errors,s,o):E(t.errors,s)),(o?!ee(c,o):c)||!O(d)||u){const g={...d,...u&&K(i)?{isValid:i}:{},errors:t.errors,name:s};t={...t,...g},m.state.next(g)}},te=async s=>{Z(s,!0);const i=await r.resolver(a,r.context,fr(s||h.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return Z(s),i},ie=async s=>{const{errors:i}=await te(s);if(s)for(const o of s){const d=f(i,o);d?F(t.errors,o,d):E(t.errors,o)}else t.errors=i;return i},N=async(s,i,o={valid:!0})=>{for(const d in s){const c=s[d];if(c){const{_f:u,...g}=c;if(u){const _=h.array.has(u.name),T=c._f&&yr(c._f);T&&w.validatingFields&&Z([d],!0);const C=await it(c,a,M,r.shouldUseNativeValidation&&!i,_);if(T&&w.validatingFields&&Z([d]),C[u.name]&&(o.valid=!1,i))break;!i&&(f(C,u.name)?_?lr(t.errors,C,u.name):F(t.errors,u.name,C[u.name]):E(t.errors,u.name))}!O(g)&&await N(g,i,o)}}return o.valid},me=()=>{for(const s of h.unMount){const i=f(n,s);i&&(i._f.refs?i._f.refs.every(o=>!Te(o)):!Te(i._f.ref))&&Se(s)}h.unMount=new Set},b=(s,i)=>(s&&i&&F(a,s,i),!ee(Be(),l)),x=(s,i,o)=>ar(s,h,{...y.mount?a:V(i)?l:W(s)?{[s]:i}:i},o,i),j=s=>Ve(f(y.mount?a:l,s,e.shouldUnregister?f(l,s,[]):[])),R=(s,i,o={})=>{const d=f(n,s);let c=i;if(d){const u=d._f;u&&(!u.disabled&&F(a,s,ht(i,u)),c=xe(u.ref)&&I(i)?"":i,ft(u.ref)?[...u.ref.options].forEach(g=>g.selected=c.includes(g.value)):u.refs?fe(u.ref)?u.refs.length>1?u.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(c)?!!c.find(_=>_===g.value):c===g.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(g=>g.checked=g.value===c):Oe(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||m.values.next({name:s,values:{...a}})))}(o.shouldDirty||o.shouldTouch)&&se(s,c,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&ue(s)},$=(s,i,o)=>{for(const d in i){const c=i[d],u=`${s}.${d}`,g=f(n,u);(h.array.has(s)||!we(c)||g&&!g._f)&&!ae(c)?$(u,c,o):R(u,c,o)}},B=(s,i,o={})=>{const d=f(n,s),c=h.array.has(s),u=U(i);F(a,s,u),c?(m.array.next({name:s,values:{...a}}),(w.isDirty||w.dirtyFields)&&o.shouldDirty&&m.state.next({name:s,dirtyFields:ve(l,a),isDirty:b(s,u)})):d&&!d._f&&!I(u)?$(s,u,o):R(s,u,o),Ze(s,h)&&m.state.next({...t}),m.values.next({name:y.mount?s:void 0,values:{...a}})},oe=async s=>{y.mount=!0;const i=s.target;let o=i.name,d=!0;const c=f(n,o),u=()=>i.type?Ce(c._f):Zt(s),g=_=>{d=Number.isNaN(_)||ee(_,f(a,o,_))};if(c){let _,T;const C=u(),re=s.type===Qe.BLUR||s.type===Qe.FOCUS_OUT,Dt=!gr(c._f)&&!r.resolver&&!f(t.errors,o)&&!c._f.deps||hr(re,f(t.touchedFields,o),t.isSubmitted,X,ge),De=Ze(o,h,re);F(a,o,C),re?(c._f.onBlur&&c._f.onBlur(s),L&&L(0)):c._f.onChange&&c._f.onChange(s);const je=se(o,C,re,!1),jt=!O(je)||De;if(!re&&m.values.next({name:o,type:s.type,values:{...a}}),Dt)return w.isValid&&(e.mode==="onBlur"?re&&J():J()),jt&&m.state.next({name:o,...De?{}:je});if(!re&&De&&m.state.next({...t}),r.resolver){const{errors:Ge}=await te([o]);if(g(C),d){const Et=at(t.errors,n,o),ze=at(Ge,n,Et.name||o);_=ze.error,o=ze.name,T=O(Ge)}}else Z([o],!0),_=(await it(c,a,M,r.shouldUseNativeValidation))[o],Z([o]),g(C),d&&(_?T=!1:w.isValid&&(T=await N(n,!0)));d&&(c._f.deps&&ue(c._f.deps),he(o,T,_,je))}},le=(s,i)=>{if(f(t.errors,i)&&s.focus)return s.focus(),1},ue=async(s,i={})=>{let o,d;const c=be(s);if(r.resolver){const u=await ie(V(s)?s:c);o=O(u),d=s?!c.some(g=>f(u,g)):o}else s?(d=(await Promise.all(c.map(async u=>{const g=f(n,u);return await N(g&&g._f?{[u]:g}:g)}))).every(Boolean),!(!d&&!t.isValid)&&J()):d=o=await N(n);return m.state.next({...!W(s)||w.isValid&&o!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:o}:{},errors:t.errors}),i.shouldFocus&&!d&&de(n,le,s?c:h.mount),d},Be=s=>{const i={...y.mount?a:l};return V(s)?i:W(s)?f(i,s):s.map(o=>f(i,o))},Ue=(s,i)=>({invalid:!!f((i||t).errors,s),isDirty:!!f((i||t).dirtyFields,s),error:f((i||t).errors,s),isValidating:!!f(t.validatingFields,s),isTouched:!!f((i||t).touchedFields,s)}),Vt=s=>{s&&be(s).forEach(i=>E(t.errors,i)),m.state.next({errors:s?t.errors:{}})},qe=(s,i,o)=>{const d=(f(n,s,{_f:{}})._f||{}).ref,c=f(t.errors,s)||{},{ref:u,message:g,type:_,...T}=c;F(t.errors,s,{...T,...i,ref:d}),m.state.next({name:s,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&d&&d.focus&&d.focus()},At=(s,i)=>Q(s)?m.values.subscribe({next:o=>s(x(void 0,i),o)}):x(s,i,!0),Se=(s,i={})=>{for(const o of s?be(s):h.mount)h.mount.delete(o),h.array.delete(o),i.keepValue||(E(n,o),E(a,o)),!i.keepError&&E(t.errors,o),!i.keepDirty&&E(t.dirtyFields,o),!i.keepTouched&&E(t.touchedFields,o),!i.keepIsValidating&&E(t.validatingFields,o),!r.shouldUnregister&&!i.keepDefaultValue&&E(l,o);m.values.next({values:{...a}}),m.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&J()},$e=({disabled:s,name:i,field:o,fields:d,value:c})=>{if(K(s)&&y.mount||s){const u=s?void 0:V(c)?Ce(o?o._f:f(d,i)._f):c;F(a,i,u),se(i,u,!1,!1,!0)}},ke=(s,i={})=>{let o=f(n,s);const d=K(i.disabled)||K(e.disabled);return F(n,s,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:s}},name:s,mount:!0,...i}}),h.mount.add(s),o?$e({field:o,disabled:K(i.disabled)?i.disabled:e.disabled,name:s,value:i.value}):D(s,!0,i.value),{...d?{disabled:i.disabled||e.disabled}:{},...r.progressive?{required:!!i.required,min:ce(i.min),max:ce(i.max),minLength:ce(i.minLength),maxLength:ce(i.maxLength),pattern:ce(i.pattern)}:{},name:s,onChange:oe,onBlur:oe,ref:c=>{if(c){ke(s,i),o=f(n,s);const u=V(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,g=dr(u),_=o._f.refs||[];if(g?_.find(T=>T===u):u===o._f.ref)return;F(n,s,{_f:{...o._f,...g?{refs:[..._.filter(Te),u,...Array.isArray(f(l,s))?[{}]:[]],ref:{type:u.type,name:s}}:{ref:u}}}),D(s,!1,void 0,u)}else o=f(n,s,{}),o._f&&(o._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(tr(h.array,s)&&y.action)&&h.unMount.add(s)}}},He=()=>r.shouldFocusError&&de(n,le,h.mount),St=s=>{K(s)&&(m.state.next({disabled:s}),de(n,(i,o)=>{const d=f(n,o);d&&(i.disabled=d._f.disabled||s,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||s}))},0,!1))},Ke=(s,i)=>async o=>{let d;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let c=U(a);if(m.state.next({isSubmitting:!0}),r.resolver){const{errors:u,values:g}=await te();t.errors=u,c=g}else await N(n);if(E(t.errors,"root"),O(t.errors)){m.state.next({errors:{}});try{await s(c,o)}catch(u){d=u}}else i&&await i({...t.errors},o),He(),setTimeout(He);if(m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},kt=(s,i={})=>{f(n,s)&&(V(i.defaultValue)?B(s,U(f(l,s))):(B(s,i.defaultValue),F(l,s,U(i.defaultValue))),i.keepTouched||E(t.touchedFields,s),i.keepDirty||(E(t.dirtyFields,s),t.isDirty=i.defaultValue?b(s,U(f(l,s))):b()),i.keepError||(E(t.errors,s),w.isValid&&J()),m.state.next({...t}))},We=(s,i={})=>{const o=s?U(s):l,d=U(o),c=O(s),u=c?l:d;if(i.keepDefaultValues||(l=o),!i.keepValues){if(i.keepDirtyValues)for(const g of h.mount)f(t.dirtyFields,g)?F(u,g,f(a,g)):B(g,f(u,g));else{if(Re&&V(s))for(const g of h.mount){const _=f(n,g);if(_&&_._f){const T=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(xe(T)){const C=T.closest("form");if(C){C.reset();break}}}}n={}}a=e.shouldUnregister?i.keepDefaultValues?U(l):{}:U(u),m.array.next({values:{...u}}),m.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!w.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!e.shouldUnregister,m.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!ee(s,l)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&a?ve(l,a):t.dirtyFields:i.keepDefaultValues&&s?ve(l,s):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Je=(s,i)=>We(Q(s)?s(a):s,i);return{control:{register:ke,unregister:Se,getFieldState:Ue,handleSubmit:Ke,setError:qe,_executeSchema:te,_getWatch:x,_getDirty:b,_updateValid:J,_removeUnmounted:me,_updateFieldArray:p,_updateDisabledField:$e,_getFieldArray:j,_reset:We,_resetDefaultValues:()=>Q(r.defaultValues)&&r.defaultValues().then(s=>{Je(s,r.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:St,_subjects:m,_proxyFormState:w,_setErrors:z,get _fields(){return n},get _formValues(){return a},get _state(){return y},set _state(s){y=s},get _defaultValues(){return l},get _names(){return h},set _names(s){h=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:ue,register:ke,handleSubmit:Ke,watch:At,setValue:B,getValues:Be,reset:Je,resetField:kt,clearErrors:Vt,unregister:Se,setError:qe,setFocus:(s,i={})=>{const o=f(n,s),d=o&&o._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&c.select())}},getFieldState:Ue}}function pr(e={}){const r=q.useRef(),t=q.useRef(),[n,l]=q.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...br(e),formState:n});const a=r.current.control;return a._options=e,nr({subject:a._subjects.state,next:y=>{ir(y,a._proxyFormState,a._updateFormState)&&l({...a._formState})}}),q.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),q.useEffect(()=>{if(a._proxyFormState.isDirty){const y=a._getDirty();y!==n.isDirty&&a._subjects.state.next({isDirty:y})}},[a,n.isDirty]),q.useEffect(()=>{e.values&&!ee(e.values,t.current)?(a._reset(e.values,a._options.resetOptions),t.current=e.values,l(y=>({...y}))):a._resetDefaultValues()},[e.values,a]),q.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),q.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),q.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),r.current.formState=sr(n,a),r.current}const xr=A.div`
`,_r=A.form`
padding: 2rem;
`,wr=A.div`
display: flex;
justify-content:space-between;
gap:2rem;

${Pe(`
flex-direction: column;
`)}

`,Fr=A.input`
    font-weight: 400;
    border: 1px solid ${e=>e.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${e=>e.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
`,Vr=A.input`
  font-weight: 400;
    border: 1px solid ${e=>e.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${e=>e.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
`,Ar=A.textarea`
font-weight: 400;
    border: 1px solid ${e=>e.theme.borderColor};
    padding: 1.1rem 2.6rem;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    width: 100%;
    height: 15rem;
    resize:none;
    border-radius: 1rem;

    &:focus{
        border: 1px solid ${e=>e.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
    
`,Sr=A.input`
  font-weight: 400;
    border: 1px solid ${e=>e.theme.borderColor};
    padding: 1.1rem 2.6rem;
    border-radius: 30px;
    outline: none !important;
    transition: 0.3s;
    margin: 0;
    &:focus{
        border: 1px solid ${e=>e.theme.specialColor};
    }
    &:focus::placeholder{
        color:transparent;
    }
   
`;A.button``;const kr=A.div`
margin-top: 2rem;

`,Dr=A.div`
margin-top: 2rem;
`;class ye{constructor(r=0,t="Network Error"){this.status=r,this.text=t}}const jr=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},P={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:jr()},Ne=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Er=(e,r="https://api.emailjs.com")=>{if(!e)return;const t=Ne(e);P.publicKey=t.publicKey,P.blockHeadless=t.blockHeadless,P.storageProvider=t.storageProvider,P.blockList=t.blockList,P.limitRate=t.limitRate,P.origin=t.origin||r},mt=async(e,r,t={})=>{const n=await fetch(P.origin+e,{method:"POST",headers:t,body:r}),l=await n.text(),a=new ye(n.status,l);if(n.ok)return a;throw a},vt=(e,r,t)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Tr=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},bt=e=>e.webdriver||!e.languages||e.languages.length===0,pt=()=>new ye(451,"Unavailable For Headless Browser"),Cr=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},Lr=e=>{var r;return!((r=e.list)!=null&&r.length)||!e.watchVariable},Pr=(e,r)=>e instanceof FormData?e.get(r):e[r],xt=(e,r)=>{if(Lr(e))return!1;Cr(e.list,e.watchVariable);const t=Pr(r,e.watchVariable);return typeof t!="string"?!1:e.list.includes(t)},_t=()=>new ye(403,"Forbidden"),Rr=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},Ir=async(e,r,t)=>{const n=Number(await t.get(e)||0);return r-Date.now()+n},wt=async(e,r,t)=>{if(!r.throttle||!t)return!1;Rr(r.throttle,r.id);const n=r.id||e;return await Ir(n,r.throttle,t)>0?!0:(await t.set(n,Date.now().toString()),!1)},Ft=()=>new ye(429,"Too Many Requests"),Or=async(e,r,t,n)=>{const l=Ne(n),a=l.publicKey||P.publicKey,y=l.blockHeadless||P.blockHeadless,h=l.storageProvider||P.storageProvider,L={...P.blockList,...l.blockList},k={...P.limitRate,...l.limitRate};return y&&bt(navigator)?Promise.reject(pt()):(vt(a,e,r),Tr(t),t&&xt(L,t)?Promise.reject(_t()):await wt(location.pathname,k,h)?Promise.reject(Ft()):mt("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:r,template_params:t}),{"Content-type":"application/json"}))},Mr=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Nr=e=>typeof e=="string"?document.querySelector(e):e,Br=async(e,r,t,n)=>{const l=Ne(n),a=l.publicKey||P.publicKey,y=l.blockHeadless||P.blockHeadless,h=P.storageProvider||l.storageProvider,L={...P.blockList,...l.blockList},k={...P.limitRate,...l.limitRate};if(y&&bt(navigator))return Promise.reject(pt());const w=Nr(t);vt(a,e,r),Mr(w);const m=new FormData(w);return xt(L,m)?Promise.reject(_t()):await wt(location.pathname,k,h)?Promise.reject(Ft()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",r),m.append("user_id",a),mt("/api/v1.0/email/send-form",m))},Ur={init:Er,send:Or,sendForm:Br,EmailJSResponseStatus:ye},Le={emailJsServiceId:"service_wkosb4h",emailJsTemplateId:"template_gbkepgr",emailJsPublicKey:"G2fnvHkt1OlOGwGTr"};function qr(){const{register:e,handleSubmit:r,formState:{errors:t},reset:n}=pr(),[l,a]=Ye.useState(!1),[y,h]=Ye.useState(null),L=k=>{a(!0),h(null),Ur.send(Le.emailJsServiceId,Le.emailJsTemplateId,{from_name:k.name,from_email:k.email,subject:k.subject,message:k.message},Le.emailJsPublicKey).then(()=>{a(!1),h({type:"success",message:"Message sent successfully. Thank you for reaching out!"}),n()},w=>{a(!1),h({type:"error",message:`Failed to send message. Error: ${w.text}`})})};return v.jsxs(xr,{children:[v.jsxs(_r,{onSubmit:r(L),children:[v.jsxs(wr,{children:[v.jsx(Fr,{type:"text",placeholder:"Name",...e("name",{required:"Name is required"})}),t.name&&v.jsx("p",{children:t.name.message}),v.jsx(Vr,{type:"email",placeholder:"Email",...e("email",{required:"Email is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email address"}})}),t.email&&v.jsx("p",{children:t.email.message}),v.jsx(Sr,{type:"text",placeholder:"Subject",...e("subject",{required:"Subject is required"})}),t.subject&&v.jsx("p",{children:t.subject.message})]}),v.jsxs(kr,{children:[v.jsx(Ar,{placeholder:"Message",...e("message",{required:"Message is required"})}),t.message&&v.jsx("p",{children:t.message.message})]}),v.jsx(Dr,{children:v.jsx(It,{text:l?"Sending...":"Send Message",icon:v.jsx(Lt,{}),submit:!0})})]}),y&&v.jsx("p",{style:{color:y.type==="success"?"green":"red",marginTop:"10px"},children:y.message})]})}const Xr=()=>v.jsxs(v.Fragment,{children:[v.jsxs(Bt,{children:[v.jsx(Nt,{}),v.jsx(Pt,{title:"Get In",hilightTitle:"Touch",widget:"Contact"}),v.jsxs(Ut,{children:[v.jsxs(qt,{children:[v.jsx(Rt,{textAlign:"left",title:"DON'T BE SHY!"}),v.jsx($t,{children:"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."}),v.jsx(Ht,{children:Xt.map((e,r)=>v.jsx(Qt,{title:e.title,info:e.info,icon:v.jsx(e.icon,{})},r))}),v.jsx(Ot,{})]}),v.jsx(Kt,{children:v.jsx(qr,{})})]})]}),v.jsx(Mt,{})]});export{Xr as default};