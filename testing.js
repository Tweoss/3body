
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i, j, k = 0;
var mouse = {x:0,y:0};
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

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function addcircle(){
  circle.push({x:30, y: 30, xdir: 1, ydir: 1, r:10});
  animate = 0;
  draw();
  var prebreak = document.getElementById("br" + toString(circle.length-1))

  var tempel[3];//TEMPORARY ELEMNT ARRAY DEPTH OF 3

  tempel[0] = document.createElement("div");
{
    setAttributes(tempel[0], {
      "class": "flex"
    });
    element.insertAfter(tempel[0],prebreak);
  {
    tempel[1] = document.createElement("div");
      setAttributes(tempel[1], {
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "radius" + toString(circle.length)
        });
        tempel[2].innerHTML = "Radius of Circle " + toString(circle.length);
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttribute(tempel[2], {
          "type": "number",
          "id": "r" + toString(circle.length + 1),
          "oninput": "boundcheck('r','" + toString(circle.length) + "')",
          "onchange": "reassign()",
          "aria-labelledby": "radius" + toString(circle.length),
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
    tempel[1] = document.createElement("div")
      setAttributes(tempel[1],{
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "xdirec" + toString(circle.length)
        });
        tempel[2].innerHTML = "X Direction of Circle " + toString(circle.length);
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "xd" + toString(circle.length + 1),
          "oninput": "boundcheck('r','" + toString(circle.length) + "')",
          "onchange": "reassign()",
          "aria-labelledby": "xdirec" + toString(circle.length),
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
    tempel[1] = document.createElement("div")
      setAttributes(tempel[1],{
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "ydirec" + toString(circle.length)
        });
        tempel[2].innerHTML = "Y Direction of Circle " + toString(circle.length);
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "yd" + toString(circle.length + 1),
          "oninput": "boundcheck('r','" + toString(circle.length) + "')",
          "onchange": "reassign()",
          "aria-labelledby": "ydirec" + toString(circle.length),
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
    tempel[1] = document.createElement("div")
      setAttributes(tempel[1],{
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "xcoord" + toString(circle.length)
        });
        tempel[2].innerHTML = "X Coordinate of Circle " + toString(circle.length);
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "x" + toString(circle.length + 1),
          "oninput": "boundcheck('x','" + toString(circle.length) + "')",
          "onchange": "reassign()",
          "aria-labelledby": "xcoord1" + toString(circle.length),
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
    tempel[1] = document.createElement("div")
      setAttributes(tempel[1],{
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "ycoord" + toString(circle.length)
        });
        tempel[2].innerHTML = "Y Coordinate of Circle " + toString(circle.length);
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "y" + toString(circle.length + 1),
          "oninput": "boundcheck('y','" + toString(circle.length) + "')",
          "onchange": "reassign()",
          "aria-labelledby": "ycoord1" + toString(circle.length),
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
  }
}
}

function dircalc(){
  for (i=0; i<circle.length; i++){
    circle[i].x += circle[i].xdir;
    circle[i].y += circle[i].ydir;
  }
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
      circle[i].x -= mean/circle.legth;
    }
    mean=0
    for (i=0; i<circle.length; i++){
      mean +=circle[i].y;
    }
    for (i=0; i<circle.length; i++){
      circle[i].y -= mean/circle.length;
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
  if (animate == 0){
    animate = 1;
    draw();
  }
}

function stopdraw(){
  animate = 0;
}

//DRAG FUNCTIONS

function circlecol(mousex,mousey,x,y,r){
  if (r > Math.sqrt(Math.pow(mousex-x,2)+Math.pow(mousey-y,2)))
    return true;
  else
    return false;
}

canvas.addEventListener("mousedown",function(event){
  mouse.x = event.pageX - canvas.offsetLeft;
  mouse.y = event.pageY - canvas.offsetTop;
  for (i=0; i<circle.length; i++){
    if(circlecol(event.clientX,event.clientY,circle[i].x,circle[i].y,circle[i].r)){
      ;
    }
  }

});


//DRAW FUNCTIONS

ctx.fillStyle = "#000000";

function draw(){
  ctx.clearRect(0, 0, 400, 400);
/*
  k++;
  if (k<10){
    console.log(circle);
  }*/

  for (i = 0; i < circle.length; i++) {
    ctx.beginPath();
    ctx.arc(circle[i].x, circle[i].y, circle[i].r, 0, 2 * Math.PI);
    ctx.fill();
  }

  if (animate == 1){
    dircalc();
    requestAnimationFrame(draw);
  }
}

draw();
