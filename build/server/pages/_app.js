(()=>{var e={};e.id=888,e.ids=[888],e.modules={3527:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>v});var a=s(997);s(1367);var t=s(968),i=s.n(t),c=s(6689),l=s(7028);let d={NAV:"NAV",SIDEBAR:"SIDEBAR"},n=(e,r)=>{switch(r.type){case d.NAV:return{...e,nav:r.payload};case d.SIDEBAR:return{...e,sidebar:r.payload};default:return e}},u=e=>{let[r,s]=(0,c.useReducer)(n,{nav:"about",sidebar:!1});return a.jsx(l.Z.Provider,{value:{nav:r.nav,changeNav:e=>{s({type:d.NAV,payload:e})},sidebar:r.sidebar,changeSideBar:e=>{s({type:d.SIDEBAR,payload:e})}},children:e.children})},o=()=>{let[e,r]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{setTimeout(()=>{r(!1)},2e3)},[]),a.jsx("div",{className:"preloader",style:{display:e?"block":"none"},children:a.jsx("div",{className:"centralize full-width",children:a.jsx("div",{className:"vertical-center",children:(0,a.jsxs)("div",{className:"spinner",children:[a.jsx("div",{className:"double-bounce1"}),a.jsx("div",{className:"double-bounce2"})]})})})})};function v({Component:e,pageProps:r}){return(0,a.jsxs)(u,{children:[(0,a.jsxs)(i(),{children:[a.jsx("title",{children:"Portfolio"}),a.jsx("link",{rel:"shortcut icon",href:"images/favicons/favicon.jpg"})]}),a.jsx(o,{}),a.jsx(e,{...r})]})}s(6764),s(638),s(4854),s(1529),s(9068),s(2656),s(4044),s(5183),s(7523),s(3882),s(4545)},7028:(e,r,s)=>{"use strict";s.d(r,{Z:()=>a});let a=(0,s(6689).createContext)()},1367:()=>{},4044:()=>{},638:()=>{},1529:()=>{},3882:()=>{},5183:()=>{},9068:()=>{},4854:()=>{},2656:()=>{},4545:()=>{},7523:()=>{},6764:()=>{},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var r=require("../webpack-runtime.js");r.C(e);var s=r(r.s=3527);module.exports=s})();