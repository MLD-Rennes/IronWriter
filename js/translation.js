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

const StatsMenu = [
	'Caractéristiques', 'Statut', 'Élan'
]

const StatNameMenu = {
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

const DebilityNameMenu = {
	'none': 'Aucun',
	'wounded': 'Blessé',
	'unprepared': 'Mal préparé',
	'shaken': 'Secoué',
	'encumbered': 'Encombré',
	'maimed': 'Mutilé',
	'corrupted': 'Corrompu',
	'cursed': 'Maudit',
	'tormented': 'Tourmenté'
}

const ProgressRankNameMenu = {
	'troublesome': 'pénible',
	'dangerous': 'dangereux',
	'formidable': 'redoutable',
	'extreme': 'extrème',
	'epic': 'épique'
}


const TagMapping = {
	'vivacité': 'edge',
	'coeur': 'heart', 
	'fer': 'iron',
	'ombre': 'shadow',
	'astuce': 'wits',
	'élan': 'momentum',
	'expérience': 'experience',
	'expériencedépensée': 'experiencespent',
	'renommer': 'rename',
	'est': 'is',
	'pas': 'not',
	'progrès': 'progress',
	'lien': 'bond',
	'supprimerlien': 'unbond',
	'atout': 'asset',
	'supprimeratout': 'removeasset',
	'objet': 'item',
	'supprimerobjet': 'removeitem',
	'étiquette': 'bookmark'
}

const DebilityMapping = {
	'blessé': 'wounded', 
	'malpréparé': 'unprepared',
	'secoué': 'shaken',
	'encombré': 'encumbered',
	'mutilé': 'maimed',
	'corrompu': 'corrupted',
	'maudit': 'cursed', 
	'tourmenté': 'tormented'
}

const ProgressOptionMapping = {
	'complet': 'complete',
	'pénible': 'troublesome',
	'dangereux': 'dangerous',
	'redoutable': 'formidable',
	'extrème': 'extreme',
	'épique': 'epic'
}

// Translate menu
function translateCharacterMenu () {
	let container =  document.getElementById('character-pane');
	let element = container.querySelector('h3');
	element.textContent = "Personnage";
	
	element = container.querySelector('.status-group');
	element.firstElementChild.textContent = "Nom";
}

function translateStatMenu () {
	for (let p in StatNameMenu) {
		let container = document.getElementById('stat-' + p);
		container.querySelector('.stat-name').textContent = StatNameMenu[p];
	}
	
	let containers = document.querySelectorAll('.stat-container > div:nth-child(1)');
	for (let p of containers.keys()) {
		containers[p].textContent = StatsMenu[p];
	}
	
	let container = document.querySelector('.experience-container > div:nth-child(1)');
	container.textContent = "Expérience";
}

function translateDebilityMenu () {
	for (let p in DebilityNameMenu) {
		let container = document.getElementById('debility-' + p);
		container.firstElementChild.textContent = DebilityNameMenu[p];
	}
	
	let container = document.querySelector('.debility-container > div:nth-child(1)');
	container.textContent = "Handicaps";
}

function translateBondsMenu() {
	container = document.getElementById('bond-card');
	container.querySelector('h3').textContent = "Liens";
}

function translateProgressMenu () {
	container = document.getElementById('progress-card');
	container.querySelector('h3').textContent = "Jauge de progrès";
}

function translateAssetsMenu() {
	container = document.getElementById('asset-card');
	container.querySelector('h3').textContent = "Atouts";
}

function translateProgressRank (input) {
	return ProgressRankNameMenu[input];
}


// Translate Keywords
function translateTag(input) {
	return TagMapping[input];
}

function translateDebility(input) {
	return DebilityMapping[input];
}

function translateProgressOption(input) {
	if (input === undefined) {
		return undefined;
	}
	else if (!isNaN(input)) {
		return input;
	}
	else {
		return ProgressOptionMapping[input];
	}
}
	
	