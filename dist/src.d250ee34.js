parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{"./g2ciao-silent.ttf":[["g2ciao-silent.e03469fc.ttf","cXPf"],"cXPf"],"./PinyonScript-Regular.ttf":[["PinyonScript-Regular.9e130544.ttf","eUa7"],"eUa7"],"./Lyyra Extended.otf":[["Lyyra Extended.67dbe417.otf","pFJy"],"pFJy"],"./../imgs/Bildschirmfoto 2021-02-16 um 10.04.19.png":[["Bildschirmfoto 2021-02-16 um 10.04.19.10cef5e1.png","aguZ"],"aguZ"]}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=null,t=document.getElementById("info-title"),n=document.getElementsByClassName("info-content")[0];t.addEventListener("click",function(){n.classList.toggle("visible"),clearInterval(e)});var a=document.querySelector("main");a.addEventListener("click",function(){n.classList.remove("visible")});var s=document.querySelectorAll(".img-item");function l(e){return e*(Math.PI/380)}var i=1,r=.05,o=28;a.addEventListener("wheel",function(e){i+=e.deltaY}),window.setInterval(function(){for(var e=0;e<s.length;e++)s[e].style.left="calc(50% - 100px)",s[e].style.top="calc(50% - 100px)",s[e].style.transform="translateY("+Math.sin(e/2+l(i*r))*o+"vh) translateX("+Math.cos(2*e+l(i*r))*o+"vw)translateZ("+Math.tan(2*e+l(i*r))*o+"vw) rotateZ("+Math.cos(e+l(i*r))*o+"deg) rotateY("+Math.tan(2*e+l(i*r))*o+"deg) ",i++},10);var c=document.getElementsByClassName("names")[0],d=c.querySelectorAll(".name");console.log(d);for(var v=0;v<s.length;v++)s[v].addEventListener("mouseenter",function(){var e=this.id;d[e].classList.add("name-active")}),s[v].addEventListener("mouseleave",function(){var e=this.id;d[e].classList.remove("name-active")});window.addEventListener("mousemove",function(e){for(var t=0;t<d.length;t++){var n=d[t].clientWidth,a=d[t].clientHeight;d[t].style.top=e.clientY-a-12+"px",d[t].style.left=e.clientX-n/2+"px"}});var m=document.getElementsByClassName("loader")[0];window.addEventListener("load",function(){m.classList.add("finished")});
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/src.d250ee34.js.map