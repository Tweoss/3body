
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var circle = [
  {x:50 , y:200, xdir:   0.184279,ydir:   0.587188,r:10},
  {x:250, y:200, xdir:   0.184279,ydir:   0.587188,r:10},
  {x:150, y:200, xdir:-2*0.184279,ydir:-2*0.587188,r:10},
];



/*(-1,0), (1,0), (0,0)
(-100,0), (100,0), (0,0)
(50,200), (250,200), (150,200)
(p1,p2), (p1,p2), (-2p1,-2p2)
p1: 0.184279

p2: 0.587188*/

ctx.fillStyle = "#000000";


/*
alert(-400*(circle[0].x-circle[1].x)/(Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))));
alert(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2));//Nan
alert(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3));//Nan
alert(-400*(circle[0].x-circle[1].x)/(Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))));//.0142668014
alert(Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3)));//Nan
alert(Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2),3)));//8000

alert(Math.pow(circle[0].y-circle[1].y,2));//6400
alert(Math.pow(circle[0].z-circle[1].z,2));//Nan


alert(Math.pow(Math.pow(circle[0].x-circle[1].x,2),3));//64000000
alert(Math.pow(circle[0].x-circle[1].x,2));//400
alert(circle[0].x-circle[1].x);//-20
alert(circle[0].x);//20
*/

var j = 0;

function draw(){
  ctx.clearRect(0, 0, 400, 400);

  j++;



  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(circle[i].x, circle[i].y, circle[i].r, 0, 2 * Math.PI);
    ctx.fill();
    circle[i].x += circle[i].xdir;
  //  console.log(i,'x',circle[i].x);
    circle[i].y += circle[i].ydir;
    //console.log(i,'y',circle[i].y);
    if (j<1000){
      //console.log(j,i,circle[i]);
    }
  }



  //alert('circle' + circle[0].x + Math.sqrt(Math.pow(circle[0].x,3)));

    circle[0].xdir += 109*(-1*(circle[0].x-circle[1].x)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))-1*(circle[0].x-circle[2].x)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2),3)) );
    circle[0].ydir += 109*(-1*(circle[0].y-circle[1].y)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))-1*(circle[0].y-circle[2].y)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2),3)) );

    circle[1].xdir += 109*( -1*(circle[1].x-circle[0].x)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2),3))-1*(circle[1].x-circle[2].x)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2),3)) );
    circle[1].ydir += 109*( -1*(circle[1].y-circle[0].y)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2),3))-1*(circle[1].y-circle[2].y)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2),3)) );

    circle[2].xdir += 109*( -1*(circle[2].x-circle[1].x)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2),3))-1*(circle[2].x-circle[0].x)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2),3)) );
    circle[2].ydir += 109*( -1*(circle[2].y-circle[1].y)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2),3))-1*(circle[2].y-circle[0].y)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2),3)) );

/*
    for (i=0; i < 3; i++){
      console.log(i,'xdir',typeof(circle[i].xdir));
      console.log(i,'ydir',circle[i].ydir);
      console.log(i,'zdir',circle[i].zdir);
    }*/


  requestAnimationFrame(draw);
}
draw();
