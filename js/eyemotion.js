var balls = document.getElementsByClassName("eyes");
document.onmousemove = function(){
  var x = event.clientX * 30/ window.innerWidth + "%";
  var y = event.clientY *30/ window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}
