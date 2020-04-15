
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var i, j, k = 0;
var mouse = {x:0,y:0};
var mean = {x:0, y:0};
var totalmass = 0;
var offset = {x:0, y:0};
var animate = 0;
var item;
var circle = [
  {x:50 , y:200, xdir:   0.184279,ydir:   0.587188,r:10, f: false},//r=30 makes for interesting stuff
  {x:250, y:200, xdir:   0.184279,ydir:   0.587188,r:10, f: false},
  {x:150, y:200, xdir:-2*0.184279,ydir:-2*0.587188,r:10, f: false},
];

//BASIC FUNCTIONS//POINTLESS COMMENT

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
  var prebreak = document.getElementById("brend");
  var body = document.getElementById("body");
  var tempel = [];//TEMPORARY ELEMNT ARRAY DEPTH OF 3

  tempel[0] = document.createElement("div");
{
    setAttributes(tempel[0], {
      "class": "flex"
    });
    body.insertBefore(tempel[0],prebreak);
  {
    tempel[1] = document.createElement("div");
      setAttributes(tempel[1], {
        "class": "flex1"
      });
      tempel[0].appendChild(tempel[1]);
      {
      tempel[2] = document.createElement("span");
        setAttributes(tempel[2], {
          "id": "radius" + circle.length.toString
        });
        tempel[2].innerHTML = "Radius of Circle " + circle.length.toString();
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "r" + circle.length.toString() ,
          "oninput": "boundcheck('r','" + circle.length.toString() + "')",
          "onchange": "reassign()",
          "aria-labelledby": "radius" + circle.length.toString,
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
          "id": "xdirec" + circle.length.toString
        });
        tempel[2].innerHTML = "X Direction of Circle " + circle.length.toString();
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "xd" + circle.length.toString() ,
          "oninput": "boundcheck('r','" + circle.length.toString() + "')",
          "onchange": "reassign()",
          "aria-labelledby": "xdirec" + circle.length.toString,
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
          "id": "ydirec" + circle.length.toString
        });
        tempel[2].innerHTML = "Y Direction of Circle " + circle.length.toString();
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "yd" + circle.length.toString() ,
          "oninput": "boundcheck('r','" + circle.length.toString() + "')",
          "onchange": "reassign()",
          "aria-labelledby": "ydirec" + circle.length.toString,
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
          "id": "xcoord" + circle.length.toString
        });
        tempel[2].innerHTML = "X Coordinate of Circle " + circle.length.toString();
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "x" + circle.length.toString() ,
          "oninput": "boundcheck('x','" + circle.length.toString() + "')",
          "onchange": "reassign()",
          "aria-labelledby": "xcoord1" + circle.length.toString,
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
          "id": "ycoord" + circle.length.toString
        });
        tempel[2].innerHTML = "Y Coordinate of Circle " + circle.length.toString();
        tempel[1].appendChild(tempel[2]);

      tempel[2] = document.createElement("input");
        setAttributes(tempel[2], {
          "type": "number",
          "id": "y" + circle.length.toString() ,
          "oninput": "boundcheck('y','" + circle.length.toString() + "')",
          "onchange": "reassign()",
          "aria-labelledby": "ycoord1" + circle.length.toString,
          "value": "10"
        });
        tempel[1].appendChild(tempel[2]);
      }
  }
}
}

function rmcircle(){
  circle.pop();
  animate = 0;
  draw();
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
  for (item of circle){
    if (item.f){
      mean.x +=item.x*Math.pow(item.r,2);
      mean.y +=item.y*Math.pow(item.r,2);
      totalmass += Math.pow(item.r,2);
    }
  }
  for (item of circle){
    offset.x += mean/totalmass - 200;
    item.x   -= mean/totalmass;
    item.x   += 200;
    offset.y += mean/totalmass - 200;
    item.y   -= mean/totalmass;
    item.y   += 200;
  }
}

function follow(number){
  circle[parseInt(number)-1].f = !(circle[parseInt(number)-1].f);
  mean.x = 0; mean.y = 0; totalmass = 0;
  for (item of circle){
    if (item.f){
      mean.x +=item.x*Math.pow(item.r,2);
      mean.y +=item.y*Math.pow(item.r,2);
      totalmass += Math.pow(item.r,2);
    }
  }
  for (item of circle){
    offset.x += mean.x/totalmass - 200;
    item.x   -= mean.x/totalmass;
    item.x   += 200;
    offset.y += mean.y/totalmass - 200;
    item.y   -= mean.y/totalmass;
    item.y   += 200;
  }
  //animate = 0; NOT SURE
  draw();
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
  if (document.getElementById("isGrid").checked){
    ctx.beginPath();
    for (i=-1; i<12; i++) {
      ctx.moveTo(-40,i*40 + offset.y % 40);ctx.lineTo(440,i*40 + offset.y % 40);
      ctx.moveTo(i*40 + offset.x % 40,-40);ctx.lineTo(i*40 + offset.x % 40,440);
      ctx.stroke();
    }
  }

  if (animate == 1){
    dircalc();
    requestAnimationFrame(draw);
  }
}

draw();
