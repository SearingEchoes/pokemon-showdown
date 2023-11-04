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
		name: "[Gen 3] Purple OU",
		threads: [],

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'Basiney', 'Blissea', 'JK Sanae + Drizzle', 'Scarlet Witch + Drought', 'Sendai', 'Speed Aya', 'Double Soul'],
	},
	{
		name: "[Gen 3] Purple Ubers",
		threads: [],

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['King\'s Rock', 'Sand Veil'],
	},
	{
		name: "[Gen 3] Purple UUbers",
		threads: [],

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'Double Soul'],
	},
	{
		name: "[Gen 3] Purple UU",
		threads: [],

		mod: 'gen3purple',
		ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'OU', 'UUber', 'King\'s Rock', 'Sand Veil', 'Basiney', 'Blissea', 'JK Sanae + Drizzle', 'Double Soul'],
	},
	
	
	// {
		// section: "1.8 Misc",
	// },
	// {
		// name: "[Gen 3] Purple Doubles",
		// threads: [],

		// mod: 'gen3purple',
		// gameType: 'doubles',
		// searchShow: false,
		// ruleset: ['Inherit Move Rule', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		// banlist: ['Uber', 'King\'s Rock', 'Sand Veil', 'JK Sanae + Drizzle', 'Scarlet Witch + Drought', 'Sendai', 'Speed Aya', 'Double Soul'],
	// },
	// {
		// name: "[Gen 3] Purple LC",
		// threads: [],

		// mod: 'gen3purple',
		// searchShow: false,
		// ruleset: ['Little Cup', 'Inherit Move Rule', 'Freeze Clause Mod'],
		// banlist: ['Baton Pass', 'Baton Pass 2', 'Chibi Rikako', 'Chibi Yumemi', 'Chibi Kasen', 'Brightpowder', 'King\'s Rock'],
	// },
];
