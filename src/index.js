/* dirty js goes in here */
/* --- hello visitor --- */

import "./styles.css";

var interval = null;
var infoButton = document.getElementById("info-title");
var infoContent = document.getElementsByClassName("info-content")[0];

infoButton.addEventListener("click", function () {
  infoContent.classList.toggle("visible");
  clearInterval(interval);
});

var main = document.querySelector("main");
console.log(main);
main.addEventListener("click", function () {
  infoContent.classList.remove("visible");
});

var images = document.querySelectorAll(".img-item");

function degreeToRad(angle) {
  return angle * (Math.PI / 380);
}
var animationCycle = 1;
var frequency = 0.05;
var pixelOffset = 28;
main.addEventListener("wheel", function (e) {
  console.log(e.deltaY);
  animationCycle += e.deltaY;
});
window.setInterval(function () {
  for (var im = 0; im < images.length; im++) {
    images[im].style.left = "calc(50% - 100px)";
    images[im].style.top = "calc(50% - 100px)";
    images[im].style.transform =
      "translateY(" +
      Math.sin(im / 2 + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "vh) translateX(" +
      Math.cos(im * 2 + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "vw)translateZ(" +
      Math.tan(im * 2 + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "vw) rotateZ(" +
      Math.cos(im + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "deg) rotateY(" +
      Math.tan(im * 2 + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "deg) ";
    animationCycle++;
  }
}, 10);
var name = document.getElementsByClassName("names")[0];
var names = name.querySelectorAll(".name");
console.log(names);
for (var imh = 0; imh < images.length; imh++) {
  images[imh].addEventListener("mouseenter", function () {
    var id = this.id;
    console.log(id);
    console.log(names[id]);
    names[id].classList.add("name-active");
  });
  images[imh].addEventListener("mouseleave", function () {
    var id = this.id;
    // name.classList.remove("name-active");
    console.log("leave", names[id].classList);
    names[id].classList.remove("name-active");
  });
}
window.addEventListener("mousemove", function (e) {
  for (var nam = 0; nam < names.length; nam++) {
    var length = names[nam].clientWidth;
    var height = names[nam].clientHeight;
    console.log(length);
    names[nam].style.top = e.clientY - height - 12 + "px";
    names[nam].style.left = e.clientX - length / 2 + "px";
  }
});
window.addEventListener("load", function () {
  var loader = document.getElementsByClassName("loader")[0];
  loader.classList.add("finished");
});
