<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>HTML Table</h2>
<div class="toolbar">
  <input type="range" min="2" max="50" value="30" aria-label="Growth Rate"><span class="rate">30</span>
  <input type="button" value="Add 30">
</div>
<table>
  <tr>
    <th id = "Head"></th>
    <th id = "Name"></th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
<input type="button" value="Add 1">

<canvas id="myCanvas" height="400" width="400" style="border:1px solid #000000;"></canvas>


<script>
var button = document.querySelector('input[type="button"]');
var range = document.querySelector('input[type="range"]');
var rate = document.querySelector('.rate');

range.oninput = function() {
  rate.textContent = range.value;
  button.value = 'Add ' + range.value
}
button.onclick = function() {
	document.getElementById('Head').innerHTML = Number(document.getElementById('Head').innerHTML)+Number(range.value);
}

window.onload = function() {
 document.getElementById('Head').innerHTML = 3;

 var name = prompt("What's your name?");


  document.getElementById('Name').innerHTML = name;

};


</script>

</body>
</html>
