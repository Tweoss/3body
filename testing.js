
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(100, 75, 16, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "#F0F0FF";
  ctx.beginPath();
  ctx.arc(200, 50, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(300, 100, 36, 0, 2 * Math.PI);
  ctx.fill();
