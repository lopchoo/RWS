var p00 = document.getElementById("p00");
var p01 = document.getElementById("p01");

p00.removeChild(p00.firstChild);
p01.removeChild(p01.firstChild);

p00.appendChild(document.createTextNode("덤벼봐라 쪼렙들아!"));
p01.appendChild(document.createTextNode("교수님들부터 이기고 우리에게 덤벼라!"));