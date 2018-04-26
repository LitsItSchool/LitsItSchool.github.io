
var min = 0;
var max = 3;
var current = 0;
function ButtonClick()
{
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function ClosePopup()
{
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function Reg()
{
    var popup = document.getElementById("form");
  popup.style.display = "block";
}

function CloseForm()
{
  var popup = document.getElementById("form");
  popup.style.display="none";
  var popup = document.getElementById("popup");
  popup.style.display="none";
}