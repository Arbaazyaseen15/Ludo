var p1 = prompt("Enter player 1 name");
var p2 = prompt("Enter player 2 name");
document.querySelector("#p1").textContent = p1;
document.querySelector("#p2").textContent = p2;
var a = Math.random();
a = a*6;
a = Math.floor(a) + 1;
var b = "dice" + a + ".png";

var c = Math.random();
c = c*6;
c = Math.floor(c) + 1;

var winner;
if(a>c){
winner = p1;
}
else{
winner = p2;
}
if(a !== c)
document.querySelector("h1").textContent =  winner + " Wins";
else
document.querySelector("h1").textContent = "Tie Game";
var d = "dice" + c + ".png";
document.querySelector(".img1").setAttribute("src", b);
document.querySelector(".img2").setAttribute("src", d);
