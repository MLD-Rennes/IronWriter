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

const BookmarksTabs = [
	'Tout', 'Liens', 'Fiction & Meta', 'Progrès'
]

const EntryTabs = [
	'Histoire', 'Lancer' , 'Oracle'
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
	'santé': 'health',
	'provision': 'supply', 
	'esprit': 'spirit',
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

const StatAddNames = {
	'edge': 'vivacité', 
	'heart': 'coeur', 
	'iron': 'fer', 
	'shadow': 'ombre', 
	'wits': 'astuce', 
	'health': 'santé', 
	'supply': 'provision', 
	'spirit': 'esprit'
}

// Translate menu
function translateHeader() {
	if (LANG === "FR") {
		document.getElementById('new').title = "Nouvelle session";
		document.getElementById('import').title = "Importer session";
		document.getElementById('export').title = "Exporter session";
		document.getElementById('bookmarks').title = "Étiquette";
		document.getElementById('help').title = "Aide";
	}
}

function translateConfirmDialog() {
	if (LANG ===  "FR") {
		let container =  document.getElementById('confirm-dialog');
		
		container.querySelector('#my-dialog-title').textContent = "Confirmation";
		container.querySelector("button[data-mdc-dialog-action='close']").textContent = "Annuler";
	}
}

function translateNewDialog() {
	translateConfirmDialog();
	
	 if (LANG === "FR") {
		let confirmDialog = document.getElementById("confirm-dialog").MDCDialog;
		confirmDialog.content_.textContent = "Êtes vous sûr de vouloir créer une nouvelle session ? Votre session actuelle sera supprimée.";
	 }
}

function translateImportDialog() {
	translateConfirmDialog();
	
	 if (LANG === "FR") {
		let confirmDialog = document.getElementById("confirm-dialog").MDCDialog;
		confirmDialog.content_.textContent = "Êtes vous sûr de vouloir importer une session ? Votre session actuelle sera perdue.";
	 }
}

function translateBookmarksDialog() {
	if (LANG  === "FR") {
		let container =  document.getElementById('bookmarks-dialog');
		
		container.querySelector('h2').textContent = "Étiquette";
		
		let buttons = container.querySelectorAll('button .mdc-tab__text-label');
		for (let p of buttons.keys()) {
			buttons[p].textContent = BookmarksTabs[p];
		}
	}
}

function translateEntryTabs(){
	if (LANG == "FR") {
		let container =  document.getElementById('entry-tabs');
		
		let buttons = container.querySelectorAll('button .mdc-tab__text-label');
		for (let p of buttons.keys()){
			buttons[p].textContent = EntryTabs[p];
		}
	}
}

function translateStory(){
	if (LANG === "FR") {
		let button = document.getElementById('submit-event')
		button.querySelector('.mdc-button__label').textContent = "Valider";
		button.title = "Valider l'évènement (CTRL+Enter)";
		
		button  =  document.getElementById('mode-switch');
		button.title = "Activer Fiction/Meta (CTRL+M)";
	}
}


function translateCharacterMenu () {
	if (LANG === "FR") {
		let container =  document.getElementById('character-pane');
		let element = container.querySelector('h3');
		element.textContent = "Personnage";
		
		element = container.querySelector('.status-group');
		element.firstElementChild.textContent = "Nom";
	}
}

function translateStatMenu () {
	if (LANG === "FR") {
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
}

function translateDebilityMenu () {
	if (LANG === "FR") {
		for (let p in DebilityNameMenu) {
			let container = document.getElementById('debility-' + p);
			container.firstElementChild.textContent = DebilityNameMenu[p];
		}
		
		let container = document.querySelector('.debility-container > div:nth-child(1)');
		container.textContent = "Handicaps";
	}
}

function translateBondsMenu() {
	if (LANG === "FR") {
		container = document.getElementById('bond-card');
		container.querySelector('h3').textContent = "Liens";
	}
}

function translateProgressMenu () {
	if (LANG === "FR") {
		container = document.getElementById('progress-card');
		container.querySelector('h3').textContent = "Jauge de progrès";
	}
}

function translateAssetsMenu() {
	if (LANG === "FR") {
		container = document.getElementById('asset-card');
		container.querySelector('h3').textContent = "Atouts";
	}
}

function translateInventoryMenu(){
	if (LANG === "FR") {
		container = document.getElementById('inventory-card');
		container.querySelector('h3').textContent = "Inventaire";
	}
}

function translateRollMenu() {
	if (LANG == "FR") {
		// Progress track section 
		container = document.getElementById('roll-source');
		container.querySelector('#outlined-label').textContent = "Jauge de progrès (Facultatif)";
		
		// Stat add section
		container = document.getElementById('roll-stats');
		container.querySelector('#outlined-label').textContent = "Bonus de caractéristique";
		container.querySelector('li[data-value="edge"]').textContent = "+Vivacité";
		container.querySelector('li[data-value="heart"]').textContent = "+Coeur";
		container.querySelector('li[data-value="iron"]').textContent = "+Fer";
		container.querySelector('li[data-value="shadow"]').textContent = "+Ombre";
		container.querySelector('li[data-value="wits"]').textContent = "+Astuce";
		container.querySelector('li[data-value="health"]').textContent = "+Santé";
		container.querySelector('li[data-value="spirit"]').textContent = "+Esprit";
		container.querySelector('li[data-value="supply"]').textContent = "+Provision";
		
		// Additional Add section
		container = document.getElementById('roll-add').nextElementSibling;
		console.log(container);
		container.querySelector('.mdc-floating-label').textContent = "Autre bonus";
		
		// Buttons
		container = document.getElementById('roll');
		container.querySelector('.mdc-button__label').textContent = "Lancer";
		container = document.getElementById('roll-reset');
		container.title = "Valeurs par défaut";
		
	}
}

function translateProgressRank (input) {
	if (LANG === "FR") {
		return ProgressRankNameMenu[input];
	}
	
	return input;
}	

function translateQuantityProperty(input) {
	if (LANG === "FR") {
		if (input !== "Quantity"){
			return input;
		}
		return "Quantité";
	}
	
	return input;
}


// Translate Keywords
function translateTag(input) {
	if (LANG === "FR") {
		return TagMapping[input];
	}
	
	return input;
}

function translateDebility(input) {
	if (LANG === "FR") {
		return DebilityMapping[input];
	}
	
	return input;
}

function translateProgressOption(input) {
	if (LANG === "FR") {
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
	
	return input;
}

function translateDoOracle() {
	if (LANG === "FR") {
		OracleIndication = "Consulter l'Oracle";
	}
}

function translateDoRoll(){
	if (LANG == "FR") {
		str_weakHit = "Coup Faible";
		str_strongHit = "Coup Fort";
		str_miss = "Échec";
		str_challenge = "Défi";
	}
}
	
	
function translateStatAdd(input){
	if (LANG === "FR"){
		if (input in StatAddNames){
			return StatAddNames[input];
		}
	}
	return input
}
	