/*! For license information please see 502.27c41f4d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[502],{502:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=h;var d={};function p(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==e&&r.call(w,c)&&(y=w);var x=m.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,i(x,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),l(x,u,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}var a=r(2791),c=r(7022),s=r(9743),u=r(2677),l=r(9434),h=r(9597),f="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,p="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",v=null,m=function(t){return null!==v||(v=new Promise((function(e,r){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&t&&console.warn(p),window.Stripe)e(window.Stripe);else try{var n=function(){for(var t=document.querySelectorAll('script[src^="'.concat(f,'"]')),e=0;e<t.length;e++){var r=t[e];if(d.test(r.src))return r}return null}();n&&t?console.warn(p):n||(n=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(f).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(t)),n.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(o){return void r(o)}else e(null)}))),v},y=Promise.resolve().then((function(){return m(null)})),g=!1;y.catch((function(t){g||console.warn(t)}));var w=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];g=!0;var n=Date.now();return y.then((function(t){return function(t,e,r){if(null===t)return null;var n=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"2.1.11",startTime:e})}(n,r),n}(t,e,n)}))},x=r(7689),j=r(184),b=function(){var t=(0,x.s0)(),e=(0,l.v9)((function(t){return t.cart})).cartList,r=(0,l.I0)(),n=e.reduce((function(t,e){return t+e.qty*e.price}),0);(0,a.useEffect)((function(){!function(){var e=localStorage.getItem("email");console.log(e,"ADAD"),null==e&&t("/")}()}),[]);var f=function(){var t,r=(t=o().mark((function t(){var r,n,i,a,c,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w("pk_test_51O2AJnSDHbApW9pLTBsW3WWMByH5r2nyHuGEXR1YlUHZG7xyeAoULMB1QLr1oUBdCybdk6BHMcbBVC1qYK9w49Ls00Vsr6jus4");case 2:return r=t.sent,n={products:e},i={"Content-Type":"application/json"},t.next=7,fetch("http://localhost:7000/api/create-checkout-session",{method:"POST",headers:i,body:JSON.stringify(n)});case 7:return a=t.sent,t.next=10,a.json();case 10:c=t.sent,(s=r.redirectToCheckout({sessionId:c.id})).error&&console.log(s.error);case 13:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,j.jsx)("section",{className:"cart-items",children:(0,j.jsxs)(c.Z,{children:[(0,j.jsxs)(s.Z,{className:"justify-content-center",children:[(0,j.jsxs)(u.Z,{md:8,children:[0===e.length&&(0,j.jsx)("h1",{className:"no-items product",children:"No Items are add in Cart"}),e.map((function(t){var e=t.price*t.qty;return(0,j.jsx)("div",{className:"cart-list",children:(0,j.jsxs)(s.Z,{children:[(0,j.jsx)(u.Z,{className:"image-holder",sm:4,md:3,children:(0,j.jsx)("img",{src:t.imgUrl,alt:""})}),(0,j.jsx)(u.Z,{sm:8,md:9,children:(0,j.jsxs)(s.Z,{className:"cart-content justify-content-center",children:[(0,j.jsxs)(u.Z,{xs:12,sm:9,className:"cart-details",children:[(0,j.jsx)("h3",{children:t.productName}),(0,j.jsxs)("h4",{children:["$",t.price,".00 * ",t.qty,(0,j.jsxs)("span",{children:["$",e,".00"]})]})]}),(0,j.jsxs)(u.Z,{xs:12,sm:3,className:"cartControl",children:[(0,j.jsx)("button",{className:"incCart",onClick:function(){return r((0,h.Xq)({product:t,num:1}))},children:(0,j.jsx)("i",{className:"fa-solid fa-plus"})}),(0,j.jsx)("button",{className:"desCart",onClick:function(){return r((0,h.AR)(t))},children:(0,j.jsx)("i",{className:"fa-solid fa-minus"})})]})]})}),(0,j.jsx)("button",{className:"delete",onClick:function(){return r((0,h.Ir)(t))},children:(0,j.jsx)("ion-icon",{name:"close"})})]})},t.id)}))]}),(0,j.jsx)(u.Z,{md:4,children:(0,j.jsxs)("div",{className:"cart-total",children:[(0,j.jsx)("h2",{children:"Cart Summary"}),(0,j.jsxs)("div",{className:" d_flex",children:[(0,j.jsx)("h4",{children:"Total Price :"}),(0,j.jsxs)("h3",{children:["$",n,".00"]})]})]})})]}),(0,j.jsx)("button",{className:"btn btn-primary",onClick:f,children:"Checkout"})]})})}}}]);
//# sourceMappingURL=502.27c41f4d.chunk.js.map