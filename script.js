"strict";
let uzumakiBtn = document.querySelector(".uzumaki");
let utchihaBtn = document.querySelector(".utchiha");
let naraBtn = document.querySelector(".nara");
let hyugaBtn = document.querySelector(".hyuga");
let akatsukiBtn = document.querySelector(".akatsuki");
let uzumakiD = document.querySelector(".uzumaki-d");
let utchihaD = document.querySelector(".utchiha-d");
let naraD = document.querySelector(".nara-d");
let hyugaD = document.querySelector(".hyuga-d");
let akatsukiD = document.querySelector(".akatsuki-d");

uzumakiBtn.onclick = function () {
  uzumakiD.style.display ="flex";
  utchihaD.style.display ="none";
  naraD.style.display ="none";
  hyugaD.style.display ="none";
  akatsukiD.style.display ="none";
};
utchihaBtn.onclick = function () {
  utchihaD.style.display ="flex";
  uzumakiD.style.display ="none";
  naraD.style.display ="none";
  hyugaD.style.display ="none";
  akatsukiD.style.display ="none";
};
naraBtn.onclick = function () {
  naraD.style.display ="flex";
  utchihaD.style.display ="none";
  uzumakiD.style.display ="none";
  hyugaD.style.display ="none";
  akatsukiD.style.display ="none";
  
};
hyugaBtn.onclick = function () {
  hyugaD.style.display ="flex";
  naraD.style.display ="none";
  utchihaD.style.display ="none";
  uzumakiD.style.display ="none";
  akatsukiD.style.display ="none";
};
akatsukiBtn.onclick = function () {
  akatsukiD.style.display ="flex";
  hyugaD.style.display ="none";
  naraD.style.display ="none";
  utchihaD.style.display ="none";
  uzumakiD.style.display ="none";
};

