/* this function switches content in the terminal when a nav item is clicked */

$(document).ready(function(){
  $("#what").hide();
  $(".changed:nth-child(1)").on("click", function(){
    $("#what").show();
  });
  $(".changed:nth-child(2)").on("click", function(){
    alert("WHY");
  });
  $(".changed:nth-child(3)").on("click", function(){
    alert("WHO");
  });
  $(".changed:nth-child(4)").on("click", function(){
    alert("GET INVOLVED");
  });
});


var i = 0;
const txt_ele = document.getElementsByClassName("gather_txt");
var speed = 50;

function typeWriter() {
    if (i < txt_ele.length) {
      document.getElementByClassName("type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}
