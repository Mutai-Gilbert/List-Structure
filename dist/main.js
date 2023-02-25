"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,500&family=Poppins:ital,wght@0,200;0,400;0,600;1,100;1,200;1,300;1,400&family=Roboto:ital,wght@0,300;0,400;1,100;1,300&display=swap);"]),i.push([e.id,"* {\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n}\n\n.todolist {\n  display: flex;\n  padding: 12px;\n  width: 98%;\n  margin: 24px 24px;\n  background-color: bisque;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;\n}\n\n.save-todo {\n  padding-left: 5px;\n}\n\n.heading,\n.list-group,\n.clear-complete {\n  width: 98%;\n}\n\n.list-cont {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  width: 90%;\n  margin: 12px;\n  gap: 5px;\n}\n\n.checkbox-task {\n  padding-left: 5px;\n}\n.list-container {\n  display: flex;\n  width: 98%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.checkbox-task.checked {\n  text-decoration: line-through;\n  color: blue;\n}\n\n.bin {\n  float: right;\n  display: none;\n}\n\n.refresh {\n  float: right;\n}\n\n[contenteditable] {\n  outline: none;\n}\n\n.emptylist {\n  display: none;\n}\n\n.clear-complete {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aliceblue;\n  padding: 5px;\n  border-radius: 10px;\n  margin: 12px 12px;\n  width: 50%;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},153:(e,t,n)=>{var o=n(379),r=n.n(o),a=n(795),i=n.n(a),c=n(569),s=n.n(c),l=n(565),d=n.n(l),p=n(216),u=n.n(p),f=n(589),m=n.n(f),h=n(426),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=u(),r()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const g=n.p+"1ecff22c5137130ec04a.png",v=()=>{const e=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[];return{todo:e,todoSize:e.length}},x=()=>{document.querySelectorAll(".bin").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target;(e=>{const{todo:t}=v(),n=t.filter((t=>parseInt(e,10)!==t.index));n.forEach(((e,t)=>{e.index=t+1})),localStorage.setItem("todo",JSON.stringify(n))})(e.target.id),t.parentElement.parentElement.parentElement.remove(),window.location.reload()}))}))},b=()=>{const{todo:e}=v();document.querySelectorAll("input[name=checkbox]").forEach((t=>{t.addEventListener("change",(n=>{n.preventDefault();const o=n.target.id.replace("checkbox-",""),r=parseInt(o,10),a=t.parentElement.children[1];if(t.checked){a.classList.add("checked");const t=e.map((e=>r===e.index?{...e,completed:!0}:e));localStorage.setItem("todo",JSON.stringify(t)),window.location.reload()}else{a.classList.remove("checked");const t=e.map((e=>r===e.index?{...e,completed:!1}:e));localStorage.setItem("todo",JSON.stringify(t)),window.location.reload()}}))}))},k=()=>{document.querySelectorAll(".menu").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),e.firstElementChild.style.display="none";const n=e.lastElementChild;n.style.display="block";const o=n.parentElement.parentElement.children[1];o.removeAttribute("readonly");const r=o.value.length;o.setSelectionRange(r,r),o.focus(),(e=>{const t=e,n=t.parentElement.children[1];t.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const o=t.value,r=t.id,{todo:a}=v(),i=r.replace("input",""),c=a.filter((e=>parseInt(i,10)!==e.index));if(""!==o){const e={description:o,completed:!1,index:parseInt(i,10)};c.push(e),localStorage.setItem("todo",JSON.stringify(c)),window.location.reload(),n.setAttribute("readonly","true")}else document.querySelector(".emptylist").style.display="block"}}))})(o)}))}))},w=n.p+"2e1703ea3992eaeb0f3c.png",S=n.p+"618840f7b4a10b6f696e.png",E=e=>{const t=e,n=document.querySelector(".todo-list"),o=!0===t.completed?"checked":"",r=!0===t.completed?"-done":"";n.innerHTML+=`\n    <div class="list-group">\n        <div class="list-cont ">\n            <input type="checkbox" name="checkbox" class="checkboxlabel" id="checkbox-${t.index}" ${o}>\n            <input type="text" readonly="true" class="checkbox-task ${o}" id="input${t.index}" value="${t.description}">\n            <div class="menu${r}"><img src="${w}" class="menu-img" id="menu-${t.index}"> <img src="${S}" class="bin" id="${t.index}"></div>\n            </div>\n        </div>\n    \n    `,k(),x(),b()};document.querySelector(".save-todo").addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const t=document.querySelector(".save-todo").value,n=!1,o=v().todoSize+1;if(""!==t){const e=new class{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}(t,n,o);(e=>{const{todo:t}=v();t.push(e),localStorage.setItem("todo",JSON.stringify(t))})(e),E(e),document.querySelector(".save-todo").value=""}else document.querySelector(".emptylist").style.display="block"}})),k(),x(),b(),document.getElementById("clear-complete").addEventListener("click",(()=>{const{todo:e}=v(),t=e.filter((e=>!0!==e.completed));localStorage.setItem("todo",JSON.stringify(t)),window.location.reload()})),v().todo.forEach((e=>{E(e)})),(()=>{const e=document.querySelector(".refresh"),t=new Image;return t.src=g,e.appendChild(t),e})().addEventListener("click",(()=>{window.location.reload()}))}},e=>{e(e.s=153)}]);