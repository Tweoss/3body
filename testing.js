
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var j;
var k;
var circle = [
  {x:50 , y:200, xdir:   0.184279,ydir:   0.587188,r:10},
  {x:250, y:200, xdir:   0.184279,ydir:   0.587188,r:10},
  {x:150, y:200, xdir:-2*0.184279,ydir:-2*0.587188,r:10},
];
function reassign(){
/*
  circle[0].x = parseFloat(document.getElementById("x1").value);
  circle[0].y = parseFloat(document.getElementById("y1").value);
  circle[1].x = parseFloat(document.getElementById("x2").value);
  circle[1].y = parseFloat(document.getElementById("y2").value);
  circle[2].x = parseFloat(document.getElementById("x3").value);
  circle[2].y = parseFloat(document.getElementById("y3").value);

  circle[0].xdir = parseFloat(document.getElementById("xd1").value);
  circle[0].ydir = parseFloat(document.getElementById("yd1").value);
  circle[1].xdir = parseFloat(document.getElementById("xd2").value);
  circle[1].ydir = parseFloat(document.getElementById("yd2").value);
  circle[2].xdir = parseFloat(document.getElementById("xd3").value);
  circle[2].ydir = parseFloat(document.getElementById("yd3").value);

  circle[0].r = parseFloat(document.getElementById("r1").value);
  circle[1].r = parseFloat(document.getElementById("r2").value);
  circle[2].r = parseFloat(document.getElementById("r3").value);
*/
  for (i=0; i<circle.length; i++){
    circle[i].x    = parseFloat(document.getElementById("x" +  toString(i)).value);
    circle[i].y    = parseFloat(document.getElementById("y" +  toString(i)).value);
    circle[i].xdir = parseFloat(document.getElementById("xd"+  toString(i)).value);
    circle[i].ydir = parseFloat(document.getElementById("yd"+  toString(i)).value);
    circle[i].r    = parseFloat(document.getElementById("r" +  toString(i)).value);
  }
  console.log(circle);
  //draw();
}

function addcircle(){
  circle.push({x:30, y: 30, xdir: 1, ydir: 1, r:10});
}

function dircalc(){
  for (i=0; i<circle.length; i++){
    for (j=0; j<circle.length; j++){
      if (i != j){
        circle[i].x -= .0109*Math.pow(circle[i].r*circle[j].r,2)*(circle[i].x-circle[j].x)/Math.pow(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2),1.5);
      }
    }
  }
}


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

k = 0;

function draw(){
  ctx.clearRect(0, 0, 400, 400);

  k++;
  if (k<10){
    console.log(circle);
  }


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


  dircalc();
/*  circle[0].xdir += .0109*(-1*(Math.pow(circle[0].r,2)*Math.pow(circle[1].r,2))*(circle[0].x-circle[1].x)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))   -1*(Math.pow(circle[0].r,2)*Math.pow(circle[2].r,2))*(circle[0].x-circle[2].x)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2),3)) );
  circle[0].ydir += .0109*(-1*(Math.pow(circle[0].r,2)*Math.pow(circle[1].r,2))*(circle[0].y-circle[1].y)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[1].x,2)+Math.pow(circle[0].y-circle[1].y,2),3))   -1*(Math.pow(circle[0].r,2)*Math.pow(circle[2].r,2))*(circle[0].y-circle[2].y)/Math.sqrt(Math.pow(Math.pow(circle[0].x-circle[2].x,2)+Math.pow(circle[0].y-circle[2].y,2),3)) );

  circle[1].xdir += .0109*(-1*(Math.pow(circle[1].r,2)*Math.pow(circle[0].r,2))*(circle[1].x-circle[0].x)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2),3))   -1*(Math.pow(circle[1].r,2)*Math.pow(circle[2].r,2))*(circle[1].x-circle[2].x)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2),3)) );
  circle[1].ydir += .0109*(-1*(Math.pow(circle[1].r,2)*Math.pow(circle[0].r,2))*(circle[1].y-circle[0].y)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[0].x,2)+Math.pow(circle[1].y-circle[0].y,2),3))   -1*(Math.pow(circle[1].r,2)*Math.pow(circle[2].r,2))*(circle[1].y-circle[2].y)/Math.sqrt(Math.pow(Math.pow(circle[1].x-circle[2].x,2)+Math.pow(circle[1].y-circle[2].y,2),3)) );

  circle[2].xdir += .0109*(-1*(Math.pow(circle[2].r,2)*Math.pow(circle[1].r,2))*(circle[2].x-circle[1].x)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2),3))   -1*(Math.pow(circle[2].r,2)*Math.pow(circle[0].r,2))*(circle[2].x-circle[0].x)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2),3)) );
  circle[2].ydir += .0109*(-1*(Math.pow(circle[2].r,2)*Math.pow(circle[1].r,2))*(circle[2].y-circle[1].y)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[1].x,2)+Math.pow(circle[2].y-circle[1].y,2),3))   -1*(Math.pow(circle[2].r,2)*Math.pow(circle[0].r,2))*(circle[2].y-circle[0].y)/Math.sqrt(Math.pow(Math.pow(circle[2].x-circle[0].x,2)+Math.pow(circle[2].y-circle[0].y,2),3)) );
*/
/*
    for (i=0; i < 3; i++){
      console.log(i,'xdir',typeof(circle[i].xdir));
      console.log(i,'ydir',circle[i].ydir);
      console.log(i,'zdir',circle[i].zdir);
    }*/


  requestAnimationFrame(draw);
}
draw();
