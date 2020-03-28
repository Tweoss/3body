
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var circle = [
  {x:20, y:20, xdir:0,ydir:0,r:10},
  {x:40, y:100, xdir:0,ydir:0,r:20},
  {x:100, y:60, xdir:0,ydir:0,r:40},
];

ctx.fillStyle = "#000000";

var xee = typeof(circle.x);
console.log(xee);

function draw(){
  ctx.clearRect(0, 0, 400, 400);

  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(circle[i].x, circle[i].y, circle[i].r, 0, 2 * Math.PI);
    ctx.fill();
    circle[i].x += Number(circle[i].xdir/1000);
  //  console.log(i,'x',circle[i].x);
    circle[i].y += Number(circle[i].ydir/1000);
  //  console.log(i,'y',circle[i].y);
  }

//G=1


    circle[0].xdir +=  -400*(Number(circle[0].x)-Number(circle[1].x))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[1].x),2)+Math.pow(Number(circle[0].y)-Number(circle[1].y),2)+Math.pow(Number(circle[0].z)-Number(circle[1].z),2),1.5)-1600*(Number(circle[0].x)-Number(circle[2].x))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[2].x),2)+Math.pow(Number(circle[0].y)-Number(circle[2].y),2)+Math.pow(Number(circle[0].z)-Number(circle[2].z),2),1.5);
    circle[0].ydir +=  -400*(Number(circle[0].y)-Number(circle[1].y))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[1].x),2)+Math.pow(Number(circle[0].y)-Number(circle[1].y),2)+Math.pow(Number(circle[0].z)-Number(circle[1].z),2),1.5)-1600*(Number(circle[0].y)-Number(circle[2].y))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[2].x),2)+Math.pow(Number(circle[0].y)-Number(circle[2].y),2)+Math.pow(Number(circle[0].z)-Number(circle[2].z),2),1.5);
    circle[0].zdir +=  -400*(Number(circle[0].z)-Number(circle[1].z))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[1].x),2)+Math.pow(Number(circle[0].y)-Number(circle[1].y),2)+Math.pow(Number(circle[0].z)-Number(circle[1].z),2),1.5)-1600*(Number(circle[0].z)-Number(circle[2].z))/Math.pow(Math.pow(Number(circle[0].x)-Number(circle[2].x),2)+Math.pow(Number(circle[0].y)-Number(circle[2].y),2)+Math.pow(Number(circle[0].z)-Number(circle[2].z),2),1.5);

    circle[1].xdir += -1600*(Number(circle[1].x)-Number(circle[0].x))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[0].x),2)+Math.pow(Number(circle[1].y)-Number(circle[0].y),2)+Math.pow(Number(circle[1].z)-Number(circle[0].z),2),1.5)- 100*(Number(circle[1].x)-Number(circle[2].x))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[2].x),2)+Math.pow(Number(circle[1].y)-Number(circle[2].y),2)+Math.pow(Number(circle[1].z)-Number(circle[2].z),2),1.5);
    circle[1].ydir += -1600*(Number(circle[1].y)-Number(circle[0].y))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[0].x),2)+Math.pow(Number(circle[1].y)-Number(circle[0].y),2)+Math.pow(Number(circle[1].z)-Number(circle[0].z),2),1.5)- 100*(Number(circle[1].y)-Number(circle[2].y))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[2].x),2)+Math.pow(Number(circle[1].y)-Number(circle[2].y),2)+Math.pow(Number(circle[1].z)-Number(circle[2].z),2),1.5);
    circle[1].zdir += -1600*(Number(circle[1].z)-Number(circle[0].z))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[0].x),2)+Math.pow(Number(circle[1].y)-Number(circle[0].y),2)+Math.pow(Number(circle[1].z)-Number(circle[0].z),2),1.5)- 100*(Number(circle[1].z)-Number(circle[2].z))/Math.pow(Math.pow(Number(circle[1].x)-Number(circle[2].x),2)+Math.pow(Number(circle[1].y)-Number(circle[2].y),2)+Math.pow(Number(circle[1].z)-Number(circle[2].z),2),1.5);

    circle[2].xdir +=  -100*(Number(circle[2].x)-Number(circle[1].x))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[1].x),2)+Math.pow(Number(circle[2].y)-Number(circle[1].y),2)+Math.pow(Number(circle[2].z)-Number(circle[1].z),2),1.5)- 400*(Number(circle[2].x)-Number(circle[0].x))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[0].x),2)+Math.pow(Number(circle[2].y)-Number(circle[0].y),2)+Math.pow(Number(circle[2].z)-Number(circle[0].z),2),1.5);
    circle[2].ydir +=  -100*(Number(circle[2].y)-Number(circle[1].y))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[1].x),2)+Math.pow(Number(circle[2].y)-Number(circle[1].y),2)+Math.pow(Number(circle[2].z)-Number(circle[1].z),2),1.5)- 400*(Number(circle[2].y)-Number(circle[0].y))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[0].x),2)+Math.pow(Number(circle[2].y)-Number(circle[0].y),2)+Math.pow(Number(circle[2].z)-Number(circle[0].z),2),1.5);
    circle[2].zdir +=  -100*(Number(circle[2].z)-Number(circle[1].z))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[1].x),2)+Math.pow(Number(circle[2].y)-Number(circle[1].y),2)+Math.pow(Number(circle[2].z)-Number(circle[1].z),2),1.5)- 400*(Number(circle[2].z)-Number(circle[0].z))/Math.pow(Math.pow(Number(circle[2].x)-Number(circle[0].x),2)+Math.pow(Number(circle[2].y)-Number(circle[0].y),2)+Math.pow(Number(circle[2].z)-Number(circle[0].z),2),1.5);

/*
    for (i=0; i < 3; i++){
      console.log(i,'xdir',circle[i].xdir);
      console.log(i,'ydir',circle[i].ydir);
      console.log(i,'zdir',circle[i].zdir);
    }*/


  requestAnimationFrame(draw);
}
draw();
