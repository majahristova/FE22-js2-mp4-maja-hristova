function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequireff1f;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequireff1f=a),a.register("27Lyk",(function(r,t){var n,a;e(r.exports,"register",(()=>n),(e=>n=e)),e(r.exports,"resolve",(()=>a),(e=>a=e));var i={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},a=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),a("27Lyk").register(JSON.parse('{"5CZhm":"index.e66e81bd.js","7zGiB":"backgroundimage.a8ecf6bc.jpg"}'));const i=document.querySelectorAll("[data-number]"),o=document.querySelectorAll("[data-operation]"),s=document.querySelector("[data-equals]"),u=document.querySelector("[data-delete]"),d=document.querySelector("[data-all-clear]"),c=document.querySelector("[data-previousoperend]"),p=document.querySelector("[data-currentoperend]"),l=new class{previousOperstorText;currentOperatorText;operation;currentOperand="";previousOperand="";constructor(e,r){this.previousOperstorText=e,this.currentOperatorText=r,this.clear()}clear(){this.currentOperand="",this.previousOperand=""}addingNumber(e){this.currentOperand=this.currentOperand.toString()+e.toString()}choseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.computeNumB(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}computeNumB(){let e,r,t;if(r=parseFloat(this.previousOperand),t=parseFloat(this.currentOperand),!isNaN(r)&&!isNaN(t)){switch(this.operation){case"+":e=r+t;break;case"-":e=r-t;break;case"*":e=r*t;break;case"÷":e=r/t}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}updateAndDisplayNum(){this.currentOperatorText.innerText=this.currentOperand,null!=this.operation&&(this.previousOperstorText.innerText=` ${this.currentOperand} ${this.operation}`)}}(c,p);i.forEach((e=>{e.addEventListener("click",(()=>{l.addingNumber(e.innerText),l.updateAndDisplayNum()}))})),o.forEach((e=>{e.addEventListener("click",(()=>{l.choseOperation(e.innerText),l.updateAndDisplayNum()}))})),s.addEventListener("click",(e=>{l.computeNumB(),l.updateAndDisplayNum()})),d.addEventListener("click",(e=>{l.clear(),l.updateAndDisplayNum()})),u.addEventListener("click",(e=>{l.clear(),l.updateAndDisplayNum()}));const h=document.querySelector(".grid-calculator"),f=document.createElement("img");h.appendChild(f);var m;m=new URL(a("27Lyk").resolve("7zGiB"),import.meta.url).toString();const O=new URL(m);f.src=O.href,f.classList.add("imgBackground");
//# sourceMappingURL=index.e66e81bd.js.map
