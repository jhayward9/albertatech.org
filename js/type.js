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
