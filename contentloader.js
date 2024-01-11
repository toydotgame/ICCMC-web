/*
 * AUTHOR: toydotgame
 * CREATED ON: 2024-01-11
 * Content-loading script to dynamically update nav and aside.
 */

import {} from "/imgmodal.js";

document.getElementById("nav").innerHTML = `
<a href="/">Home</a>
|
<a href="http://iccmc.toydotgame.net:8123/">Map</a>
|
<a href="/rules">Rules</a>
|
<a href="/about">About</a>
`;

document.getElementById("aside").innerHTML = `
<div class="card">
	<h3>Players</h3>
	<b>Whitelisted:</b> 15<br>
	<b>Bans:</b> 1
</div>
<div class="card">
	<h3>Minecraft</h3>
	<b>Release:</b> 1.20.1<br>
	<b>Software:</b> Fabric 0.14.21<br>
	<b>Mods:</b> 21<br>
	<b>Datapacks:</b> 10
</div>
<div class="card">
	<h3>Hardware</h3>
	<b>CPU:</b> Intel Core i3-2100 @ 3.1 GHz (2c4t)<br>
	<b>RAM:</b> 16 GB DDR3-1333<br>
	<b>HDD:</b> 300 GiB 5400 rpm Hitachi HCC543232A7A380<br>
	<b>OS:</b> Ubuntu Server 22.04 LTS
</div>
`;
