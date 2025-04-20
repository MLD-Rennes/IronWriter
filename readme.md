# Overview
IronWriter is an open-source writing tool for solo playthroughs of the free tabletop RPG [Ironsworn](https://www.ironswornrpg.com/). Focus on writing your story and let IronWriter automatically manage your character sheet.

__IMPORTANT NOTE__: IronWriter is currently in active development and should be considered unstable until the v1.0 milestone is reached, so please export and backup any data important to you. Backward compatibility is not guaranteed. 

## Current Features
* Use simple markup embedded in your story to automatically update your character sheet
* Track all stats, momentum, status, and debilities
* Track progress on your vows, journeys, and combat
* Editing an event will update all events that follow it
* Remove events
* Track bonds and overall progress track
* Integrated dice rolls
* Roll against oracle tables
* Reroll oracle/dice
* Import/Export
* Save session to browser cache
* Track assets
* Track inventory items
* Manual bookmarking of events to reference later
* Auto-Bookmarking of events with bond and vow progress

## Open Source License
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

## Table of Contents
* [Quick Start](#Quick-start)
* [Keyboard Shortcuts](#Keyboard-Shortcuts)
* [Documentation](#Documentation)
    * [Tags](#Tags)
        * [Renaming your character](#Renaming-your-character)
        * [Changing Stats](#Changing-Stats)
        * [Adding and Removing Debilities](#Adding-and-Removing-Debilities)
        * [Marking Progress](#Marking-Progress)
        * [Making Bonds](#Making-Bonds)
        * [Managing Assets](#Managing-Assets)
        * [Managing Inventory](#Managing-Inventory)
        * [Bookmarking Events](#Bookmarking-Events)

# Quick start
* Visit www.alexlarioza.com/IronWriter or clone this repo and open [index.html](index.html) in your browser.
* As you write your story, progress is automatically saved to your browser's local storage so be aware that clearing site data __will__ delete your save data.
* Use the import/export feature to safely store the your session outside of your browser.

# Keyboard Shortcuts
* CTRL+Enter: Submit/Save event
* CTRL+M: Toggle mode

# Documentation
IronWriter represents moments or blocks of content in your stories as "events". How much content you choose to write into each card is up to you.

![alt text](/docs/images/events.gif)

There are two types of events - "fiction" and "meta". Functionally there is nothing different about them, but they are visually distinct to help separate your fictional elements from your meta actions during your session such as moves, question prompts, etc.

![alt text](/docs/images/mode-toggle.gif)

IronWriter uses special markup (referred to as "tags") to automatically update the character sheet. These tags are case-insensitive (`removeAsset` is the same as `removeasset`) and should always be wrapped in square brackets `[]`. This documentation will use capitalization for clarity and leave out the brackets for brevity.

![alt text](/docs/images/markup.gif)

> [health -2][momentum -1] Blood begins to pour out of the wounds on my arm as the wolf attempts to rip it off. I reach for my dagger tucked in my belt.

> I pull the dagger from its sheath and stab the wolf in its neck.[progress wolf] It finally release my arm and whimpers in pain. Just as I think I'm about to make it out of this alive, three more wolfs come running out of the forest. [progress "Wolf Pack" formidable]

_For a full example, see the [example session](/docs/sample.md)._

Tags contain parameters which are used to control how the tags change the character sheet or other event-based features like bookmarks. Parameters are separated by spaces, so if you want to include spaces wrap the parameter in double quotes e.g. `rename "Brynn Tahir"`. In the documentation, parameters that are wrapped in carets `<parameter>` are required and those wrapped in curly braces `{parameters}` are optional.

All events are stored in a history stack so that when you edit an event, any subsequent ones that are dependent on it will be replayed on top of your changes.

![alt text](/docs/images/history.gif)

IronWriter includes a bookmarking system to help you quickly traverse the history for noteworthy events. There are two types of bookmarks - those created by the system when you make/break a bond or make progress on a vow, and those you create yourself using the `bookmark` tag. Both types of bookmarks are saved between sessions and exist in exports.

![alt text](/docs/images/bookmarks.jpg)

# Tags
## Renommer le personnage
Renomme le personnage.
```
renommer <nom>
```
### Paramètres
* `<nom>` Le nom voulu.

### Exemples
* `renommer Maura` Change le nom du personnage en "Maura".
* `renommer "Brynn Tahir"` Change le nom du personnage en "Brynn Tahir".
    
## Changer les caractéristiques
Change la valeur d'une caractéristique. Attention, le premier paramètre n'est pas littéralement "caractéristique" mais la caractéristique
que vous voulez changer.
```
<carac> {modificateur}<valeur>
```
### Caractéristiques
* vivacité
* coeur
* fer
* ombre
* astuce
* santé
* provision
* esprit
* élan
* expérience
* expérienceDépensée

### Paramètres
* `<carac>` La caractéristique que vous voulez changer.
* `<valeur>` La valeur à appliquer à la `carac` donnée.
* `{modificateur}` La manière dont on souhaite appliquer la `valeur` Les options suivantes sont possibles :
    * `+` Ajoute la `valeur` donnée.
    * `-` Soustrait la `valeur` donnée.
    * Sans modificateur, la `carac` prend la `valeur` donnée.

### Exemples
* `santé +1` augmente la santé de 1
* `esprit -2` diminue l'esprit de 2
* `fer 3` modifie fer à 3
* `expérience 3` modifie l'expérience à 3
* `expérienceDépensée +2` ajoute deux à l'expérience dépensée

## Ajouter et supprimer des handicaps
Ajoute et supprime les handicaps et change automatiquement l'élan maxi et la valeur de réinitialisation de l'élan.
```
est <handicap>
```
```
pas <handicap>
```
### Handicaps
* blessé
* secoué
* malPréparé
* encombré
* mutilé
* corrompu
* maudit
* tourmenté

### Paramètres
* `<handicap>` Le handicap que vous voulez ajouter ou supprimer.

### Exemples
* `est blessé` Ajoute le handicap blessé.
* `pas blessé` Supprime le handicap blessé.

## Noter la progression
Commence, complète ou note la progression sur une jauge donnée.
```
progrès <nom> {modificateur}
```

### Paramètre
* `<nom>` Le nom de la jauge de progrès.
* `{modificateur}` La manière de modifier la jauge. Les options disponibles sont disponibles :
    * `complet` Enlever la jauge de progrès de la feuille de personnage.
    * `rang de défi` Le rang de la nouvelle jauge de progrès. Les options disponibles sont disponibles :
        * `pénible` Chaque progression est de 12 coches.
        * `dangereux` Chaque progression est de 8 coches.
        * `redoutable` Chaque progression est de 4 coches.
        * `extrême` Chaque progression est de 2 coches.
        * `épique` Chaque progression est de 1 coches.
    * `{+/-}<valeur>` Le nombre de coches à ajouter, enlever ou ajuster.
        * `+` Ajoute la `valeur| donnée.
        * `-` Enlève la `valeur| donnée. 
        * Sans modificateur, on ajuste le nombre de coches à la `valeur` donnée.
    * Sans modificateur, on ajoute automatiquement le nombre de coches correspondantes au `rang de défi`.

### Exemples
* `progrès "Tuer Martu" redoutable` Créer une nouvelle jauge de progression nommée "Tuer Martu" et lui donne le rang `redoutable`.
* `progrès "Tuer Martu"` Augmente le nombre de coches de 4.
* `progrès "Tuer Martu" +1` Augmente le nombre de coches de 1.
* `progrès "Tuer Martu" -2` Diminue le nombre de coches de 2.
* `progrès "Tuer Martu" 8` Ajuste le nombre de coches à 8.
* `progrès "Tuer Martu" complet` Supprime la jauge de progression nommée "Tuer Martu".

## Créer des liens
Ajoute un lien à la liste des liens et ajoute une coche à la jauge de progression de liens.
```
lien <nom>
```
```
supprimerLien <nom>
```

### Paramètres
* `<nom>` Texte décrivant le lien.

### Exemples
* `lien Père` Ajoute un lien nommé "Père" et ajoute une coche sur la jauge de progression de lien.
* `supprimerLien Père` Supprime un lien nommé "Père" et enlève une coche sur la jauge de progression de lien.
* `lien "Mai Lucia"` Ajoute un lien nommé "Mai Lucia" et ajoute une coche sur la jauge de progression de lien.

## Gérer les atouts
Ajouter et modifier les atouts.
```
atout <nom> <capacité>
```
```
atout <nom> <propriété> {modificateur}<valeur>
```
```
supprimerAtout <nom>
```

### Paramètres
* `<nom>` Le nom de l'atout.
* `<capacité>` Débloque la capacité à l'emplacement indiqué.
* `<propriété>` Le nom d'une propriété de l'atout.
* `{modificateur}` La manière dont vous voulez appliquer le paramètre `valeur`. Les options suivantes sont disponibles :
    * `+` (Uniquement avec un nombre) Ajoute la `valeur` donnée.
    * `-` (Uniquement avec un nombre) Enlève la `valeur` donnée.
    * Sans modificateur, on ajuste la propriété à la `valeur` donnée.
* `<valeur>` La valeur de la propriété. Peut être un nombre ou du texte.

### Exemples
* `atout Ritualiste` Ajoute un atout nommé "Ritualiste".
* `atout Ritualiste 1` Déverouille la capacité numéro 1 de l'atout nommé "Ritualiste".
* `atout Faucon Santé 1` Ajuste la propriété "Santé" à 1 pour l'atout nommé "Faucon".
* `atout Faucon Santé +10` Ajoute "10" à la propriété "Santé" pour l'atout nommé "Faucon".
* `atout Faucon Santé -5` Enlève "5" à la propriété "Santé" pour l'atout nommé "Faucon".
* `atout Artisan Spécialité Herboriste` Ajuste la propriété "Spécialité" à "Herboriste" pour l'atout nommé "Artisan".
* `supprimerAtout Artisan` Supprimer l'atout "Artisan".

## Managing Inventory
Adds and updates your character's inventory.
```
item <name> <quantity>
```
```
item <name> <property> {modifier}<value>
```
```
removeItem <name>
```

### Parameters
* `<name>` The name of the item.
* `<quantity>` The value you wish to set for the "Quantity" property of the item. Defaults to `1` if not specified.
    The following options can be used:
    * `{+/-}<value>` The quantity to add, remove, or set.
        * `+` Adds the specified `value`.
        * `-` Subtracts the specified `value`.
        * Not specifying a modifier sets the "Quantity" property to the specified `value`.
* `<property>` The name of an item property.
* `{modifier}` How you want the `value` parameter to be applied. The following options can be used:
    * `+` (Number Only) Adds the specified `value`.
    * `-` (Number Only) Subtracts the specified `value`.
    * Not specifying a modifier sets the stat to the specified `value`.
* `<value>` The value of the property. Can be a number or text.

### Examples
* `item Dagger` Adds an item called "Dagger" with the default "Quantity" property set at "1".
* `item Arrows 5` Adds an item called "Arrows" with the "Quantity" property set at "5".
* `item Dagger Condition 3` Sets the "Condition" property to "3" for the item called "Dagger".
* `item Dagger Condition +2` Adds "2" to the "Condition" property for the item called "Dagger".
* `item Dagger Condition -5` Subtracts "5" from the "Condition" property for the item called "Dagger".
* `item Waterskin Level Full` Sets the "Level" property to "Full" for the item called "Waterskin".
* `removeItem Waterskin` Removes "Waterskin" from the inventory.

## Bookmarking Events
Adds a Bookmark to the bookmark list.
```
bookmark <name>
```

### Parameters
* `<name>` The name of the bookmark.

### Examples
* `bookmark "Arrived at Greathill"` Adds a bookmark called "Arrived at Greathill".
