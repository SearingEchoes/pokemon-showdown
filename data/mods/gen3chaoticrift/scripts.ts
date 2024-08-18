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
				} else if (item.zMove === true && move.type === item.zMoveType) {
					if (move.category === "Status") {
						return move.name;
					} else if (move.zMove?.basePower) {
						return this.Z_MOVES[move.type];
					}
				}
			},

			





	},
	
};
