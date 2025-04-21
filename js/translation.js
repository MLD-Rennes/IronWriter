"use strict";

/*
    IronWriter is an open-source writing tool for solo playthroughs of the free tabletop RPG Ironsworn.
    Copyright (C) 2019 Alex Larioza

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see https://github.com/SHiLLySiT/IronWriter/blob/master/LICENSE.txt.
*/

const StatNameMapping = {
	'edge': 'Vivacité',
	'heart': 'Coeur',
	'iron': 'Fer',
	'shadow': 'Ombre',
	'wits': 'Astuce',
	'health': 'Santé',
	'spirit': 'Esprit',
	'supply': 'Provision',
	'momentum': 'Élan',
	'momentumMax': "Max",
	'momentumReset': 'Reset'
}

const StatsMenu = [
	'Caractéristiques', 'Statut', 'Élan'
]

const TagMapping = {
	'vivacité': 'edge',
	'coeur': 'heart', 
	'fer': 'iron',
	'ombre': 'shadow',
	'astuce': 'wits',
	'élan': 'momentum',
	'expérience': 'experience',
	'expériencedépensée': 'experiencespent'
}

function translateStatsMenu () {
	for (let p in StatNameMapping) {
		let container = document.getElementById('stat-' + p);
		container.querySelector('.stat-name').textContent = StatNameMapping[p];
	}
	
	let containers = document.querySelectorAll('.stat-container > div:nth-child(1)');
	console.log(containers);
	for (let p of containers.keys()) {
		containers[p].textContent = StatsMenu[p];
	}
	
	let container = document.querySelector('.experience-container > div:nth-child(1)');
	container.textContent = "Expérience";
}

function translateTag(input) {
	return TagMapping[input];
}
	
	