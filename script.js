let screen = document.getElementById("screen");
 function clickHandler(sign){
    screen.value += sign;
console.log(sign)
 }
 function answer(){
    screen.value = eval(screen.value);
 }
 function Clear(){
    screen.value ="";
 }