export const Items: {[k: string]: ModdedItemData} = {
	icyball: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Cirno'){
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Cirno'){
				return this.chainModify(2);
			}
		},
		itemUser: ["Cirno"],
	},
	souldew: {
		inherit: true,
		onBasePowerPriority: null,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Toyohime' || pokemon.baseSpecies.baseSpecies === 'Yorihime'){
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Toyohime' || pokemon.baseSpecies.baseSpecies === 'Yorihime'){
				return this.chainModify(1.5);
			}
		},
		itemUser: ["Toyohime", "Yorihime"],
	},
	elderpain: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	psychowand: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	vintotie: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	doublesoul: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bigcloud: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	darkribbon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powerribbon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	staminaribbon: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	chinesedress: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	kimono: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	airlineuniform: {
		inherit: true,
		isNonstandard: "Unobtainable",
		gen: 4,
	},
	bunnycostume: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	nurseuniform: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	maiduniform: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mistressoutfit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	sportssweater: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	gothicoutfit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	swimsuit: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	ninjacostume: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	camouflage: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	thickfur: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	witchcostume: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	blazer: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	weddingdress: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	powerherb: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	widelens: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	flameorb: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	toxicorb: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	choicespecs: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	choicescarf: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	lightclay: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	blackbelt: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	blackglasses: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	charcoal: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	dragonfang: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	hardstone: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	magnet: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Electric') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	metalcoat: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	miracleseed: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	mysticwater: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	nevermeltice: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	poisonbarb: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Poison') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	sharpbeak: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	silkscarf: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Normal') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	silverpowder: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Bug') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	softsand: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	spelltag: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ghost') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
	twistedspoon: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
	},
};
