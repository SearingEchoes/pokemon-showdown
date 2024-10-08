export const Scripts: ModdedBattleScriptsData = {
	gen: 3,
	inherit: 'gen3',
	
	init() {
		const originalMoves = this.mod().data.Moves;
		let originalCategory = '';
		for (const i in this.data.Moves) {
				if (this.data.Moves[i].category === 'Status') continue;
				originalCategory = originalMoves[i].category;
				if (originalCategory !== this.data.Moves[i].category) {
						this.modData('Moves', i).category = originalCategory;
				}
		}
		
		this.modData('Learnsets', 'speedkoishi').learnset.fling = ['3L1'];
		this.modData('Learnsets', 'satori').learnset.photongeyser = ['3L1'];
		this.modData('Learnsets', 'satori').learnset.takeheart = ['3L1'];
		this.modData('Learnsets', 'satori').learnset.magmastorm = ['3L1'];
		
	},
	
	actions: {

	// 1 Z per pokemon
	canZMove(pokemon) {
		if (pokemon.m.zMoveUsed ||
			(pokemon.transformed &&
				(pokemon.species.isMega || pokemon.species.isPrimal || pokemon.species.forme === "Ultra"))
		) return;
		const item = pokemon.getItem();
		if (!item.zMove) return;
		if (item.itemUser && !item.itemUser.includes(pokemon.species.name)) return;
		let atLeastOne = false;
		let mustStruggle = true;
		const zMoves: ZMoveOptions = [];
		for (const moveSlot of pokemon.moveSlots) {
			if (moveSlot.pp <= 0) {
				zMoves.push(null);
				continue;
			}
			if (!moveSlot.disabled) {
				mustStruggle = false;
			}
			const move = this.dex.moves.get(moveSlot.move);
			let zMoveName = this.getZMove(move, pokemon, true) || '';
			if (zMoveName) {
				const zMove = this.dex.moves.get(zMoveName);
				if (!zMove.isZ && zMove.category === 'Status') zMoveName = "Z-" + zMoveName;
				zMoves.push({move: zMoveName, target: zMove.target});
			} else {
				zMoves.push(null);
			}
			if (zMoveName) atLeastOne = true;
		}
		if (atLeastOne && !mustStruggle) return zMoves;
	},

	getZMove(move, pokemon, skipChecks) {
		const item = pokemon.getItem();
		if (!skipChecks) {
			if (pokemon.m.zMoveUsed) return;
			if (!item.zMove) return;
			if (item.itemUser && !item.itemUser.includes(pokemon.species.name)) return;
			const moveData = pokemon.getMoveData(move);
			// Draining the PP of the base move prevents the corresponding Z-move from being used.
			if (!moveData?.pp) return;
		}

		if (move.name === item.zMoveFrom) {
			return item.zMove as string;
		} else if (item.zMoveFrom === 'tbblade' && move.flags['slicing']) {
			return item.zMove as string;
		} else if (item.zMoveFrom === 'gblazer' && move.flags['charge']) {
			return item.zMove as string;
		} else if (item.zMoveFrom === 'dflurry' && (move.type === 'Grass' || move.type === 'Nature')) {
			return item.zMove as string;
		} else if (item.zMove === true && move.type === item.zMoveType) {
			if (move.category === "Status") {
				return move.name;
			} else if (move.zMove?.basePower) {
				return this.Z_MOVES[move.type];
			}
		}
	},

	getActiveZMove(move: Move, pokemon: Pokemon): ActiveMove {
		if (pokemon) {
			const item = pokemon.getItem();
			if (move.name === item.zMoveFrom) {
				const zMove = this.dex.getActiveMove(item.zMove as string);
				zMove.isZOrMaxPowered = true;
				return zMove;
			} else if (item.id === 'swordofzerker' || item.id === 'rockofsaurian' || item.id === 'starofninja') {
				const zMove = this.dex.getActiveMove(item.zMove as string);
				zMove.isZOrMaxPowered = true;
				return zMove;	
			}
		}

		if (move.category === 'Status') {
			const zMove = this.dex.getActiveMove(move);
			zMove.isZ = true;
			zMove.isZOrMaxPowered = true;
			return zMove;
		}
		
		const zMove = this.dex.getActiveMove(this.Z_MOVES[move.type]);
		zMove.basePower = move.zMove!.basePower!;
		zMove.category = move.category;
		// copy the priority for Quick Guard
		zMove.priority = move.priority;
		zMove.isZOrMaxPowered = true;
		return zMove;
	},
			
	runMove(
		moveOrMoveName: Move | string, pokemon: Pokemon, targetLoc: number, sourceEffect?: Effect | null,
		zMove?: string, externalMove?: boolean, maxMove?: string, originalTarget?: Pokemon
	) {
		pokemon.activeMoveActions++;
		let target = this.battle.getTarget(pokemon, maxMove || zMove || moveOrMoveName, targetLoc, originalTarget);
		let baseMove = this.dex.getActiveMove(moveOrMoveName);
		const pranksterBoosted = baseMove.pranksterBoosted;
		if (baseMove.id !== 'struggle' && !zMove && !maxMove && !externalMove) {
			const changedMove = this.battle.runEvent('OverrideAction', pokemon, target, baseMove);
			if (changedMove && changedMove !== true) {
				baseMove = this.dex.getActiveMove(changedMove);
				if (pranksterBoosted) baseMove.pranksterBoosted = pranksterBoosted;
				target = this.battle.getRandomTarget(pokemon, baseMove);
			}
		}
		let move = baseMove;
		if (zMove) {
			move = this.getActiveZMove(baseMove, pokemon);
		} else if (maxMove) {
			move = this.getActiveMaxMove(baseMove, pokemon);
		}

		move.isExternal = externalMove;

		this.battle.setActiveMove(move, pokemon, target);

		/* if (pokemon.moveThisTurn) {
			// THIS IS PURELY A SANITY CHECK
			// DO NOT TAKE ADVANTAGE OF THIS TO PREVENT A POKEMON FROM MOVING;
			// USE this.queue.cancelMove INSTEAD
			this.battle.debug('' + pokemon.id + ' INCONSISTENT STATE, ALREADY MOVED: ' + pokemon.moveThisTurn);
			this.battle.clearActiveMove(true);
			return;
		} */
		const willTryMove = this.battle.runEvent('BeforeMove', pokemon, target, move);
		if (!willTryMove) {
			this.battle.runEvent('MoveAborted', pokemon, target, move);
			this.battle.clearActiveMove(true);
			// The event 'BeforeMove' could have returned false or null
			// false indicates that this counts as a move failing for the purpose of calculating Stomping Tantrum's base power
			// null indicates the opposite, as the Pokemon didn't have an option to choose anything
			pokemon.moveThisTurnResult = willTryMove;
			return;
		}

		// Used exclusively for a hint later
		if (move.flags['cantusetwice'] && pokemon.lastMove?.id === move.id) {
			pokemon.addVolatile(move.id);
		}

		if (move.beforeMoveCallback) {
			if (move.beforeMoveCallback.call(this.battle, pokemon, target, move)) {
				this.battle.clearActiveMove(true);
				pokemon.moveThisTurnResult = false;
				return;
			}
		}
		pokemon.lastDamage = 0;
		let lockedMove;
		if (!externalMove) {
			lockedMove = this.battle.runEvent('LockMove', pokemon);
			if (lockedMove === true) lockedMove = false;
			if (!lockedMove) {
				if (!pokemon.deductPP(baseMove, null, target) && (move.id !== 'struggle')) {
					this.battle.add('cant', pokemon, 'nopp', move);
					this.battle.clearActiveMove(true);
					pokemon.moveThisTurnResult = false;
					return;
				}
			} else {
				sourceEffect = this.dex.conditions.get('lockedmove');
			}
			pokemon.moveUsed(move, targetLoc);
		}

		// Dancer Petal Dance hack
		// TODO: implement properly
		const noLock = externalMove && !pokemon.volatiles['lockedmove'];

		if (zMove) {
			if (pokemon.illusion) {
				this.battle.singleEvent('End', this.dex.abilities.get('Illusion'), pokemon.abilityState, pokemon);
			}
			this.battle.add('-zpower', pokemon);
			// In SSB Z-Moves are limited to 1 per pokemon.
			pokemon.m.zMoveUsed = true;
		}
			
		const oldActiveMove = move;

		const moveDidSomething = this.useMove(baseMove, pokemon, target, sourceEffect, zMove, maxMove);
		this.battle.lastSuccessfulMoveThisTurn = moveDidSomething ? this.battle.activeMove && this.battle.activeMove.id : null;
		if (this.battle.activeMove) move = this.battle.activeMove;
		this.battle.singleEvent('AfterMove', move, null, pokemon, target, move);
		this.battle.runEvent('AfterMove', pokemon, target, move);
		if (move.flags['cantusetwice'] && pokemon.removeVolatile(move.id)) {
			this.battle.add('-hint', `Some effects can force a Pokemon to use ${move.name} again in a row.`);
		}

		// Dancer's activation order is completely different from any other event, so it's handled separately
		if (move.flags['dance'] && moveDidSomething && !move.isExternal) {
			const dancers = [];
			for (const currentPoke of this.battle.getAllActive()) {
				if (pokemon === currentPoke) continue;
				if (currentPoke.hasAbility('dancer') && !currentPoke.isSemiInvulnerable()) {
					dancers.push(currentPoke);
				}
			}
			// Dancer activates in order of lowest speed stat to highest
			// Note that the speed stat used is after any volatile replacements like Speed Swap,
			// but before any multipliers like Agility or Choice Scarf
			// Ties go to whichever Pokemon has had the ability for the least amount of time
			dancers.sort(
				(a, b) => -(b.storedStats['spe'] - a.storedStats['spe']) || b.abilityOrder - a.abilityOrder
			);
			const targetOf1stDance = this.battle.activeTarget!;
			for (const dancer of dancers) {
				if (this.battle.faintMessages()) break;
				if (dancer.fainted) continue;
				this.battle.add('-activate', dancer, 'ability: Dancer');
				const dancersTarget = !targetOf1stDance.isAlly(dancer) && pokemon.isAlly(dancer) ?
					targetOf1stDance :
					pokemon;
				const dancersTargetLoc = dancer.getLocOf(dancersTarget);
				this.runMove(move.id, dancer, dancersTargetLoc, this.dex.abilities.get('dancer'), undefined, true);
			}
		}
		if (noLock && pokemon.volatiles['lockedmove']) delete pokemon.volatiles['lockedmove'];
		this.battle.faintMessages();
		this.battle.checkWin();

		if (this.battle.gen <= 4) {
			// In gen 4, the outermost move is considered the last move for Copycat
			this.battle.activeMove = oldActiveMove;
		}
	},





},
	
};
