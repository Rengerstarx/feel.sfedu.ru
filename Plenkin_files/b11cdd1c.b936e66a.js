﻿"use strict";(self.webpackChunkvkweb=self.webpackChunkvkweb||[]).push([[43128],{301388:(e,t,n)=>{n.d(t,{MASKITO_DEFAULT_ELEMENT_PREDICATE:()=>s,MASKITO_DEFAULT_OPTIONS:()=>a,Maskito:()=>x,maskitoTransform:()=>y});const s=e=>e.querySelector("input,textarea")||e,a={mask:/^.*$/,preprocessors:[],postprocessors:[],plugins:[],overwriteMode:"shift"};class i{constructor(){this.now=null,this.past=[],this.future=[]}undo(){const e=this.past.pop();e&&this.now&&(this.future.push(this.now),this.updateElement(e,"historyUndo"))}redo(){const e=this.future.pop();e&&this.now&&(this.past.push(this.now),this.updateElement(e,"historyRedo"))}updateHistory(e){if(!this.now)return void(this.now=e);const t=this.now.value!==e.value,n=this.now.selection.some(((t,n)=>t!==e.selection[n]));(t||n)&&(t&&(this.past.push(this.now),this.future=[]),this.now=e)}updateElement(e,t){this.now=e,this.updateElementState(e,{inputType:t,data:null})}}function r(e){return"string"==typeof e}function o(e,t,n,s){let a="";for(let i=t.length;i<e.length;i++){const t=e[i],o=(null==s?void 0:s.value[i])===t;if(!r(t)||t===n&&!o)return a;a+=t}return a}function l(e,t){return Array.isArray(t)?e.length===t.length&&Array.from(e).every(((e,n)=>{const s=t[n];return r(s)?e===s:e.match(s)})):t.test(e)}function c(e,t,n=null){if(l(e.value,t))return e;const{value:s,selection:a}=Array.isArray(t)?function(e,t,n){let s=null,a=null;const i=Array.from(e.value).reduce(((i,l,c)=>{const u=i+o(t,i,l,n),d=t[u.length];return r(d)?u+d:l.match(d)?(null===s&&c>=e.selection[0]&&(s=u.length),null===a&&c>=e.selection[1]&&(a=u.length),u+l):u}),""),c=o(t,i,"",n);return{value:l(i+c,t)?i+c:i,selection:[null!=s?s:i.length,null!=a?a:i.length]}}(e,t,n):function({value:e,selection:t},n){const[s,a]=t;let i=s,r=a;return{value:Array.from(e).reduce(((e,t,o)=>{const l=e+t;return s===o&&(i=e.length),a===o&&(r=e.length),l.match(n)?l:e}),""),selection:[i,r]}}(e,t);return{selection:a,value:Array.isArray(t)?s.slice(0,t.length):s}}function u(e,t){if(!Array.isArray(t))return e;const[n,s]=e.selection,a=[],i=Array.from(e.value).reduce(((e,i,o)=>{const l=t[o];return o===n&&a.push(e.length),o===s&&a.push(e.length),r(l)&&l===i?e:e+i}),"");return a.length<2&&a.push(...new Array(2-a.length).fill(i.length)),{value:i,selection:[a[0],a[1]]}}class d{constructor(e,t){this.initialElementState=e,this.maskOptions=t,this.value="",this.selection=[0,0];const{value:n,selection:s}=c(e,this.getMaskExpression(e));this.value=n,this.selection=s}addCharacters([e,t],n){const{value:s}=this,a=this.getMaskExpression({value:s.slice(0,e)+n+s.slice(t),selection:[e+n.length,e+n.length]}),i={value:s,selection:[e,t]},r=u(i,a),[o,l]=function({value:e,selection:t},n,s){const[a,i]=t;return{value:e,selection:"replace"===("function"==typeof s?s({value:e,selection:t}):s)?[a,a+n.length]:[a,i]}}(r,n,this.maskOptions.overwriteMode).selection,d=r.value.slice(0,o)+n,p=d.length,h=c({value:d+r.value.slice(l),selection:[p,p]},a,i);if(s.slice(0,o)===c({value:d,selection:[p,p]},a,i).value||function(e,...t){return t.every((({value:t,selection:n})=>t===e.value&&n[0]===e.selection[0]&&n[1]===e.selection[1]))}(this,h))throw new Error("Invalid mask value");this.value=h.value,this.selection=h.selection}deleteCharacters([e,t]){if(e===t||!t)return;const{value:n}=this,s=this.getMaskExpression({value:n.slice(0,e)+n.slice(t),selection:[e,e]}),a={value:n,selection:[e,t]},i=u(a,s),[r,o]=i.selection,l=c({value:i.value.slice(0,r)+i.value.slice(o),selection:[r,r]},s,a);this.value=l.value,this.selection=l.selection}getMaskExpression(e){const{mask:t}=this.maskOptions;return"function"==typeof t?t(e):t}}class p{constructor(e){this.element=e,this.listeners=[]}listen(e,t,n){const s=t;this.element.addEventListener(e,s,n),this.listeners.push((()=>this.element.removeEventListener(e,s)))}destroy(){this.listeners.forEach((e=>e()))}}function h(e,t,n){return e.ctrlKey===!!(1&t)&&e.altKey===!!(2&t)&&e.shiftKey===!!(4&t)&&e.metaKey===!!(8&t)&&e.keyCode===n}function m({value:e,selection:t},n){const[s,a]=t;if(s!==a)return[s,a];const i=n?e.slice(s).indexOf("\n")+1||e.length:e.slice(0,a).lastIndexOf("\n")+1;return[n?s:i,n?i:a]}function v({value:e,selection:t},n){const[s,a]=t;if(s!==a)return[s,a];return(n?[s,a+1]:[s-1,a]).map((t=>Math.min(Math.max(t,0),e.length)))}const f=/\s+$/g,g=/^\s+/g,S=/\s/;function w({value:e,selection:t},n){const[s,a]=t;if(s!==a)return[s,a];if(n){const t=e.slice(s),[n]=t.match(g)||[""],a=t.replace(g,"").search(S);return[s,-1!==a?s+n.length+a:e.length]}const i=e.slice(0,a),[r]=i.match(f)||[""],o=i.replace(f,"").split("").reverse().findIndex((e=>e.match(S)));return[-1!==o?a-r.length-o:0,a]}function E(e=[]){return(t,...n)=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),t(e,...n))),t)}function y(e,t){const n=Object.assign(Object.assign({},a),t),s=E(n.preprocessors),i=E(n.postprocessors),r="string"==typeof e?{value:e,selection:[0,0]}:e,{elementState:o}=s({elementState:r,data:""},"validation"),l=new d(o,n),{value:c,selection:u}=i(l,r);return"string"==typeof e?c:{value:c,selection:u}}class x extends i{constructor(e,t){super(),this.element=e,this.maskitoOptions=t,this.isTextArea="TEXTAREA"===this.element.nodeName,this.eventListener=new p(this.element),this.options=Object.assign(Object.assign({},a),this.maskitoOptions),this.preprocessor=E(this.options.preprocessors),this.postprocessor=E(this.options.postprocessors),this.teardowns=this.options.plugins.map((e=>e(this.element,this.options))),this.ensureValueFitsMask(),this.updateHistory(this.elementState),this.eventListener.listen("keydown",(e=>function(e){return h(e,1,89)||h(e,5,90)||h(e,12,90)}(e)?(e.preventDefault(),this.redo()):function(e){return h(e,1,90)||h(e,8,90)}(e)?(e.preventDefault(),this.undo()):void 0)),!function(e){return"onbeforeinput"in e}(e)?(this.eventListener.listen("keydown",(e=>this.handleKeydown(e))),this.eventListener.listen("paste",(e=>{var t;return this.handleInsert(e,(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))||"")}))):this.eventListener.listen("beforeinput",(e=>{const t=e.inputType.includes("Forward");switch(this.updateHistory(this.elementState),e.inputType){case"historyUndo":return e.preventDefault(),this.undo();case"historyRedo":return e.preventDefault(),this.redo();case"deleteByCut":case"deleteContentBackward":case"deleteContentForward":return this.handleDelete({event:e,isForward:t,selection:v(this.elementState,t)});case"deleteWordForward":case"deleteWordBackward":return this.handleDelete({event:e,isForward:t,selection:w(this.elementState,t),force:!0});case"deleteSoftLineBackward":case"deleteSoftLineForward":case"deleteHardLineBackward":case"deleteHardLineForward":return this.handleDelete({event:e,isForward:t,selection:m(this.elementState,t),force:!0});case"insertCompositionText":return;case"insertLineBreak":return this.handleEnter(e);default:return this.handleInsert(e,e.data||"")}})),this.eventListener.listen("input",(({inputType:e})=>{"insertCompositionText"!==e&&(this.ensureValueFitsMask(),this.updateHistory(this.elementState))})),this.eventListener.listen("compositionend",(()=>{this.ensureValueFitsMask(),this.updateHistory(this.elementState)}))}get elementState(){const{value:e,selectionStart:t,selectionEnd:n}=this.element;return{value:e,selection:[t||0,n||0]}}get maxLength(){const{maxLength:e}=this.element;return-1===e?1/0:e}destroy(){this.eventListener.destroy(),this.teardowns.forEach((e=>null==e?void 0:e()))}updateElementState({value:e,selection:t},n={inputType:"insertText",data:null}){const s=this.elementState.value;this.updateValue(e),this.updateSelectionRange(t),s!==e&&this.dispatchInputEvent(n)}updateSelectionRange([e,t]){var n,s;this.element.selectionStart===e&&this.element.selectionEnd===t||null===(s=(n=this.element).setSelectionRange)||void 0===s||s.call(n,e,t)}updateValue(e){this.element.value=e}ensureValueFitsMask(){this.updateElementState(y(this.elementState,this.options))}dispatchInputEvent(e={inputType:"insertText",data:null}){const t="undefined"!=typeof window?window:globalThis;(null==t?void 0:t.InputEvent)&&this.element.dispatchEvent(new InputEvent("input",Object.assign(Object.assign({},e),{bubbles:!0,cancelable:!1})))}handleKeydown(e){const t=e.key,n="Delete"===t;switch(t){case"Backspace":case"Delete":return this.handleDelete({event:e,isForward:n,selection:v(this.elementState,n)});case"Enter":return this.handleEnter(e)}(function({key:e,ctrlKey:t,metaKey:n,altKey:s}){const a=t||n||s,i=/^.$/u.test(e);return!a&&"Backspace"!==e&&i})(e)&&this.handleInsert(e,t)}handleDelete({event:e,selection:t,isForward:n,force:s=!1}){const a={value:this.elementState.value,selection:t},[i,r]=a.selection,{elementState:o}=this.preprocessor({elementState:a,data:""},n?"deleteForward":"deleteBackward"),l=new d(o,this.options),[c,u]=o.selection;l.deleteCharacters([c,u]);const p=this.postprocessor(l,a);if(a.value.slice(0,i)+a.value.slice(r)===p.value&&!s)return;if(e.preventDefault(),function(e,...t){return t.every((({value:t})=>t===e.value))}(a,o,l,p))return this.updateSelectionRange(n?[u,u]:[c,c]);const h=n?"deleteContentForward":"deleteContentBackward";this.updateElementState(p,{inputType:"inputType"in e?e.inputType:h,data:null}),this.updateHistory(p)}handleInsert(e,t){const n=this.elementState,{elementState:s,data:a=t}=this.preprocessor({data:t,elementState:n},"insert"),i=new d(s,this.options);try{i.addCharacters(s.selection,a)}catch(t){return e.preventDefault()}const[r,o]=s.selection,l=s.value.slice(0,r)+t+s.value.slice(o),c=this.postprocessor(i,n);if(c.value.length>this.maxLength)return e.preventDefault();l!==c.value&&(e.preventDefault(),this.updateElementState(c,{data:t,inputType:"inputType"in e?e.inputType:"insertText"}),this.updateHistory(c))}handleEnter(e){this.isTextArea&&this.handleInsert(e,"\n")}}},978186:(e,t,n)=>{n.d(t,{maskitoCaretGuard:()=>w,maskitoNumberOptionsGenerator:()=>j,maskitoParseNumber:()=>x});var s=n(301388);const a=[".",",","б","ю"],i=(new Date("0001-01-01"),new Date("9999-12-31")," "),r="–",o="—",l="-",c="−",u=[":","."];function d(e,t,n){const s=Math.min(Number(n),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(s):s}const p=/[\\^$.*+?()[\]{}|]/g,h=new RegExp(p.source);function m(e){return e&&h.test(e)?e.replace(p,"\\$&"):e}function v(e){return e}function f(e){const t=new RegExp(`${m(e)}$`);return e?({value:n,selection:s},a)=>{if(!n&&!a.value.endsWith(e))return{value:n,selection:s};if(!n.endsWith(e)&&!a.value.endsWith(e))return{selection:s,value:n+e};const i=a.value.replace(t,""),r=a.selection[1]>=i.length,o=function(e,t){let n="";for(let s=0;s<e.length;s++){if(e[s]!==t[s])return n;n+=e[s]}return n}(i,n);return{selection:s,value:Array.from(e).reverse().reduce(((e,t,n)=>{const s=e.length-1-n,a=o[s]===t&&r;return e[s]!==t||a?e.slice(0,s+1)+t+e.slice(s+1):e}),n)}}:v}function g(e){return e?({value:t,selection:n},s)=>{if(t.startsWith(e)||!t&&!s.value.startsWith(e))return{value:t,selection:n};const[a,i]=n,r=Array.from(e).reduce(((e,t,n)=>e[n]===t?e:e.slice(0,n)+t+e.slice(n)),t),o=r.length-t.length;return{selection:[a+o,i+o],value:r}}:v}function S(e,t,n){return(s,a)=>{const i=()=>t(s,a);return s.addEventListener(e,i,n),()=>s.removeEventListener(e,i,n)}}function w(e){return t=>{const n=t.ownerDocument;let s=0;const a=()=>s++,i=()=>{s=Math.max(--s,0)},r=()=>{if(function({activeElement:e}){if(!(null==e?void 0:e.shadowRoot))return e;let t=e.shadowRoot.activeElement;for(;null==t?void 0:t.shadowRoot;)t=t.shadowRoot.activeElement;return t}(n)!==t)return;if(s)return n.addEventListener("mouseup",r,{once:!0,passive:!0});const a=t.selectionStart||0,i=t.selectionEnd||0,[o,l]=e(t.value,[a,i]);(o>a||l<i)&&t.setSelectionRange(d(a,o,l),d(i,o,l))};return n.addEventListener("selectionchange",r,{passive:!0}),t.addEventListener("mousedown",a,{passive:!0}),n.addEventListener("mouseup",i,{passive:!0}),()=>{n.removeEventListener("selectionchange",r),n.removeEventListener("mousedown",a),n.removeEventListener("mouseup",i)}}}new RegExp(`[${u.map(m).join("")}]$`);function E({decimalSeparator:e,isNegativeAllowed:t,precision:n,thousandSeparator:s,prefix:a,postfix:i,decimalPseudoSeparators:r=[],pseudoMinuses:o=[]}){const l=y(a),u="\\d",d=t?`[${c}${o.map((e=>`\\${e}`)).join("")}]?`:"",p=s?`[${u}${m(s).replace(/\s/g,"\\s")}]*`:`[${u}]*`,h=n>0?`([${m(e)}${r.map(m).join("")}]${u}{0,${Number.isFinite(n)?n:""}})?`:"",v=y(i);return new RegExp(`^${l}${d}${p}${h}${v}$`)}function y(e){return e?`${e.split("").map((e=>`${m(e)}?`)).join("")}`:""}function x(e,t="."){const n=!!e.match(new RegExp(`^\\D*[${c}\\${l}${r}${o}]`)),s=e.replace(new RegExp(`[^\\d${m(t)}]`,"g"),"").replace(t,".");return s?Number((n?l:"")+s):NaN}function $({decimalSeparator:e,precision:t,decimalZeroPadding:n,postfix:s}){if(t<=0||!n)return v;const a=new RegExp(`${m(s)}$`);return({value:n,selection:i})=>{if(Number.isNaN(x(n,e)))return{value:n,selection:i};const[r,o=""]=n.replace(a,"").split(e);return{value:r+e+o.padEnd(t,"0")+s,selection:i}}}function k({decimalSeparator:e,decimalPseudoSeparators:t,pseudoMinuses:n}){let a=!0;const i=E({decimalSeparator:e,decimalPseudoSeparators:t,pseudoMinuses:n,prefix:"",postfix:"",thousandSeparator:"",precision:1/0,isNegativeAllowed:!0});return({elementState:e,data:t})=>a?(a=!1,{elementState:(0,s.maskitoTransform)(e,{mask:i}),data:t}):{elementState:e,data:t}}function b({min:e,max:t,decimalSeparator:n}){return({value:s,selection:a})=>{const i=x(s,n),r=i>0?Math.min(i,t):Math.max(i,e);if(!Number.isNaN(i)&&r!==i){const e=`${r}`.replace(".",n).replace(l,c);return{value:e,selection:[e.length,e.length]}}return{value:s,selection:a}}}function T({decimalSeparator:e,thousandSeparator:t,decimalZeroPadding:n}){return({elementState:s,data:a},i)=>{const{value:r,selection:o}=s,[l,c]=o,u=r.slice(l,c),d=n?[e,t]:[t],p=n&&l>r.indexOf(e)&&Boolean(u.match(/^0+$/gi));return"deleteBackward"!==i&&"deleteForward"!==i||!d.includes(u)&&!p?{elementState:s,data:a}:{elementState:{value:r,selection:"deleteForward"===i?[c,c]:[l,l]},data:a}}}function M({decimalSeparator:e,precision:t}){const n=new RegExp(`^\\D*${m(e)}`);return({elementState:s,data:a})=>{const{value:i,selection:r}=s,[o]=r;if(t<=0||i.includes(e)||!a.match(n))return{elementState:s,data:a};return{elementState:s,data:i.slice(0,o).match(/\d+/)?a:`0${a}`}}}function A(e,t){const n=new RegExp(`[${t.join("")}]`,"gi");return({elementState:t,data:s})=>{const{value:a,selection:i}=t;return{elementState:{selection:i,value:a.replace(n,e)},data:s.replace(n,e)}}}function R(e){return({elementState:t,data:n})=>{const{value:s,selection:a}=t,[i,r]=a;return{elementState:t,data:!s.includes(e)||s.slice(i,r+1).includes(e)?n:n.replace(new RegExp(m(e),"gi"),"")}}}function D({thousandSeparator:e,decimalSeparator:t,prefix:n,postfix:s}){if(!e)return v;const a=new RegExp(`^${m(n)}${c}?`),i=new RegExp(`${m(s)}$`);return({value:n,selection:s})=>{const[r,o=""]=n.split(t),[l,c]=s;let[u,d]=s;const p=r.replace(a,"").replace(i,""),[h=""]=r.match(a)||[],[m=""]=r.match(i)||[];return{value:h+Array.from(p).reduceRight(((t,n,s)=>{const a=!(!s&&n===e)&&t.length&&(t.length+1)%4==0;return a&&(n===e||((...e)=>e.every((e=>/\s/.test(e))))(n,e))?e+t:n!==e||a?a?(s<=l&&u++,s<=c&&d++,n+e+t):n+t:(s&&s<=l&&u--,s&&s<=c&&d--,t)}),"")+m+(n.includes(t)?t:"")+o,selection:[u,d]}}}function L(e,t){if(e>0)return v;const n=new RegExp(`${m(t)}.*$`,"g");return({elementState:e,data:t})=>{const{value:s,selection:a}=e,[i,r]=a,o=s.replace(n,"");return{elementState:{selection:[Math.min(i,o.length),Math.min(r,o.length)],value:o},data:t.replace(n,"")}}}const N=[0,0];function O(e,t){const n=function(e,t){const n=e=>{const n=m(t);return e.replace(new RegExp(`^(\\D+)?[0${n}]+(?=0)`),"$1").replace(new RegExp(`^(\\D+)?[0${n}]+(?=[1-9])`),"$1")},s=(e,t)=>{const s=e.slice(0,t),a=e.slice(t).startsWith("0");return s.length-n(s).length+(a?1:0)};return({value:t,selection:a})=>{const[i,r]=a,o=t.includes(e),[l,c=""]=t.split(e),u=n(l);if(l===u)return{value:t,selection:a};const d=i-s(t,i),p=r-s(t,r);return{value:u+(o?e:"")+c,selection:[Math.max(d,0),Math.max(p,0)]}}}(e,t);return S("blur",(e=>{const t=n({value:e.value,selection:N},{value:"",selection:N}).value;e.value!==t&&(e.value=t,e.dispatchEvent(new Event("input")))}),{capture:!0})}function F({min:e,max:t,decimalSeparator:n}){return S("blur",((a,i)=>{const r=x(a.value,n),o=d(r,e,t);Number.isNaN(r)||r===o||(a.value=(0,s.maskitoTransform)(function(e){const t=String(e),[n,s]=t.split("e-");let a=t;if(s){const[,t]=n.split("."),i=Number(s)+((null==t?void 0:t.length)||0);a=e.toFixed(i)}return a}(o),i),a.dispatchEvent(new Event("input")))}),{capture:!0})}function I(e){return S("blur",(t=>{const n=t.value.replace(new RegExp(`^(\\D+)?${m(e)}`),`$10${e}`);n!==t.value&&(t.value=n,t.dispatchEvent(new Event("input")))}),{capture:!0})}function j({max:e=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,precision:n=0,thousandSeparator:u=i,decimalSeparator:d=".",decimalPseudoSeparators:p,decimalZeroPadding:h=!1,prefix:m="",postfix:v=""}={}){const S=[l,r,o].filter((e=>e!==u&&e!==d)),w=function({decimalSeparator:e,thousandSeparator:t,decimalPseudoSeparators:n=a}){return n.filter((n=>n!==t&&n!==e))}({decimalSeparator:d,thousandSeparator:u,decimalPseudoSeparators:p});return Object.assign(Object.assign({},s.MASKITO_DEFAULT_OPTIONS),{mask:E({decimalSeparator:d,precision:n,thousandSeparator:u,prefix:m,postfix:v,isNegativeAllowed:t<0}),preprocessors:[k({decimalSeparator:d,decimalPseudoSeparators:w,pseudoMinuses:S}),A(c,S),A(d,w),M({decimalSeparator:d,precision:n}),T({decimalSeparator:d,decimalZeroPadding:h,thousandSeparator:u}),L(n,d),R(d)],postprocessors:[b({decimalSeparator:d,min:t,max:e}),g(m),f(v),D({decimalSeparator:d,thousandSeparator:u,prefix:m,postfix:v}),$({decimalSeparator:d,decimalZeroPadding:h,precision:n,postfix:v})],plugins:[O(d,u),I(d),F({min:t,max:e,decimalSeparator:d})],overwriteMode:h?({value:e,selection:[t]})=>t<=e.indexOf(d)?"shift":"replace":"shift"})}}}]);try{stManager.done("dist/web/chunks/b11cdd1c.b936e66a.js")}catch(e){}