export const Items: {[k: string]: ModdedItemData} = {
	aguavberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.",
	},
	figyberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Atk Nature. Single use.",
	},
	iapapaberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Def Nature. Single use.",
	},
	magoberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.",
	},
	shellbell: {
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 5, pokemon);
			}
		},
		desc: "After an attack, holder gains 20% of the damage in HP dealt to other Pokemon.",
	},
	sitrusberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(30);
		},
		desc: "gfhfghdsfvcbvcbvcgfdgh.",
	},
	starfberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		desc: "Raises a random stat by 2 when at 1/2 max HP or less.",
	},
	wikiberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -SpA Nature. Single use.",
	},
	cursedtag: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	scarletrock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	parasol: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	iceburngem: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lunarvest: {
		inherit: true,
		isNonstandard: "Unobtainable",
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

	//aguavberry: null,
	//apicotberry: null,
	armorfossil: null,
	//aspearberry: null,
	belueberry: null,
	//berryjuice: null,
	//blackbelt: null,
	//blackglasses: null,
	blukberry: null,
	//brightpowder: null,
	//charcoal: null,
	//cheriberry: null,
	//chestoberry: null,
	//choiceband: null,
	//choicescarf: null,
	//choicespecs: null,
	clawfossil: null,
	colburberry: null,
	cornnberry: null,
	deepseascale: null,
	deepseatooth: null,
	diveball: null,
	domefossil: null,
	dragonscale: null,
	durinberry: null,
	//enigmaberry: null,
	fastball: null,
	//figyberry: null,
	firestone: null,
	//flameorb: null,
	//focusband: null,
	friendball: null,
	//ganlonberry: null,
	greatball: null,
	grepaberry: null,
	//hardstone: null,
	heavyball: null,
	helixfossil: null,
	hondewberry: null,
	//iapapaberry: null,
	kelpsyberry: null,
	//kingsrock: null,
	//lansatberry: null,
	laxincense: null,
	leek: null,
	//leftovers: null,
	//leppaberry: null,
	levelball: null,
	//liechiberry: null,
	lightball: null,
	//lightclay: null,
	luckypunch: null,
	//lumberry: null,
	lureball: null,
	luxuryball: null,
	//machobrace: null,
	//magnet: null,
	//magoberry: null,
	magostberry: null,
	//mail: null,
	masterball: null,
	//mentalherb: null,
	//metalcoat: null,
	metalpowder: null,
	//miracleseed: null,
	moonball: null,
	moonstone: null,
	//mysticwater: null,
	nanabberry: null,
	nestball: null,
	netball: null,
	//nevermeltice: null,
	nomelberry: null,
	oldamber: null,
	//oranberry: null,
	pamtreberry: null,
	//pechaberry: null,
	//persimberry: null,
	//petayaberry: null,
	pinapberry: null,
	//poisonbarb: null,
	pokeball: null,
	pomegberry: null,
	premierball: null,
	qualotberry: null,
	//quickclaw: null,
	rabutaberry: null,
	//rawstberry: null,
	razzberry: null,
	repeatball: null,
	rootfossil: null,
	safariball: null,
	//salacberry: null,
	//scopelens: null,
	//sharpbeak: null,
	//shellbell: null,
	//silkscarf: null,
	//silverpowder: null,
	//sitrusberry: null,
	//softsand: null,
	//souldew: null,
	//spelltag: null,
	spelonberry: null,
	sportball: null,
	//starfberry: null,
	stick: null,
	sunstone: null,
	tamatoberry: null,
	thickclub: null,
	thunderstone: null,
	timerball: null,
	//twistedspoon: null,
	ultraball: null,
	upgrade: null,
	waterstone: null,
	watmelberry: null,
	wepearberry: null,
	//whiteherb: null,
	//wikiberry: null,
};
