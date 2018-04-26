var pics = ["https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0-grunge-12167544.jpg",
"https://cdn.pixabay.com/photo/2014/04/03/10/29/arrow-310633_960_720.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqCYq9P_BeOsYgJudSe7z3km4ieeRLidtWpsgTPMckQRrlm8ltg",
            
];
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

function Registration()
{

}

function LeftClick()
{
    current--;
    if(current<min)
    {
        current = max;
    }
    var pic = document.getElementById("pic");
    pic.src = pic[current];
}

function RightClick()
{
  current++;
  if(current==max)
  {
      current = 0;
  }
}


function Start()
{
    setTimeout(function()
    {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }, 5000);
}