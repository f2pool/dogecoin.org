function e(e){return e&&e.__esModule?e.default:e}var t,n=function(){};n.timer=function(e,t,n){var o,r=e-new Date,a=864e5,i=36e5,s=6e4,c=1e3,u=function(){if(r>0){var e=r,o=Math.floor(e/a);e%=a;var u=Math.floor(e/i);e%=i;var d=Math.floor(e/s);e%=s;var f=Math.floor(e/c);t({days:o,hours:u,minutes:d,seconds:f}),r-=1e3}else r-=1e3,clearInterval(l),n()},l=setInterval((o=this,function(){u.call(o)}),1e3);return u.call(this),{abort:function(){clearInterval(l)},getTimeRemaining:function(){var e=r,t=Math.floor(e/a);e%=a;var n=Math.floor(e/i);e%=i;var o=Math.floor(e/s);return e%=s,{days:t,hours:n,minutes:o,seconds:Math.floor(e/c)}}}},t=n;var o={};function r(e,t,n){var o,r,a,i,s;function c(){var u=Date.now()-i;u<t&&u>=0?o=setTimeout(c,t-u):(o=null,n||(s=e.apply(a,r),a=r=null))}null==t&&(t=100);var u=function(){a=this,r=arguments,i=Date.now();var u=n&&!o;return o||(o=setTimeout(c,t)),u&&(s=e.apply(a,r),a=r=null),s};return u.clear=function(){o&&(clearTimeout(o),o=null)},u.flush=function(){o&&(s=e.apply(a,r),a=r=null,clearTimeout(o),o=null)},u}r.debounce=r,o=r;var a={};!function(e){function t(e,t){t=t||2;var n,o=Number(e)<0,r=e.toString();return o&&(r=r.slice(1)),n=t-r.length+1,(o?"-":"")+(r=new Array(n).join("0").concat(r))}"function"==typeof define&&define.amd?define((function(){return t})):a?a=t:e.addZero=t}(a);var i;i={differenceBetween:function(e,t,n={}){const o=parseFloat((t-e)/e*100);return n.verbose?`${t} is ${Math.abs(o)}% ${e>t?"less":"more"} than ${e}`:o},absoluteDifferenceBetween:function(e,t,n={}){const o=parseFloat(Math.abs((t-e)/e*100));return n.verbose?`${t} is ${o}% ${e>t?"less":"more"} than ${e}`:o},calculate:function(e,t,n={}){const o=parseFloat(100*e/t);return n.verbose?`${e} is ${o}% of ${t}`:o},of:function(e,t,n={}){const o=parseFloat(t*(e/100));return n.verbose?`${e}% of ${t} is ${o}`:o},extension:function(e,t,n,o={}){const r=Math.abs(t-n),a=t>n?parseFloat(t-r*e/100):parseFloat(t+r*e/100);return o.verbose?`${a} is the ${e}% extension from ${t} to ${n}`:a}};Math.pow(10,8);function s(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){s(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(e,t){return s(2,arguments),c(e).getTime()-c(t).getTime()}var l={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function d(e){return e?l[e]:l.trunc}function f(e,t,n){s(2,arguments);var o=u(e,t)/6e4;return d(null==n?void 0:n.roundingMethod)(o)}const h=new Date("12/06/2021 0:30:00 PM UTC").getTime(),m=new Date("11/24/2021 0:00:00 AM UTC").getTime(),v=e=>{const t=document.querySelector("[data-component-video]"),n=document.querySelector("[data-component-countdown]");switch(e){case"data-component-video":t.classList.remove("hidden"),n.classList.add("hidden");break;case"data-component-countdown":t.classList.add("hidden"),n.classList.remove("hidden")}},p=()=>{const e=(e=>o.debounce((()=>{const t=e.getBoundingClientRect(),n=e.parentNode.getBoundingClientRect();t.width===n.width&&t.height===n.height||(e.classList.add("hidden"),e.width=n.width,e.height=n.height,setTimeout((()=>{e.classList.remove("hidden")}),1))}),100))(document.querySelector("[data-video-player]"));v("data-component-video"),e(),window.addEventListener("resize",e)},g=t=>{Object.keys(t).forEach((n=>{document.querySelector(`[data-value="${n}"]`).innerHTML=e(a)(t[n])}))};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelector("[data-progress-bar]");v("data-component-countdown");const n=f(h,m),o=f(h,new Date),r=e(i).calculate(o,n);t.style.cssText=`\n    stroke-dashoffset: ${r};\n    stroke-dasharray: 100;\n  `})(),e(t).timer(h,g,p)}));