
var speed = 8;


function KeyHandler(key)
{
    var char = document.getElementById("character");
    var pos;
    switch(key)
    {
        case 87:
     console.log("UP");
     pos = char.style.top.replace('px','');
     char.style.top = (Number(pos)-speed)+ 'px';
     

        break;

        case 83:
        console.log("DOWN");
        pos = char.style.top.replace('px','');
     char.style.top = (Number(pos)+speed)+ 'px';

        break;

        case 65:
        console.log("LEFT");
        pos = char.style.left.replace('px','');
     char.style.left = (Number(pos)-speed)+ 'px';
        break;

        case 68:
        console.log("RIGHT");
        pos = char.style.left.replace('px','');
        char.style.left = (Number(pos)+speed)+ 'px';
        break;
    }
}












