/*! For license information please see 7596.b62c26f5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7596],{"./node_modules/no-case/dist.es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>noCase});function lowerCase(str){return str.toLowerCase()}var DEFAULT_SPLIT_REGEXP=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],DEFAULT_STRIP_REGEXP=/[^A-Z0-9]+/gi;function noCase(input,options){void 0===options&&(options={});for(var _a=options.splitRegexp,splitRegexp=void 0===_a?DEFAULT_SPLIT_REGEXP:_a,_b=options.stripRegexp,stripRegexp=void 0===_b?DEFAULT_STRIP_REGEXP:_b,_c=options.transform,transform=void 0===_c?lowerCase:_c,_d=options.delimiter,delimiter=void 0===_d?" ":_d,result=replace(replace(input,splitRegexp,"$1\0$2"),stripRegexp,"\0"),start=0,end=result.length;"\0"===result.charAt(start);)start++;for(;"\0"===result.charAt(end-1);)end--;return result.slice(start,end).split("\0").map(transform).join(delimiter)}function replace(input,re,value){return re instanceof RegExp?input.replace(re,value):re.reduce((function(input,re){return input.replace(re,value)}),input)}},"./node_modules/param-case/dist.es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>paramCase});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function paramCase(input,options){return void 0===options&&(options={}),function dotCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:"."},options))}(input,(0,tslib_es6.pi)({delimiter:"-"},options))}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{P:()=>isPlainObject})},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pi:()=>__assign,_T:()=>__rest,ev:()=>__spreadArray});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);