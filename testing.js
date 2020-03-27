
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FFFFFF";
  ctx.arc(100, 75, 16, 0, 2 * Math.PI);
  ctx.fill();
  ctx.arc(200, 50, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.arc(300, 100, 36, 0, 2 * Math.PI);
  ctx.fill();
