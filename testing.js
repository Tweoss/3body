
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var sphere = [
  {x:20, y:20, xdir:0,ydir:0,r:10},
  {x:40, y:100, xdir:0,ydir:0,r:20},
  {x:100, y:60, xdir:0,ydir:0,r:40},
];

ctx.fillStyle = "#000000";
console.log(Object.keys(ctx));

function draw(){
  ctx.clearRect(0, 0, 400, 400);

  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(sphere[i].x, sphere[i].y, sphere[i].r, 0, 2 * Math.PI);
    ctx.fill();
    sphere[i].x += sphere[i].xdir;
    sphere[i].y += sphere[i].ydir;
  }


    sphere[0].xdir += -100;
    sphere[0].ydir = sphere[i].ydir;


  requestAnimationFrame(draw);
}
draw();
