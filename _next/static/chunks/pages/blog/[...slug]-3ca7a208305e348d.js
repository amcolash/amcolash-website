(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{7991:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slug]",function(){return n(4474)}])},837:function(t,e,n){"use strict";n.d(e,{p:function(){return u}});var o=n(5893),r=n(7294),i=n(7314),a=n.n(i),l=(n(7421),n(3806)),c=n(2979),s=(0,r.lazy)((function(){return n.e(655).then(n.t.bind(n,5655,23))}));function u(t){var e=(0,r.useState)(!1),n=e[0],i=e[1],l=(0,r.useState)(0),c=l[0],u=l[1];return(0,o.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%"},children:[t.video&&(0,o.jsx)("div",{style:{display:"flex",flex:"0 0 100%",margin:"1rem",position:"relative",paddingTop:"56.25%"},children:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(s,{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},url:"https://www.youtube.com/watch?v=".concat(t.video)})})}),t.images&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.images.map((function(e,n){return(0,o.jsx)("div",{className:"mediaImg",tabIndex:"0",children:(0,o.jsx)("img",{src:e.url||e,alt:e.alt,onClick:function(){u(n),i(!0)},className:t.square?"square":""})},e.url||e)}))}),n&&(0,o.jsx)(a(),{images:t.images.map((function(t){return{url:t.url||t,title:t.alt}})),startIndex:c,onClose:function(){return i(!1)},allowZoom:!1,allowRotate:!1,allowReset:!1})]})]})}(0,l.Gk)(".mediaImg",{display:"block",maxHeight:"15rem",maxWidth:"15rem",margin:"1rem",overflow:"hidden",transition:"all 0.15s",$nest:{"&:hover, &:focus":{boxShadow:"0 0 1rem ".concat(c.wL.Green),outline:"0.35rem solid ".concat(c.wL.Green),outlineOffset:"-0.35rem"},img:{maxWidth:"100%",maxHeight:"100%",objectFit:"cover",width:"100%",height:"100%"},"img.square":{maxWidth:"150%",maxHeight:"150%",objectFit:"cover"}}})},4474:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return m},default:function(){return p}});var o=n(5893),r=n(2918),i=n(9008),a=n.n(i),l=n(1163),c=n(9220),s=n(3806),u=n(7106),f=n(837),d=n(2979);(0,s.Gk)(".blogBack",{display:"inline-flex",alignItems:"center",marginRight:"auto"}),(0,s.Gk)("@media print",{".blogBack":{display:"none"},body:{fontSize:"1rem"}});var m=!0;function p(t){var e=t.post,n=(0,l.useRouter)();return n.isFallback||(null===e||void 0===e?void 0:e.slug)?(0,o.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsxs)(u.z,{class:"blogBack",onClick:function(){return n.push("/blog")},children:[(0,o.jsx)(c.Z,{style:{marginRight:"calc(".concat(d.Lg," / 2)")}}),"Back to Blog"]}),(0,o.jsxs)("div",{className:"post",style:{width:"100%",maxWidth:960,overflow:"hidden"},children:[(0,o.jsx)(a(),{children:(0,o.jsx)("title",{children:e.title})}),(0,o.jsx)("h1",{style:{marginBottom:"calc(".concat(d.Lg," / 2)")},children:e.title}),(0,o.jsx)("h4",{style:{marginTop:0,marginBottom:"calc(".concat(d.Lg," * 2)")},children:new Date(e.date).toLocaleDateString()}),n.isFallback?"Loading\u2026":(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content}}),(0,o.jsx)(f.p,{images:e.images,video:e.video,square:!0})]})]}):(0,o.jsx)(r.default,{statusCode:404})}},7421:function(){},2918:function(t,e,n){t.exports=n(9185)},9008:function(t,e,n){t.exports=n(5443)},7314:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=n(7294)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var o=n(0),r=n.n(o);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}function v(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(i,t);var e,n,o=s(i);function i(){var t,e,n,l,c;a(this,i);for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return m(f(c=o.call.apply(o,[this].concat(u))),"initX",0),m(f(c),"initY",0),m(f(c),"lastX",0),m(f(c),"lastY",0),m(f(c),"_cont",r.a.createRef()),m(f(c),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(t=null===(e=c.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!(null===(n=c.props)||void 0===n||null===(l=n.images)||void 0===l||!l.length)}),m(f(c),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),m(f(c),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(c),"getCurrentImage",(function(t,e){var n,o,r,i,a;return t.multi?null!==(o=null!==(r=null===(i=e.images[t.current])||void 0===i?void 0:i.url)&&void 0!==r?r:null===(a=e.images)||void 0===a?void 0:a[t.current])&&void 0!==o?o:"":null!==(n=e.image)&&void 0!==n?n:""})),m(f(c),"getCurrentTitle",(function(t,e){var n,o,r,i;return t.multi?null!==(o=null===(r=e.images)||void 0===r||null===(i=r[t.current])||void 0===i?void 0:i.title)&&void 0!==o?o:"":null!==(n=e.title)&&void 0!==n?n:""})),m(f(c),"resetZoom",(function(){return c.setState({x:0,y:0,zoom:1})})),m(f(c),"shockZoom",(function(t){var e,n,o=c.props,r=o.zoomStep,i=void 0===r?.3:r,a=o.allowZoom,l=void 0===a||a,s=o.doubleClickZoom,u=void 0===s?4:s;if(!l||!u)return!1;if(c.stopSideEffect(t),c.state.zoom>1)return c.resetZoom();var f=(i<1?Math.ceil(u/i):i)*i,d=p(t),m=null===(e=c._cont.current)||void 0===e||null===(n=e.getBoundingClientRect)||void 0===n?void 0:n.call(e),v=m.x+m.width/2,b=m.y+m.height/2,g=-1*(d.x-v)*f,h=-1*(d.y-b)*f;c.setState({x:g,y:h,zoom:f})})),m(f(c),"navigateImage",(function(t,e){c.stopSideEffect(e);var n=0;switch(t){case"next":n=c.state.current+1;break;case"prev":n=c.state.current-1}n>=c.props.images.length?n=0:n<0&&(n=c.props.images.length-1),c.setState({current:n,x:0,y:0,zoom:1,rotate:0,loading:!0})})),m(f(c),"startMove",(function(t){if(c.state.zoom<=1)return!1;c.setState({moving:!0});var e=p(t);c.initX=e.x-c.lastX,c.initY=e.y-c.lastY})),m(f(c),"duringMove",(function(t){if(!c.state.moving)return!1;var e=p(t);c.lastX=e.x-c.initX,c.lastY=e.y-c.initY,c.setState({x:e.x-c.initX,y:e.y-c.initY})})),m(f(c),"endMove",(function(t){return c.setState({moving:!1})})),m(f(c),"applyZoom",(function(t){var e=c.props.zoomStep,n=void 0===e?.3:e;switch(t){case"in":c.setState({zoom:c.state.zoom+n});break;case"out":var o=c.state.zoom-n;if(o<1)break;1===o?c.setState({x:0,y:0,zoom:1}):c.setState({zoom:o});break;case"reset":c.resetZoom()}})),m(f(c),"applyRotate",(function(t){switch(t){case"cw":c.setState({rotate:c.state.rotate+90});break;case"acw":c.setState({rotate:c.state.rotate-90})}})),m(f(c),"reset",(function(t){c.stopSideEffect(t),c.setState({x:0,y:0,zoom:1,rotate:0})})),m(f(c),"exit",(function(t){if("function"==typeof c.props.onClose)return c.props.onClose(t);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),m(f(c),"shouldShowReset",(function(){return c.state.x||c.state.y||1!==c.state.zoom||0!==c.state.rotate})),m(f(c),"canvasClick",(function(t){var e=c.props.clickOutsideToExit;if((void 0===e||e)&&c.state.zoom<=1)return c.exit(t)})),m(f(c),"keyboardNavigation",(function(t){var e=c.props,n=e.allowZoom,o=void 0===n||n,r=e.allowReset,i=void 0===r||r,a=c.state,l=a.multi,s=a.x,u=a.y,f=a.zoom;switch(t.key){case"ArrowLeft":l&&1===f?c.navigateImage("prev",t):f>1&&c.setState({x:s-20});break;case"ArrowRight":l&&1===f?c.navigateImage("next",t):f>1&&c.setState({x:s+20});break;case"ArrowUp":f>1&&c.setState({y:u+20});break;case"ArrowDown":f>1&&c.setState({y:u-20});break;case"+":o&&c.applyZoom("in");break;case"-":o&&c.applyZoom("out");break;case"Escape":i&&c.shouldShowReset()?c.reset(t):c.exit(t)}})),c}return e=i,(n=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),n=this.getCurrentTitle(this.state,this.props);if(!e)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var o=this.props,i=o.allowZoom,a=void 0===i||i,l=o.allowRotate,c=void 0===l||l,s=o.buttonAlign,u=void 0===s?"flex-end":s,f=o.showTitle,d=void 0===f||f,m=o.allowReset,p=void 0===m||m,b=this.state,g=b.x,h=b.y,y=b.zoom,x=b.rotate,w=b.multi,k=b.loading,S=b.moving,j=p&&this.shouldShowReset();return r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:u}},r.a.createElement(v,{condition:d&&n},r.a.createElement("div",{className:"lb-title",style:{display:"center"===u?"none":"flex",order:"flex-start"===u?"2":"unset"}},r.a.createElement("span",{title:n,style:{textAlign:"flex-start"===u?"right":"left"}},n))),r.a.createElement(v,{condition:"center"===u||j},r.a.createElement("div",{title:"Reset",style:{order:"flex-start"===u?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(j?"":"lb-disabled"),onClick:this.reset})),r.a.createElement(v,{condition:w},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(v,{condition:a},r.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(y<=1?"lb-disabled":""),onClick:function(){return t.applyZoom("out")}})),r.a.createElement(v,{condition:c},r.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return t.applyRotate("cw")}})),r.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===u?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas".concat(k?" lb-loading":""),ref:this._cont,onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(g,h,y,x),cursor:y>1?"grab":"unset",transition:S?"none":"all 0.1s"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},onDoubleClick:function(e){return t.shockZoom(e)},onLoad:function(e){return t.setState({loading:!1})},className:"lb-img".concat(k?" lb-loading":""),title:n,src:e,alt:n}),r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},w?r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(e){return t.navigateImage("prev",e)}}):null,j?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,w?r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(e){return t.navigateImage("next",e)}}):null)))}}])&&l(e.prototype,n),i}(r.a.Component)}])},9220:function(t,e,n){"use strict";var o=n(7294),r=n(5697),i=n.n(r);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=(0,o.forwardRef)((function(t,e){var n=t.color,r=void 0===n?"currentColor":n,i=t.size,c=void 0===i?24:i,s=l(t,["color","size"]);return o.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("polyline",{points:"12 8 8 12 12 16"}),o.createElement("line",{x1:"16",y1:"12",x2:"8",y2:"12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ArrowLeftCircle",e.Z=c}},function(t){t.O(0,[674,774,888,179],(function(){return e=7991,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
//# sourceMappingURL=[...slug]-3ca7a208305e348d.js.map