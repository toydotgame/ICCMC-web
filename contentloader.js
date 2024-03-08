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
	<b>Whitelisted:</b> 17<br>
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
	<b>CPU:</b> AMD Ryzen 5 5600G @ 3.9 GHz (6c12t)<br>
	<b>RAM:</b> 32 GB DDR4-3200<br>
	<b>Main Drive:</b> 500 GiB NVMe Crucial P3 CT500P3SSD8<br>
 	<b>Backup:</b> 2x 3 TiB Seagate Barracuda @ 7200 rpm<br>
	<b>OS:</b> Ubuntu Server 22.04 LTS
</div>
`;
