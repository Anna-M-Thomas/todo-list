!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(c=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var c,a,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var s=[].concat(t[a]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){var i=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);t.exports=o.locals||{}},function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function a(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=a(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(c[u].references++,c[u].updater(f)):c.push({identifier:d,updater:g(f,e),references:1}),i.push(d)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var c=r(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(r,c[e]):t.appendChild(r)}}function p(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,m=0;function g(t,e){var n,i,o;if(e.singleton){var r=m++;n=h||(h=l(e)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=l(e),i=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=a(n[i]);c[o].references--}for(var r=s(t,e),l=0;l<n.length;l++){var d=a(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=r}}}},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i)()(!1);o.push([t.i,'body {\n  margin: 0;\n  font-family: "Lato", sans-serif;\n}\n\nh1 {\n\ttext-align: center;\n\tbackground-color: #f1f1f1;\n\tmargin-top: 0;\n\theight: 60px;\n\tline-height: 60px;\n\tmargin-bottom: 4%;\n\twidth: 100%;\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 100vh;\n\tjustify-content: center;\n}\n\n#lists {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 15%;\n\theight: 400px;\n\tbackground-color: lightyellow;\n}\n\n.list {\n\ttext-align: center;\n\theight: 50px;\n\tbackground-color: inherit;\n\toutline: none;\n\ttransition: 0.3s;\n}\n\n.list:hover {\n  background-color: #ddd;\n}\n\n.list:active {\n\tbackground-color: pink;\n}\n\n#content {\n\tdisplay: grid;\n\twidth: 40%;\n\theight: 400px;\n\tbackground-color:pink;\n}\n\n#listform {\n\tdisplay: none;\n}\n\n.subcontent {\n\tgrid-row: auto;\n\ttext-align: center;\n}',""]),e.default=o},function(t,e,n){"use strict";n.r(e);n(1);i=-1;var i;const o=(()=>{const t=[{title:"Friday",desc:"Feed the kitty, pet the kitty",todolist:[{title:"Pet kitty",desc:"Pet the kitty cat",due:"Noon",priority:"High",finished:!1},{title:"Feed kitty",desc:"Feed the kitty cat",due:"Morning",priority:"High",finished:!1},{title:"Make dinner",desc:"Make Futo salmon burgers",due:"6 pm",priority:"High",finished:!1}]},{title:"Saturday",desc:"I need to go to work",todolist:[{title:"Get up",desc:"Get up at 6:30",due:"6:30",priority:"High",finished:!1},{title:"Get on bus",desc:"Get on the bus",due:"8:00 AM",priority:"High",finished:!1},{title:"Drink coffee",desc:"Drink all the coffee",due:"9 AM",priority:"High",finished:!1}]},{title:"Sunday",desc:"Lunch with Futo?",todolist:[{title:"Get up",desc:"Get up at 7:15",due:"7:15",priority:"Medium",finished:!1},{title:"Lunch with Futo?",desc:"Make or get lunch with Futo",due:"12 nono",priority:"Medium",finished:!1}]}];return{list:t,findList:e=>t.find(t=>t.title===e),addList:t=>{t.push(item)},removeList:e=>{let n=t.findIndex(t=>t.title===e);t.splice(n,1)}}})(),r=(()=>{let t=document.getElementById("listform");document.getElementById("title"),document.getElementById("description"),document.getElementById("finishedlist");return{showForm:()=>{t.style.display="inline"},hideForm:()=>{t.style.display="none"},newList:()=>{console.log("testing if this is the problem")}}})();(()=>{let t=document.getElementById("lists");for(let e of o.list){let n=document.createElement("button");n.setAttribute("class","list"),n.setAttribute("id",e.title),n.textContent=e.title,t.appendChild(n)}let e=document.createElement("button");e.setAttribute("class","list"),e.setAttribute("id","addlist"),e.textContent="Add",t.appendChild(e)})(),(()=>{let t=document.getElementById("content");document.getElementById("lists").addEventListener("click",(function(e){if("BUTTON"==event.target.nodeName)if("addlist"==event.target.id)r.showForm();else{let e=event.target.id,n=o.findList(e);document.createElement("p").textContent=`Title: ${n.title} Description: ${n.desc} and todo items come later`,t.appendChild.p}}))})()}]);