(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5Q0V":function(e,t,n){var r=n("cDf5").default;e.exports=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),a=r(o),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function d(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},c.render=function(){return a.createElement(r,this.props)},o}(o.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",l),p}}},"A2+M":function(e,t,n){const r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var s=a[l];if(!c(s))return!1;var u=e[s],d=t[s];if(!1===(o=n?n.call(r,u,d,s):void 0)||void 0===o&&u!==d)return!1}return!0}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},RJKl:function(e,t,n){"use strict";n.r(t);var r=n("wTIg"),o=n("A2+M"),a=n("q1tI"),i=n.n(a);function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var l=n("qKvR"),s=n("MXbp");var u={name:"bk8pcn",styles:":root{--ease-in-quad:cubic-bezier(0.55,0.085,0.68,0.53);--ease-in-quart:cubic-bezier(0.895,0.03,0.685,0.22);--ease-out-quad:cubic-bezier(0.25,0.46,0.45,0.94);--ease-out-quart:cubic-bezier(0.165,0.84,0.44,1);--ease-in-out-quad:cubic-bezier(0.455,0.03,0.515,0.955);--ease-in-out-quart:cubic-bezier(0.77,0,0.175,1);}*,*:before,*:after{box-sizing:inherit;}:root{box-sizing:border-box;}body{margin:0;}.gatsby-resp-image-image{width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;}"},d=n("rePB"),p=n("2QYI");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=e=>e/16+"em";var T=p.a.breakpoints.reduce((e,t,n)=>{let[r,o]=t;return b(b({},e),{},{[r]:function(){return Object(l.c)("@media (max-width:",m(o),"){",l.c.apply(void 0,arguments),";}")},[r+"_up"]:function(){return Object(l.c)("@media (min-width:",m(p.a.breakpoints[n-1][1]+1),"){",l.c.apply(void 0,arguments),";}")}})},{}),O=n("PcS7"),h=n("SM1c");const y=Object.keys(h.a.modes),E=["light"].concat(y);var v=function(){const[e,t]=Object(O.b)();return{cycleColorMode:()=>{var n=E.indexOf(e);console.log(n),-1===n&&(n=1),4===n?n=1:n+=1;const r=n%E.length;t(E[r])}}};const g=Object(r.a)("svg",{target:"eyjdyc60"})("fill:",e=>e.theme.colors.text,";transition:all ",e=>e.theme.transition,";&:hover,&:focus{fill:",e=>e.theme.colors.primary,";}");var A=e=>{let{children:t,viewBox:n}=e;return Object(l.d)(g,{xmlns:"http://www.w3.org/2000/svg",viewBox:n},t)};var j=()=>Object(l.d)(A,{viewBox:"0 0 16 16"},Object(l.d)("path",{d:"M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5v-5c1.379 0 2.5 1.122 2.5 2.5S9.379 10.5 8 10.5zM8 13a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM8 3a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm7 4a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zM3 8a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zm9.95 3.536l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414zm-9.9-7.072l-.707-.707a.999.999 0 1 1 1.414-1.414l.707.707A.999.999 0 1 1 3.05 4.464zm9.9 0a.999.999 0 1 1-1.414-1.414l.707-.707a.999.999 0 1 1 1.414 1.414l-.707.707zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707z"}));const S=Object(r.a)("span",{target:"e1oi6bx00"})("display:inline-block;width:",e=>e.size+"px",";height:",e=>e.size+"px",";");var _=e=>{let{icon:t,size:n}=e;return Object(l.d)(S,{size:n},t)};const w=Object(r.a)("button",{target:"e1t8wqad0"})("padding:0;background:none;border:none;color:",e=>e.theme.colors.text,";cursor:pointer;font-size:0.8rem;&:hover{color:",e=>e.theme.colors.primary,";}");var M=e=>{let{onClick:t,label:n,icon:r,size:o}=e;return Object(l.d)(w,{type:"button",onClick:t,"aria-label":n,title:n},Object(l.d)(_,{icon:r,size:o}))};var C=()=>Object(l.d)(A,{viewBox:"0 0 24 24"},Object(l.d)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(l.d)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})),P=n("Wbzz"),x=n("wx14");function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=n("7ljp");const N=["components"],L={_frontmatter:{}};function k(e){let{components:t}=e,n=R(e,N);return Object(I.mdx)("wrapper",Object(x.a)({},L,n,{components:t,mdxType:"MDXLayout"}),Object(I.mdx)("p",null,"JEduTools"))}k.isMDXComponent=!0;const G=Object(r.a)("div",{target:"e8fem070"})({name:"h5ki70",styles:"p{margin:0;font-size:1.6rem;}"}),H=Object(r.a)(P.Link,{target:"e8fem071"})("display:block;text-decoration:none;color:",e=>e.theme.colors.text,";transition:color ",e=>e.theme.transition,";&:hover,&:focus{color:",e=>e.theme.colors.primary,";}");var z=()=>Object(l.d)(G,null,Object(l.d)(H,{to:"/"},Object(l.d)(k,null)));var B=()=>Object(l.d)(A,{viewBox:"0 0 14 14"},Object(l.d)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 0C3.1325 0 0 3.21173 0 7.17706C0 10.3529 2.00375 13.0353 4.78625 13.9863C5.13625 14.0491 5.2675 13.8338 5.2675 13.6454C5.2675 13.4749 5.25875 12.9097 5.25875 12.3087C3.5 12.6406 3.045 11.8691 2.905 11.4653C2.82625 11.259 2.485 10.622 2.1875 10.4516C1.9425 10.317 1.5925 9.98508 2.17875 9.97611C2.73 9.96714 3.12375 10.4964 3.255 10.7118C3.885 11.7973 4.89125 11.4923 5.29375 11.3039C5.355 10.8374 5.53875 10.5234 5.74 10.3439C4.1825 10.1645 2.555 9.54549 2.555 6.80026C2.555 6.01976 2.82625 5.37382 3.2725 4.87143C3.2025 4.692 2.9575 3.95635 3.3425 2.96951C3.3425 2.96951 3.92875 2.78111 5.2675 3.70516C5.8275 3.54367 6.4225 3.46293 7.0175 3.46293C7.6125 3.46293 8.2075 3.54367 8.7675 3.70516C10.1063 2.77214 10.6925 2.96951 10.6925 2.96951C11.0775 3.95635 10.8325 4.692 10.7625 4.87143C11.2087 5.37382 11.48 6.01079 11.48 6.80026C11.48 9.55446 9.84375 10.1645 8.28625 10.3439C8.54 10.5682 8.75875 10.9988 8.75875 11.6717C8.75875 12.6316 8.75 13.4032 8.75 13.6454C8.75 13.8338 8.88125 14.0581 9.23125 13.9863C11.9963 13.0353 14 10.3439 14 7.17706C14 3.21173 10.8675 0 7 0Z"}));var D=()=>Object(l.d)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(l.d)("g",null,Object(l.d)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(l.d)("path",{d:"M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"})));const U={kakao:Object(l.d)(D,null),github:Object(l.d)(B,null)},q=Object(r.a)("div",{target:"e1o2h9z0"})({name:"1pvmow1",styles:"display:flex;align-items:center;margin-right:2rem;opacity:0.7;"}),F=Object(r.a)("a",{target:"e1o2h9z1"})({name:"s4z02q",styles:"display:inline-block;margin:0 0.5rem;"});var X,Y,V=()=>{const e=Object(P.useStaticQuery)("2936798523").allSite.edges[0].node.siteMetadata.social;return Object(l.d)(q,null,e.map(e=>Object(l.d)(F,{key:e.name,href:e.url},Object(l.d)(_,{icon:U[e.name],size:22}))))};const Q=Object(r.a)("header",{target:"e1u1f2yw0"})("display:flex;justify-content:space-between;align-items:center;padding:1rem 1rem;z-index:5;background:",e=>e.theme.colors.background,";transition:all 0.25s var(--ease-in-out-quad);border-bottom:1px solid ",e=>e.theme.colors.borderColor,";transform:",e=>e.navOpen?"translateX(16rem)":null,";",T.desktop_up(X||(X=c(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 1rem 1.2rem;\n    transform: translateX(0);\n\n  "]))),";"),K=Object(r.a)("div",{target:"e1u1f2yw1"})("display:flex;margin-right:1rem;",T.desktop_up(Y||(Y=c(["\n    display: none;\n  "]))),";"),W=Object(r.a)("div",{target:"e1u1f2yw2"})({name:"70qvj9",styles:"display:flex;align-items:center;"});var J=e=>{let{navOpen:t,setNavOpen:n}=e;const{cycleColorMode:r}=v();return Object(l.d)(Q,{navOpen:t},Object(l.d)(W,null,Object(l.d)(K,null,Object(l.d)(M,{label:"Open Navigation",icon:Object(l.d)(C,null),size:30,onClick:()=>{n(!t)}})),Object(l.d)(z,null)),Object(l.d)(W,null,Object(l.d)(V,null),Object(l.d)(M,{label:"Change Theme Color",icon:Object(l.d)(j,null),size:30,onClick:r})))},Z=n("KQm4"),$=n("SiwC");var ee=()=>Object(l.d)(A,{viewBox:"0 0 24 24"},Object(l.d)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),Object(l.d)("path",{d:"M0 0h24v24H0z",fill:"none"}));var te=()=>Object(l.d)(A,{viewBox:"0 0 24 24"},Object(l.d)("path",{d:"M19 13H5v-2h14v2z"}),Object(l.d)("path",{d:"M0 0h24v24H0z",fill:"none"}));const ne=Object(r.a)("button",{target:"e5o9v6e0"})("position:absolute;top:0;right:0;padding:0 0.8rem;height:37px;background:none;border:0;color:",e=>e.theme.colors.text,";cursor:pointer;font-size:1rem;");var re=e=>{let{onClick:t,isCollapsed:n}=e;return Object(l.d)(ne,{onClick:t,"aria-label":"Toggle Subnavigation",title:"Toggle Subnavigation"},n?Object(l.d)(_,{icon:Object(l.d)(ee,null),size:24}):Object(l.d)(_,{icon:Object(l.d)(te,null),size:24}))};const oe=e=>{let{items:t,url:n="",title:r=""}=e;const o=Object(a.useContext)($.b),i=Object(a.useContext)($.a),c=!!n&&!0!==o.collapsed[n],s=t&&t.length>0;return Object(l.d)(ae,null,""!==r&&Object(l.d)(ie,{to:n,activeClassName:"is-active"},r),s&&""!==r&&Object(l.d)(re,{onClick:()=>{i({type:"TOGGLE_NAV_COLLAPSED",url:n})},isCollapsed:c}),s&&!c&&Object(l.d)(ce,null,t.map(e=>Object(l.d)(oe,Object(x.a)({key:e.url},e)))))},ae=Object(r.a)("li",{target:"el5sgso0"})({name:"1qlvlzc",styles:"position:relative;display:block;padding:0;margin:0.2rem 0;width:100%;list-style:none;"}),ie=Object(r.a)(P.Link,{target:"el5sgso1"})("display:block;padding:0.5rem 1.8rem 0.5rem 1.2rem;width:100%;color:",e=>e.theme.colors.text,";font-weight:600;text-decoration:none;transition:color ",e=>e.theme.transition,";&:hover,&:focus,&.is-active{color:",e=>e.theme.colors.primary,";}"),ce=Object(r.a)("ul",{target:"el5sgso2"})({name:"1batvoa",styles:"margin:0.5rem 0 0.5rem 1.2rem;padding:0;border-left:0.4px solid gray;list-style:none;& > li{margin:0;}"});var le=i.a.memo(oe);const se=e=>e.filter(e=>"/"!==e.url).map(e=>(e.items&&(e.items=se(e.items)),e)),ue=()=>{const e=Object(P.useStaticQuery)("2940813629"),{allSite:t,allMdx:n}=e,{sidebarConfig:r}=t.edges[0].node.siteMetadata,{0:o}=Object(a.useState)(()=>{const e=((e,t)=>{const n=t.ignoreIndex?e.filter(e=>{let{node:{fields:{slug:t}}}=e;return"/"!==t}):e;if(0===n.length)return{items:[]};const r=n.reduce((e,t)=>{let{node:{fields:{slug:n,title:r}}}=t;const o=n.split("/");let{items:a}=e;for(const c of o.slice(1,-1)){let e=a.find(e=>{let{label:t}=e;return t===c});e?e.items||(e.items=[]):(e={label:c,items:[]},a.push(e)),a=e.items}const i=a.find(e=>{let{label:t}=e;return t===o[o.length-1]});return i?(i.url=n,i.title=r):a.push({label:o[o.length-1],url:n,items:[],title:r}),e},{items:[]}),o=t.forcedNavOrder||[],a=Object(Z.a)(o);return a.reverse(),a.reduce((e,t)=>{const n=t.split("/");let{items:r}=e;for(const a of n.slice(1,-1)){let e=r.find(e=>{let{label:t}=e;return t===a});e?e.items||(e.items=[]):(e={label:a,items:[]},r.push(e)),r=e.items}r.forEach(e=>{e.items=e.items.sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0}))});const o=r.findIndex(e=>{let{label:t}=e;return t===n[n.length-1]});return e.items.unshift(r.splice(o,1)[0]),e},r)})(n.edges,r);return{items:se(e.items)}});return Object(l.d)(de,null,Object(l.d)(le,o))},de=Object(r.a)("ul",{target:"e1je91ra0"})({name:"rxgulu",styles:"margin:0;padding:0;list-style:none;"});var pe,fe,be=i.a.memo(ue);const me=e=>{let{navOpen:t}=e;return Object(l.d)(Te,null,Object(l.d)(Oe,{navOpen:t},Object(l.d)(be,null)))},Te=Object(r.a)("aside",{target:"es86uk0"})("margin-left:-16rem;flex:0 0 16rem;font-size:0.875rem;",T.desktop_up(pe||(pe=c(["\n    margin-left: 0;\n  "]))),";"),Oe=Object(r.a)("nav",{target:"es86uk1"})("position:fixed;top:0;bottom:0;overflow-x:hidden;overflow-y:auto;width:16rem;height:100%;padding:1rem 0;background:",e=>e.theme.colors.sidebar,";transition:0.25s var(--ease-in-out-quad);transform:",e=>e.navOpen?"translateX(16rem)":null,";",T.desktop_up(fe||(fe=c(["\n    transform: translateX(0);\n    padding: 6.6rem 0 1rem;\n  "]))),";");var he=i.a.memo(me);const ye=Object(r.a)(P.Link,{target:"e1uqnw520"})("display:inline-block;padding:0.2rem 0;width:100%;color:",e=>e.theme.colors.text,";text-decoration:none;transition:color ",e=>e.theme.transition,";&:hover,&:focus{color:",e=>e.theme.colors.primary,";}");var Ee,ve=e=>{let{location:t,item:n}=e;return Object(l.d)(ye,{to:"./"+n.url},n.title)};const ge=Object(r.a)("aside",{target:"e1xfj9m20"})("display:none;flex:0 0 16rem;font-size:0.75rem;font-weight:600;",T.desktop_medium_up(Ee||(Ee=c(["\n    display: block\n  "]))),";"),Ae=Object(r.a)("nav",{target:"e1xfj9m21"})({name:"18f8tbf",styles:"position:fixed;top:0;bottom:0;overflow-x:hidden;overflow-y:auto;width:16rem;height:100%;padding:7rem 1rem 0;"}),je=Object(r.a)("p",{target:"e1xfj9m22"})({name:"1r5tcfb",styles:"margin-top:0;font-size:0.7rem;font-weight:700;text-transform:uppercase;"}),Se=Object(r.a)("ul",{target:"e1xfj9m23"})({name:"evawql",styles:"margin:0;padding:0;list-style:none;& ul{margin:0;padding:0;list-style:none;}"}),_e=Object(r.a)("li",{target:"e1xfj9m24"})({name:"vd2349",styles:"margin:0.3rem 0;"});var we,Me=e=>{let{tableOfContents:t,location:n}=e;const{0:r}=Object(a.useState)(()=>{if(!t.items)return[];const e=[];return function t(n){n.forEach(n=>{e.push(n),n.items&&t(n.items)})}(t.items),e});return Object(l.d)(ge,null,Object(l.d)(Ae,null,Object(l.d)(je,null,"Contents"),Object(l.d)(Se,null,r.map(e=>Object(l.d)(_e,{key:n.pathname+e.url},Object(l.d)(ve,{location:n,item:e}))))))};const Ce=Object(r.a)("div",{target:"e18bsbue0"})("display:flex;min-height:100vh;overflow-x:hidden;background:",e=>e.theme.colors.background,";transition:background 0.25s var(--ease-in-out-quad);"),Pe=Object(r.a)("div",{target:"e18bsbue1"})({name:"1e4t8oy",styles:"flex-grow:1;min-width:20rem;"}),xe=Object(r.a)("main",{target:"e18bsbue2"})("padding:2rem 1rem 2rem;transition:0.25s var(--ease-in-out-quad);opacity:",e=>e.navOpen?.3:1,";transform:",e=>e.navOpen?"translateX(16rem)":null,";",T.desktop_up(we||(we=c(["\n    transform: translateX(0);\n    opacity: 1;\n    padding: 7rem 3rem 3rem;\n    max-width: 50rem;\n  "]))),";");var Re=e=>{let{children:t,tableOfContents:n,location:r}=e;const{0:o,1:i}=Object(a.useState)(!1);return Object(l.d)(s.b.root,null,Object(l.d)(l.a,{styles:u}),Object(l.d)(J,{navOpen:o,setNavOpen:i}),Object(l.d)(Ce,null,Object(l.d)(he,{navOpen:o}),Object(l.d)(Pe,null,Object(l.d)(xe,{navOpen:o},t)),n.items&&Object(l.d)(Me,{tableOfContents:n,location:r})))},Ie=n("TJpk"),Ne=n.n(Ie),Le=n("Y51Q"),ke=n.n(Le);const Ge=e=>{let{title:t,description:n,url:r,pathname:o}=e;const a=Object(P.useStaticQuery)("2575348879").allSite.edges[0].node.siteMetadata,i=a.social.find(e=>"twitter"===e.name)||{},c=e=>e?""+a.siteUrl+e:a.siteUrl,s=t||a.title,u=n||a.description,d=[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"viewport",content:"width=device-width, initial-scale=1"},{rel:"canonical",href:c(o)},{itemprop:"name",content:s},{itemprop:"description",content:u},{itemprop:"image",content:c(ke.a)},{name:"description",content:u},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:a.siteName},{name:"twitter:title",content:s},{name:"twitter:description",content:u},{name:"twitter:creator",content:i.url},{name:"twitter:image",content:c(ke.a)},{property:"og:title",content:s},{property:"og:url",content:r},{property:"og:image",content:c(ke.a)},{property:"og:description",content:u},{property:"og:site_name",content:a.siteName}];return Object(l.d)(Ne.a,{title:s,htmlAttributes:{lang:"en"},meta:d})};Ge.defaultProps={title:"",description:"",url:"",pathname:""};var He=Ge;const ze=Object(r.a)("h1",{target:"eclz9fx0"})({name:"16107uo",styles:"padding-top:0;margin-top:0;&::before{display:none !important;}"});t.default=e=>{let{data:t,location:n}=e;const{mdx:r}=t;return Object(l.d)(Re,{tableOfContents:r.tableOfContents,location:n},Object(l.d)(He,{title:r.frontmatter.title,description:r.frontmatter.description}),Object(l.d)(ze,null,r.frontmatter.title),Object(l.d)(o.MDXRenderer,null,r.body))}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=d(n("q1tI")),i=d(n("17x9")),c=d(n("8+s/")),l=d(n("bmMU")),s=n("v1p5"),u=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,T,O,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(m=h,O=T=function(e){function t(){return f(this,t),b(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=c,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(a.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=m.peek,T.rewind=function(){var e=m.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},O);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,n){var r=n("RIqP"),o=n("sXyB"),a=n("lSNA"),i=n("QILm");const c=["scope","children"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=n("q1tI"),{mdx:d}=n("7ljp"),{useMDXScope:p}=n("BfwJ");e.exports=function(e){let{scope:t,children:n}=e,a=i(e,c);const l=p(t),f=u.useMemo(()=>{if(!n)return null;const e=s({React:u,mdx:d},l),t=Object.keys(e),a=t.map(t=>e[t]);return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(a)))},[n,t]);return u.createElement(f,s({},a))}},Y51Q:function(e,t,n){e.exports=n.p+"static/site-image-9d86c3976ce69e1c1ba1b216b6a12db2.jpg"},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(e.exports=n=function(){return!!t},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),d=r(n);if(u&&d){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=d)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var b=t instanceof RegExp,m=n instanceof RegExp;if(b!=m)return!1;if(b&&m)return t.toString()==n.toString();var T=o(t);if((l=T.length)!==o(n).length)return!1;for(c=l;0!=c--;)if(!a.call(n,T[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=T[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lSNA:function(e,t,n){var r=n("o5UB");e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},o5UB:function(e,t,n){var r=n("cDf5").default,o=n("5Q0V");e.exports=function(e){var t=o(e,"string");return"symbol"==r(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");e.exports=function(e,t,n){if(o())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var i=new(e.bind.apply(e,a));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=l(n("q1tI")),i=l(n("YVoz")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},b=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var l=a[i],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),l=0;l<a.length;l++){var s=a[l],u=(0,i.default)({},o[s],r[s]);o[s]=u}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},O=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){O(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||O:e.requestAnimationFrame||O,E="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,A=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;_(c.TAG_NAMES.BODY,r),_(c.TAG_NAMES.HTML,o),S(p,f);var b={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,a),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,l),scriptTags:w(c.TAG_NAMES.SCRIPT,u),styleTags:w(c.TAG_NAMES.STYLE,d)},m={},T={};Object.keys(b).forEach((function(e){var t=b[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=b[e].oldTags)})),t&&t(),s(e,m,T)},j=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=j(e)),_(c.TAG_NAMES.TITLE,t)},_=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var d=a.indexOf(s);-1!==d&&a.splice(d,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},P=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=C(n,r),[a.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=M(n),a=j(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+u(a,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&E(g),e.defer?g=y((function(){A(e,(function(){g=null}))})):(A(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:P(c.TAG_NAMES.BASE,t,r),bodyAttributes:P(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:P(c.ATTRIBUTE_NAMES.HTML,o,r),link:P(c.TAG_NAMES.LINK,a,r),meta:P(c.TAG_NAMES.META,i,r),noscript:P(c.TAG_NAMES.NOSCRIPT,l,r),script:P(c.TAG_NAMES.SCRIPT,s,r),style:P(c.TAG_NAMES.STYLE,u,r),title:P(c.TAG_NAMES.TITLE,{title:p,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:b([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=v}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-docs-js-3f6f79612bd28e393092.js.map