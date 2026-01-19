/**
 * Gen 3 moves
 */

export const Moves: {[k: string]: ModdedMoveData} = {
	knockoff: {
		inherit: true,
		desc: "The target's held item is lost for the rest of the battle, unless it has the Sticky Hold Ability. During the effect, the target cannot gain a new item by any means.",
		shortDesc: "Removes item on hit. No additional damage.",
		basePower: 65,
		onBasePower() {},
	},
	drainpunch: {
		inherit: true,
		basePower: 80,
		pp: 10,
		gen: 3,
	},
	acrobatics: {
		inherit: true,
		type: "Electric",
		gen: 3,
	},
	firepunch: {
		inherit: true,
		basePower: 80,
	},
	icepunch: {
		inherit: true,
		basePower: 80,
	},
	thunderpunch: {
		inherit: true,
		basePower: 80,
	},
	drawnline: {
		inherit: true,
		basePower: 90,
		type: "Steel",
	},
	selfdestruct: {
		inherit: true,
		basePower: 250,
	},
	razorwind: {
		inherit: true,
		desc: "Has a priority of +1. Does not have an increased crit rate.",
		shortDesc: "Attacks with +1 priority. Normal crit rate.",
		accuracy: 100,
		basePower: 40,
		pp: 25,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onTryMove() {},
		critRatio: 0,
		target: "normal",
		type: "Flying",
	},
	swordsdance: {
		inherit: true,
		type: "Steel",
	},
	cut: {
		inherit: true,
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		accuracy: 100,
		basePower: 60,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		type: "Steel",
	},
	fly: {
		inherit: true,
		accuracy: 100,
	},
	jumpkick: {
		inherit: true,
		accuracy: 95,
		basePower: 85,
		pp: 25,
	},
	knifethrow: {
		inherit: true,
		accuracy: 95,
		basePower: 40,
		type: "Steel",
	},
	sculpture: {
		inherit: true,
		shortDesc: "This move does not check accuracy or break Protect.",
		breaksProtect: false,
		type: "Steel",
	},
	takedown: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	doubleedge: {
		inherit: true,
		pp: 10,
	},
	poisonsting: {
		inherit: true,
		basePower: 30,
		pp: 30,
	},
	iceshard: {
		inherit: true,
		pp: 25,
		gen: 3,
	},
	blackripple: {
		inherit: true,
		desc: "Has a 10% chance of causing paralysis on the target.",
		shortDesc: "10% paralyze chance.",
		basePower: 50,
		secondary: {
			chance: 10,
			status: 'par',
		},
		type: "Dark",
	},
	jamming: {
		inherit: true,
		type: "Normal",
	},
	sonicboom: {
		inherit: true,
		desc: "Has a higher chance for a critical hit. Now does regular instead of fixed damage.",
		shortDesc: "High critical hit ratio. Now does regular damage.",
		accuracy: 100,
		basePower: 80,
		damage: null,
		pp: 10,
		critRatio: 2,
		type: "Steel",
	},
	acid: {
		inherit: true,
		desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Sp. Def by 1.",
		basePower: 60,
		pp: 15,
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
	},
	flamethrower: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	watergun: {
		inherit: true,
		basePower: 60,
		pp: 30,
	},
	hydropump: {
		inherit: true,
		accuracy: 85,
		basePower: 120,
		pp: 10,
	},
	surf: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	icebeam: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	blizzard: {
		inherit: true,
		desc: "Has a 20% chance to freeze the target.",
		shortDesc: "20% chance to freeze foe(s).",
		accuracy: 70,
		basePower: 120,
		pp: 10,
		onModifyMove(move) {
			if (this.field.isWeather(['hail', 'snow'])) move.accuracy = true;
		},
		secondary: {
			chance: 20,
			status: 'frz',
		},
	},
	bubblebeam: {
		inherit: true,
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1.",
		accuracy: 95,
		basePower: 55,
		pp: 15,
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
	},
	hyperbeam: {
		inherit: true,
		desc: "Lowers the user's Special Attack by 2 stages. Is no longer a recharge move.",
		shortDesc: "Lowers the user's Sp. Atk by 2. No recharge turn.",
		accuracy: 90,
		basePower: 140,
		pp: 5,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
		type: "Electric",
	},
	peck: {
		inherit: true,
		basePower: 40,
		pp: 35,
	},
	submission: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	strength: {
		inherit: true,
		desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Attack by 1.",
		accuracy: 100,
		basePower: 60,
		pp: 15,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
	},
	absorb: {
		inherit: true,
		basePower: 40,
		pp: 20,
	},
	megadrain: {
		inherit: true,
		basePower: 60,
		pp: 15,
	},
	growth: {
		inherit: true,
		desc: "Raises the user's Attack and Special Attack by 1 stage. Raises both stats by an additional stage in sunlight.",
		shortDesc: "Raises user's Atk/Sp.Atk by +1 stage. +2 in sun.",
		pp: 40,
		onModifyMove(move, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
	},
	battlechant: {
		inherit: true,
		accuracy: 95,
		basePower: 100,
		type: "Steel",
	},
	flareblitz: {
		inherit: true,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP. Does not have a burn chance.",
		shortDesc: "User takes 1/3 recoil. No burn chance.",
		pp: 10,
		secondary: null,
		gen: 3,
	},
	firespin: {
		inherit: true,
		accuracy: 85,
		basePower: 35,
	},
	thunderbolt: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	thunderwave: {
		inherit: true,
		accuracy: 100,
	},
	rockthrow: {
		inherit: true,
		accuracy: 100,
	},
	thunder: {
		inherit: true,
		accuracy: 70,
		basePower: 120,
		pp: 10,
	},
	toxic: {
		inherit: true,
		accuracy: 90,
		onModifyMove(move, pokemon) {
			if (pokemon.hasType('Poison')) {
				move.accuracy = true;
			}
		},
	},
	manaburst: {
		inherit: true,
		type: "Psychic",
	},
	hypnosis: {
		inherit: true,
		accuracy: 70,
		pp: 20,
	},
	agility: {
		inherit: true,
		pp: 20,
		type: "Flying",
	},
	quickattack: {
		inherit: true,
		pp: 25,
	},
	incinerate: {
		inherit: true,
		pp: 20,
		gen: 3,
	},
	feint: {
		inherit: true,
		basePower: 50,
		gen: 3,
	},
	recover: {
		inherit: true,
		pp: 10,
	},
	minimize: {
		inherit: true,
		pp: 20,
	},
	smokescreen: {
		inherit: true,
		type: "Poison",
	},
	landswrath: {
		inherit: true,
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits one target.",
		accuracy: 85,
		basePower: 120,
		category: "Special",
		pp: 10,
		target: "normal",
		gen: 3,
	},
	lightscreen: {
		inherit: true,
		pp: 20,
	},
	haze: {
		inherit: true,
		pp: 30,
		type: "Dark",
	},
	focusenergy: {
		inherit: true,
		type: "Fighting",
	},
	smog: {
		inherit: true,
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		accuracy: 100,
		basePower: 30,
		pp: 30,
		secondary: {
			chance: 30,
			status: 'psn',
		},
	},
	fireblast: {
		inherit: true,
		desc: "Has a 20% chance to burn the target.",
		shortDesc: "20% chance to burn the target.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 20,
			status: 'brn',
		},
	},
	skullbash: {
		inherit: true,
		basePower: 100,
	},
	constrict: {
		inherit: true,
		accuracy: 95,
		basePower: 55,
		pp: 15,
	},
	softboiled: {
		inherit: true,
		pp: 10,
	},
	highjumpkick: {
		inherit: true,
		basePower: 130,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fighting')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("HJK recoil failed");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
	},
	glare: {
		inherit: true,
		accuracy: 90,
	},
	dreameater: {
		inherit: true,
		desc: "The user recovers 1/2 the HP lost by the target, rounded down. The target does not need to be Asleep.",
		shortDesc: "Recover 50% of damage dealt. Usable on any target.",
		accuracy: 100,
		basePower: 80,
		pp: 10,
		onTryImmunity() {},
		type: "Dark",
	},
	poisongas: {
		inherit: true,
		desc: "Has a 40% chance to poison the target.",
		shortDesc: "40% chance to poison the target.",
		accuracy: 100,
		basePower: 65,
		category: "Special",
		pp: 20,
		secondary: {
			chance: 40,
			status: 'psn',
		},
	},
	liquidation: {
		inherit: true,
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		accuracy: 85,
		basePower: 120,
		pp: 10,
		secondary: null,
		target: "normal",
		gen: 3,
	},
	leechlife: {
		inherit: true,
		basePower: 80,
		pp: 10,
	},
	skyattack: {
		inherit: true,
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Speed by 1 stage on the first turn. This move has a normal critical hit rate.",
		shortDesc: "Raises user's Speed by 1 on turn 1. Hits turn 2.",
		accuracy: 100,
		basePower: 100,
		pp: 15,
		critRatio: 0,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({spe: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		seconary: null,
	},
	transform: {
		inherit: true,
		pp: 5,
		type: "Psychic",
	},
	bubble: {
		inherit: true,
		pp: 25,
	},
	flash: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) accuracy by 1.",
		accuracy: 95,
		basePower: 60,
		category: "Special",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Faith",
	},
	aquajet: {
		inherit: true,
		pp: 25,
		gen: 3,
	},
	furyswipes: {
		inherit: true,
		accuracy: 100,
		basePower: 25,
	},
	rockslide: {
		inherit: true,
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the foe(s) flinch.",
		accuracy: 100,
		basePower: 80,
		pp: 15,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
	},
	sharpen: {
		inherit: true,
		type: "Steel",
	},
	outrage: {
		inherit: true,
		desc: "Has a 30% chance to raise the user's Attack by 1 stage. It no longer locks or confuses the user.",
		shortDesc: "30% chance to raise Attack by 1. Does not lock.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		self: {},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		onAfterMove() {},
		target: "normal",
		type: "Dark",
	},
	slash: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
		pp: 15,
	},
	spiderweb: {
		inherit: true,
		pp: 5,
	},
	aeroblast: {
		inherit: true,
		accuracy: 95,
		basePower: 100,
		pp: 10,
	},
	cottonspore: {
		inherit: true,
		pp: 15,
	},
	powdersnow: {
		inherit: true,
		pp: 20,
	},
	machpunch: {
		inherit: true,
		pp: 25,
	},
	scaryface: {
		inherit: true,
		pp: 15,
		type: "Dark",
	},
	gunkshot: {
		inherit: true,
		accuracy: 85,
		gen: 3,
	},
	mudshot: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) accuracy by 1.",
		accuracy: 95,
		basePower: 60,
		pp: 15,
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
	},
	steelbeam: {
		inherit: true,
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "User takes 1/3 recoil.",
		accuracy: 100,
		basePower: 120,
		pp: 10,
		mindBlownRecoil: null,
		onAfterMove() {},
		recoil: [33, 100],
		gen: 3,
	},
	suckerpunch: {
		inherit: true,
		basePower: 75,
		gen: 3,
	},
	luckychant: {
		inherit: true,
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Def and Sp. Def by 1.",
		pp: 20,
		sideCondition: null,
		condition: {},
		boosts: {
			def: 1,
			spd: 1,
		},
		target: "self",
		type: "Faith",
		gen: 3,
	},
	lockon: {
		inherit: true,
		desc: "Raises the user's Accuracy by 2 stages.",
		shortDesc: "Raises the user's Accuracy by 2 stages.",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, protect: 1, mirror: 1},
		onTryHit() {},
		onHit() {},
		condition: {},
		boosts: {
			accuracy: 2,
		},
		target: "self",
	},
	gigadrain: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		pp: 10,
	},
	endure: {
		inherit: true,
		type: "Fighting",
	},
	bladeflash: {
		inherit: true,
		pp: 25,
		type: "Steel",
	},
	swagger: {
		inherit: true,
		accuracy: 90,
		type: "Dark",
	},
	furycutter: {
		inherit: true,
		basePower: 40,
		accuracy: 90,
		type: "Steel",
	},
	steelwing: {
		inherit: true,
		basePower: 75,
		accuracy: 100,
		pp: 15,
	},
	healbell: {
		inherit: true,
		type: "Faith",
	},
	safeguard: {
		inherit: true,
		type: "Faith",
	},
	painsplit: {
		inherit: true,
		type: "Ghost",
	},
	sacredfire: {
		inherit: true,
		desc: "Has a 20% chance to burn the target.",
		shortDesc: "20% chance to burn the target.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 20,
			status: 'brn',
		},
		type: "Faith",
	},
	dynamicpunch: {
		inherit: true,
		basePower: 120,
	},
	rapidspin: {
		inherit: true,
		desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "Free user from hazards/bind/Leech Seed; +1 Spe.",
		accuracy: 100,
		basePower: 50,
		pp: 20,
		onAfterHit(target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		onAfterSubDamage(damage, target, pokemon, move) {
			if (!move.hasSheerForce) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
	},
	sweetscent: {
		inherit: true,
		type: "Grass",
	},
	steelfist: {
		inherit: true,
		accuracy: 85,
		basePower: 100,
		type: "Steel",
	},
	metalclaw: {
		inherit: true,
		accuracy: 100,
		pp: 20,
	},
	stormthrow: {
		inherit: true,
		accuracy: 95,
		basePower: 60,
		type: "Faith",
		gen: 3,
	},
	energylight: {
		inherit: true,
		basePower: 90,
		type: "Grass",
	},
	lunatic: {
		inherit: true,
		accuracy: 85,
		type: "Normal",
	},
	twister: {
		inherit: true,
		basePower: 60,
		type: "Flying",
	},
	crunch: {
		inherit: true,
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
	},
	extremespeed: {
		inherit: true,
		priority: 2,
	},
	ancientpower: {
		inherit: true,
		desc: "Has a 20% chance to raise the user's Defense by 1 stage.",
		shortDesc: "20% chance to raise the user's Defense by 1.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 20,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
	},
	rocksmash: {
		inherit: true,
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1.",
		basePower: 60,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
	},
	fakeout: {
		inherit: true,
		priority: 3,
		flags: {protect: 1, mirror: 1},
		type: "Dark",
	},
	heatwave: {
		inherit: true,
		desc: "Has a 20% chance to burn the target.",
		shortDesc: "20% chance to burn the foe(s).",
		basePower: 100,
		secondary: {
			chance: 20,
			status: 'brn',
		},
	},
	flatter: {
		inherit: true,
		desc: "Raises the target's Special Attack by 2 stages and confuses it.",
		shortDesc: "Raises the target's Sp. Atk by 2 and confuses it.",
		boosts: {
			spa: 2,
		},
	},
	willowisp: {
		inherit: true,
		accuracy: 85,
	},
	// bodypress: {
		// inherit: true,
		// desc: "Damage doubles if the target is paralyzed. If this move is successful, the target is cured of paralysis. Uses normal damage calculation.",
		// shortDesc: "2x damage if target is paralyzed. Uses Atk stat.",
		// overrideOffensiveStat: null,
		// basePowerCallback(pokemon, target, move) {
			// if (target.status === 'par') {
				// this.debug('BP doubled on paralyzed target');
				// return move.basePower * 2;
			// }
			// return move.basePower;
		// },
		// onHit(target) {
			// if (target.status === 'par') target.cureStatus();
		// },
		// gen: 3,
	// },
	accelerock: {
		inherit: true,
		pp: 25,
		flags: {protect: 1, mirror: 1},
		gen: 3,
	},
	voltswitch: {
		inherit: true,
		gen: 3,
	},
	closecombat: {
		inherit: true,
		gen: 3,
	},
	comeuppance: {
		inherit: true,
		gen: 3,
	},
	holdback: {
		inherit: true,
		gen: 3,
	},
	payback: {
		inherit: true,
		gen: 3,
	},
	quiverdance: {
		inherit: true,
		gen: 3,
	},
	flipturn: {
		inherit: true,
		gen: 3,
	},
	poisonbomb: {
		inherit: true,
		type: "Poison",
		gen: 3,
	},
	tripleaxel: {
		inherit: true,
		gen: 3,
	},
	darkpulse: {
		inherit: true,
		basePower: 90,
		gen: 3,
	},
	rockpolish: {
		inherit: true,
		gen: 3,
	},
	powerwhip: {
		inherit: true,
		gen: 3,
	},
	nastyplot: {
		inherit: true,
		gen: 3,
	},
	topsyturvy: {
		inherit: true,
		gen: 3,
	},
	aurasphere: {
		inherit: true,
		gen: 3,
	},
	bugbuzz: {
		inherit: true,
		gen: 3,
	},
	uturn: {
		inherit: true,
		gen: 3,
	},
	earthpower: {
		inherit: true,
		gen: 3,
	},
	poisonjab: {
		inherit: true,
		gen: 3,
	},
	noretreat: {
		inherit: true,
		gen: 3,
	},
	taunt: {
		inherit: true,
		desc: "Prevents the target from using non-damaging moves for its next four turns. ",
		shortDesc: "Target can't use status moves its next 4 turns.",
		condition: {
			duration: 4,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectState.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.moves.get(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Status' && move.id !== 'mefirst') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
	},
	teleport: {
		inherit: true,
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
		shortDesc: "User switches out with low priority.",
		priority: -6,
		selfSwitch: true,
		onTry(source) {
			return !!this.canSwitch(source.side);
		},
	},
	encore: {
		inherit: true,
			desc: "For 4 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Encore, Mimic, Mirror Move, Sketch, Struggle, or Transform.",
		shortDesc: "Target repeats its last move for its next 4 turns.",
		condition: {
			duration: 4,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || target.volatiles['dynamax']) return false;

				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);
				const moveIndex = target.moves.indexOf(move.id);
				if (move.isZ || move.flags['failencore'] || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					return false;
				}
				this.effectState.move = move.id;
				this.add('-start', target, 'Encore');
				if (!this.queue.willMove(target)) {
					this.effectState.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectState.move) return this.effectState.move;
			},
			onResidualOrder: 16,
			onResidual(target) {
				if (target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0) {
					// early termination if you run out of PP
					target.removeVolatile('encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectState.move || !pokemon.hasMove(this.effectState.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	futuresight: {
		inherit: true,
		accuracy: 100,
		basePower: 120,
		pp: 10,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Future Sight",
				basePower: 120,
				category: "Special",
				flags: {futuremove: 1},
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 0,
					damage: damage,
					category: "Special",
					flags: {futuremove: 1},
					effectType: 'Move',
					type: '???',
				},
			});
			this.add('-start', source, 'Future Sight');
			return null;
		},
	},
	charge: {
		inherit: true,
		desc: "If the user uses an Electric-type attack on the next turn, its power will be doubled. Also increases Sp. Defense by 1 stage.",
		shortDesc: "+1 Sp. Def. 2x power for Electric next turn only.",
		condition: {
			onStart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Charge');
			},
			onRestart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Charge');
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Charge', '[silent]');
			},
		},
		boosts: {
			spd: 1,
		},
	},
	wish: {
		inherit: true,
		flags: {heal: 1},
		slotCondition: 'Wish',
		condition: {
			duration: 2,
			onResidualOrder: 7,
			onEnd(target) {
				if (!target.fainted) {
					const source = this.effectState.source;
					const damage = this.heal(target.baseMaxhp / 2, target, target);
					if (damage) this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + source.name);
				}
			},
		},
		type: "Faith",
	},
	recycle: {
		inherit: true,
		flags: {},
		type: "Grass",
	},
	imprison: {
		inherit: true,
		desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
		flags: {snatch: 1, bypasssub: 1, mustpressure: 1},
		volatileStatus: 'imprison',
		condition: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectState.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectState.source.hasMove(move.id) && !move.isZ && !move.isMax) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		type: "Faith",
	},
	shadowsneak: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
		pp: 25,
		gen: 3,
	},
	nightdaze: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's Speed by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) Speed by 1.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 30,
			boosts: {
				spe: -1,
			},
		},
		gen: 3,
	},
	rockwrecker: {
		inherit: true,
		desc: "Has a 20% chance to raise the user's Defense by 1 stage. No recharge turn.",
		shortDesc: "20% chance for Def +1. No recharge turn.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		self: {},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		gen: 3,
	},
	braver: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) Defense by 1.",
		accuracy: 85,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		type: "Steel",
	},
	refresh: {
		inherit: true,
		desc: "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
		shortDesc: "Cures of user of burn/poison/freeze/paralysis.",
		pp: 10,
		onHit(pokemon) {
			if (['', 'slp'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		type: "Water",
	},
	hex: {
		inherit: true,
		basePower: 50,
		pp: 15,
		gen: 3,
	},
	secretpower: {
		inherit: true,
		secondary: {
			chance: 30,
			status: 'par',
		},
	},
	shadowdive: {
		inherit: true,
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Shadow Sneak, Shadow Punch, and Shadow Ball and takes double damage from them. Also unaffected by weather when hiding.",
		shortDesc: "Hides turn 1, strikes turn 2.",
		basePower: 120,
		pp: 5,
		condition: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onInvulnerability(target, source, move) {
				if (['shadowball', 'shadowpunch', 'shadowsneak'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'shadowball' || move.id === 'shadowsneak' || move.id === 'shadowpunch') {
					return this.chainModify(2);
				}
			},
		},
		type: "Ghost",
	},
	armthrust: {
		inherit: true,
		basePower: 25,
		pp: 15,
	},
	nightshade: {
		inherit: true,
		pp: 20,
	},
	manacharge: {
		inherit: true,
		desc: "Raises the user's Special Attack by 2 stages.",
		shortDesc: "Raises the user's Sp. Atk by 2.",
		boosts: {
			spa: 2,
		},
		type: "Psychic",
	},
	lusterpurge: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
	},
	roost: {
		inherit: true,
		desc: "The user restores 1/2 of its maximum HP, rounded half up. No other effect.",
		shortDesc: "Heals 50% HP with no other effect.",
		start: null,
		pp: 10,
		self: {},
		condition: {},
		gen: 3,
	},
	blazekick: {
		inherit: true,
		desc: "Has a 20% chance to burn the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 20% chance to burn.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 20,
			status: 'brn',
		},
	},
	mudsport: {
		inherit: true,
		desc: "Raises the user's Attack by 1 stage. No other effect.",
		shortDesc: "Raise Attack by 1. No other effect.",
		pp: 20,
		pseudoWeather: null,
		condition: {},
		target: "self",
		boosts: {
			atk: 1,
		},
	},
	needlearm: {
		inherit: true,
		basePower: 75,
	},
	slackoff: {
		inherit: true,
		pp: 10,
	},
	astonish: {
		inherit: true,
		basePower: 50,
		pp: 25,
		flags: {protect: 1, mirror: 1},
	},
	airslash: {
		inherit: true,
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		basePower: 80,
		accuracy: 100,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		gen: 3,
	},
	overheat: {
		inherit: true,
		basePower: 140,
	},
	bravebird: {
		inherit: true,
		pp: 10,
		gen: 3,
	},
	rocktomb: {
		inherit: true,
		basePower: 55,
		accuracy: 95,
		pp: 15,
	},
	silverwind: {
		inherit: true,
		desc: "Has a 30% chance to lower the target's Speed by 1 stage.",
		shortDesc: "30% chance to lower the target's Speed by 1.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 30,
			boosts: {
				spe: -1,
			},
		},
	},
	focusblast: {
		inherit: true,
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		accuracy: 85,
		basePower: 120,
		pp: 5,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		gen: 3,
	},
	shadowpunch: {
		inherit: true,
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		basePower: 80,
		accuracy: 100,
		pp: 20,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
	},
	extrasensory: {
		inherit: true,
		desc: "Has a 20% chance to make the target flinch.",
		shortDesc: "20% chance to make the target flinch.",
		basePower: 80,
		accuracy: 100,
		pp: 20,
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		type: "Faith",
	},
	soar: {
		inherit: true,
		type: "Flying",
	},
	bulletseed: {
		inherit: true,
		basePower: 25,
		pp: 15,
	},
	iciclespear: {
		inherit: true,
		basePower: 25,
		pp: 15,
	},
	heartbreak: {
		inherit: true,
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		accuracy: 100,
		basePower: 90,
		pp: 15,
		critRatio: 2,
		type: "Dark",
	},
	frenzyplant: {
		inherit: true,
		desc: "Lowers the user's Special Attack by 2 stages. Is no longer a recharge move.",
		shortDesc: "Lowers the user's Sp. Atk by 2. No recharge turn.",
		accuracy: 90,
		basePower: 140,
		pp: 5,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -2,
			},
		},
	},
	volttackle: {
		inherit: true,
		pp: 10,
		secondary: {},
	},
	watersport: {
		inherit: true,
		desc: "Raises the user's Special Attack by 1 stage. No other effect.",
		shortDesc: "Raise Sp. Atk by 1. No other effect.",
		pp: 20,
		pseudoWeather: null,
		condition: {},
		target: "self",
		boosts: {
			spa: 1,
		},
	},
	calmmind: {
		inherit: true,
		type: "Faith",
	},
	leafblade: {
		inherit: true,
		basePower: 90,
	},
	tailwind: {
		inherit: true,
		desc: "Raises the user's Attack and Speed by 1 stage. No other effect.",
		shortDesc: "Raises the user's Attack and Speed by 1.",
		pp: 20,
		sideCondition: null,
		condition: {},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		gen: 3,
	},
	rockblast: {
		inherit: true,
		accuracy: 100,
		basePower: 25,
		pp: 15,
	},
	doomdesire: {
		inherit: true,
		accuracy: 95,
		basePower: 140,
		category: "Special",
		pp: 5,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Doom Desire",
				basePower: 140,
				category: "Special",
				flags: {},
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 95,
					basePower: 0,
					damage: damage,
					category: "Special",
					flags: {futuremove: 1},
					effectType: 'Move',
					type: '???',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return null;
		},
	},
	mortalspin: {
		inherit: true,
		gen: 3,
	},
	//legalize new moves
	mineralpelt: {
		inherit: true,
		gen: 3,
	},
	laevatein: {
		inherit: true,
		gen: 3,
	},
	sandymash: {
		inherit: true,
		gen: 3,
	},
	boltkick: {
		inherit: true,
		gen: 3,
	},
	knifewave: {
		inherit: true,
		gen: 3,
	},
	onibinding: {
		inherit: true,
		gen: 3,
	},
	tenkolaser: {
		inherit: true,
		gen: 3,
	},
	coldinferno: {
		inherit: true,
		gen: 3,
	},
	hisousword: {
		inherit: true,
		gen: 3,
	},
	powertrance: {
		inherit: true,
		gen: 3,
	},
	mysticbomb: {
		inherit: true,
		gen: 3,
	},
	buggrip: {
		inherit: true,
		gen: 3,
	},
	holyneedle: {
		inherit: true,
		gen: 3,
	},
	shockabsorb: {
		inherit: true,
		gen: 3,
	},
	spectralray: {
		inherit: true,
		gen: 3,
	},
	subterraneansun: {
		inherit: true,
		gen: 3,
	},
	skitterrush: {
		inherit: true,
		gen: 3,
	},
	mindseye: {
		inherit: true,
		gen: 3,
	},
	manapunch: {
		inherit: true,
		gen: 3,
	},
	gapzone: {
		inherit: true,
		gen: 3,
	},
	powerdrum: {
		inherit: true,
		gen: 3,
	},
	draculacradle: {
		inherit: true,
		gen: 3,
	},
	sakedrink: {
		inherit: true,
		gen: 3,
	},
	butterfly: {
		inherit: true,
		gen: 3,
	},
	superego: {
		inherit: true,
		gen: 3,
	},
	zapflare: {
		inherit: true,
		gen: 3,
	},
	savagesting: {
		inherit: true,
		gen: 3,
	},
	divinepulse: {
		inherit: true,
		gen: 3,
	},
	holystrike: {
		inherit: true,
		gen: 3,
	},
	firebullets: {
		inherit: true,
		gen: 3,
	},
	aquaveil: {
		inherit: true,
		gen: 3,
	},
	fujiyamavolcano: {
		inherit: true,
		gen: 3,
	},
	corpserush: {
		inherit: true,
		gen: 3,
	},
	poisonclaw: {
		inherit: true,
		gen: 3,
	},
	ringoffire: {
		inherit: true,
		gen: 3,
	},
	suwadeluge: {
		inherit: true,
		gen: 3,
	},
	apollo13: {
		inherit: true,
		gen: 3,
	},
	bugwhistle: {
		inherit: true,
		gen: 3,
	},
	hourairend: {
		inherit: true,
		gen: 3,
	},
	watergeyser: {
		inherit: true,
		gen: 3,
	},
	rockgale: {
		inherit: true,
		gen: 3,
	},
	poisonwave: {
		inherit: true,
		gen: 3,
	},
	glacialbash: {
		inherit: true,
		gen: 3,
	},
	mysticfire: {
		inherit: true,
		gen: 3,
	},
	cheer: {
		inherit: true,
		gen: 3,
	},
	multipulse: {
		inherit: true,
		gen: 3,
	},
	eeriewave: {
		inherit: true,
		gen: 3,
	},
	foulplay: {
		inherit: true,
		gen: 3,
	},
	ingrain: {
		inherit: true,
		onTry(source) {
			if(source.volatiles['aquaveil']) {
				this.add("-message", source + " is already regenerating with Aqua Veil!");
				return false;
			}
		},
		condition: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Ingrain');
			},
			onResidualOrder: 10,
			onResidualSubOrder: 1,
			onResidual(pokemon) {
				this.heal(pokemon.baseMaxhp / 16);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Ingrain');
				return null;
			},
		},
	},
	leafstorm: {
		inherit: true,
		gen: 3,
	},
	scald: {
		inherit: true,
		gen: 3,
	},
	metronome: {
		inherit: true,
		flags: {noassist: 1, failcopycat: 1, nosleeptalk: 1, failmimic: 1},
		noMetronome: [
			"Assist", "Chatter", "Copycat", "Counter", "Covet", "Destiny Bond", "Detect", "Endure", "Feint", "Focus Punch", "Follow Me", "Helping Hand", "Me First", "Metronome", "Mimic", "Mirror Coat", "Mirror Move", "Protect", "Sketch", "Sleep Talk", "Snatch", "Struggle", "Switcheroo", "Thief", "Trick", "Leaf Storm", "Psychic", "Attract", "Scald", "Hidden Power", "Dive", "Acid Armor", "Air Cutter", "Assist", "Attract", "Barrage", "Beat Up", "Belly Drum", "Bide", "Bind", "Bite", "Blast Burn", "Bone Club", "Bone Rush", "Bonemerang", "Bounce", "Clamp", "Comet Punch", "Cosmic Power", "Covet", "Crabhammer", "Cross Chop", "Crush Claw", "Defense Curl", "Detect", "Disable", "Dive", "Dizzy Punch", "Double Team", "DoubleSlap", "Dragon Claw", "Dragon Dance", "Dragon Rage", "DragonBreath", "Egg Bomb", "Eruption", "Explosion", "False Swipe", "FeatherDance", "Fissure", "Follow Me", "Frustration", "Fury Attack", "Grasswhistle", "Grudge", "Helping Hand", "Hidden Power", "Horn Attack", "Horn Drill", "Hydro Cannon", "Hyper Fang", "Ice Ball", "Iron Tail", "Kinesis", "Mean Look", "Meditate", "Mega Kick", "Mega Punch", "Megahorn", "Metal Sound", "Meteor Mash", "Milk Drink", "Mind Reader", "Mirror Move", "Mist Ball", "Moonlight", "Morning Sun", "Mud Slap", "Muddy Water", "Nature Power", "Nightmare", "Octazooka", "Odor Sleuth", "Pay Day", "Petal Dance", "Pin Missile", "Poison Fang", "Poison Tail", "Present", "Psychic", "Psywave", "Rage", "Reversal", "Role Play", "Rolling Kick", "Rollout", "Sand Tomb", "Sky Uppercut", "Slam", "Sludge", "Smellingsalt", "Spike Cannon", "Spit Up", "Spite", "Splash", "Stockpile", "Stomp", "String Shot", "Superpower", "Supersonic", "Swallow", "Tail Glow", "Thrash", "Tickle", "Triple Kick", "Twineedle", "Vise Grip", "Vital Throw", "Water Spout", "Withdraw", "Wrap", "Disperse", "Zap Cannon"
		],
	},
	spikes: {
		inherit: true,
		flags: {reflectable: 1, mustpressure: 1},
	},
	forcepalm: {
		inherit: true,
		desc: "Has a 20% chance to Paralyze.",
		shortDesc: "20% chance to Paralyze.",
		accuracy: 100,
		basePower: 80,
		secondary: {
			chance: 20,
			status: 'par',
		},
		type: "Faith",
	},
};
