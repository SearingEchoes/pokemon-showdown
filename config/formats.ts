// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	{
		section: "Touhoumon 1.8",
	},
	
	{
		name: "[Gen 3] Purple Random",

		mod: 'gen3purple',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Switch Priority Clause Mod', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Freeze Clause Mod'],
	},
	
	{
		name: "[Gen 3] Purple OU",
		
		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'Basiney', 'Blissea', 'JK Sanae + Drizzle', 'Scarlet Witch + Drought', 'Sendai', 'Speed Aya', 'Double Soul'],
	},
	{
		name: "[Gen 3] Purple Ubers",

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['King\'s Rock', 'Sand Veil'],
	},
	{
		name: "[Gen 3] Purple UUbers",

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'Double Soul'],
	},
	{
		name: "[Gen 3] Purple UU",

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'OU', 'King\'s Rock', 'Sand Veil', 'Basiney', 'Blissea', 'JK Sanae + Drizzle', 'Sendai', 'Speed Aya', 'Double Soul'],
	},
	
	
	{
		section: "1.8 Misc",
	},
	{
		name: "[Gen 3] Purple Doubles",

		mod: 'gen3purple',
		gameType: 'doubles',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'JK Sanae + Drizzle', 'Scarlet Witch + Drought', 'Sendai', 'Speed Aya', 'Double Soul'],
	},
	{
		name: "[Gen 3] Purple LC",

		mod: 'gen3purple',
		ruleset: ['Little Cup Limit', 'Inherit Move Rule', 'Freeze Clause Mod'],
		banlist: ['Uber', 'OU', 'UU', 'Baton Pass', 'Baton Pass 2', 'Chibi Rikako', 'Chibi Yumemi', 'Chibi Kasen', 'Brightpowder', 'King\'s Rock', 'Sand Veil', 'Basiney', 'Blissea', 'Sendai', 'Speed Aya', 'Icy Ball', 'Dark Ribbon'],
	},
	
	{
		section: "Extreme VR Training",
	},
	{
		name: "[Gen 3] Towards The Future",

		mod: 'gen3chaoticrift',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Switch Priority Clause Mod', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Freeze Clause Mod'],
	},

];
