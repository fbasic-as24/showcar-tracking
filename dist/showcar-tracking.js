!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";if(location.hash.indexOf("tracking-off=true")<0){var r,i,o,a,c;!function(){var e=function(t){var e,n;"pagename"===t[0]&&r.setPagename(t[1]),"gtm"===t[0]?(e=r[t[1]],n=t.slice(2),"function"==typeof e&&e.apply(r,n)):"dealer"===t[0]?(e=i[t[1]],n=t.slice(2),"function"==typeof e&&e.apply(i,n)):"dealerTatsu"===t[0]?(e=o[t[1]],n=t.slice(2),"function"==typeof e&&e.apply(o,n)):"dealer-gtm"===t[0]&&(e=a[t[1]],n=t.slice(2),"function"==typeof e&&e.apply(a,n))};r=n(19),i=n(13),o=n(14),a=n(12),c=window.ut||(window.ut=[]),c.push===Array.prototype.push&&(c.push=function(){Array.prototype.push.apply(window.ut,arguments),e.apply({},arguments)},c.forEach(e)),n(21),t.exports={gtm:r,dealer:i,dealerTatsu:o,ut:c}}()}},function(t,e){"use strict";function n(t,e){if(!t)return null;var n=e&&e.decodingFunction||decodeURIComponent;return n(a.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function r(t,e,n){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var r="";if(n.expires){var i=new Date;i.setTime(+i+n.expires),r="; expires="+i.toGMTString()}return n.encodingFunction=n.encodingFunction||encodeURIComponent,document.cookie=encodeURIComponent(t)+"="+n.encodingFunction(e)+r+(n.domain?"; domain="+n.domain:"")+(n.path?"; path="+n.path:"")+(n.secure?"; secure":""),!0}function i(t,e){return!o(t)&&(document.cookie=encodeURIComponent(t)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+e.domain:"")+(e.path?"; path="+e.path:""),!0)}function o(t){return!!t&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}var a=document;t.exports={read:n,set:r,remove:i}},function(t,e){"use strict";function n(t){return t&&(""+t).toLowerCase()}var r=window.dataLayer=window.dataLayer||[],i=window.location.href.indexOf("tracking-arrays=true")>=0;t.exports={loadContainer:function(t){var e="gtm-main-container-load-initiated",n=document.documentElement.className.indexOf(e)>=0;n||(document.documentElement.className+=" "+e,function(t,e,n,r,i){t[r]=t[r]||[],t[r].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var o=e.getElementsByTagName(n)[0],a=e.createElement(n),c="dataLayer"!=r?"&l="+r:"";a.async=!0,a.src="//www.googletagmanager.com/gtm.js?id="+i+c,o.parentNode.insertBefore(a,o)}(window,document,"script","dataLayer",t))},push:function(){if(arguments.length){var t=[].slice.call(arguments);t.map(function(t){for(var e in t)i&&"string"!=typeof t[e]||(t[e]=n(t[e]));return t}),r.push.apply(r,t)}}}},function(t,e,n){"use strict";var r=n(7);t.exports=function(t){if(!r(t))return t;for(var e,n,i=1,o=arguments.length;i<o;i++){e=arguments[i];for(n in e)t[n]=e[n]}return t}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e,n){var i=0,o=t&&t.length;for(r(n)&&(i=n<0?Math.max(0,o+n):n);i<o;i++)if(t[i]===e)return i;return-1}},function(t,e){"use strict";var n=Object.prototype.toString;t.exports=function(t){return"[object Date]"===n.call(t)}},function(t,e){"use strict";var n=Object.prototype.toString;t.exports=function(t){return"[object Number]"===n.call(t)}},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){var e="undefined"==typeof t?"undefined":n(t);return!!t&&("function"===e||"object"===e)}},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=[].slice.call(arguments);return t.unshift({}),r.apply(this,t)}},function(t,e){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var s=t.length;c>0&&s>c&&(s=c);for(var u=0;u<s;++u){var p,l,d,m,f=t[u].replace(a,"%20"),h=f.indexOf(r);h>=0?(p=f.substr(0,h),l=f.substr(h+1)):(p=f,l=""),d=decodeURIComponent(p),m=decodeURIComponent(l),n(o,d)?Array.isArray(o[d])?o[d].push(m):o[d]=[o[d],m]:o[d]=m}return o}},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t){switch("undefined"==typeof t?"undefined":n(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,i,o){return e=e||"&",i=i||"=",null===t&&(t=void 0),"object"===("undefined"==typeof t?"undefined":n(t))?Object.keys(t).map(function(n){var o=encodeURIComponent(r(n))+i;return Array.isArray(t[n])?t[n].map(function(t){return o+encodeURIComponent(r(t))}).join(e):o+encodeURIComponent(r(t[n]))}).join(e):o?encodeURIComponent(r(o))+i+encodeURIComponent(r(t)):""}},function(t,e,n){"use strict";e.decode=e.parse=n(9),e.encode=e.stringify=n(10)},function(t,e){"use strict";function n(t){i.push(t)}function r(){window.dataLayer=window.dataLayer||[],window.dataLayer.push({list_productidsall:i}),i=[]}var i=[];t.exports={add:n,commit:r}},function(t,e,n){"use strict";function r(t){if(o){t.visitor=o,t.ticks=+new Date;var e=Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&");(new Image).src="https://tracking.autoscout24.com/parser.ashx?"+e}}var i=n(1),o=i.read("as24Visitor");t.exports={listview:function(t){r({id:t.join("|"),source:"lv",url:"/"})},detailview:function(t){var e=document.createElement("a");e.href=t||location.href;var n=e.pathname.match(/-([\d]+)$/i);if(n&&2===n.length){var i=n[1];r({source:"pv",url:t||location.href,id:i})}},topcarview:function(){var t=location.pathname.match(/-([\d]+)$/i);if(t&&2===t.length){var e=t[1];r({source:"ha",url:location.href,id:e})}},phone:function(){var t=location.pathname.match(/-([\d]+)$/i);if(t&&2===t.length){var e=t[1];r({source:"mc",url:location.href,id:e})}}}},function(t,e,n){"use strict";function r(t){if(o){t.visitor=o,t.ticks=+new Date;var e=Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&");(new Image).src="https://tracking.autoscout24.com/parser.ashx?"+e}}var i=n(1),o=i.read("as24Visitor");t.exports={listview:function(t){r({id:t.join("|"),source:"lv",url:location.href})},detailview:function(t){r({id:t,source:"pv",url:location.href})},topcarview:function(t){r({id:t,source:"ha",url:location.href})},phone:function(t){r({id:t,source:"mc",url:location.href})}}},function(t,e,n){"use strict";function r(t){var e=+new Date,n={name:t,date:new Date(0),content:[],firstVisit:null,currentVisit:null,lastPaidVisit:null,isValid:function(){return a(this.date)&&this.content&&3===this.content.length},getGtmData:function(){var t={};return t.campaign_directMedium=this.currentVisit[0],t.campaign_directSource=this.currentVisit[1],t.campaign_directCampaign=this.currentVisit[2],this.lastPaidVisit&&this.lastPaidVisit[3]>e-s*u&&(t.campaign_lastPaidMedium=this.lastPaidVisit[0],t.campaign_lastPaidSource=this.lastPaidVisit[1],t.campaign_lastPaidCampaign=this.lastPaidVisit[2]),t},updateCurrentVisit:function(){var t=c.getParameters(location.search);this.currentVisit=[t.medium,t.source,t.campaign,e],this.firstVisit=this.firstVisit||this.currentVisit,c.isPaidChannel(t.medium)&&(this.lastPaidVisit=this.currentVisit),this.content=[this.firstVisit,this.lastPaidVisit,this.currentVisit]}};try{var r=o.read(t);if(!r)return n;var i=new Date(+r.substring(0,13));if(!a(i))return n;n.date=i;var p=r.substring(13).split("#").map(function(t){if(!t)return null;var e=t.split(",");return e[3]=e[3]&&parseInt(e[3],10),e});return p&&3===p.length||(p=[]),n.firstVisit=p[0],n.lastPaidVisit=p[1],n.currentVisit=p[2],n.content=p,n}catch(t){return n}}function i(t){var e=+new Date,n="."+location.hostname.split(".").slice(-2).join("."),r=e+""+t.content.slice(0,3).join("#"),i={expires:24*s*60*60,path:"/",domain:location.hostname.indexOf("localhost")>=0?"":n};o.set(t.name,r,i)}var o=n(1),a=n(5),c=n(17),s=90,u=864e5;t.exports={read:r,write:i}},function(t,e,n){"use strict";function r(){var t="cmpatt",e=o.read(t);e.updateCurrentVisit(),i.push(e.getGtmData()),o.write(e)}var i=n(2),o=n(15);t.exports={updateCampaignCookie:r}},function(t,e,n){"use strict";var r=n(11),i=n(4);t.exports={getParameters:function(t){var e=r.parse(t.replace("?",""))||{},n={medium:e.gclid?"gclid":e.utm_medium||"",source:e.utm_source||"",campaign:e.utm_campaign||""};return n.medium||(n.medium="direct",n.source="direct",n.campaign="direct"),n},isPaidChannel:function(t){var e=["aff","co","med","email","ret","cpc","print","gclid"];return!!(t&&i(e,t)>=0)}}},function(t,e){"use strict";var n={de:"GTM-MK57H2",at:"GTM-WBZ87G",be:"GTM-5BWB2M",lu:"GTM-NDBDCZ",es:"GTM-PS6QHN",fr:"GTM-PD93LD",it:"GTM-WTCSNR",nl:"GTM-TW48BJ",com:"GTM-KWX9NX"};t.exports=function(t){var e=t.split(".").pop();return n[e]||n.com}},function(t,e,n){"use strict";function r(t){c=t}function i(t){var e=s({},c,t);if(!(e&&e.country&&e.market&&e.category&&e.pageid))throw new Error("Incorrect pagename");var n=[e.country,e.market,e.category,e.group,e.pageid].filter(function(t){return t}).join("/");e.layer&&(n+="|"+e.layer);var r={common_country:e.country,common_market:e.market,common_category:e.category,common_pageid:e.pageid,common_pageName:n,common_environment:e.environment||"",common_language:e.language||"",common_group:e.group||"",common_layer:e.layer||"",common_attribute:e.attribute||"",common_linkgroup:e.linkgroup||"",common_linkid:e.linkid||"",common_techState:e.techState||""};return r}function o(t){u.push(i(t)),u.push({event:"click"})}function a(t){d&&u.push(l),u.push(i(t)),setTimeout(function(){d?(u.loadContainer(p),n(16).updateCampaignCookie(),u.push({event:"common_data_ready"}),u.push({event:"data_ready"}),d=!1):u.push({event:"pageview"})},10)}var c,s=n(8),u=n(2),p=n(18)(location.hostname),l=n(20),d=!0;t.exports={setPagename:r,trackClick:o,set:u.push,pageview:a,click:o}},function(t,e){"use strict";var n=Math.min(document.documentElement.clientWidth,window.innerWidth||screen.width);t.exports={session_viewport:n>=994?"l":n>=768?"m":n>=480?"s":"xs"}},function(t,e){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r=n(Object.create(HTMLElement.prototype),{inDev:!1,supportedActions:["set","click","pageview"],supportedTypes:["gtm","pagename"],reservedWords:["type","action","as24-tracking-value","as24-tracking-click-target"],createdCallback:function(){var t=this,e=this.getAdditionalProperties(),n=this.getAttribute("type"),r=this.getAttribute("action"),i=[n,r];Object.keys(e).length>0&&i.push(e),"pagename"===n&&i.splice(1,1);var o=this.getAttribute("as24-tracking-click-target");if(o)for(var a=document.querySelectorAll(o),c=0;c<a.length;c++)a[c].addEventListener("click",function(){return t.track(i)});else this.track(i)},getAdditionalProperties:function(){var t=this,e=this.getAttribute("as24-tracking-value"),n=e?JSON.parse(e):{};return Array.isArray(n)?n:Array.prototype.slice.call(this.attributes).filter(function(e){return!(t.reservedWords.indexOf(e.nodeName)>-1)}).reduce(function(e,n){var r=t.decodeAttributeName(n.nodeName);return e[r]=n.nodeValue,e},n)},decodeAttributeName:function(t){return t.indexOf("-")>-1&&(t=t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})),t},track:function(t){this.inDev?console.log(t):ut.push(t)}});try{var i=document.createElement("as24-tracking").constructor;i!==HTMLElement&&i!==HTMLUnknownElement||document.registerElement("as24-tracking",{prototype:r})}catch(t){window&&window.console&&window.console.warn('Failed to register CustomElement "as24-tracking".',t)}}]);
//# sourceMappingURL=showcar-tracking.js.map