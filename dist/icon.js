var t,e=(t=require("highlight.js"))&&t.__esModule?t.default:t;function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return c(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function c(t,e,n){return(c=u()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,i(HTMLElement));var e,n,c,a,s,p=(e=y,n=u(),function(){var t,r=l(e);if(n){var i=l(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function y(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),p.call(this)}return c=y,(a=[{key:"connectedCallback",value:function(){this.set=this.getAttribute("set"),this.name=this.getAttribute("name");var t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=null;try{(e=document.querySelector('link[icon][set="'.concat(this.set,'"]'))).getAttribute("href")}catch(t){console.error('<link icon set="'.concat(this.set,'"> ').concat(t))}var n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","".concat(e.getAttribute("href"),"#").concat(this.name)),t.style.width="1em",t.style.height="1em",t.appendChild(n),this.appendChild(t)}}])&&r(c.prototype,a),s&&r(c,s),y}();customElements.define("el-icon",a),e.initHighlightingOnLoad();
//# sourceMappingURL=icon.js.map
