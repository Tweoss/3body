
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

//G=1

    sphere[0].xdir += -400*(sphere[0].x-sphere[1].x)/Math.pow(Math.pow((sphere[0].x-sphere[1].x),2)+Math.pow((sphere[0].y-sphere[1].y),2)+Math.pow((sphere[0].z-sphere[1].z),2),1.5)-1600*(sphere[0].x-sphere[2].x)/Math.pow(Math.pow((sphere[0].x-sphere[2].x),2)+Math.pow((sphere[0].y-sphere[2].y),2)+Math.pow((sphere[0].z-sphere[2].z),2),1.5);
    sphere[0].ydir += -400*(sphere[0].y-sphere[1].y)/Math.pow(Math.pow((sphere[0].x-sphere[1].x),2)+Math.pow((sphere[0].y-sphere[1].y),2)+Math.pow((sphere[0].z-sphere[1].z),2),1.5)-1600*(sphere[0].y-sphere[2].y)/Math.pow(Math.pow((sphere[0].x-sphere[2].x),2)+Math.pow((sphere[0].y-sphere[2].y),2)+Math.pow((sphere[0].z-sphere[2].z),2),1.5);
    sphere[0].zdir += -400*(sphere[0].z-sphere[1].z)/Math.pow(Math.pow((sphere[0].x-sphere[1].x),2)+Math.pow((sphere[0].y-sphere[1].y),2)+Math.pow((sphere[0].z-sphere[1].z),2),1.5)-1600*(sphere[0].z-sphere[2].z)/Math.pow(Math.pow((sphere[0].x-sphere[2].x),2)+Math.pow((sphere[0].y-sphere[2].y),2)+Math.pow((sphere[0].z-sphere[2].z),2),1.5);

    sphere[1].xdir += -400*(sphere[1].x-sphere[0].x)/Math.pow(Math.pow((sphere[1].x-sphere[0].x),2)+Math.pow((sphere[1].y-sphere[0].y),2)+Math.pow((sphere[1].z-sphere[0].z),2),1.5)-1600*(sphere[1].x-sphere[2].x)/Math.pow(Math.pow((sphere[1].x-sphere[2].x),2)+Math.pow((sphere[1].y-sphere[2].y),2)+Math.pow((sphere[1].z-sphere[2].z),2),1.5);
    sphere[1].ydir += -400*(sphere[1].y-sphere[0].y)/Math.pow(Math.pow((sphere[1].x-sphere[0].x),2)+Math.pow((sphere[1].y-sphere[0].y),2)+Math.pow((sphere[1].z-sphere[0].z),2),1.5)-1600*(sphere[1].y-sphere[2].y)/Math.pow(Math.pow((sphere[1].x-sphere[2].x),2)+Math.pow((sphere[1].y-sphere[2].y),2)+Math.pow((sphere[1].z-sphere[2].z),2),1.5);
    sphere[1].zdir += -400*(sphere[1].z-sphere[0].z)/Math.pow(Math.pow((sphere[1].x-sphere[0].x),2)+Math.pow((sphere[1].y-sphere[0].y),2)+Math.pow((sphere[1].z-sphere[0].z),2),1.5)-1600*(sphere[1].z-sphere[2].z)/Math.pow(Math.pow((sphere[1].x-sphere[2].x),2)+Math.pow((sphere[1].y-sphere[2].y),2)+Math.pow((sphere[1].z-sphere[2].z),2),1.5);

    sphere[2].xdir += -400*(sphere[2].x-sphere[1].x)/Math.pow(Math.pow((sphere[2].x-sphere[1].x),2)+Math.pow((sphere[2].y-sphere[1].y),2)+Math.pow((sphere[2].z-sphere[1].z),2),1.5)-1600*(sphere[2].x-sphere[0].x)/Math.pow(Math.pow((sphere[2].x-sphere[0].x),2)+Math.pow((sphere[2].y-sphere[0].y),2)+Math.pow((sphere[2].z-sphere[0].z),2),1.5);
    sphere[2].ydir += -400*(sphere[2].y-sphere[1].y)/Math.pow(Math.pow((sphere[2].x-sphere[1].x),2)+Math.pow((sphere[2].y-sphere[1].y),2)+Math.pow((sphere[2].z-sphere[1].z),2),1.5)-1600*(sphere[2].y-sphere[0].y)/Math.pow(Math.pow((sphere[2].x-sphere[0].x),2)+Math.pow((sphere[2].y-sphere[0].y),2)+Math.pow((sphere[2].z-sphere[0].z),2),1.5);
    sphere[2].zdir += -400*(sphere[2].z-sphere[1].z)/Math.pow(Math.pow((sphere[2].x-sphere[1].x),2)+Math.pow((sphere[2].y-sphere[1].y),2)+Math.pow((sphere[2].z-sphere[1].z),2),1.5)-1600*(sphere[2].z-sphere[0].z)/Math.pow(Math.pow((sphere[2].x-sphere[0].x),2)+Math.pow((sphere[2].y-sphere[0].y),2)+Math.pow((sphere[2].z-sphere[0].z),2),1.5);


  requestAnimationFrame(draw);
}
draw();
