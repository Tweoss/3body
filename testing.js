
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var i;
  var sphere = [
    {x:20, y:20, xdir:0,ydir:0,r:16},
    {x:40, y:100, xdir:0,ydir:0,r:25},
    {x:100, y:60, xdir:0,ydir:0,r:36},
  ];

  ctx.fillStyle = "#000000";

  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(sphere[i].x, sphere[i].y, sphere[i].r, 0, 2 * Math.PI);
    ctx.fill();
  }
