export const Items: {[itemid: string]: ModdedItemData} = {
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
		desc: "Doubles regular Cirno's offensive stats.",
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
		desc: "Increases Toyohime and Yorihime's offensive stats by 1.5x.",
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
		desc: "Holder's Fighting-type attacks have 1.2x power.",
	},
	blackglasses: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Dark-type attacks have 1.2x power.",
	},
	charcoal: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		shortDesc: "Holder's Fire-type attacks have 1.2x power.",
	},
	hardstone: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Rock-type attacks have 1.2x power.",
	},
	magnet: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Electric') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Electric-type attacks have 1.2x power.",
	},
	metalcoat: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Steel') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Steel-type attacks have 1.2x power.",
		shortDesc: "Holder's Steel-type attacks have 1.2x power.",
	},
	miracleseed: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Grass') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Grass-type attacks have 1.2x power.",
	},
	mysticwater: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Water-type attacks have 1.2x power.",
	},
	nevermeltice: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ice') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Ice-type attacks have 1.2x power.",
	},
	poisonbarb: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Poison') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Poison-type attacks have 1.2x power.",
	},
	sharpbeak: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Flying-type attacks have 1.2x power.",
	},
	silkscarf: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Normal') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Normal-type attacks have 1.2x power.",
	},
	silverpowder: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Bug') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Bug-type attacks have 1.2x power.",
	},
	softsand: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Ground-type attacks have 1.2x power.",
	},
	spelltag: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Ghost') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Ghost-type attacks have 1.2x power.",
	},
	twistedspoon: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Psychic') {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyAtk() {},
		desc: "Holder's Psychic-type attacks have 1.2x power.",
	},
	


	aguavberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.",
	},
	figyberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Atk Nature. Single use.",
	},
	iapapaberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Def Nature. Single use.",
	},
	magoberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.",
	},
	wikiberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -SpA Nature. Single use.",
	},

	dragonfang: null,
	berserkgene: null,
	berry: null,
	bitterberry: null,
	burntberry: null,
	goldberry: null,
	iceberry: null,
	mintberry: null,
	miracleberry: null,
	mysteryberry: null,
	pinkbow: null,
	polkadotbow: null,
	przcureberry: null,
	psncureberry: null,
	doublesoul: null,
	bigcloud: null,
	darkribbon: null,
	powerribbon: null,
	staminaribbon: null,
	chinesedress: null,
	//kimono: null,
	//airlineuniform: null,
	//bunnycostume: null,
	//nurseuniform: null,
	//maiduniform: null,
	//mistressoutfit: null,
	//sportssweater: null,
	//gothicoutfit: null,
	//swimsuit: null,
	//ninjacostume: null,
	//camouflage: null,
	//thickfur: null,
	//witchcostume: null,
	//blazer: null,
	//weddingdress: null,
};
