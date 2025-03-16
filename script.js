function finish() {
  var x = document.getElementById("table");
  x.style.display = 'none';
  var neu = "YOU WIN :-)";
  document.getElementById("bigtext").innerHTML = neu;
  document.bgColor = "#00EE00";
  document.getElementsByTagName("body")[0].style.backgroundColor = document.bgColor;
 }

function border() {
  var x = document.getElementById("table");
  x.style.display = 'none';
  var neu = "YOU LOOSE :-(";
  document.getElementById("bigtext").innerHTML = neu;
  document.bgColor = "#EE0000";
  document.getElementsByTagName("body")[0].style.backgroundColor = document.bgColor;
 }
