var mouseEvent = "empty";
canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
color = "black";
WidthOfLine  = 3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("INPUT11").value;
    WidthOfLine = document.getElementById("WidthOfLine").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){ 
    current_mouse_x = e.clientX-canvas.offsetLeft;
    current_mouse_y = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = WidthOfLine;
console.log("x=" + current_mouse_x + "y=" + current_mouse_y );
ctx.arc( current_mouse_x , current_mouse_y , 40 , 0 , 2 * Math.PI);
ctx.stroke();
}
}
function CLEAR(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent = "mouseLeave";
}