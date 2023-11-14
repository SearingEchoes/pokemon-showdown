/**
 * Gen 3 moves
 */

export const Moves: {[k: string]: ModdedMoveData} = {
	absorb: {
		inherit: true,
		pp: 20,
	},
	acid: {
		inherit: true,
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
	},
	ancientpower: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	astonish: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 60;
			return 30;
		},
	},
	beatup: {
		inherit: true,
		onModifyMove(move, pokemon) {
			pokemon.addVolatile('beatup');
			move.type = '???';
			move.category = 'Special';
			move.allies = pokemon.side.pokemon.filter(ally => !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		condition: {
			duration: 1,
			onModifySpAPriority: -101,
			onModifySpA(atk, pokemon, defender, move) {
				// https://www.smogon.com/forums/posts/8992145/
				// this.add('-activate', pokemon, 'move: Beat Up', '[of] ' + move.allies![0].name);
				this.event.modifier = 1;
				return move.allies!.shift()!.species.baseStats.atk;
			},
			onFoeModifySpDPriority: -101,
			onFoeModifySpD(def, pokemon) {
				this.event.modifier = 1;
				return pokemon.species.baseStats.def;
			},
		},
	},
	bide: {
		inherit: true,
		accuracy: 100,
		priority: 0,
		condition: {
			duration: 3,
			onLockMove: 'bide',
			onStart(pokemon) {
				this.effectState.totalDamage = 0;
				this.add('-start', pokemon, 'move: Bide');
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, move) {
				if (!move || move.effectType !== 'Move' || !source) return;
				this.effectState.totalDamage += damage;
				this.effectState.lastDamageSource = source;
			},
			onBeforeMove(pokemon, target, move) {
				if (this.effectState.duration === 1) {
					this.add('-end', pokemon, 'move: Bide');
					if (!this.effectState.totalDamage) {
						this.add('-fail', pokemon);
						return false;
					}
					target = this.effectState.lastDamageSource;
					if (!target) {
						this.add('-fail', pokemon);
						return false;
					}
					if (!target.isActive) {
						const possibleTarget = this.getRandomTarget(pokemon, this.dex.moves.get('pound'));
						if (!possibleTarget) {
							this.add('-miss', pokemon);
							return false;
						}
						target = possibleTarget;
					}
					const moveData = {
						id: 'bide' as ID,
						name: "Bide",
						accuracy: 100,
						damage: this.effectState.totalDamage * 2,
						category: "Physical",
						priority: 0,
						flags: {contact: 1, protect: 1},
						effectType: 'Move',
						type: 'Normal',
					} as unknown as ActiveMove;
					this.actions.tryMoveHit(target, pokemon, moveData);
					pokemon.removeVolatile('bide');
					return false;
				}
				this.add('-activate', pokemon, 'move: Bide');
			},
			onMoveAborted(pokemon) {
				pokemon.removeVolatile('bide');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Bide', '[silent]');
			},
		},
	},
	blizzard: {
		inherit: true,
		onModifyMove() { },
	},
	brickbreak: {
		inherit: true,
		onTryHit(target, source) {
			// will shatter screens through sub, before you hit
			const foe = source.side.foe;
			foe.removeSideCondition('reflect');
			foe.removeSideCondition('lightscreen');
		},
	},
	charge: {
		inherit: true,
		boosts: null,
	},
	conversion: {
		inherit: true,
		onHit(target) {
			const possibleTypes = target.moveSlots.map(moveSlot => {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.id !== 'curse' && !target.hasType(move.type)) {
					return move.type;
				}
				return '';
			}).filter(type => type);
			if (!possibleTypes.length) {
				return false;
			}
			const type = this.sample(possibleTypes);

			if (!target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
	},
	counter: {
		inherit: true,
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, effect) {
				if (
					effect.effectType === 'Move' && !source.isAlly(target) &&
					(effect.category === 'Physical' || effect.id === 'hiddenpower')
				) {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
	},
	covet: {
		inherit: true,
		flags: {protect: 1, mirror: 1, noassist: 1},
	},
	crunch: {
		inherit: true,
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
	},
	dig: {
		inherit: true,
		basePower: 60,
	},
	disable: {
		inherit: true,
		accuracy: 55,
		flags: {protect: 1, mirror: 1, bypasssub: 1},
		volatileStatus: 'disable',
		condition: {
			durationCallback() {
				return this.random(2, 6);
			},
			noCopy: true,
			onStart(pokemon) {
				if (!this.queue.willMove(pokemon)) {
					this.effectState.duration++;
				}
				if (!pokemon.lastMove) {
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							return false;
						} else {
							this.add('-start', pokemon, 'Disable', moveSlot.move);
							this.effectState.move = pokemon.lastMove.id;
							return;
						}
					}
				}
				return false;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Disable');
			},
			onBeforeMove(attacker, defender, move) {
				if (move.id === this.effectState.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectState.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
	},
	dive: {
		inherit: true,
		basePower: 60,
	},
	doomdesire: {
		inherit: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Doom Desire",
				basePower: 120,
				category: "Physical",
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
					accuracy: 85,
					basePower: 0,
					damage: damage,
					category: "Physical",
					flags: {futuremove: 1},
					effectType: 'Move',
					type: '???',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return null;
		},
	},
	encore: {
		inherit: true,
		volatileStatus: 'encore',
		condition: {
			durationCallback() {
				return this.random(3, 7);
			},
			onStart(target, source) {
				const moveIndex = target.lastMove ? target.moves.indexOf(target.lastMove.id) : -1;
				if (
					!target.lastMove || target.lastMove.flags['failencore'] ||
					!target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0
				) {
					// it failed
					return false;
				}
				this.effectState.move = target.lastMove.id;
				this.add('-start', target, 'Encore');
			},
			onOverrideAction(pokemon) {
				return this.effectState.move;
			},
			onResidualOrder: 10,
			onResidualSubOrder: 14,
			onResidual(target) {
				if (
					target.moves.includes(this.effectState.move) &&
					target.moveSlots[target.moves.indexOf(this.effectState.move)].pp <= 0
				) {
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
	extrasensory: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 160;
			return 80;
		},
	},
	fakeout: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
	},
	feintattack: {
		inherit: true,
		flags: {protect: 1, mirror: 1},
	},
	flash: {
		inherit: true,
		accuracy: 70,
	},
	fly: {
		inherit: true,
		basePower: 70,
	},
	followme: {
		inherit: true,
		volatileStatus: undefined,
		slotCondition: 'followme',
		condition: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-singleturn', target, 'move: Follow Me');
				this.effectState.slot = target.getSlot();
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				const userSlot = this.getAtSlot(this.effectState.slot);
				if (this.validTarget(userSlot, source, move.target)) {
					return userSlot;
				}
			},
		},
	},
	foresight: {
		inherit: true,
		accuracy: 100,
	},
	furycutter: {
		inherit: true,
		onHit(target, source) {
			source.addVolatile('furycutter');
		},
	},
	gigadrain: {
		inherit: true,
		pp: 5,
	},
	glare: {
		inherit: true,
		ignoreImmunity: false,
	},
	hiddenpower: {
		inherit: true,
		category: "Physical",
		onModifyMove(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
			const specialTypes = ['Fire', 'Water', 'Grass', 'Ice', 'Electric', 'Dark', 'Psychic', 'Dragon'];
			move.category = specialTypes.includes(move.type) ? 'Special' : 'Physical';
		},
	},
	highjumpkick: {
		inherit: true,
		basePower: 85,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fighting')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("HJK recoil failed");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
	},
	hypnosis: {
		inherit: true,
		accuracy: 60,
	},
	jumpkick: {
		inherit: true,
		basePower: 70,
		onMoveFail(target, source, move) {
			if (target.runImmunity('Fighting')) {
				const damage = this.actions.getDamage(source, target, move, true);
				if (typeof damage !== 'number') throw new Error("Jump Kick didn't recoil");
				this.damage(this.clampIntRange(damage / 2, 1, Math.floor(target.maxhp / 2)), source, source, move);
			}
		},
	},
	leafblade: {
		inherit: true,
		basePower: 70,
	},
	lockon: {
		inherit: true,
		accuracy: 100,
	},
	megadrain: {
		inherit: true,
		pp: 10,
	},
	memento: {
		inherit: true,
		accuracy: true,
	},
	mindreader: {
		inherit: true,
		accuracy: 100,
	},
	mimic: {
		inherit: true,
		flags: {protect: 1, bypasssub: 1, allyanim: 1, failencore: 1, noassist: 1, failmimic: 1},
	},
	mirrorcoat: {
		inherit: true,
		condition: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectState.slot = null;
				this.effectState.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target || !this.effectState.slot) return;
				return this.getAtSlot(this.effectState.slot);
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, effect) {
				if (
					effect.effectType === 'Move' && !source.isAlly(target) &&
					effect.category === 'Special' && effect.id !== 'hiddenpower'
				) {
					this.effectState.slot = source.getSlot();
					this.effectState.damage = 2 * damage;
				}
			},
		},
	},
	mirrormove: {
		inherit: true,
		onTryHit() { },
		onHit(pokemon) {
			const noMirror = [
				'assist', 'curse', 'doomdesire', 'focuspunch', 'futuresight', 'magiccoat', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'psychup', 'roleplay', 'sketch', 'sleeptalk', 'spikes', 'spitup', 'taunt', 'teeterdance', 'transform',
			];
			const lastAttackedBy = pokemon.getLastAttackedBy();
			if (!lastAttackedBy?.source.lastMove || !lastAttackedBy.move) {
				return false;
			}
			if (noMirror.includes(lastAttackedBy.move) || !lastAttackedBy.source.hasMove(lastAttackedBy.move)) {
				return false;
			}
			this.actions.useMove(lastAttackedBy.move, pokemon);
		},
		target: "self",
	},
	naturepower: {
		inherit: true,
		accuracy: 95,
		onHit(target) {
			this.actions.useMove('swift', target);
		},
	},
	needlearm: {
		inherit: true,
		basePowerCallback(pokemon, target) {
			if (target.volatiles['minimize']) return 120;
			return 60;
		},
	},
	nightmare: {
		inherit: true,
		accuracy: true,
	},
	odorsleuth: {
		inherit: true,
		accuracy: 100,
	},
	outrage: {
		inherit: true,
		basePower: 90,
	},
	overheat: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	petaldance: {
		inherit: true,
		basePower: 70,
	},
	recover: {
		inherit: true,
		pp: 20,
	},
	rocksmash: {
		inherit: true,
		basePower: 20,
	},
	sketch: {
		inherit: true,
		flags: {bypasssub: 1, failencore: 1, noassist: 1, failmimic: 1},
	},
	sleeptalk: {
		inherit: true,
		onHit(pokemon) {
			const moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const moveid = moveSlot.id;
				const pp = moveSlot.pp;
				const move = this.dex.moves.get(moveid);
				if (moveid && !move.flags['nosleeptalk'] && !move.flags['charge']) {
					moves.push({move: moveid, pp: pp});
				}
			}
			if (!moves.length) {
				return false;
			}
			const randomMove = this.sample(moves);
			if (!randomMove.pp) {
				this.add('cant', pokemon, 'nopp', randomMove.move);
				return;
			}
			this.actions.useMove(randomMove.move, pokemon);
		},
	},
	spite: {
		inherit: true,
		onHit(target) {
			const roll = this.random(2, 6);
			if (target.lastMove && target.deductPP(target.lastMove.id, roll)) {
				this.add("-activate", target, 'move: Spite', target.lastMove.id, roll);
				return;
			}
			return false;
		},
	},
	stockpile: {
		inherit: true,
		pp: 10,
		condition: {
			noCopy: true,
			onStart(target) {
				this.effectState.layers = 1;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
			},
			onRestart(target) {
				if (this.effectState.layers >= 3) return false;
				this.effectState.layers++;
				this.add('-start', target, 'stockpile' + this.effectState.layers);
			},
			onEnd(target) {
				this.effectState.layers = 0;
				this.add('-end', target, 'Stockpile');
			},
		},
	},
	struggle: {
		inherit: true,
		flags: {contact: 1, protect: 1, noassist: 1, failencore: 1, failmimic: 1},
		accuracy: 100,
		recoil: [1, 4],
		struggleRecoil: false,
	},
	surf: {
		inherit: true,
		target: "allAdjacentFoes",
	},
	taunt: {
		inherit: true,
		flags: {protect: 1, bypasssub: 1},
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 10,
			onResidualSubOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.move).category === 'Status') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMove(attacker, defender, move) {
				if (move.category === 'Status') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
	},
	teeterdance: {
		inherit: true,
		flags: {protect: 1},
	},
	tickle: {
		inherit: true,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1},
	},
	uproar: {
		inherit: true,
		condition: {
			onStart(target) {
				this.add('-start', target, 'Uproar');
				// 2-5 turns
				this.effectState.duration = this.random(2, 6);
			},
			onResidual(target) {
				if (target.volatiles['throatchop']) {
					target.removeVolatile('uproar');
					return;
				}
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['uproar'];
				}
				this.add('-start', target, 'Uproar', '[upkeep]');
			},
			onResidualOrder: 10,
			onResidualSubOrder: 11,
			onEnd(target) {
				this.add('-end', target, 'Uproar');
			},
			onLockMove: 'uproar',
			onAnySetStatus(status, pokemon) {
				if (status.id === 'slp') {
					if (pokemon === this.effectState.target) {
						this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
					} else {
						this.add('-fail', pokemon, 'slp', '[from] Uproar');
					}
					return null;
				}
			},
		},
	},
	vinewhip: {
		inherit: true,
		pp: 10,
	},
	volttackle: {
		inherit: true,
		secondary: null,
	},
	waterfall: {
		inherit: true,
		secondary: null,
	},
	weatherball: {
		inherit: true,
		onModifyMove(move) {
			switch (this.field.effectiveWeather()) {
			case 'sunnyday':
				move.type = 'Fire';
				move.category = 'Special';
				break;
			case 'raindance':
				move.type = 'Water';
				move.category = 'Special';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				move.category = 'Special';
				break;
			}
			if (this.field.effectiveWeather()) move.basePower *= 2;
		},
	},
	zapcannon: {
		inherit: true,
		basePower: 100,
	},
	
	//1.8 moves begin here
	
	absorb2: {
		inherit: true,
		gen: 3,
	},
	aeroblast2: {
		inherit: true,
		gen: 3,
	},
	agility2: {
		inherit: true,
		gen: 3,
	},
	airslash2: {
		inherit: true,
		gen: 3,
	},
	amnesia2: {
		inherit: true,
		gen: 3,
	},
	ancientpower2: {
		inherit: true,
		gen: 3,
	},
	aquajet2: {
		inherit: true,
		gen: 3,
	},
	aquashower: {
		inherit: true,
		gen: 3,
	},
	aromatherapy2: {
		inherit: true,
		gen: 3,
	},
	assist2: {
		inherit: true,
		gen: 3,
	},
	astonish2: {
		inherit: true,
		gen: 3,
	},
	attract2: {
		inherit: true,
		gen: 3,
	},
	aurorabeam2: {
		inherit: true,
		gen: 3,
	},
	barrage2: {
		inherit: true,
		gen: 3,
	},
	barrier2: {
		inherit: true,
		gen: 3,
	},
	batonpass2: {
		inherit: true,
		gen: 3,
	},
	batterycharge: {
		inherit: true,
		gen: 3,
	},
	battlechant: {
		inherit: true,
		gen: 3,
	},
	beatup2: {
		inherit: true,
		gen: 3,
	},
	bellydrum2: {
		inherit: true,
		gen: 3,
	},
	bind2: {
		inherit: true,
		gen: 3,
	},
	bindingvoice: {
		inherit: true,
		gen: 3,
	},
	bite2: {
		inherit: true,
		gen: 3,
	},
	blackripple: {
		inherit: true,
		gen: 3,
	},
	bladeflash: {
		inherit: true,
		gen: 3,
	},
	blastburn2: {
		inherit: true,
		gen: 3,
	},
	blazekick2: {
		inherit: true,
		gen: 3,
	},
	blizzard2: {
		inherit: true,
		onModifyMove() { },
		gen: 3,
	},
	block2: {
		inherit: true,
		gen: 3,
	},
	bodyslam2: {
		inherit: true,
		gen: 3,
	},
	boneclub2: {
		inherit: true,
		gen: 3,
	},
	bonerush2: {
		inherit: true,
		gen: 3,
	},
	bonemerang2: {
		inherit: true,
		gen: 3,
	},
	bounce2: {
		inherit: true,
		gen: 3,
	},
	bravebird2: {
		inherit: true,
		gen: 3,
	},
	braver: {
		inherit: true,
		gen: 3,
	},
	brickbreak2: {
		inherit: true,
		gen: 3,
	},
	bubble2: {
		inherit: true,
		gen: 3,
	},
	bubblebeam2: {
		inherit: true,
		gen: 3,
	},
	bulkup2: {
		inherit: true,
		gen: 3,
	},
	bulletseed2: {
		inherit: true,
		gen: 3,
	},
	burnpowder: {
		inherit: true,
		gen: 3,
	},
	calmmind2: {
		inherit: true,
		gen: 3,
	},
	camouflage2: {
		inherit: true,
		gen: 3,
	},
	chargebeam2: {
		inherit: true,
		gen: 3,
	},
	charminglook: {
		inherit: true,
		gen: 3,
	},
	coerce: {
		inherit: true,
		gen: 3,
	},
	cometpunch2: {
		inherit: true,
		gen: 3,
	},
	confuseray2: {
		inherit: true,
		gen: 3,
	},
	constrict2: {
		inherit: true,
		gen: 3,
	},
	conversionb: {
		inherit: true,
		gen: 3,
	},
	conversion2b: {
		inherit: true,
		gen: 3,
	},
	cottonspore2: {
		inherit: true,
		gen: 3,
	},
	counter2: {
		inherit: true,
		gen: 3,
	},
	crosschop2: {
		inherit: true,
		gen: 3,
	},
	crosspoison2: {
		inherit: true,
		gen: 3,
	},
	crunch2: {
		inherit: true,
		gen: 3,
	},
	crushclaw2: {
		inherit: true,
		gen: 3,
	},
	curse2: {
		inherit: true,
		gen: 3,
	},
	cut2: {
		inherit: true,
		gen: 3,
	},
	darkpulse2: {
		inherit: true,
		gen: 3,
	},
	decision: {
		inherit: true,
		gen: 3,
	},
	defensecurl2: {
		inherit: true,
		gen: 3,
	},
	destinybond2: {
		inherit: true,
		gen: 3,
	},
	detect2: {
		inherit: true,
		gen: 3,
	},
	dig2: {
		inherit: true,
		gen: 3,
	},
	disable2: {
		inherit: true,
		gen: 3,
	},
	discharge2: {
		inherit: true,
		gen: 3,
	},
	disperse: {
		inherit: true,
		gen: 3,
	},
	disturbance: {
		inherit: true,
		gen: 3,
	},
	dizzypunch2: {
		inherit: true,
		gen: 3,
	},
	doubleedge2: {
		inherit: true,
		gen: 3,
	},
	doublekick2: {
		inherit: true,
		gen: 3,
	},
	doubleteam2: {
		inherit: true,
		gen: 3,
	},
	meteorstorm: {
		inherit: true,
		gen: 3,
	},
	drainpunch2: {
		inherit: true,
		gen: 3,
	},
	drawnline: {
		inherit: true,
		gen: 3,
	},
	dreameater2: {
		inherit: true,
		gen: 3,
	},
	dynamicpunch2: {
		inherit: true,
		gen: 3,
	},
	earthpower2: {
		inherit: true,
		gen: 3,
	},
	earthquake2: {
		inherit: true,
		gen: 3,
	},
	ember2: {
		inherit: true,
		gen: 3,
	},
	encore2: {
		inherit: true,
		gen: 3,
	},
	endeavor2: {
		inherit: true,
		gen: 3,
	},
	endure2: {
		inherit: true,
		gen: 3,
	},
	energyball2: {
		inherit: true,
		gen: 3,
	},
	energylight: {
		inherit: true,
		gen: 3,
	},
	eruption2: {
		inherit: true,
		gen: 3,
	},
	explosion2: {
		inherit: true,
		gen: 3,
	},
	extrasensory2: {
		inherit: true,
		gen: 3,
	},
	extremespeed2: {
		inherit: true,
		gen: 3,
	},
	facade2: {
		inherit: true,
		gen: 3,
	},
	feintattack2: {
		inherit: true,
		gen: 3,
	},
	fakeout2: {
		inherit: true,
		gen: 3,
	},
	faketears2: {
		inherit: true,
		gen: 3,
	},
	falseswipe2: {
		inherit: true,
		gen: 3,
	},
	feint2: {
		inherit: true,
		gen: 3,
	},
	fireblast2: {
		inherit: true,
		gen: 3,
	},
	firepunch2: {
		inherit: true,
		gen: 3,
	},
	firespin2: {
		inherit: true,
		gen: 3,
	},
	fissure2: {
		inherit: true,
		gen: 3,
	},
	flail2: {
		inherit: true,
		gen: 3,
	},
	flamewheel2: {
		inherit: true,
		gen: 3,
	},
	flamethrower2: {
		inherit: true,
		gen: 3,
	},
	flareblitz2: {
		inherit: true,
		gen: 3,
	},
	flash2: {
		inherit: true,
		gen: 3,
	},
	fly2: {
		inherit: true,
		gen: 3,
	},
	focusenergy2: {
		inherit: true,
		gen: 3,
	},
	focuspunch2: {
		inherit: true,
		gen: 3,
	},
	forcepalm2: {
		inherit: true,
		gen: 3,
	},
	foresight2: {
		inherit: true,
		gen: 3,
	},
	frenzyplant2: {
		inherit: true,
		gen: 3,
	},
	frustration2: {
		inherit: true,
		gen: 3,
	},
	furycutter2: {
		inherit: true,
		gen: 3,
	},
	furyswipes2: {
		inherit: true,
		gen: 3,
	},
	gale: {
		inherit: true,
		gen: 3,
	},
	gigadrain2: {
		inherit: true,
		gen: 3,
	},
	gigaimpact2: {
		inherit: true,
		gen: 3,
	},
	growl2: {
		inherit: true,
		gen: 3,
	},
	growth2: {
		inherit: true,
		gen: 3,
	},
	guard: {
		inherit: true,
		gen: 3,
	},
	gunkshot2: {
		inherit: true,
		gen: 3,
	},
	gust2: {
		inherit: true,
		gen: 3,
	},
	hail2: {
		inherit: true,
		gen: 3,
	},
	harden2: {
		inherit: true,
		gen: 3,
	},
	haze2: {
		inherit: true,
		gen: 3,
	},
	headrush: {
		inherit: true,
		gen: 3,
	},
	headsmash2: {
		inherit: true,
		gen: 3,
	},
	headbutt2: {
		inherit: true,
		gen: 3,
	},
	healbell2: {
		inherit: true,
		gen: 3,
	},
	heartbreak: {
		inherit: true,
		gen: 3,
	},
	heartseye: {
		inherit: true,
		gen: 3,
	},
	beastclaw: {
		inherit: true,
		gen: 3,
	},
	heatwave2: {
		inherit: true,
		gen: 3,
	},
	helpinghand2: {
		inherit: true,
		gen: 3,
	},
	highjumpkick2: {
		inherit: true,
		gen: 3,
	},
	howl2: {
		inherit: true,
		gen: 3,
	},
	hydrocannon2: {
		inherit: true,
		gen: 3,
	},
	hydropump2: {
		inherit: true,
		gen: 3,
	},
	hyperbeam2: {
		inherit: true,
		gen: 3,
	},
	hypervoice2: {
		inherit: true,
		gen: 3,
	},
	hypnosis2: {
		inherit: true,
		gen: 3,
	},
	iceball2: {
		inherit: true,
		gen: 3,
	},
	icebeam2: {
		inherit: true,
		gen: 3,
	},
	icepunch2: {
		inherit: true,
		gen: 3,
	},
	iceshard2: {
		inherit: true,
		gen: 3,
	},
	icywind2: {
		inherit: true,
		gen: 3,
	},
	imprison2: {
		inherit: true,
		gen: 3,
	},
	ingrain2: {
		inherit: true,
		gen: 3,
	},
	irondefense2: {
		inherit: true,
		gen: 3,
	},
	jamming: {
		inherit: true,
		gen: 3,
	},
	judgement: {
		inherit: true,
		gen: 3,
	},
	jumpkick2: {
		inherit: true,
		gen: 3,
	},
	karatechop2: {
		inherit: true,
		gen: 3,
	},
	killingbite: {
		inherit: true,
		gen: 3,
	},
	knifethrow: {
		inherit: true,
		gen: 3,
	},
	knockoff2: {
		inherit: true,
		gen: 3,
	},
	lavaplume2: {
		inherit: true,
		gen: 3,
	},
	leafblade2: {
		inherit: true,
		gen: 3,
	},
	leechlife2: {
		inherit: true,
		gen: 3,
	},
	leechseed2: {
		inherit: true,
		gen: 3,
	},
	leer2: {
		inherit: true,
		gen: 3,
	},
	lick2: {
		inherit: true,
		gen: 3,
	},
	lightscreen2: {
		inherit: true,
		gen: 3,
	},
	lockon2: {
		inherit: true,
		gen: 3,
	},
	lovelykiss2: {
		inherit: true,
		gen: 3,
	},
	lowkick2: {
		inherit: true,
		gen: 3,
	},
	luckychant2: {
		inherit: true,
		gen: 3,
	},
	lunatic: {
		inherit: true,
		gen: 3,
	},
	lusterpurge2: {
		inherit: true,
		gen: 3,
	},
	machpunch2: {
		inherit: true,
		gen: 3,
	},
	magiccoat2: {
		inherit: true,
		gen: 3,
	},
	magicknife: {
		inherit: true,
		gen: 3,
	},
	magicalleaf2: {
		inherit: true,
		gen: 3,
	},
	magnitude2: {
		inherit: true,
		gen: 3,
	},
	manaburst: {
		inherit: true,
		gen: 3,
	},
	manacharge: {
		inherit: true,
		gen: 3,
	},
	manashield: {
		inherit: true,
		gen: 3,
	},
	megadrain2: {
		inherit: true,
		gen: 3,
	},
	memento2: {
		inherit: true,
		gen: 3,
	},
	metalclaw2: {
		inherit: true,
		gen: 3,
	},
	meteormash2: {
		inherit: true,
		gen: 3,
	},
	metronome2: {
		inherit: true,
		gen: 3,
	},
	milkdrink2: {
		inherit: true,
		gen: 3,
	},
	mimic2: {
		inherit: true,
		gen: 3,
	},
	mindbomb: {
		inherit: true,
		gen: 3,
	},
	minimize2: {
		inherit: true,
		gen: 3,
	},
	mirrorcoat2: {
		inherit: true,
		gen: 3,
	},
	mirrorshot2: {
		inherit: true,
		gen: 3,
	},
	mist2: {
		inherit: true,
		gen: 3,
	},
	mistball2: {
		inherit: true,
		gen: 3,
	},
	mudshot2: {
		inherit: true,
		gen: 3,
	},
	mudslap2: {
		inherit: true,
		gen: 3,
	},
	muddywater2: {
		inherit: true,
		gen: 3,
	},
	mysticwater: {
		inherit: true,
		gen: 3,
	},
	nastyplot2: {
		inherit: true,
		gen: 3,
	},
	naturepower2: {
		inherit: true,
		gen: 3,
	},
	naturesound: {
		inherit: true,
		gen: 3,
	},
	needlearm2: {
		inherit: true,
		gen: 3,
	},
	nightshade2: {
		inherit: true,
		gen: 3,
	},
	nightslash2: {
		inherit: true,
		gen: 3,
	},
	nightmare2: {
		inherit: true,
		gen: 3,
	},
	ominouswind2: {
		inherit: true,
		gen: 3,
	},
	outrage2: {
		inherit: true,
		gen: 3,
	},
	painsplit2: {
		inherit: true,
		gen: 3,
	},
	payday2: {
		inherit: true,
		gen: 3,
	},
	peck2: {
		inherit: true,
		gen: 3,
	},
	performance: {
		inherit: true,
		gen: 3,
	},
	perishsong2: {
		inherit: true,
		gen: 3,
	},
	pinmissile2: {
		inherit: true,
		gen: 3,
	},
	poisonbomb: {
		inherit: true,
		gen: 3,
	},
	poisonjab2: {
		inherit: true,
		gen: 3,
	},
	poisonsting2: {
		inherit: true,
		gen: 3,
	},
	poisontears: {
		inherit: true,
		gen: 3,
	},
	poisonpowder2: {
		inherit: true,
		gen: 3,
	},
	pound2: {
		inherit: true,
		gen: 3,
	},
	powdersnow2: {
		inherit: true,
		gen: 3,
	},
	powerwhip2: {
		inherit: true,
		gen: 3,
	},
	prank: {
		inherit: true,
		gen: 3,
	},
	protect2: {
		inherit: true,
		gen: 3,
	},
	psybeam2: {
		inherit: true,
		gen: 3,
	},
	psychup2: {
		inherit: true,
		gen: 3,
	},
	psychoboost2: {
		inherit: true,
		gen: 3,
	},
	psychocut2: {
		inherit: true,
		gen: 3,
	},
	psyshot: {
		inherit: true,
		gen: 3,
	},
	psywave2: {
		inherit: true,
		gen: 3,
	},
	pursuit2: {
		inherit: true,
		gen: 3,
	},
	quickattack2: {
		inherit: true,
		gen: 3,
	},
	rage2: {
		inherit: true,
		gen: 3,
	},
	raindance2: {
		inherit: true,
		gen: 3,
	},
	rapidspin2: {
		inherit: true,
		gen: 3,
	},
	razorleaf2: {
		inherit: true,
		gen: 3,
	},
	razorwind2: {
		inherit: true,
		gen: 3,
	},
	recollection: {
		inherit: true,
		gen: 3,
	},
	recover2: {
		inherit: true,
		gen: 3,
	},
	recycle2: {
		inherit: true,
		gen: 3,
	},
	reflect2: {
		inherit: true,
		gen: 3,
	},
	refresh2: {
		inherit: true,
		gen: 3,
	},
	rest2: {
		inherit: true,
		gen: 3,
	},
	return2: {
		inherit: true,
		gen: 3,
	},
	revenge2: {
		inherit: true,
		gen: 3,
	},
	reversal2: {
		inherit: true,
		gen: 3,
	},
	roar2: {
		inherit: true,
		gen: 3,
	},
	rockblast2: {
		inherit: true,
		gen: 3,
	},
	rockbullet: {
		inherit: true,
		gen: 3,
	},
	rockslide2: {
		inherit: true,
		gen: 3,
	},
	rocksmash2: {
		inherit: true,
		gen: 3,
	},
	rocktomb2: {
		inherit: true,
		gen: 3,
	},
	rockwrecker2: {
		inherit: true,
		gen: 3,
	},
	rollingkick2: {
		inherit: true,
		gen: 3,
	},
	roost2: {
		inherit: true,
		gen: 3,
	},
	sacredfire2: {
		inherit: true,
		gen: 3,
	},
	safeguard2: {
		inherit: true,
		gen: 3,
	},
	lunadial: {
		inherit: true,
		gen: 3,
	},
	sandattack2: {
		inherit: true,
		gen: 3,
	},
	sandtomb2: {
		inherit: true,
		gen: 3,
	},
	sandstorm2: {
		inherit: true,
		gen: 3,
	},
	scaryface2: {
		inherit: true,
		gen: 3,
	},
	scratch2: {
		inherit: true,
		gen: 3,
	},
	screech2: {
		inherit: true,
		gen: 3,
	},
	sculpture: {
		inherit: true,
		gen: 3,
	},
	sealingneedle: {
		inherit: true,
		gen: 3,
	},
	secretpower2: {
		inherit: true,
		gen: 3,
	},
	seismictoss2: {
		inherit: true,
		gen: 3,
	},
	selfdestruct2: {
		inherit: true,
		gen: 3,
	},
	shadowball2: {
		inherit: true,
		gen: 3,
	},
	shadowdance: {
		inherit: true,
		gen: 3,
	},
	shadowdive: {
		inherit: true,
		gen: 3,
	},
	shadowhit: {
		inherit: true,
		gen: 3,
	},
	shadowpunch2: {
		inherit: true,
		gen: 3,
	},
	sharpen2: {
		inherit: true,
		gen: 3,
	},
	sheercold2: {
		inherit: true,
		gen: 3,
	},
	shockwave2: {
		inherit: true,
		gen: 3,
	},
	signalbeam2: {
		inherit: true,
		gen: 3,
	},
	silverwind2: {
		inherit: true,
		gen: 3,
	},
	sing2: {
		inherit: true,
		gen: 3,
	},
	sketch2: {
		inherit: true,
		gen: 3,
	},
	skillswap2: {
		inherit: true,
		gen: 3,
	},
	skullbash2: {
		inherit: true,
		gen: 3,
	},
	skyattack2: {
		inherit: true,
		gen: 3,
	},
	slackoff2: {
		inherit: true,
		gen: 3,
	},
	slash2: {
		inherit: true,
		gen: 3,
	},
	sleeppowder2: {
		inherit: true,
		gen: 3,
	},
	sleeptalk2: {
		inherit: true,
		gen: 3,
	},
	smellingsalts2: {
		inherit: true,
		gen: 3,
	},
	smile: {
		inherit: true,
		gen: 3,
	},
	smokescreen2: {
		inherit: true,
		gen: 3,
	},
	snatch2: {
		inherit: true,
		gen: 3,
	},
	snore2: {
		inherit: true,
		gen: 3,
	},
	soar: {
		inherit: true,
		gen: 3,
	},
	softboiled2: {
		inherit: true,
		gen: 3,
	},
	solarbeam2: {
		inherit: true,
		gen: 3,
	},
	sonicboom2: {
		inherit: true,
		gen: 3,
	},
	spiderweb2: {
		inherit: true,
		gen: 3,
	},
	spikes2: {
		inherit: true,
		gen: 3,
	},
	spite2: {
		inherit: true,
		gen: 3,
	},
	splash2: {
		inherit: true,
		gen: 3,
	},
	splashing: {
		inherit: true,
		gen: 3,
	},
	steelfist: {
		inherit: true,
		gen: 3,
	},
	steelwing2: {
		inherit: true,
		gen: 3,
	},
	stomp2: {
		inherit: true,
		gen: 3,
	},
	strength2: {
		inherit: true,
		gen: 3,
	},
	stunspore2: {
		inherit: true,
		gen: 3,
	},
	submission2: {
		inherit: true,
		gen: 3,
	},
	substitute2: {
		inherit: true,
		gen: 3,
	},
	sunnyday2: {
		inherit: true,
		gen: 3,
	},
	superpower2: {
		inherit: true,
		gen: 3,
	},
	surf2: {
		inherit: true,
		gen: 3,
	},
	swagger2: {
		inherit: true,
		gen: 3,
	},
	sweetkiss2: {
		inherit: true,
		gen: 3,
	},
	swift2: {
		inherit: true,
		gen: 3,
	},
	swordsdance2: {
		inherit: true,
		gen: 3,
	},
	synthesis2: {
		inherit: true,
		gen: 3,
	},
	tackle2: {
		inherit: true,
		gen: 3,
	},
	tailwhip2: {
		inherit: true,
		gen: 3,
	},
	tailwind2: {
		inherit: true,
		gen: 3,
	},
	taunt2: {
		inherit: true,
		gen: 3,
	},
	teeterdance2: {
		inherit: true,
		gen: 3,
	},
	teleport2: {
		inherit: true,
		gen: 3,
	},
	thief2: {
		inherit: true,
		gen: 3,
	},
	thrash2: {
		inherit: true,
		gen: 3,
	},
	thunder2: {
		inherit: true,
		gen: 3,
	},
	thunderwave2: {
		inherit: true,
		gen: 3,
	},
	thunderbolt2: {
		inherit: true,
		gen: 3,
	},
	thunderpunch2: {
		inherit: true,
		gen: 3,
	},
	thundershock2: {
		inherit: true,
		gen: 3,
	},
	tickle2: {
		inherit: true,
		gen: 3,
	},
	torment2: {
		inherit: true,
		gen: 3,
	},
	toxic2: {
		inherit: true,
		gen: 3,
	},
	toxicgas: {
		inherit: true,
		gen: 3,
	},
	transform2: {
		inherit: true,
		gen: 3,
	},
	tremors: {
		inherit: true,
		gen: 3,
	},
	triattack2: {
		inherit: true,
		gen: 3,
	},
	trick2: {
		inherit: true,
		gen: 3,
	},
	triplekick2: {
		inherit: true,
		gen: 3,
	},
	twister2: {
		inherit: true,
		gen: 3,
	},
	vinewhip2: {
		inherit: true,
		gen: 3,
	},
	vitalthrow2: {
		inherit: true,
		gen: 3,
	},
	volttackle2: {
		inherit: true,
		gen: 3,
	},
	wanting: {
		inherit: true,
		gen: 3,
	},
	watergun2: {
		inherit: true,
		gen: 3,
	},
	waterpulse2: {
		inherit: true,
		gen: 3,
	},
	waterfall2: {
		inherit: true,
		gen: 3,
	},
	weatherball2: {
		inherit: true,
		gen: 3,
	},
	whirlpool2: {
		inherit: true,
		gen: 3,
	},
	whirlwind2: {
		inherit: true,
		gen: 3,
	},
	willowisp2: {
		inherit: true,
		gen: 3,
	},
	wingattack2: {
		inherit: true,
		gen: 3,
	},
	wireweb: {
		inherit: true,
		gen: 3,
	},
	wish2: {
		inherit: true,
		gen: 3,
	},
	withdraw2: {
		inherit: true,
		gen: 3,
	},
	wrap2: {
		inherit: true,
		gen: 3,
	},
	yawn2: {
		inherit: true,
		gen: 3,
	},
	zenheadbutt2: {
		inherit: true,
		gen: 3,
	},
	checkmaid: {
		inherit: true,
		gen: 3,
	},

};
