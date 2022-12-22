!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=6)}([function(e,t,n){"use strict";function r(e){return e.replace(/^\?/,"").replace(/\+|\+%20|%2520/," ").split("&").reduce((function(e,t){for(var n=t.split("="),r=n[0],i=n[1]||"",o=3;o--&&i.match(/%[0-9a-fA-F]{2}/);)i=decodeURIComponent(i);return e[r]=i,e}),{})}Object.defineProperty(t,"__esModule",{value:!0}),t.utmHasContent=t.getQueryParams=void 0,t.getQueryParams=r,t.default=function(e){if(!e||""===e.trim())return{url:"",path:"",section:"",domain:"",utm:{source:"",medium:"",term:"",content:"",campaign:"",paid:""}};var t=document.createElement("a");t.href=e;var n=r(t.search);return{url:e,path:t.pathname,section:t.pathname.split("/")[1],domain:t.hostname,utm:{source:n.utm_source,medium:n.utm_medium,term:n.utm_term,content:n.utm_content,campaign:n.utm_campaign,paid:n.utm_paid}}},t.utmHasContent=function(e){return!!(e.campaign||e.content||e.medium||e.source||e.term)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventManager=t.DEVELOPMENT_ENDPOINT_URL=t.STAGING_ENDPOINT_URL=t.PRODUCTION_ENDPOINT_URL=t.EVENT_QUEUE_KEY=void 0;var r=n(7),i=n(5),o=n(0);t.EVENT_QUEUE_KEY="oskarts_events",t.PRODUCTION_ENDPOINT_URL="https://oskar.themuse.com/",t.STAGING_ENDPOINT_URL="https://oskar.staging-themuse.com/",t.DEVELOPMENT_ENDPOINT_URL="http://oskar:9001/";var a=function(){function e(){this.endpointURL=t.DEVELOPMENT_ENDPOINT_URL,this.globalUserProperties={},this.globalEventProperties={},this.eventQueue=[];var e,n=i.default.get(t.EVENT_QUEUE_KEY)||[];i.default.set(t.EVENT_QUEUE_KEY,[]),Object.keys(n).forEach((function(e){null!=n[e].data&&(n[e]=n[e].data),n[e]=new r.default(n[e].event_type,n[e].payload.event_properties,n[e].payload.user_properties)})),Array.isArray(n)&&n.length>0&&(this.eventQueue=this.eventQueue.concat(n)),setInterval((e=this,function(){var t=e.eventQueue;e.eventQueue=[],e.flushQueue(t)}),100),this.setAmpLinkerClientID("amp_linker","amp_client_id")}return e.prototype.setEnvironment=function(e,n){switch(void 0===n&&(n=null),e){case"production":this.endpointURL=t.PRODUCTION_ENDPOINT_URL;break;case"staging":this.endpointURL=t.STAGING_ENDPOINT_URL;break;case"development":this.endpointURL=t.DEVELOPMENT_ENDPOINT_URL,null!=n&&(this.endpointURL=n);break;default:this.endpointURL=t.DEVELOPMENT_ENDPOINT_URL}},e.prototype._getEndpointURL=function(){return this.endpointURL},e.prototype.setAmpLinkerClientID=function(e,t){void 0===e&&(e="amp_linker"),void 0===t&&(t="amp_client_id");var n=o.getQueryParams(window.location.search),r=n[e];if(r){var i=new RegExp(t+"\\*(\\w+)").exec(r);if(null!==i&&i.length>1){delete n[e];var a=Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&");window.history.replaceState(null,"",a?"?"+a+window.location.hash:window.location.pathname);try{this.capture("AMP Identify",{amp_client_id:window.atob(i[1]),linker_params:r,timestamp:Date.now(),timezone:(new Date).getTimezoneOffset(),user_agent:window.navigator.userAgent,language:window.navigator.userLanguage||window.navigator.language})}catch(e){console.error("Error base64 decoding amp_client_id",e)}}}},e.prototype.addGlobalProperties=function(e,t){var n=this;void 0===e&&(e={}),void 0===t&&(t={}),e&&Object.keys(e).forEach((function(t){return n.globalUserProperties[t]=e[t]})),t&&Object.keys(t).forEach((function(e){return n.globalEventProperties[e]=t[e]}))},e.prototype.capture=function(e,t,n){var i=this;void 0===n&&(n=function(e){return 0});var o={};Object.keys(this.globalEventProperties).forEach((function(e){return o[e]=i.globalEventProperties[e]})),Object.keys(t).forEach((function(e){return o[e]=t[e]}));var a=new r.default(e,o,this.globalUserProperties,n);this.eventQueue.push(a)},e.prototype.storeQueue=function(e){i.default.set(t.EVENT_QUEUE_KEY,i.default.get(t.EVENT_QUEUE_KEY,[]).concat(e))},e.prototype.flushQueue=function(e){var t=this;if(e.length>0){var n=new XMLHttpRequest;try{n.open("POST",this.endpointURL+"batch"),n.setRequestHeader("Content-Type","application/json"),n.onreadystatechange=function(){var r;4==n.readyState&&(n.status<200||n.status>=300?(t.storeQueue(e),r=!1):r=!0,e.forEach((function(e){return e.sendCallback(r)})))},n.send(JSON.stringify(e))}catch(t){this.storeQueue(e)}}},e}();t.EventManager=a,t.default=new a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SessionClass=void 0;var r=n(0),i=n(8),o=n(3),a=n(5),s=n(9),u=n(1),c=function(){function e(e){void 0===e&&(e=!1),this.isNew=!1;var t=o.default.get("oskar_session",i.default.get("oskar_session"));e&&(t=null);var n=!1;t?this.data=t:(this.data={id:s.uuid(),entryPoint:r.default(document.location.href),initialReferrer:r.default(document.referrer)},this.isNew=!0),o.default.set("oskar_session",this.data),i.default.set("oskar_session",this.data,!0),this.oskarID=a.default.get("oskar_id",i.default.get("oskar_id")),this.oskarID?a.default.get("oskar_identified",i.default.get("oskar_identified",!1))||(n=!0):(this.oskarID=s.uuid(),n=!0),a.default.set("oskar_id",this.oskarID),i.default.set("oskar_id",this.oskarID,!1),this.deviceID=a.default.get("oskar_device_id",i.default.get("oskar_device_id")),this.deviceID||(this.deviceID=s.uuid(),a.default.set("oskar_device_id",this.deviceID),i.default.set("oskar_device_id",this.deviceID,!1)),n&&setTimeout(this.identify.bind(this),0)}return e.prototype.identify=function(){var e=this.data,t={session_id:e.id,entry_point:e.entryPoint,initial_referrer:e.initialReferrer};u.default.capture("identify",t),a.default.set("oskar_identified",!0),i.default.set("oskar_identified",!0,!1)},e}();t.SessionClass=c,t.default=new c},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.SessionStorage=t.SessionIdleDuration=void 0;var o=n(4);t.SessionIdleDuration=1800;var a=function(e){function n(){var t=e.call(this)||this;t.hasStorage=!1;try{window.localStorage.setItem("__oskar__session__test__","1"),window.localStorage.removeItem("__oskar__session__test__"),t.hasStorage=!0}catch(e){}return t}return i(n,e),n.prototype.key=function(e){return"session_"+e},n.prototype.expiryKey=function(e){return"session_"+e+"_expiry"},n.prototype.getValue=function(e){if(this.hasStorage){var t=this.key(e),n=this.expiryKey(e),r=new Date(JSON.parse(localStorage.getItem(n)));if(r&&r>=new Date)return localStorage.getItem(t);localStorage.removeItem(t),localStorage.removeItem(n)}return""},n.prototype.setValue=function(e,n){if(this.hasStorage){var r=this.key(e),i=this.expiryKey(e);localStorage.setItem(r,n);var o=new Date;o.setSeconds(o.getSeconds()+t.SessionIdleDuration),localStorage.setItem(i,JSON.stringify(o))}},n}(o.default);t.SessionStorage=a,t.default=new a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.get=function(e,t){void 0===t&&(t=null);var n=this.getValue(e);if(n)try{var r=JSON.parse(n);if(r)return r}catch(e){}return t},e.prototype.set=function(e,t){this.setValue(e,JSON.stringify(t))},e}();t.default=r},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.PermanentStorage=void 0;var o=function(e){function t(){var t=e.call(this)||this;t.hasStorage=!1;try{window.localStorage.setItem("__oskar__permanent__test__","1"),window.localStorage.removeItem("__oskar__permanent__test__"),t.hasStorage=!0}catch(e){}return t}return i(t,e),t.prototype.getValue=function(e){return this.hasStorage&&localStorage.getItem(e)||""},t.prototype.setValue=function(e,t){this.hasStorage&&localStorage.setItem(e,t)},t}(n(4).default);t.PermanentStorage=o,t.default=new o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=n(10),a=function(){function e(e){var t=this;this.pageSpeed=new o.default(this.capture),function(e){return e&&Array.isArray(e)&&e.length>0}(e)?this.q=e:this.q=[];var n=this.q;this.q=[],n.forEach((function(e){var n=e.splice(0,1)[0];t[n].apply(t,e)}))}return e.prototype.setGlobalUserProperties=function(e){r.default.addGlobalProperties(e)},e.prototype.setGlobalEventProperties=function(e){r.default.addGlobalProperties(null,e)},e.prototype.setAmpLinkerClientID=function(e,t){r.default.setAmpLinkerClientID(e,t)},e.prototype.capture=function(e,t,n){void 0===n&&(n=function(e){return 0}),r.default.capture(e,t,n)},e.prototype.setEnvironment=function(e,t){void 0===t&&(t=null),r.default.setEnvironment(e,t)},e.prototype.getOskarID=function(e){e(i.default.oskarID)},e.prototype.getSessionID=function(e){e(i.default.data.id)},e}();if(t.default=a,"object"==typeof window.OskarTS){var s=window.OskarTS;window.OskarTS=new a(s.q)}else window.OskarTS=new a(null)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(0),o=function(){function e(e,t,n,o){void 0===n&&(n={}),void 0===o&&(o=function(e){return 0}),this.sendCallback=o;var a=i.default(document.location.href),s=r.default.data.initialReferrer||{},u=r.default.data.entryPoint||{},c={initial_referrer:s.url,initial_referring_domain:s.domain,initial_utm:u.utm,referrer:document.referrer,referring_domain:i.default(document.referrer).domain,url:a.url,domain:a.domain,path:a.path,section:a.section,utm:a.utm};Object.keys(n).forEach((function(e){c[e]=n[e]})),this.event_type=e,this.payload={library:"OskarTS",device_id:r.default.deviceID,oskar_id:r.default.oskarID,session_id:r.default.data.id,user_id:t.user_id,client_upload_time:this.formatDateToLocalTime(new Date),user_properties:c,event_properties:t}}return e.prototype.formatDateToLocalTime=function(e){var t=function(e){return e<10?"0"+e:""+e},n=e.getTimezoneOffset(),r=n<0?"+":"-";return r+=t(~~((n=Math.abs(n))/60))+":"+t(n%60),e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+(e.getMilliseconds()/1e3).toFixed(3).slice(2,5)+r},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CookieHandler=void 0;var r,i=n(3),o=(r=document.location.hostname.split(".")).slice(Math.max(r.length-2,0)).join("."),a=function(){function e(){this.cookies=document.cookie.split(";").reduce((function(e,t){var n=t.trim().split("=");return e[n[0]]=n[1],e}),{})}return e.prototype.get=function(e,t){var n,r;void 0===t&&(t=null),r="oskar_session"===e&&this.cookies[e]?this.cookies[e].replace(/^"(.*)"$/,"$1"):this.cookies[e];try{n=JSON.parse(decodeURIComponent(r)||"null")}catch(e){}return n||t},e.prototype.setItem=function(e,t,n,r){void 0===r&&(r="none"),document.cookie=e+"="+encodeURIComponent(t)+";domain="+o+";path=/;max-age="+(n?i.SessionIdleDuration:"63072000")+";samesite="+r+"; secure",this.cookies[e]=t},e.prototype.set=function(e,t,n){this.setItem(e,JSON.stringify(t),n)},e}();t.CookieHandler=a,t.default=new a},function(e,t,n){"use strict";function r(e){var t="";if(window.crypto){var n=new Uint8Array(e/2);crypto.getRandomValues(n);for(var r=0;r<n.length;r++)t+=("00"+n[r].toString(16)).slice(-2)}else for(r=0;r<e;r++)t+=("00"+(~~(256*Math.random())).toString(16)).slice(-1);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.uuid=t.random=void 0,t.random=r,t.uuid=function(){var e=r(32);return e.substring(0,8)+"-"+e.substring(8,12)+"-"+e.substring(12,16)+"-"+e.substring(16,20)+"-"+e.substring(20,32)}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),a=function(){for(var e=1,t="* > *";document.querySelector(t);)t+=" > *",e++;return e};t.default=function(e){var t=this;this.metrics={Connection:window.navigator&&window.navigator.connection&&window.navigator.connection.effectiveType||"unknown",RTT:window.navigator&&window.navigator.connection&&window.navigator.connection.rtt||0,CLS:0,FCP:0,TTFB:0,LCP:0,TTI:0,FID:0,Requests:0,TBT:0},this.setVal=function(e){var n=e.name,r=e.value;t.metrics[n]=isNaN(r)?r:Math.round(r)},this.collect=function(e){var n=(t.metrics.FCP||0)+(t.metrics.FID||0);t.setVal({name:"TTI",value:n});var r=window.performance.getEntries().filter((function(e){return e.name.startsWith("http")})).length;t.setVal({name:"Requests",value:r});var i,o=window.performance.getEntries().filter((function(e){return e.duration-50>0})).reduce((function(e,t){var n=t.duration-50;return e+(n>0?n:0)}),0);t.setVal({name:"TBT",value:o}),t.setVal({name:"DOMDepth",value:a()}),t.setVal({name:"DOMChildren",value:(i=1,Array.from(document.querySelectorAll("*")).forEach((function(e){i=i<e.children.length?e.children.length:i})),i)}),t.setVal({name:"DOMNodes",value:document.querySelectorAll("*").length}),e("web_vitals",t.metrics)},"undefined"!=typeof window&&window.addEventListener&&(o.getCLS(this.setVal),o.getFCP(this.setVal),o.getFID(this.setVal),o.getLCP(this.setVal),o.getTTFB(this.setVal),window.addEventListener("beforeunload",(function(){return r(t,void 0,void 0,(function(){return i(this,(function(t){return this.collect(e),[2]}))}))})))}},function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return v})),n.d(t,"getFCP",(function(){return m})),n.d(t,"getFID",(function(){return _})),n.d(t,"getLCP",(function(){return y})),n.d(t,"getTTFB",(function(){return w}));var r,i,o=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:o(),isFinal:!1}},s=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,c=!1,l=function(e){u=!e.persisted},d=function(){addEventListener("pagehide",l),addEventListener("beforeunload",(function(){}))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c||(d(),c=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:u})}),{capture:!0,once:t})},p=function(e,t,n,r){var i;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||t.isFinal||void 0===i)&&(e(t),i=t.value))}},v=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=a("CLS",0),i=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},o=s("layout-shift",i);o&&(t=p(e,r,o,n),f((function(e){var n=e.isUnloading;o.takeRecords().map(i),n&&(r.isFinal=!0),t()})))},h=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,f((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},m=function(e){var t,n=a("FCP"),r=h(),i=s("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(n.value=e.startTime,n.isFinal=!0,n.entries.push(e),t())}));i&&(t=p(e,n,i))},_=function(e){var t=a("FID"),n=h(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,o())},i=s("first-input",r),o=p(e,t,i);i?f((function(){i.takeRecords().map(r),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],o())}))},g=function(){return i||(i=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),i},y=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=a("LCP"),i=h(),o=function(e){var n=e.startTime;n<i.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},u=s("largest-contentful-paint",o);if(u){t=p(e,r,u,n);var c=function(){r.isFinal||(u.takeRecords().map(o),r.isFinal=!0,t())};g().then(c),f(c,!0)}},w=function(e){var t,n=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}]);
//# sourceMappingURL=oskar.c37c9b9fab64eb5021be1caaf6650c05c37800f0.js.map