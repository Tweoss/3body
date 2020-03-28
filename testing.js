
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var circle = [
  {x:20, y:20, xdir:0,ydir:0,r:10},
  {x:40, y:100, xdir:0,ydir:0,r:20},
  {x:100, y:60, xdir:0,ydir:0,r:40},
];

ctx.fillStyle = "#000000";

var xee = typeof(circle[0].x);
console.log(xee);
i = 0;
function draw(){
  ctx.clearRect(0, 0, 400, 400);
  console.log(circle[0]);
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(circle[i].x, circle[i].y, circle[i].r, 0, 2 * Math.PI);
    ctx.fill();
    circle[i].x += circle[i].xdir/1000;
  //  console.log(i,'x',circle[i].x);
    circle[i].y += circle[i].ydir/1000;
    //console.log(i,'y',circle[i].y);
  }

//G=1

  alert(i);
  i++;

    circle[0].xdir +=  -400*(circle[0].x-circle[1].x)/Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2)+Math.pow(circle[0].z-circle[1].z,2),1.5)-1600*(circle[0].x-circle[2].x)/Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2)+Math.pow(circle[0].z-circle[2].z,2),1.5);
    circle[0].ydir +=  -400*(circle[0].y-circle[1].y)/Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2)+Math.pow(circle[0].z-circle[1].z,2),1.5)-1600*(circle[0].y-circle[2].y)/Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2)+Math.pow(circle[0].z-circle[2].z,2),1.5);
    circle[0].zdir +=  -400*(circle[0].z-circle[1].z)/Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2)+Math.pow(circle[0].z-circle[1].z,2),1.5)-1600*(circle[0].z-circle[2].z)/Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2)+Math.pow(circle[0].z-circle[2].z,2),1.5);

    circle[1].xdir += -1600*(circle[1].x-circle[0].x)/Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2)+Math.pow(circle[1].z-circle[0].z,2),1.5)- 100*(circle[1].x-circle[2].x)/Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2)+Math.pow(circle[1].z-circle[2].z,2),1.5);
    circle[1].ydir += -1600*(circle[1].y-circle[0].y)/Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2)+Math.pow(circle[1].z-circle[0].z,2),1.5)- 100*(circle[1].y-circle[2].y)/Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2)+Math.pow(circle[1].z-circle[2].z,2),1.5);
    circle[1].zdir += -1600*(circle[1].z-circle[0].z)/Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2)+Math.pow(circle[1].z-circle[0].z,2),1.5)- 100*(circle[1].z-circle[2].z)/Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2)+Math.pow(circle[1].z-circle[2].z,2),1.5);

    circle[2].xdir +=  -100*(circle[2].x-circle[1].x)/Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2)+Math.pow(circle[2].z-circle[1].z,2),1.5)- 400*(circle[2].x-circle[0].x)/Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2)+Math.pow(circle[2].z-circle[0].z,2),1.5);
    circle[2].ydir +=  -100*(circle[2].y-circle[1].y)/Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2)+Math.pow(circle[2].z-circle[1].z,2),1.5)- 400*(circle[2].y-circle[0].y)/Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2)+Math.pow(circle[2].z-circle[0].z,2),1.5);
    circle[2].zdir +=  -100*(circle[2].z-circle[1].z)/Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2)+Math.pow(circle[2].z-circle[1].z,2),1.5)- 400*(circle[2].z-circle[0].z)/Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2)+Math.pow(circle[2].z-circle[0].z,2),1.5);

/*
    for (i=0; i < 3; i++){
      console.log(i,'xdir',typeof(circle[i].xdir));
      console.log(i,'ydir',circle[i].ydir);
      console.log(i,'zdir',circle[i].zdir);
    }*/


  requestAnimationFrame(draw);
}
draw();
