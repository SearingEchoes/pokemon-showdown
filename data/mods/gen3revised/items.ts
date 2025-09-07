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
		rating: 3,
	},
	expertribbon: {
		name: "Expert Ribbon",
		spritenum: 811,
		fling: {
			basePower: 10,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([4915, 4096]);
			}
		},
		desc: "Holder's attacks that are super effective against the target do 1.2x damage.",
		gen: 3,
		rating: 3,
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
	sitrusberry: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onTryEatItem(item, pokemon) {
			if (!this.runEvent('TryHeal', pokemon)) return false;
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 4);
		},
		desc: "Restores 25% max HP at 1/2 max HP or less.",
		rating: 3,
	},
	choiceband: {
		inherit: true,
		rating: 3,
	},
	choicespecs: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
		rating: 3,
	},
	choicescarf: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
		rating: 3,
	},
	lightclay: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	leftovers: {
		inherit: true,
		rating: 3,
	},
	salacberry: {
		inherit: true,
		rating: 3,
	},
	scarletrock: {
		inherit: true,
		rating: 3,
	},
	lumberry: {
		inherit: true,
		rating: 3,
	},
	blackbelt: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Fighting') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Fighting') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Fighting-type attacks deal 1.2x damage.",
	},
	blackglasses: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Dark') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Dark') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Dark-type attacks deal 1.2x damage.",
	},
	charcoal: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Fire') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Fire') {
				return this.chainModify(1.2);
			}
		},
		shortDesc: "Holder's Fire-type attacks deal 1.2x damage.",
	},
	hardstone: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Rock') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Rock') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Rock-type attacks deal 1.2x damage.",
	},
	magnet: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Electric') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Electric') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Electric-type attacks deal 1.2x damage.",
	},
	metalcoat: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Steel') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Steel') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Steel-type attacks deal 1.2x damage.",
		shortDesc: "Holder's Steel-type attacks deal 1.2x damage.",
	},
	miracleseed: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Grass') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Grass') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Grass-type attacks deal 1.2x damage.",
	},
	mysticwater: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Water') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Water') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Water-type attacks deal 1.2x damage.",
	},
	nevermeltice: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Ice') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Ice') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Ice-type attacks deal 1.2x damage.",
	},
	poisonbarb: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Poison') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Poison') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Poison-type attacks deal 1.2x damage.",
	},
	sharpbeak: {
		inherit: true,
		onBasePower() {},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Flying') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Flying') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Flying-type attacks deal 1.2x damage.",
	},
	silkscarf: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Normal') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Normal') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Normal-type attacks deal 1.2x damage.",
	},
	silverpowder: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Bug') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Bug') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Bug-type attacks deal 1.2x damage.",
	},
	softsand: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Ground') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Ground') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Ground-type attacks deal 1.2x damage.",
	},
	spelltag: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Ghost') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Ghost') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Ghost-type attacks deal 1.2x damage.",
	},
	twistedspoon: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Psychic') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Psychic') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Psychic-type attacks deal 1.2x damage.",
	},
	priestgarb: {
		inherit: true,
		onModifyAtkPriority: 1,
		onModifyAtk(atk, user, target, move) {
			if (move?.type === 'Faith') {
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, user, target, move) {
			if (move?.type === 'Faith') {
				return this.chainModify(1.2);
			}
		},
		desc: "Holder's Faith-type attacks deal 1.2x damage.",
	},
	luckypunch: {
		inherit: true,
		onModifyCritRatio(critRatio, user) {
			if (user.baseSpecies.name === 'Chibi Orange' || user.baseSpecies.name === 'Orange' || user.baseSpecies.name === 'EX Orange') {
				return critRatio + 2;
			}
		},
		itemUser: ["Chibi Orange", "Orange", "EX Orange"],
		desc: "If held by Orange(any form), critical hit ratio is raised by 2 stages.",
	},
	
	kusanagi: {
		inherit: true,
		fling: {
			basePower: 90,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.name === 'Rinnosuke') {
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.name === 'Kosuzu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Rinnosuke, Kosuzu"],
		desc: "If held by Rinnosuke, doubles Atk. If held by Kosuzu, doubles SpAtk."
	},
	yatamirror: {
		inherit: true,
		fling: {
			basePower: 90,
		},
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.name === 'Rinnosuke') {
				return this.chainModify(2);
			}
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.name === 'Kosuzu') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Rinnosuke, Kosuzu"],
		desc: "If held by Rinnosuke, doubles Def. If held by Kosuzu, doubles SpDef."
	},


	aguavberry: {
		inherit: true,
		rating: 1,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.",
	},
	figyberry: {
		inherit: true,
		rating: 1,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Atk Nature. Single use.",
	},
	iapapaberry: {
		inherit: true,
		rating: 1,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Def Nature. Single use.",
	},
	magoberry: {
		inherit: true,
		rating: 1,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.",
	},
	wikiberry: {
		inherit: true,
		rating: 1,
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

	adamantorb: null,
	//aguavberry: null,
	//apicotberry: null,
	armorfossil: null,
	//aspearberry: null,
	babiriberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	belueberry: null,
	//berryjuice: null,
	bigroot: null,
	//blackbelt: null,
	//blackglasses: null,
	blacksludge: null,
	blukberry: null,
	//brightpowder: null,
	//charcoal: null,
	chartiberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	cheriberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	cherishball: null,
	//chestoberry: null,
	chilanberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	//choiceband: null,
	//choicescarf: null,
	//choicespecs: null,
	chopleberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	clawfossil: null,
	cobaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	colburberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	cornnberry: null,
	custapberry: null,
	damprock: null,
	dawnstone: null,
	deepseascale: null,
	deepseatooth: null,
	destinyknot: null,
	diveball: null,
	domefossil: null,
	dracoplate: null,
	dragonscale: null,
	dreadplate: null,
	dubiousdisc: null,
	durinberry: null,
	duskball: null,
	duskstone: null,
	earthplate: null,
	electirizer: null,
	//enigmaberry: null,
	expertbelt: null,
	fastball: null,
	//figyberry: null,
	firestone: null,
	fistplate: null,
	//flameorb: null,
	flameplate: null,
	//focusband: null,
	focussash: null,
	friendball: null,
	fullincense: null,
	//ganlonberry: null,
	greatball: null,
	grepaberry: null,
	gripclaw: null,
	griseousorb: null,
	habanberry: {
		inherit: true,
		isNonstandard: null,
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Faith' && target.getMoveHitData(move).typeMod > 0) {
				const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
				if (hitSub) return;

				if (target.eatItem()) {
					this.debug('-50% reduction');
					this.add('-enditem', target, this.effect, '[weaken]');
					return this.chainModify(0.5);
				}
			}
		},
		gen: 3,
		desc: "Halves damage taken from a supereffective Faith-type attack. Single use.",
	},
	//hardstone: null,
	healball: null,
	heatrock: null,
	heavyball: null,
	helixfossil: null,
	hondewberry: null,
	//iapapaberry: null,
	icicleplate: null,
	icyrock: null,
	insectplate: null,
	ironball: null,
	ironplate: null,
	jabocaberry: null,
	kasibberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	kebiaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	kelpsyberry: null,
	//kingsrock: null,
	laggingtail: null,
	//lansatberry: null,
	laxincense: null,
	leafstone: null,
	leek: null,
	//leftovers: null,
	//leppaberry: null,
	levelball: null,
	//liechiberry: null,
	lifeorb: null,
	lightball: null,
	//lightclay: null,
	//luckypunch: null,
	//lumberry: null,
	lureball: null,
	lustrousorb: null,
	luxuryball: null,
	//machobrace: null,
	magmarizer: null,
	//magnet: null,
	//magoberry: null,
	magostberry: null,
	mail: null,
	masterball: null,
	meadowplate: null,
	//mentalherb: null,
	//metalcoat: null,
	metalpowder: null,
	metronome: null,
	micleberry: null,
	mindplate: null,
	//miracleseed: null,
	moonball: null,
	moonstone: null,
	muscleband: null,
	//mysticwater: null,
	nanabberry: null,
	nestball: null,
	netball: null,
	//nevermeltice: null,
	nomelberry: null,
	occaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	oddincense: null,
	oldamber: null,
	//oranberry: null,
	ovalstone: null,
	pamtreberry: null,
	parkball: null,
	passhoberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	payapaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	//pechaberry: null,
	//persimberry: null,
	//petayaberry: null,
	pinapberry: null,
	//poisonbarb: null,
	pokeball: null,
	pomegberry: null,
	poweranklet: null,
	powerband: null,
	powerbelt: null,
	powerbracer: null,
	//powerherb: null,
	powerlens: null,
	powerweight: null,
	premierball: null,
	protector: null,
	qualotberry: null,
	quickball: null,
	//quickclaw: null,
	quickpowder: null,
	rabutaberry: null,
	rarebone: null,
	//rawstberry: null,
	razorclaw: null,
	razorfang: null,
	razzberry: null,
	reapercloth: null,
	repeatball: null,
	rindoberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	rockincense: null,
	rootfossil: null,
	roseliberry: null,
	roseincense: null,
	rowapberry: null,
	safariball: null,
	//salacberry: null,
	//scopelens: null,
	seaincense: null,
	//sharpbeak: null,
	shedshell: null,
	//shellbell: null,
	shinystone: null,
	shucaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	//silkscarf: null,
	//silverpowder: null,
	//sitrusberry: null,
	skullfossil: null,
	skyplate: null,
	smoothrock: null,
	//softsand: null,
	//souldew: null,
	//spelltag: null,
	spelonberry: null,
	splashplate: null,
	spookyplate: null,
	sportball: null,
	//starfberry: null,
	stick: null,
	stickybarb: null,
	stoneplate: null,
	sunstone: null,
	tamatoberry: null,
	tangaberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	thickclub: null,
	thunderstone: null,
	timerball: null,
	//toxicorb: null,
	toxicplate: null,
	//twistedspoon: null,
	ultraball: null,
	upgrade: null,
	wacanberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	waterstone: null,
	watmelberry: null,
	waveincense: null,
	wepearberry: null,
	//whiteherb: null,
	//widelens: null,
	//wikiberry: null,
	wiseglasses: null,
	yacheberry: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	zapplate: null,
	zoomlens: null,
	
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
	alicecard: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	bunnyamulet: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	dharoksgreataxe: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	honey: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	mixedherbs: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	rockofsaurian: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	starofninja: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	swordofzerker: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	violetfear: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	apicotberry: {
		inherit: true,
		rating: 1,
	},
	aspearberry: {
		inherit: true,
		rating: 1,
	},
	cheriberry: {
		inherit: true,
		rating: 1,
	},
	ganlonberry: {
		inherit: true,
		rating: 1,
	},
	machobrace: {
		inherit: true,
		rating: 1,
	},
	oranberry: {
		inherit: true,
		rating: 1,
	},
	pechaberry: {
		inherit: true,
		rating: 1,
	},
	rawstberry: {
		inherit: true,
		rating: 1,
	},
	kingsrock: {
		inherit: true,
		rating: 0,
	},
	brightpowder: {
		inherit: true,
		rating: 0,
	},
};
