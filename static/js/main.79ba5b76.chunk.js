(this["webpackJsonparnenupharsah.github.io"]=this["webpackJsonparnenupharsah.github.io"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(16),l=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Aulick Sah",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Aulick Sah"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:arnenupharsah@gmail.com",children:"arnenupharsah@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Aulick. I like building things. I am a ",Object(c.jsx)("a",{href:"https://icme.stanford.edu/",children:"DSCE"})," graduate and a Software Development Engineer at ",Object(c.jsx)("a",{href:"https://amazon.com",children:"Amazon"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 AULICK SAH."})]})]})},k=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Aulick Sah",defaultTitle:"Aulick Sah",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Aulick Sah's personal website."};t.a=g},25:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(29)),i=n(30),l=n(31),s=n(32),r=n(33),j=n(34),o=n(35),b=n(36),u=[{link:"https://github.com/arnenupharsah",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/arnenupharsah",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/arnenupharsah/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/arnenupharsah/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/u/aulicksah",label:"Angel List",icon:j.faAngellist},{link:"https://twitter.com/AulickSah",label:"Twitter",icon:o.faTwitter},{link:"mailto:arnenupharsah@gmail.com",label:"Email",icon:b.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),l=n(15),s=n(5),r=n(3),j=n(21),o=(n(49),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))}))),b=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,176))})),u=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,170))})),h=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,171))})),d=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,173))})),m=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.79ba5b76.chunk.js.map