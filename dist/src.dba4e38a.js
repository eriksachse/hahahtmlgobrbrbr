parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{"./g2ciao-silent.ttf":[["g2ciao-silent.e03469fc.ttf","cXPf"],"cXPf"],"./PinyonScript-Regular.ttf":[["PinyonScript-Regular.9e130544.ttf","eUa7"],"eUa7"],"./Lyyra Extended.otf":[["Lyyra Extended.67dbe417.otf","pFJy"],"pFJy"],"./../imgs/Bildschirmfoto 2021-02-16 um 10.04.19.png":[["Bildschirmfoto 2021-02-16 um 10.04.19.10cef5e1.png","aguZ"],"aguZ"]}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=document.querySelector(".info-content"),t=e.innerHTML,n=0,l="",o=null;e.innerHTML="";var a=document.getElementById("info-title"),s=document.getElementsByClassName("info-content")[0],i=!1;a.addEventListener("click",function(){s.classList.toggle("visible"),clearInterval(o),o=setInterval(L,30)});var r=document.querySelector("main");console.log(r),r.addEventListener("click",function(){s.classList.remove("visible")});var c=document.querySelectorAll(".img-item");function d(e){return e*(Math.PI/380)}var v=1,m=.05,u=28;window.addEventListener("wheel",function(e){console.log(e.deltaY),v+=e.deltaY}),window.setInterval(function(){for(var e=0;e<c.length;e++)c[e].style.left="calc(50% - 100px)",c[e].style.top="calc(50% - 100px)",c[e].style.transform="translateY("+Math.sin(e/1.5+d(v*m))*u+"vh) translateX("+Math.cos(e/1.5+d(v*m))*u+window.innerWidth+"vw)translateZ("+Math.tan(e/2.4+d(v*m))*u+window.innerWidth+"vw) rotateZ("+Math.cos(e/1.1+d(v*m))*u+"deg) ",v++},10);var g=document.getElementsByClassName("names")[0],h=g.querySelectorAll(".name");console.log(h);for(var f=0;f<c.length;f++)c[f].addEventListener("mouseenter",function(){var e=this.id;console.log(e),console.log(h[e]),h[e].classList.add("name-active")}),c[f].addEventListener("mouseleave",function(){var e=this.id;console.log("leave",h[e].classList),h[e].classList.remove("name-active")});function L(){i||(l=t.substring(0,n),e.innerHTML=l,e.scrollTop=e.scrollHeight,(n+=1)>=t.length&&(clearInterval(o),i=!0,localStorage.setItem("animationShown",!0)))}
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/src.dba4e38a.js.map