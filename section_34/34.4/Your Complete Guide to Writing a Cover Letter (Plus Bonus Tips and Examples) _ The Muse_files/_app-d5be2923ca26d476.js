(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{11752:function(a,c,b){a.exports=b(88027)},6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(12957)}])},12957:function(d,b,a){"use strict";a.r(b);var e=a(26042),f=a(85893),g=a(67294),c=a(9008),h=a.n(c),i=a(21771);a(1720),a(74144),b.default=function(a){var b=a.Component,c=a.pageProps;return(0,g.useEffect)(function(){var a=document.querySelector('header[class^="Header_header"]');null==a||a.addEventListener("click",i._m,!1),document.addEventListener("click",function(a){return(0,i.wL)(a,i.YU)},!1),document.addEventListener("contextmenu",function(a){return(0,i.wL)(a,i.YU)},!1)},[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,f.jsx)("script",{async:!0,src:"//content.jwplatform.com/libraries/OOgy074L.js",id:"jwplayer-script"})]}),(0,f.jsx)(b,(0,e.Z)({},c))]})}},37228:function(c,b,a){"use strict";a.d(b,{WI:function(){return e},jU:function(){return d}}),a(11752);var d=function(){return void 0!==window.document},e=function(){var b=[];if(d()&&"dataLayer"in window){var a=window.dataLayer.filter(function(a){return"object"==typeof a&&"experimentID"in a});a.length>0&&a.forEach(function(a){b.push({experiment_id:a.experimentID,variant_id:a.variantID})})}return b}},21771:function(c,b,a){"use strict";a.d(b,{Jt:function(){return u},Uk:function(){return p},YU:function(){return o},"_m":function(){return s},hf:function(){return t},wL:function(){return r}});var d,e,f,g,h=a(26042),i=a(69396),j=a(29815);a(85893),a(67294);var k=a(11752),l=a(37228),m=function(){var a=(0,k.default)().publicRuntimeConfig.appVersion;return a?a.split(".").slice(0,2).join("."):""},n=function(){var a,b,c,h,i,j;return{app_version_id:m(),page_referrer:null!==(d=null==document?void 0:document.referrer)&& void 0!==d?d:"",query_string:null!==(e=null==window?void 0:null===(a=window.document)|| void 0===a?void 0:null===(b=a.location)|| void 0===b?void 0:b.search)&& void 0!==e?e:"",page:null!==(f=null==window?void 0:null===(c=window.document)|| void 0===c?void 0:null===(h=c.location)|| void 0===h?void 0:h.pathname)&& void 0!==f?f:"",path:null!==(g=null==window?void 0:null===(i=window.document)|| void 0===i?void 0:null===(j=i.location)|| void 0===j?void 0:j.pathname)&& void 0!==g?g:"",experiments:[],tm_source:"",status:200}},o=function(c){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};try{if(l.jU){var a=n(),b=(0,l.WI)();b&&(a.experiments=(0,j.Z)(a.experiments).concat((0,j.Z)(b))),console.info("Stub Page Event",c,(0,h.Z)({},d,a))}}catch(e){console.error("Event error",e)}},p=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};try{l.jU&&console.info("Stub User Tracking Event",(0,h.Z)({},a))}catch(b){console.error("Event error",b)}},q=function(a,b){return b.includes(a.tagName)?a:a.parentElement&&a.parentElement!==document.body?q(a.parentElement,b):null},r=function(b,c){var a=q(b.target,["A"]);a&&c("Global Link Clicked",{experiments:[],link_href:a.getAttribute("href"),link_name:a.textContent,page_referrer:document.referrer,path:window.location.pathname,placement_position:"",query_string:window.location.search,right_click:"contextmenu"===b.type,status_code:200})},s=function(b,c){var a=q(b.target,["A"]);if(a&&a.hasAttribute("data-header-link")){var e,d=a.getAttribute("href");c("Header Link Clicked",(0,i.Z)((0,h.Z)({},n()),{header_link:a.getAttribute("data-header-link"),link_href:d,link_name:a.textContent,placement_position:"",right_click:"contextmenu"===b.type,text:a.textContent}))}},t=function(a){var b={};return a.clickEvent&&(b.oskarClick=a.clickEvent),a.viewEvent&&(b.oskarView=a.viewEvent),b.oskarProps=JSON.stringify(a.eventProps||{}),b},u=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};(0,l.jU)()&&window.dataLayer&&window.dataLayer.push((0,h.Z)({event:a},b))}},1720:function(){},74144:function(){},9008:function(a,c,b){a.exports=b(5443)},20943:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}b.d(a,{Z:function(){return d}})},14924:function(c,a,b){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}b.d(a,{Z:function(){return d}})},13375:function(c,a,b){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}b.d(a,{Z:function(){return d}})},26042:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(14924);function e(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){(0,d.Z)(e,a,c[a])})}return e}},69396:function(c,a,b){"use strict";function d(b,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(a)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(a)).forEach(function(c){Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))}),b}b.d(a,{Z:function(){return d}})},29815:function(c,b,a){"use strict";a.d(b,{Z:function(){return g}});var d=a(20943),e=a(13375),f=a(91566);function g(a){return function(a){if(Array.isArray(a))return(0,d.Z)(a)}(a)||(0,e.Z)(a)||(0,f.Z)(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(20943);function e(a,c){if(a){if("string"==typeof a)return(0,d.Z)(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return(0,d.Z)(a,c)}}}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(90387)}),_N_E=a.O()}])