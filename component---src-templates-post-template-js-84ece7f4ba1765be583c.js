/*! For license information please see component---src-templates-post-template-js-84ece7f4ba1765be583c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),a=r("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),i=r("lSNA"),a=r("8OQS");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),s=r("7ljp").mdx,p=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,["scope","children"]),l=p(t),f=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:s},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return u.createElement(f,c({},i))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},z6Ng:function(e,t,r){"use strict";r.r(t);var n,o=r("dI71"),i=r("q1tI"),a=r.n(i),l=r("9eSz"),c=r.n(l),u=r("vrFN"),s=r("p3AD"),p=r("ydnR"),f=r("wKwe"),d=r("A2+M"),h=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),y=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return h(t,e),t}(Error);function b(e,t){if(!e)throw new y(t)}function w(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var v=r("TSYQ"),m=r.n(v),g=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=function(){return(O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function l(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}c((n=n.apply(e,t||[])).next())}))},j=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},k=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},S=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},_=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},E=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function P(e,t,r){var n=t.height,o=t.width,i=k(t,["height","width"]),a=O({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(r)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),r(l))}catch(e){console.error(e)}}),1e3);return l}var C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,i=void 0===o?400:o,a=r.windowPosition,l=void 0===a?"windowCenter":a,c=r.windowWidth,u=void 0===c?550:c;P(e,O({height:i,width:u},"windowCenter"===l?_(u,i):E(u,i)),n)},t.handleClick=function(e){return x(t,void 0,void 0,(function(){var t,r,n,o,i,a,l,c,u,s;return j(this,(function(p){switch(p.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,u=o(a,c),n?[2]:(e.preventDefault(),r?(s=r(),S(s)?[4,s]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return l&&this.openShareDialog(u),i&&i(e,u),[2]}}))}))},t}return g(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,k(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=m()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),f=O(O(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),n&&o);return a.a.createElement("button",O({},s,{"aria-label":s["aria-label"]||l,className:p,onClick:this.handleClick,ref:i,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(i.Component),M=function(){return(M=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var A=function(e,t,r,n){function o(o,i){var l=r(o),c=M({},o);return Object.keys(l).forEach((function(e){delete c[e]})),a.a.createElement(C,M({},n,c,{forwardedRef:i,networkName:e,networkLink:t,opts:r(o)}))}return o.displayName="ShareButton-"+e,Object(i.forwardRef)(o)};var R=A("linkedin",(function(e,t){var r=t.title,n=t.summary,o=t.source;return b(e,"linkedin.url"),"https://linkedin.com/shareArticle"+w({url:e,mini:"true",title:r,summary:n,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),I=function(){return(I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},D=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function z(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,i=t.round,l=t.size,c=D(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return a.a.createElement("svg",I({viewBox:"0 0 64 64",width:l,height:l},c),i?a.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):a.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),a.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var B=z({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var N=A("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,l=void 0===a?[]:a;return b(e,"twitter.url"),b(Array.isArray(i),"twitter.hashtags is not an array"),b(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+w({url:e,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),W=z({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var L=A("email",(function(e,t){var r=t.subject,n=t.body,o=t.separator;return"mailto:"+w({subject:r,body:n?n+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),H=z({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),T=r("rY4l"),X=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e,t=this.props.data.mdx,r=(this.props.data.site.siteMetadata.title,this.props.data.site.siteMetadata.siteUrl),n=this.props.pageContext,o=(n.previous,n.next,t.frontmatter),i=o.banner,l=r+(i&&i.childImageSharp.fluid.src),h=p.a.concat(null===(e=o.keywords)||void 0===e?void 0:e.split(",")),y=r+"/blog"+t.fields.slug,b='"'+o.title+'"';return a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,null),a.a.createElement("div",{style:{margin:Object(s.a)(1)+" auto",maxWidth:Object(s.a)(30),padding:Object(s.a)(.5)}},a.a.createElement(u.a,{title:o.title,description:o.excerpt,keywords:h,image:l}),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h2",null,o.title),a.a.createElement("p",{style:{display:"block",marginBottom:Object(s.a)(1),marginTop:Object(s.a)(-.5)}},"☕ ",t.timeToRead," min read")),i&&a.a.createElement("div",null,a.a.createElement(c.a,{fluid:i.childImageSharp.fluid,alt:o.imageAltText}),a.a.createElement(f.a,{href:o.bannerLink},o.bannerCredit)),a.a.createElement("br",null),a.a.createElement(d.MDXRenderer,null,t.body),a.a.createElement("h2",null,"Share this post"),a.a.createElement("div",null,a.a.createElement(R,{url:y,title:b},a.a.createElement(B,{size:48,round:!0})),a.a.createElement(N,{url:y,title:b},a.a.createElement(W,{size:48,round:!0})),a.a.createElement(L,{url:y,subject:b},a.a.createElement(H,{size:48,round:!0})))))},t}(a.a.Component);t.default=X}}]);
//# sourceMappingURL=component---src-templates-post-template-js-84ece7f4ba1765be583c.js.map