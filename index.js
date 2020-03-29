

var random1=Math.floor(Math.random()*6+1);
var randomImageSource1="images/dice"+random1+".png";
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var random2=Math.floor(Math.random()*6+1);
var randomImageSource2="images/dice"+random2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if( random1> random2)
{
document.querySelector("h2").innerHTML="!!!!!!  PLAYER 1 WINS  !!!!";
  }
  if( random1< random2)
  {
  document.querySelector("h2").innerHTML="!!!!!!  PLAYER 2 WINS  !!!!";
    }
    if( random1=== random2)
    {
    document.querySelector("h2").innerHTML="! MALLA AADANDI !";
      }
