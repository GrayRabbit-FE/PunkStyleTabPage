(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),a=n.n(i),s=(n(12),n(5)),o=n(7),u=(n(13),n(0));function j(){return Object(u.jsx)("div",{className:"number-line preserve translate"})}function b(e){var t=e.char;return t>="0"&&t<="9"?Object(u.jsx)("div",{"data-digit":t,className:"number preserve translate",children:new Array(7).fill(0).map((function(e,t){return Object(u.jsx)(j,{},t)}))}):":"===t?Object(u.jsx)("div",{className:"char preserve translate","data-before":t,children:t}):null}function l(e){return Object(u.jsx)("div",{className:"container preserve",children:Object(o.a)(e.str).map((function(e,t){return Object(u.jsx)(b,{char:e},t)}))})}var d=function(){var e=Object(c.useState)((new Date).toLocaleTimeString()),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),o=a[0],j=a[1],b=Object(c.useRef)();return Object(c.useEffect)((function(){return b.current=setInterval((function(){var e=new Date;r(e.toLocaleTimeString())}),997),function(){clearInterval(b.current)}})),Object(u.jsxs)("div",{id:"app",children:[Object(u.jsx)(l,{str:n}),Object(u.jsxs)("div",{id:"input-container",children:[Object(u.jsx)("input",{id:"content-input",placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",onInput:function(e){j(e.target.value)},type:"text"}),Object(u.jsx)("button",{onClick:function(){window.open("https://cn.bing.com/search?form=ANNTH1&q="+o)},id:"sbtn",children:"\u641c\u7d22"})," "]}),Object(u.jsx)("div",{id:"foot",children:"By GrayRabbit@HIT"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.19cd452f.chunk.js.map