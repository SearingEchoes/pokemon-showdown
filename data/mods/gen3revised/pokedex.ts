export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	chibireimu: {
		inherit: true,
		types: ["Normal", "Flying"],
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
	},
	reimu: {
		inherit: true,
		types: ["Faith", "Flying"],
		baseStats: {hp: 60, atk: 75, def: 60, spa: 75, spd: 60, spe: 70},
	},
	chibimarisa: {
		inherit: true,
		types: ["Electric"],
		abilities: {0: "Pickup", 1: "Strong Grip"},
		baseStats: {hp: 50, atk: 30, def: 40, spa: 70, spd: 40, spe: 70},
	},
	marisa: {
		inherit: true,
		types: ["Electric", "Fire"],
		abilities: {0: "Pickup", 1: "Strong Grip"},
		baseStats: {hp: 60, atk: 40, def: 60, spa: 90, spd: 60, spe: 90},
	},
	scarletwitch: {
		inherit: true,
		types: ["Ice", "Fire"],
		abilities: {0: "Drought", 1: "Snow Warning"},
		baseStats: {hp: 85, atk: 55, def: 80, spa: 140, spd: 80, spe: 95},
	},
	adventmarisa: {
		inherit: true,
		types: ["Electric", "Fighting"],
		abilities: {0: "Advent"},
		baseStats: {hp: 85, atk: 120, def: 70, spa: 60, spd: 70, spe: 130},
	},	
	chibisakuya: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Skill Link", 1: "Inner Focus"},
		baseStats: {hp: 65, atk: 45, def: 40, spa: 45, spd: 40, spe: 65},
	},
	sakuya: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Skill Link", 1: "Inner Focus"},
		baseStats: {hp: 80, atk: 65, def: 50, spa: 65, spd: 50, spe: 90},
	},
	chibisanae: {
		inherit: true,
		types: ["Faith", "Water"],
		abilities: {0: "Serene Grace", 1: "Torrent"},
		baseStats: {hp: 55, atk: 40, def: 50, spa: 60, spd: 50, spe: 45},
	},
	sanae: {
		inherit: true,
		types: ["Faith", "Water"],
		abilities: {0: "Serene Grace", 1: "Torrent"},
		baseStats: {hp: 75, atk: 50, def: 60, spa: 80, spd: 70, spe: 65},
	},
	chibirumia: {
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 40, atk: 60, def: 35, spa: 60, spd: 35, spe: 70},
	},
	rumia: {
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 50, atk: 80, def: 45, spa: 80, spd: 55, spe: 90},
	},
	chibidaiyousei: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Early Bird", 1: "Run Away"},
		baseStats: {hp: 40, atk: 30, def: 50, spa: 60, spd: 55, spe: 65},
	},
	daiyousei: {
		inherit: true,
		types: ["Grass", "Bug"],
		abilities: {0: "Early Bird", 1: "Run Away"},
		baseStats: {hp: 50, atk: 50, def: 60, spa: 80, spd: 75, spe: 85},
	},
	chibicirno: {
		inherit: true,
		types: ["Ice"],
		abilities: {0: "Guts", 1: "Oblivious"},
		baseStats: {hp: 35, atk: 60, def: 30, spa: 60, spd: 55, spe: 60},
	},
	cirno: {
		inherit: true,
		types: ["Ice", "Flying"],
		abilities: {0: "Guts", 1: "Oblivious"},
		baseStats: {hp: 45, atk: 80, def: 50, spa: 80, spd: 65, spe: 80},
	},
	adventcirno: {
		inherit: true,
		types: ["Ice", "Steel"],
		abilities: {0: "Advent"},
		baseStats: {hp: 70, atk: 140, def: 100, spa: 70, spd: 75, spe: 80},
	},
	chibimeiling: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "No Guard", 1: "Gate Keeper"},
		baseStats: {hp: 50, atk: 70, def: 55, spa: 30, spd: 40, spe: 55},
	},
	meiling: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "No Guard", 1: "Gate Keeper"},
		baseStats: {hp: 70, atk: 90, def: 75, spa: 40, spd: 50, spe: 75},
	},
	adventmeiling: {
		inherit: true,
		types: ["Fighting", "Steel"],
		abilities: {0: "Advent"},
		baseStats: {hp: 120, atk: 130, def: 110, spa: 40, spd: 50, spe: 60},
	},
	chibikoakuma: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Synchronize"},
		baseStats: {hp: 45, atk: 40, def: 30, spa: 60, spd: 55, spe: 70},
	},
	koakuma: {
		inherit: true,
		types: ["Psychic", "Flying"],
		abilities: {0: "Synchronize"},
		baseStats: {hp: 65, atk: 50, def: 40, spa: 80, spd: 75, spe: 90},
	},
	chibipatchouli: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Trace"},
		baseStats: {hp: 40, atk: 30, def: 35, spa: 80, spd: 70, spe: 45},
	},
	patchouli: {
		inherit: true,
		types: ["Psychic", "Ground"],
		abilities: {0: "Trace"},
		baseStats: {hp: 60, atk: 40, def: 45, spa: 100, spd: 90, spe: 65},
	},
	chibiremilia: {
		inherit: true,
		types: ["Dark", "Flying"],
		baseStats: {hp: 30, atk: 60, def: 40, spa: 60, spd: 40, spe: 70},
	},
	remilia: {
		inherit: true,
		types: ["Dark", "Flying"],
		baseStats: {hp: 40, atk: 80, def: 50, spa: 80, spd: 60, spe: 90},
	},
	chibiflandre: {
		inherit: true,
		types: ["Dark", "Fire"],
		abilities: {0: "Hustle", 1: "Fire Veil"},
		baseStats: {hp: 20, atk: 80, def: 20, spa: 80, spd: 20, spe: 80},
	},
	flandre: {
		inherit: true,
		types: ["Dark", "Fire"],
		abilities: {0: "Hustle", 1: "Fire Veil"},
		baseStats: {hp: 40, atk: 100, def: 35, spa: 100, spd: 35, spe: 90},
	},
	chibisatsuki: {
		inherit: true,
		types: ["Fire"],
		baseStats: {hp: 65, atk: 20, def: 85, spa: 50, spd: 135, spe: 45},
	},
	satsuki: {
		inherit: true,
		types: ["Fire", "Poison"],
		baseStats: {hp: 80, atk: 30, def: 100, spa: 60, spd: 210, spe: 55},
	},
	chibiletty: {
		inherit: true,
		types: ["Ice", "Rock"],
		abilities: {0: "Cold Heart", 1: "Ice Wall"},
		baseStats: {hp: 55, atk: 40, def: 45, spa: 75, spd: 45, spe: 40},
	},
	letty: {
		inherit: true,
		types: ["Ice", "Rock"],
		abilities: {0: "Cold Heart", 1: "Ice Wall"},
		baseStats: {hp: 75, atk: 50, def: 65, spa: 95, spd: 65, spe: 50},
	},
	adventletty: {
		inherit: true,
		types: ["Ice", "Steel"],
		abilities: {0: "Advent"},
		baseStats: {hp: 85, atk: 100, def: 80, spa: 50, spd: 65, spe: 120},
	},
	goliathdoll: {
		inherit: true,
		types: ["Steel", "Psychic"],
		abilities: {0: "Intimidate", 1: "Sturdy"},
		baseStats: {hp: 90, atk: 110, def: 100, spa: 80, spd: 70, spe: 50},
	},
	chibialice: {
		inherit: true,
		types: ["Psychic", "Normal"],
		abilities: {0: "Doll Wall", 1: "Minus"},
		baseStats: {hp: 55, atk: 30, def: 40, spa: 75, spd: 50, spe: 50},
	},
	alice: {
		inherit: true,
		types: ["Psychic", "Normal"],
		abilities: {0: "Doll Wall", 1: "Minus"},
		baseStats: {hp: 75, atk: 40, def: 60, spa: 85, spd: 70, spe: 70},
	},
	adventalice: {
		inherit: true,
		types: ["Psychic", "Water"],
		baseStats: {hp: 80, atk: 60, def: 60, spa: 110, spd: 120, spe: 105},
	},
	chibimargatroid: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 55, atk: 40, def: 60, spa: 115, spd: 70, spe: 60},
	},
	margatroid: {
		inherit: true,
		types: ["Psychic", "Dark"],
		baseStats: {hp: 60, atk: 70, def: 90, spa: 145, spd: 90, spe: 80},
	},
	chibililywhite: {
		inherit: true,
		types: ["Bug", "Normal"],
		abilities: {0: "Mana Barrier", 1: "Swarm"},
		baseStats: {hp: 75, atk: 25, def: 70, spa: 35, spd: 65, spe: 30},
	},
	lilywhite: {
		inherit: true,
		types: ["Bug", "Normal"],
		abilities: {0: "Mana Barrier", 1: "Swarm"},
		baseStats: {hp: 95, atk: 35, def: 90, spa: 55, spd: 85, spe: 40},
	},
	chibililyblack: {
		inherit: true,
		types: ["Bug", "Dark"],
		abilities: {0: "Guts", 1: "Swarm"},
		baseStats: {hp: 30, atk: 70, def: 35, spa: 65, spd: 25, spe: 75},
	},
	lilyblack: {
		inherit: true,
		types: ["Bug", "Dark"],
		abilities: {0: "Guts", 1: "Swarm"},
		baseStats: {hp: 40, atk: 90, def: 55, spa: 85, spd: 35, spe: 95},
	},
	chibilunasa: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 50, atk: 35, def: 60, spa: 45, spd: 70, spe: 40},
	},
	lunasa: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 70, atk: 45, def: 80, spa: 55, spd: 90, spe: 60},
	},
	chibilyrica: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 35, atk: 50, def: 40, spa: 55, spd: 45, spe: 75},
	},
	lyrica: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 45, atk: 60, def: 60, spa: 75, spd: 65, spe: 95},
	},
	chibimerlin: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 40, atk: 35, def: 45, spa: 75, spd: 50, spe: 55},
	},
	merlin: {
		inherit: true,
		types: ["Ghost"],
		baseStats: {hp: 50, atk: 45, def: 65, spa: 95, spd: 70, spe: 75},
	},
	layla: {
		inherit: true,
		types: ["Ghost", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 75, spa: 140, spd: 75, spe: 120},
	},
	chibiyoumu: {
		inherit: true,
		types: ["Ghost"],
		abilities: {0: "Inner Focus", 1: "Guard Armor"},
		baseStats: {hp: 35, atk: 80, def: 45, spa: 40, spd: 30, spe: 70},
	},
	youmu: {
		inherit: true,
		types: ["Ghost", "Steel"],
		abilities: {0: "Inner Focus", 1: "Guard Armor"},
		baseStats: {hp: 45, atk: 100, def: 65, spa: 50, spd: 50, spe: 90},
	},
	swordmaster: {
		inherit: true,
		types: ["Ghost", "Electric"],
		abilities: {0: "Shadow Tag", 1: "Steelworker"},
		baseStats: {hp: 70, atk: 110, def: 70, spa: 105, spd: 70, spe: 110},
	},
	youki: {
		inherit: true,
		types: ["Ghost", "Steel"],
		abilities: {0: "Inner Focus", 1: "Guts"},
		baseStats: {hp: 80, atk: 115, def: 150, spa: 50, spd: 65, spe: 80},
	},
	chibiyuyuko: {
		inherit: true,
		types: ["Ghost", "Grass"],
		abilities: {0: "Own Tempo", 1: "Levitate"},
		baseStats: {hp: 80, atk: 40, def: 40, spa: 50, spd: 60, spe: 30},
	},
	yuyuko: {
		inherit: true,
		types: ["Ghost", "Grass"],
		abilities: {0: "Own Tempo", 1: "Levitate"},
		baseStats: {hp: 100, atk: 50, def: 60, spa: 70, spd: 80, spe: 40},
	},
	tinyghost: {
		inherit: true,
		types: ["Ghost", "Ice"],
		abilities: {0: "Snow Warning", 1: "Unwavering"},
		baseStats: {hp: 100, atk: 60, def: 70, spa: 110, spd: 80, spe: 120},
	},
	chibichen: {
		inherit: true,
		types: ["Ground"],
		abilities: {0: "Early Bird", 1: "Run Away"},
		baseStats: {hp: 35, atk: 60, def: 45, spa: 40, spd: 40, spe: 80},
	},
	chen: {
		inherit: true,
		types: ["Ground"],
		abilities: {0: "Early Bird", 1: "Run Away"},
		baseStats: {hp: 45, atk: 80, def: 65, spa: 50, spd: 60, spe: 100},
	},
	adventchen: {
		inherit: true,
		types: ["Ground", "Rock"],
		baseStats: {hp: 90, atk: 90, def: 80, spa: 50, spd: 80, spe: 110},
	},
	chibiran: {
		inherit: true,
		types: ["Ground"],
		abilities: {0: "Flare Boost", 1: "Inner Focus"},
		baseStats: {hp: 40, atk: 50, def: 40, spa: 60, spd: 55, spe: 55},
	},
	ran: {
		inherit: true,
		types: ["Ground", "Psychic"],
		abilities: {0: "Flare Boost", 1: "Inner Focus"},
		baseStats: {hp: 60, atk: 60, def: 50, spa: 80, spd: 75, spe: 75},
	},
	adventran: {
		inherit: true,
		types: ["Ground", "Psychic"],
		baseStats: {hp: 75, atk: 130, def: 60, spa: 90, spd: 80, spe: 115},
	},
	chibiyukari: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Gap"},
		baseStats: {hp: 60, atk: 20, def: 80, spa: 50, spd: 80, spe: 10},
	},
	yukari: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Gap"},
		baseStats: {hp: 80, atk: 30, def: 100, spa: 70, spd: 100, spe: 20},
	},
	adventyukari: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 90, atk: 50, def: 110, spa: 105, spd: 110, spe: 90},
	},
	chibiwriggle: {
		inherit: true,
		types: ["Bug"],
		abilities: {0: "Early Bird", 1: "Swarm"},
		baseStats: {hp: 50, atk: 70, def: 40, spa: 40, spd: 40, spe: 60},
	},
	wriggle: {
		inherit: true,
		types: ["Bug"],
		abilities: {0: "Early Bird", 1: "Swarm"},
		baseStats: {hp: 65, atk: 90, def: 55, spa: 50, spd: 60, spe: 80},
	},
	chibimystia: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Pickup", 1: "Diva"},
		baseStats: {hp: 55, atk: 55, def: 40, spa: 50, spd: 40, spe: 60},
	},
	mystia: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Pickup", 1: "Diva"},
		baseStats: {hp: 65, atk: 75, def: 50, spa: 70, spd: 60, spe: 80},
	},
	adventmystia: {
		inherit: true,
		types: ["Steel", "Flying"],
		baseStats: {hp: 75, atk: 60, def: 80, spa: 110, spd: 90, spe: 85},
	},
	chibikeine: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Own Tempo", 1: "Guard Armor"},
		baseStats: {hp: 35, atk: 50, def: 60, spa: 60, spd: 55, spe: 40},
	},
	keine: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Own Tempo", 1: "Guard Armor"},
		baseStats: {hp: 55, atk: 60, def: 70, spa: 80, spd: 75, spe: 60},
	},
	chibitewi: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Super Luck", 1: "Run Away"},
		baseStats: {hp: 40, atk: 55, def: 30, spa: 45, spd: 50, spe: 80},
	},
	tewi: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Super Luck", 1: "Run Away"},
		baseStats: {hp: 60, atk: 75, def: 40, spa: 65, spd: 60, spe: 100},
	},
	adventtewi: {
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 85, atk: 60, def: 85, spa: 110, spd: 90, spe: 110},
	},
	chibireisen: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Insomnia", 1: "Keen Eye"},
		baseStats: {hp: 35, atk: 30, def: 40, spa: 80, spd: 55, spe: 60},
	},
	reisen: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Insomnia", 1: "Keen Eye"},
		baseStats: {hp: 45, atk: 50, def: 50, spa: 100, spd: 75, spe: 80},
	},
	adventreisen: {
		inherit: true,
		types: ["Psychic", "Electric"],
		baseStats: {hp: 70, atk: 80, def: 50, spa: 120, spd: 80, spe: 135},
	},
	reisenii: {
		inherit: true,
		types: ["Normal", "Psychic"],
		abilities: {0: "Wonder Veil", 1: "Run Away"},
		baseStats: {hp: 75, atk: 65, def: 70, spa: 80, spd: 85, spe: 125},
	},
	chibieirin: {
		inherit: true,
		types: ["Psychic", "Poison"],
		baseStats: {hp: 70, atk: 40, def: 45, spa: 50, spd: 40, spe: 55},
	},
	eirin: {
		inherit: true,
		types: ["Psychic", "Poison"],
		baseStats: {hp: 100, atk: 50, def: 60, spa: 70, spd: 45, spe: 75},
	},
	chibikaguya: {
		inherit: true,
		types: ["Psychic", "Grass"],
		abilities: {0: "Natural Cure", 1: "Water Veil"},
		baseStats: {hp: 95, atk: 20, def: 25, spa: 75, spd: 55, spe: 30},
	},
	kaguya: {
		inherit: true,
		types: ["Psychic", "Grass"],
		abilities: {0: "Natural Cure", 1: "Water Veil"},
		baseStats: {hp: 120, atk: 30, def: 40, spa: 95, spd: 75, spe: 40},
	},
	chibimokou: {
		inherit: true,
		types: ["Fire", "Fighting"],
		abilities: {0: "Natural Cure", 1: "Fire Veil"},
		baseStats: {hp: 45, atk: 80, def: 40, spa: 40, spd: 35, spe: 60},
	},
	mokou: {
		inherit: true,
		types: ["Fire", "Fighting"],
		abilities: {0: "Natural Cure", 1: "Fire Veil"},
		baseStats: {hp: 60, atk: 100, def: 55, spa: 60, spd: 50, spe: 75},
	},
	adventmokou: {
		inherit: true,
		types: ["Fire", "Rock"],
		baseStats: {hp: 70, atk: 115, def: 80, spa: 110, spd: 65, spe: 110},
	},
	chibiaya: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Limber", 1: "Early Bird"},
		baseStats: {hp: 40, atk: 60, def: 45, spa: 25, spd: 35, spe: 95},
	},
	aya: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Limber", 1: "Early Bird"},
		baseStats: {hp: 50, atk: 80, def: 55, spa: 40, spd: 50, spe: 125},
	},
	chibimedicine: {
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 65, atk: 30, def: 55, spa: 50, spd: 55, spe: 45},
	},
	medicine: {
		inherit: true,
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 40, def: 75, spa: 70, spd: 75, spe: 60},
	},
	chibiyuuka: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
		baseStats: {hp: 55, atk: 40, def: 45, spa: 80, spd: 60, spe: 20},
	},
	yuuka: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Overgrow"},
		baseStats: {hp: 65, atk: 50, def: 65, spa: 100, spd: 80, spe: 40},
	},
	chibikomachi: {
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 60, atk: 65, def: 45, spa: 60, spd: 40, spe: 30},
	},
	komachi: {
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 70, atk: 85, def: 65, spa: 80, spd: 60, spe: 40},
	},
	chibieiki: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 45, atk: 20, def: 50, spa: 70, spd: 60, spe: 55},
	},
	eiki: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 65, atk: 30, def: 70, spa: 90, spd: 80, spe: 65},
	},
	chibishizuha: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Limber"},
		baseStats: {hp: 60, atk: 70, def: 30, spa: 70, spd: 40, spe: 30},
	},
	shizuha: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Chlorophyll", 1: "Limber"},
		baseStats: {hp: 80, atk: 90, def: 40, spa: 90, spd: 60, spe: 40},
	},
	chibiminoriko: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Overgrow", 1: "Limber"},
		baseStats: {hp: 60, atk: 30, def: 70, spa: 40, spd: 70, spe: 30},
	},
	minoriko: {
		inherit: true,
		types: ["Grass"],
		abilities: {0: "Overgrow", 1: "Limber"},
		baseStats: {hp: 80, atk: 40, def: 90, spa: 60, spd: 90, spe: 40},
	},
	chibihina: {
		inherit: true,
		types: ["Poison"],
		abilities: {0: "Strange Mist", 1: "Own Tempo"},
		baseStats: {hp: 70, atk: 45, def: 55, spa: 45, spd: 55, spe: 30},
	},
	hina: {
		inherit: true,
		types: ["Poison"],
		abilities: {0: "Strange Mist", 1: "Own Tempo"},
		baseStats: {hp: 90, atk: 55, def: 75, spa: 65, spd: 75, spe: 40},
	},
	chibinitori: {
		inherit: true,
		types: ["Water"],
		abilities: {0: "Swift Swim", 1: "Torrent"},
		baseStats: {hp: 40, atk: 45, def: 50, spa: 60, spd: 55, spe: 50},
	},
	nitori: {
		inherit: true,
		types: ["Water"],
		abilities: {0: "Swift Swim", 1: "Torrent"},
		baseStats: {hp: 50, atk: 65, def: 70, spa: 80, spd: 65, spe: 70},
	},
	chibimomiji: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Guts", 1: "Early Bird"},
		baseStats: {hp: 40, atk: 70, def: 50, spa: 35, spd: 45, spe: 60},
	},
	momiji: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Guts", 1: "Early Bird"},
		baseStats: {hp: 60, atk: 90, def: 70, spa: 45, spd: 55, spe: 80},
	},
	chibikanako: {
		inherit: true,
		types: ["Electric"],
		abilities: {0: "Volt Absorb", 1: "Pressure"},
		baseStats: {hp: 55, atk: 40, def: 60, spa: 55, spd: 60, spe: 30},
	},
	kanako: {
		inherit: true,
		types: ["Electric", "Flying"],
		abilities: {0: "Volt Absorb", 1: "Pressure"},
		baseStats: {hp: 70, atk: 55, def: 75, spa: 70, spd: 75, spe: 55},
	},
	chibisuwako: {
		inherit: true,
		types: ["Water"],
		baseStats: {hp: 50, atk: 50, def: 40, spa: 60, spd: 60, spe: 40},
	},
	suwako: {
		inherit: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 70, atk: 60, def: 50, spa: 80, spd: 80, spe: 60},
	},
	chibikisume: {
		inherit: true,
		types: ["Fire", "Water"],
		baseStats: {hp: 50, atk: 40, def: 80, spa: 40, spd: 60, spe: 30},
	},
	kisume: {
		inherit: true,
		types: ["Fire", "Water"],
		baseStats: {hp: 70, atk: 60, def: 100, spa: 60, spd: 70, spe: 40},
	},
	chibiyamame: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Infectious", 1: "Toxic Boost"},
		baseStats: {hp: 30, atk: 70, def: 55, spa: 35, spd: 50, spe: 60},
	},
	yamame: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Infectious", 1: "Toxic Boost"},
		baseStats: {hp: 50, atk: 90, def: 65, spa: 55, spd: 60, spe: 80},
	},
	chibiparsee: {
		inherit: true,
		types: ["Dark", "Poison"],
		baseStats: {hp: 70, atk: 30, def: 65, spa: 30, spd: 85, spe: 20},
	},
	parsee: {
		inherit: true,
		types: ["Dark", "Poison"],
		baseStats: {hp: 90, atk: 40, def: 85, spa: 40, spd: 105, spe: 40},
	},
	chibiyuugi: {
		inherit: true,
		types: ["Ground", "Fighting"],
		abilities: {0: "Oni Strength", 1: "No Guard"},
		baseStats: {hp: 60, atk: 70, def: 55, spa: 30, spd: 45, spe: 40},
	},
	yuugi: {
		inherit: true,
		types: ["Ground", "Fighting"],
		abilities: {0: "Oni Strength", 1: "No Guard"},
		baseStats: {hp: 80, atk: 90, def: 75, spa: 40, spd: 55, spe: 60},
	},
	chibirin: {
		inherit: true,
		types: ["Fire", "Ghost"],
		abilities: {0: "Limber", 1: "Blaze"},
		baseStats: {hp: 40, atk: 55, def: 40, spa: 55, spd: 50, spe: 60},
	},
	rin: {
		inherit: true,
		types: ["Fire", "Ghost"],
		abilities: {0: "Limber", 1: "Blaze"},
		baseStats: {hp: 50, atk: 75, def: 50, spa: 75, spd: 70, spe: 80},
	},
	zombiefairy: {
		inherit: true,
		types: ["Bug", "Ghost"],
		baseStats: {hp: 1, atk: 75, def: 40, spa: 85, spd: 40, spe: 50},
	},
	chibiutsuho: {
		inherit: true,
		types: ["Fire", "Flying"],
		abilities: {0: "Fire Veil", 1: "Flame Body"},
		baseStats: {hp: 35, atk: 50, def: 30, spa: 80, spd: 35, spe: 70},
	},
	utsuho: {
		inherit: true,
		types: ["Fire", "Flying"],
		abilities: {0: "Fire Veil", 1: "Flame Body"},
		baseStats: {hp: 55, atk: 70, def: 40, spa: 100, spd: 45, spe: 90},
	},
	chibisatori: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 100, atk: 30, def: 50, spa: 30, spd: 50, spe: 40},
	},
	satori: {
		inherit: true,
		types: ["Psychic"],
		baseStats: {hp: 150, atk: 40, def: 60, spa: 40, spd: 60, spe: 50},
	},
	chibikoishi: {
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 45, atk: 55, def: 40, spa: 70, spd: 40, spe: 50},
	},
	koishi: {
		inherit: true,
		types: ["Normal"],
		baseStats: {hp: 65, atk: 65, def: 50, spa: 90, spd: 60, spe: 70},
	},
	chibinazrin: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Pickup"},
		baseStats: {hp: 45, atk: 60, def: 50, spa: 35, spd: 40, spe: 70},
	},
	nazrin: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Early Bird", 1: "Strong Grip"},
		baseStats: {hp: 65, atk: 80, def: 70, spa: 45, spd: 50, spe: 90},
	},
	chibikogasa: {
		inherit: true,
		types: ["Ghost"],
		abilities: {0: "Early Bird", 1: "Water Veil"},
		baseStats: {hp: 40, atk: 50, def: 35, spa: 60, spd: 50, spe: 65},
	},
	kogasa: {
		inherit: true,
		types: ["Ghost"],
		abilities: {0: "Intimidate", 1: "Storm Drain"},
		baseStats: {hp: 50, atk: 70, def: 55, spa: 80, spd: 60, spe: 85},
	},
	chibiichirin: {
		inherit: true,
		types: ["Psychic", "Fighting"],
		abilities: {0: "Nyudo", 1: "Focus"},
		baseStats: {hp: 55, atk: 45, def: 55, spa: 55, spd: 40, spe: 50},
	},
	ichirin: {
		inherit: true,
		types: ["Psychic", "Fighting"],
		abilities: {0: "Nyudo", 1: "Focus"},
		baseStats: {hp: 75, atk: 55, def: 65, spa: 75, spd: 60, spe: 70},
	},
	chibimurasa: {
		inherit: true,
		types: ["Water", "Ghost"],
		abilities: {0: "Swift Swim", 1: "Steelworker"},
		baseStats: {hp: 50, atk: 70, def: 65, spa: 40, spd: 40, spe: 35},
	},
	murasa: {
		inherit: true,
		types: ["Water", "Ghost"],
		abilities: {0: "Swift Swim", 1: "Steelworker"},
		baseStats: {hp: 60, atk: 90, def: 85, spa: 60, spd: 50, spe: 55},
	},
	chibishou: {
		inherit: true,
		types: ["Rock", "Electric"],
		abilities: {0: "Strong Grip", 1: "Static"},
		baseStats: {hp: 35, atk: 70, def: 45, spa: 60, spd: 40, spe: 50},
	},
	shou: {
		inherit: true,
		types: ["Rock", "Electric"],
		abilities: {0: "Strong Grip", 1: "Static"},
		baseStats: {hp: 55, atk: 90, def: 65, spa: 80, spd: 50, spe: 60},
	},
	chibibyakuren: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Wonder Veil", 1: "Inner Focus"},
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
	},
	byakuren: {
		inherit: true,
		types: ["Psychic", "Faith"],
		abilities: {0: "Wonder Veil", 1: "Inner Focus"},
		baseStats: {hp: 80, atk: 60, def: 60, spa: 60, spd: 60, spe: 80},
	},
	chibinue: {
		inherit: true,
		types: ["Poison", "Flying"],
		abilities: {0: "Mysterious"},
		baseStats: {hp: 40, atk: 60, def: 35, spa: 60, spd: 35, spe: 70},
	},
	nue: {
		inherit: true,
		types: ["Poison", "Flying"],
		abilities: {0: "Mysterious"},
		baseStats: {hp: 50, atk: 80, def: 45, spa: 80, spd: 55, spe: 90},
	},
	chibikyouko: {
		inherit: true,
		types: ["Normal", "Rock"],
		abilities: {0: "Early Bird", 1: "Soundproof"},
		baseStats: {hp: 50, atk: 30, def: 45, spa: 50, spd: 75, spe: 50},
	},
	kyouko: {
		inherit: true,
		types: ["Normal", "Rock"],
		abilities: {0: "Early Bird", 1: "Soundproof"},
		baseStats: {hp: 70, atk: 40, def: 65, spa: 70, spd: 95, spe: 60},
	},
	chibiyoshika: {
		inherit: true,
		types: ["Poison"],
		abilities: {0: "Gate Keeper", 1: "Own Tempo"},
		baseStats: {hp: 70, atk: 45, def: 55, spa: 45, spd: 55, spe: 30},
	},
	yoshika: {
		inherit: true,
		types: ["Poison"],
		abilities: {0: "Gate Keeper", 1: "Own Tempo"},
		baseStats: {hp: 90, atk: 55, def: 75, spa: 65, spd: 75, spe: 40},
	},
	chibiseiga: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Inner Focus", 1: "Levitate"},
		baseStats: {hp: 50, atk: 40, def: 40, spa: 65, spd: 50, spe: 55},
	},
	seiga: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Inner Focus", 1: "Levitate"},
		baseStats: {hp: 70, atk: 50, def: 50, spa: 85, spd: 70, spe: 75},
	},
	chibitojiko: {
		inherit: true,
		types: ["Ghost", "Electric"],
		abilities: {0: "Static", 1: "Volt Absorb"},
		baseStats: {hp: 50, atk: 40, def: 55, spa: 55, spd: 30, spe: 70},
	},
	tojiko: {
		inherit: true,
		types: ["Ghost", "Electric"],
		abilities: {0: "Static", 1: "Volt Absorb"},
		baseStats: {hp: 70, atk: 50, def: 65, spa: 75, spd: 50, spe: 90},
	},
	chibifuto: {
		inherit: true,
		types: ["Fire", "Water"],
		abilities: {0: "Oblivious", 1: "Torrent"},
		baseStats: {hp: 45, atk: 40, def: 40, spa: 70, spd: 45, spe: 60},
	},
	futo: {
		inherit: true,
		types: ["Fire", "Water"],
		abilities: {0: "Oblivious", 1: "Torrent"},
		baseStats: {hp: 65, atk: 60, def: 50, spa: 90, spd: 55, spe: 80},
	},
	chibimiko: {
		inherit: true,
		types: ["Faith"],
		abilities: {0: "Own Tempo", 1: "Soundproof"},
		baseStats: {hp: 45, atk: 70, def: 40, spa: 50, spd: 35, spe: 60},
	},
	miko: {
		inherit: true,
		types: ["Faith"],
		abilities: {0: "Own Tempo", 1: "Soundproof"},
		baseStats: {hp: 65, atk: 90, def: 55, spa: 60, spd: 55, spe: 75},
	},
	chibimamizou: {
		inherit: true,
		types: ["Ground", "Grass"],
		abilities: {0: "Natural Cure", 1: "Keen Eye"},
		baseStats: {hp: 50, atk: 35, def: 40, spa: 55, spd: 70, spe: 50},
	},
	mamizou: {
		inherit: true,
		types: ["Ground", "Grass"],
		abilities: {0: "Natural Cure", 1: "Keen Eye"},
		baseStats: {hp: 70, atk: 45, def: 50, spa: 75, spd: 90, spe: 70},
	},
	chibihakurei: {
		inherit: true,
		types: ["Faith"],
		baseStats: {hp: 55, atk: 80, def: 60, spa: 85, spd: 60, spe: 60},
	},
	hakurei: {
		inherit: true,
		types: ["Faith"],
		baseStats: {hp: 75, atk: 120, def: 70, spa: 120, spd: 70, spe: 80},
	},
	chibikirisame: {
		inherit: true,
		types: ["Psychic", "Electric"],
		abilities: {0: "Vital Spirit"},
		baseStats: {hp: 50, atk: 60, def: 60, spa: 80, spd: 75, spe: 75},
	},
	kirisame: {
		inherit: true,
		types: ["Psychic", "Electric"],
		abilities: {0: "Vital Spirit"},
		baseStats: {hp: 60, atk: 80, def: 65, spa: 145, spd: 95, spe: 90},
	},
	mima: {
		inherit: true,
		types: ["Ghost", "Dark"],
		abilities: {0: "Super Luck", 1: "Pressure"},
		baseStats: {hp: 85, atk: 90, def: 95, spa: 150, spd: 95, spe: 75},
	},
	konngara: {
		inherit: true,
		types: ["Ghost", "Fighting"],
		abilities: {0: "Steelworker", 1: "Pressure"},
		baseStats: {hp: 95, atk: 140, def: 110, spa: 60, spd: 90, spe: 85},
	},
	yuugenmagan: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Shadow Tag", 1: "Pressure"},
		baseStats: {hp: 110, atk: 80, def: 100, spa: 120, spd: 110, spe: 60},
	},
	kikuri: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", 1: "Pressure"},
		baseStats: {hp: 125, atk: 40, def: 125, spa: 100, spd: 140, spe: 50},
	},
	elis: {
		inherit: true,
		types: ["Poison", "Electric"],
		abilities: {0: "Levitate", 1: "Pressure"},
		baseStats: {hp: 80, atk: 75, def: 90, spa: 125, spd: 95, spe: 115},
	},
	sariel: {
		inherit: true,
		types: ["Faith", "Flying"],
		abilities: {0: "Mana Barrier", 1: "Pressure"},
		baseStats: {hp: 95, atk: 75, def: 85, spa: 130, spd: 110, spe: 85},
	},
	genji: {
		inherit: true,
		types: ["Rock", "Flying"],
		abilities: {0: "Sturdy"},
		baseStats: {hp: 100, atk: 85, def: 220, spa: 30, spd: 50, spe: 50},
	},
	chibirika: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Sturdy", 1: "Limber"},
		baseStats: {hp: 60, atk: 40, def: 50, spa: 80, spd: 30, spe: 40},
	},
	rika: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Sturdy", 1: "Limber"},
		baseStats: {hp: 80, atk: 50, def: 70, spa: 100, spd: 50, spe: 50},
	},
	chibimeira: {
		inherit: true,
		types: ["Steel"],
		baseStats: {hp: 35, atk: 80, def: 40, spa: 35, spd: 35, spe: 75},
	},
	meira: {
		inherit: true,
		types: ["Steel"],
		baseStats: {hp: 55, atk: 100, def: 60, spa: 45, spd: 45, spe: 95},
	},
	magicstones: {
		inherit: true,
		types: ["Psychic", "Rock"],
		baseStats: {hp: 140, atk: 30, def: 100, spa: 120, spd: 100, spe: 30},
	},
	chibiellen: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Synchronize", 1: "Trace"},
		baseStats: {hp: 60, atk: 40, def: 40, spa: 60, spd: 50, spe: 50},
	},
	ellen: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Synchronize", 1: "Trace"},
		baseStats: {hp: 80, atk: 40, def: 45, spa: 90, spd: 75, spe: 70},
	},
	chibikotohime: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Own Tempo"},
		baseStats: {hp: 80, atk: 40, def: 60, spa: 30, spd: 60, spe: 30},
	},
	kotohime: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Own Tempo"},
		baseStats: {hp: 100, atk: 60, def: 80, spa: 40, spd: 80, spe: 40},
	},
	chibikana: {
		inherit: true,
		types: ["Ghost"],
		abilities: {0: "Soundproof"},
		baseStats: {hp: 65, atk: 45, def: 50, spa: 45, spd: 50, spe: 45},
	},
	kana: {
		inherit: true,
		types: ["Ghost"],
		abilities: {0: "Soundproof"},
		baseStats: {hp: 75, atk: 60, def: 70, spa: 65, spd: 70, spe: 60},
	},
	chibirikako: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Insomnia"},
		baseStats: {hp: 30, atk: 25, def: 30, spa: 90, spd: 45, spe: 80},
	},
	rikako: {
		inherit: true,
		types: ["Fire", "Psychic"],
		abilities: {0: "Insomnia"},
		baseStats: {hp: 40, atk: 30, def: 40, spa: 120, spd: 55, spe: 115},
	},
	chibichiyuri: {
		inherit: true,
		types: ["Water", "Electric"],
		abilities: {0: "Volt Absorb", 1: "Water Absorb"},
		baseStats: {hp: 45, atk: 40, def: 40, spa: 70, spd: 50, spe: 55},
	},
	chiyuri: {
		inherit: true,
		types: ["Water", "Electric"],
		abilities: {0: "Volt Absorb", 1: "Water Absorb"},
		baseStats: {hp: 55, atk: 60, def: 50, spa: 90, spd: 70, spe: 75},
	},
	chibiyumemi: {
		inherit: true,
		types: ["Psychic", "Ice"],
		abilities: {0: "Flash Fire", 1: "Mana Barrier"},
		baseStats: {hp: 40, atk: 40, def: 45, spa: 70, spd: 55, spe: 50},
	},
	yumemi: {
		inherit: true,
		types: ["Psychic", "Ice"],
		abilities: {0: "Flash Fire", 1: "Mana Barrier"},
		baseStats: {hp: 60, atk: 50, def: 65, spa: 90, spd: 75, spe: 60},
	},
	ruukoto: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Own Tempo", 1: "Regenerator"},
		baseStats: {hp: 100, atk: 65, def: 110, spa: 50, spd: 100, spe: 75},
	},
	mimichan: {
		inherit: true,
		types: ["Fire", "Flying"],
		baseStats: {hp: 50, atk: 150, def: 30, spa: 100, spd: 30, spe: 140},
	},
	chibiorange: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Pure Power"},
		baseStats: {hp: 150, atk: 10, def: 40, spa: 40, spd: 10, spe: 50},
	},
	orange: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Pure Power"},
		baseStats: {hp: 200, atk: 20, def: 50, spa: 55, spd: 15, spe: 60},
	},
	chibikurumi: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Gate Keeper", 1: "Guard Armor"},
		baseStats: {hp: 40, atk: 50, def: 45, spa: 60, spd: 55, spe: 50},
	},
	kurumi: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Gate Keeper", 1: "Guard Armor"},
		baseStats: {hp: 60, atk: 50, def: 55, spa: 90, spd: 75, spe: 70},
	},
	chibielly: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "No Guard", 1: "Gate Keeper"},
		baseStats: {hp: 55, atk: 55, def: 45, spa: 40, spd: 45, spe: 60},
	},
	elly: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "No Guard", 1: "Gate Keeper"},
		baseStats: {hp: 65, atk: 90, def: 60, spa: 45, spd: 60, spe: 80},
	},
	chibimugetsu: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Limber", 1: "Pressure"},
		baseStats: {hp: 70, atk: 30, def: 65, spa: 30, spd: 65, spe: 40},
	},
	mugetsu: {
		inherit: true,
		types: ["Dark"],
		abilities: {0: "Limber", 1: "Pressure"},
		baseStats: {hp: 80, atk: 50, def: 85, spa: 50, spd: 85, spe: 50},
	},
	chibigengetsu: {
		inherit: true,
		types: ["Dark", "Flying"],
		abilities: {0: "Immunity", 1: "Pressure"},
		baseStats: {hp: 40, atk: 45, def: 50, spa: 70, spd: 30, spe: 65},
	},
	gengetsu: {
		inherit: true,
		types: ["Dark", "Flying"],
		abilities: {0: "Immunity", 1: "Pressure"},
		baseStats: {hp: 50, atk: 65, def: 70, spa: 85, spd: 50, spe: 80},
	},
	chibisara: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "Inner Power"},
		baseStats: {hp: 70, atk: 60, def: 50, spa: 30, spd: 50, spe: 40},
	},
	sara: {
		inherit: true,
		types: ["Fighting"],
		abilities: {0: "Guts", 1: "Inner Power"},
		baseStats: {hp: 80, atk: 90, def: 65, spa: 40, spd: 65, spe: 60},
	},
	chibilouise: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Own Tempo", 1: "Immunity"},
		baseStats: {hp: 50, atk: 40, def: 60, spa: 65, spd: 35, spe: 50},
	},
	louise: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Own Tempo", 1: "Immunity"},
		baseStats: {hp: 70, atk: 50, def: 75, spa: 80, spd: 55, spe: 70},
	},
	chibiyuki: {
		inherit: true,
		types: ["Fire"],
		abilities: {0: "Fire Veil", 1: "Blaze"},
		baseStats: {hp: 40, atk: 30, def: 50, spa: 65, spd: 55, spe: 60},
	},
	yuki: {
		inherit: true,
		types: ["Fire"],
		abilities: {0: "Fire Veil", 1: "Blaze"},
		baseStats: {hp: 60, atk: 40, def: 70, spa: 85, spd: 75, spe: 70},
	},
	chibimai: {
		inherit: true,
		types: ["Ice"],
		abilities: {0: "Water Veil", 1: "Cold Heart"},
		baseStats: {hp: 40, atk: 55, def: 30, spa: 70, spd: 45, spe: 60},
	},
	mai: {
		inherit: true,
		types: ["Ice"],
		abilities: {0: "Water Veil", 1: "Cold Heart"},
		baseStats: {hp: 50, atk: 75, def: 40, spa: 90, spd: 65, spe: 80},
	},
	chibiyumeko: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Sturdy", 1: "Focus"},
		baseStats: {hp: 55, atk: 65, def: 60, spa: 30, spd: 50, spe: 40},
	},
	yumeko: {
		inherit: true,
		types: ["Steel"],
		abilities: {0: "Sturdy", 1: "Focus"},
		baseStats: {hp: 75, atk: 85, def: 80, spa: 40, spd: 60, spe: 60},
	},
	chibishinki: {
		inherit: true,
		types: ["Dark", "Faith"],
		abilities: {0: "Synchronize", 1: "Pressure"},
		baseStats: {hp: 60, atk: 30, def: 55, spa: 70, spd: 55, spe: 30},
	},
	shinki: {
		inherit: true,
		types: ["Dark", "Faith"],
		abilities: {0: "Synchronize", 1: "Pressure"},
		baseStats: {hp: 80, atk: 50, def: 70, spa: 80, spd: 70, spe: 50},
	},
	chibisuika: {
		inherit: true,
		types: ["Rock", "Fighting"],
		abilities: {0: "Oni Strength", 1: "Toxic Boost"},
		baseStats: {hp: 70, atk: 80, def: 60, spa: 20, spd: 40, spe: 30},
	},
	suika: {
		inherit: true,
		types: ["Rock", "Fighting"],
		abilities: {0: "Oni Strength", 1: "Toxic Boost"},
		baseStats: {hp: 80, atk: 100, def: 80, spa: 40, spd: 60, spe: 40},
	},
	chibiiku: {
		inherit: true,
		types: ["Electric"],
		abilities: {0: "Volt Absorb", 1: "Static"},
		baseStats: {hp: 45, atk: 50, def: 50, spa: 70, spd: 55, spe: 30},
	},
	iku: {
		inherit: true,
		types: ["Electric"],
		abilities: {0: "Volt Absorb", 1: "Static"},
		baseStats: {hp: 65, atk: 60, def: 60, spa: 90, spd: 65, spe: 60},
	},
	chibitenshi: {
		inherit: true,
		types: ["Ground", "Rock"],
		abilities: {0: "Hisouten", 1: "Super Luck"},
		baseStats: {hp: 55, atk: 60, def: 65, spa: 50, spd: 40, spe: 30},
	},
	tenshi: {
		inherit: true,
		types: ["Ground", "Rock"],
		abilities: {0: "Hisouten", 1: "Super Luck"},
		baseStats: {hp: 75, atk: 80, def: 85, spa: 70, spd: 50, spe: 40},
	},
	tensoku: {
		inherit: true,
		types: ["Fire", "Steel"],
		abilities: {0: "Drought", 1: "Flame Absorb"},
		baseStats: {hp: 100, atk: 140, def: 110, spa: 80, spd: 80, spe: 70},
	},
	namazu: {
		inherit: true,
		types: ["Water", "Ground"],
		abilities: {0: "Water Absorb", 1: "Rain Dish"},
		baseStats: {hp: 120, atk: 90, def: 80, spa: 90, spd: 70, spe: 50},
	},
	chibihatate: {
		inherit: true,
		types: ["Psychic", "Flying"],
		abilities: {0: "Trace", 1: "Oblivious"},
		baseStats: {hp: 40, atk: 50, def: 35, spa: 70, spd: 45, spe: 60},
	},
	hatate: {
		inherit: true,
		types: ["Psychic", "Flying"],
		abilities: {0: "Trace", 1: "Oblivious"},
		baseStats: {hp: 60, atk: 60, def: 45, spa: 90, spd: 65, spe: 80},
	},
	chibisunnymilk: {
		inherit: true,
		types: ["Fire"],
		abilities: {0: "Vital Spirit", 1: "Run Away"},
		baseStats: {hp: 50, atk: 40, def: 40, spa: 60, spd: 50, spe: 60},
	},
	sunnymilk: {
		inherit: true,
		types: ["Fire", "Grass"],
		abilities: {0: "Vital Spirit", 1: "Run Away"},
		baseStats: {hp: 70, atk: 50, def: 60, spa: 80, spd: 60, spe: 80},
	},
	chibilunachild: {
		inherit: true,
		types: ["Electric"],
		abilities: {0: "Soundproof", 1: "Pickup"},
		baseStats: {hp: 45, atk: 60, def: 30, spa: 60, spd: 30, spe: 75},
	},
	lunachild: {
		inherit: true,
		types: ["Electric", "Grass"],
		abilities: {0: "Soundproof", 1: "Pickup"},
		baseStats: {hp: 60, atk: 80, def: 45, spa: 80, spd: 45, spe: 90},
	},
	chibistarsapphire: {
		inherit: true,
		types: ["Water"],
		abilities: {0: "Water Veil", 1: "Keen Eye"},
		baseStats: {hp: 60, atk: 70, def: 40, spa: 40, spd: 40, spe: 50},
	},
	starsapphire: {
		inherit: true,
		types: ["Water", "Grass"],
		abilities: {0: "Water Veil", 1: "Keen Eye"},
		baseStats: {hp: 75, atk: 90, def: 60, spa: 45, spd: 60, spe: 70},
	},
	akyuu: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Trace", 1: "Focus"},
		baseStats: {hp: 45, atk: 20, def: 40, spa: 20, spd: 95, spe: 80},
	},
	yorihime: {
		inherit: true,
		types: ["Faith", "Steel"],
		abilities: {0: "No Guard", 1: "Trace"},
		baseStats: {hp: 85, atk: 130, def: 70, spa: 100, spd: 75, spe: 120},
	},
	toyohime: {
		inherit: true,
		types: ["Psychic", "Water"],
		abilities: {0: "Regenerator", 1: "Serene Grace"},
		baseStats: {hp: 100, atk: 70, def: 90, spa: 130, spd: 115, spe: 75},
	},
	chibikasen: {
		inherit: true,
		types: ["Ground", "Faith"],
		abilities: {0: "Sand Veil", 1: "Oni Strength"},
		baseStats: {hp: 50, atk: 75, def: 45, spa: 30, spd: 45, spe: 55},
	},
	kasen: {
		inherit: true,
		types: ["Ground", "Faith"],
		abilities: {0: "Sand Veil", 1: "Oni Strength"},
		baseStats: {hp: 75, atk: 85, def: 60, spa: 50, spd: 60, spe: 70},
	},
	rinnosuke: {
		inherit: true,
		types: ["Normal", "Fighting"],
		abilities: {0: "Steelworker", 1: "Oblivious"},
		baseStats: {hp: 90, atk: 110, def: 80, spa: 60, spd: 70, spe: 90},
	},
	chibitokiko: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Limber"},
		baseStats: {hp: 45, atk: 60, def: 55, spa: 40, spd: 50, spe: 50},
	},
	tokiko: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Keen Eye", 1: "Limber"},
		baseStats: {hp: 65, atk: 80, def: 75, spa: 50, spd: 60, spe: 70},
	},
	sendai: {
		inherit: true,
		types: ["Faith", "Fighting"],
		abilities: {0: "Hakurei Miko", 1: "Inner Power"},
		baseStats: {hp: 80, atk: 100, def: 60, spa: 40, spd: 65, spe: 55},
	},
	kedama: {
		inherit: true,
		types: ["Normal"],
		abilities: {0: "Levitate"},
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
	},
	tori: {
		inherit: true,
		types: ["Normal", "Flying"],
		abilities: {0: "Early Bird", 1: "Oblivious"},
		baseStats: {hp: 80, atk: 105, def: 70, spa: 50, spd: 75, spe: 120},
	},
	jksanae: {
		inherit: true,
		types: ["Water", "Electric"],
		abilities: {0: "Drizzle", 1: "Torrent"},
		baseStats: {hp: 85, atk: 80, def: 65, spa: 100, spd: 75, spe: 130},
	},
	tenma: {
		inherit: true,
		types: ["Ground", "Flying"],
		abilities: {0: "Fascinate", 1: "Sand Veil"},
		baseStats: {hp: 90, atk: 70, def: 70, spa: 125, spd: 90, spe: 90},
	},
};