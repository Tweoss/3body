
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i;
var j;
var k = 0;
var mean;
var animate = 0;
var circle = [
  {x:50 , y:200, xdir:   0.184279,ydir:   0.587188,r:10},//r=30 makes for interesting stuff
  {x:250, y:200, xdir:   0.184279,ydir:   0.587188,r:10},
  {x:150, y:200, xdir:-2*0.184279,ydir:-2*0.587188,r:10},
];

//BASIC FUNCTIONS

function reassign() {
  for (i=1; i<=circle.length; i++){
    circle[i-1].x    = parseFloat(document.getElementById("x" +  i.toString()).value);
    circle[i-1].y    = parseFloat(document.getElementById("y" +  i.toString()).value);
    circle[i-1].xdir = parseFloat(document.getElementById("xd"+  i.toString()).value);
    circle[i-1].ydir = parseFloat(document.getElementById("yd"+  i.toString()).value);
    circle[i-1].r    = parseFloat(document.getElementById("r" +  i.toString()).value);
  }
  animate = 0;
  draw();
}

function addcircle(){
  circle.push({x:30, y: 30, xdir: 1, ydir: 1, r:10});
  animate = 0;
  draw();
}

function dircalc(){
  for (i=0; i<circle.length; i++){
    for (j=0; j<circle.length; j++){
      if (i != j){
        circle[i].xdir -= .0109*Math.pow(circle[i].r*circle[j].r,2)*(circle[i].x-circle[j].x)/Math.pow(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2),1.5);
        circle[i].ydir -= .0109*Math.pow(circle[i].r*circle[j].r,2)*(circle[i].y-circle[j].y)/Math.pow(Math.pow(circle[i].x-circle[j].x,2)+Math.pow(circle[i].y-circle[j].y,2),1.5);
      }
    }
  }
  if (document.getElementById("isFollow") == true){
    mean = 0;
    for (i=0; i<circle.length; i++){
      mean +=circle[i].x;
    }
    for (i=0; i<circle.length; i++){
      circle[i].x -= mean;
    }
    mean=0
    for (i=0; i<circle.length; i++){
      mean +=circle[i].y;
    }
    for (i=0; i<circle.length; i++){
      circle[i].y -= mean;
    }

  }
}

function boundcheck(type,number) {
  var thevalue = document.getElementById(type + number);
  switch (type){
    case 'r':
      if (thevalue.value < 0)
        thevalue.value = 0;
      else if (thevalue.value > 50)
        thevalue.value = 50;
      break;
    case 'xd':
      if (thevalue.value < -10)
        thevalue.value = -10;
      else if (thevalue.value > 10)
        thevalue.value = 10;
      break;
    case 'yd':
      if (thevalue.value < -10)
        thevalue.value = -10;
      else if (thevalue.value > 10)
        thevalue.value = 10;
      break;
    case 'x':
      if (thevalue.value < 0)
        thevalue.value = 0;
      else if (thevalue.value > 400)
        thevalue.value = 400;
      break;
    case 'y':
      if (thevalue.value < 0)
        thevalue.value = 0;
      else if (thevalue.value > 400)
        thevalue.value = 400;
      break;
  }
  reassign();
}

function drawer(){
  animate = 1;
  draw();
}

function stopdraw(){
  animate = 0;
}

//DRAG FUNCTIONS

function




//DRAW FUNCTIONS

ctx.fillStyle = "#000000";

function draw(){
  ctx.clearRect(0, 0, 400, 400);

  k++;
  if (k<10){
    console.log(circle);
  }

  for (i = 0; i < circle.length; i++) {
    ctx.beginPath();
    ctx.arc(circle[i].x, circle[i].y, circle[i].r, 0, 2 * Math.PI);
    ctx.fill();
    circle[i].x += circle[i].xdir;
    circle[i].y += circle[i].ydir;
  }

  if (animate == 1){
    dircalc();
    requestAnimationFrame(draw);
  }
}

draw();
