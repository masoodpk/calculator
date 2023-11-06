let screen = document.getElementById("screen");
 function clickHandler(sign){
    screen.value += sign;

 }
 function answer(){
    screen.value = eval(screen.value);
 }