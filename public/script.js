const btn = document.getElementById("generate");
const output = document.getElementById("output");
let firstTime = true;
let randNum = 0;

btn.addEventListener("click", function() {
  randNum = Math.floor(Math.random() * 9 + 1);
  output.innerHTML = randNum;
  output.style.display = "block";
  output.style.fontSize = "60px";
  output.style.padding = "5%";
  output.style.border = "#EAB1A3 solid 8px";
  output.style.borderRadius = "8px";
  output.style.marginTop = "4px";
  output.style.margin = "auto";
  output.style.color = "#FFF2ED";
  output.style.width = "20%";
});
