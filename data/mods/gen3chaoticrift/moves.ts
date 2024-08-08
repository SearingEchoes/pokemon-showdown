export const Moves: {[k: string]: ModdedMoveData} = {
	leafstorm: {
		inherit: true,
		gen: 3,
	},
	scald: {
		inherit: true,
		gen: 3,
	},
	wish2: {
		inherit: true,
		flags: {heal: 1},
		slotCondition: 'Wish 2',
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
	},
	specialbeamcannon: {
		inherit: true,
		gen: 3,
	},
	kakarot: {
		inherit: true,
		gen: 3,
	},
	chaoswave: {
		inherit: true,
		gen: 3,
	},
	bustershell: {
		inherit: true,
		gen: 3,
	},
	killdriver: {
		inherit: true,
		gen: 3,
	},
	chaosplit: {
		inherit: true,
		gen: 3,
	},
	explode: {
		inherit: true,
		gen: 3,
	},
	boomburst: {
		inherit: true,
		gen: 3,
	},
	sparklingaria: {
		inherit: true,
		gen: 3,
	},
	aurasphere: {
		inherit: true,
		gen: 3,
	},
	drainpunch: {
		inherit: true,
		basePower: 75,
		gen: 3,
	},
	pluck: {
		inherit: true,
		gen: 3,
	},
	fling: {
		inherit: true,
		gen: 3,
	},
	dracometeor: {
		inherit: true,
		gen: 3,
	},
	spacialrend: {
		inherit: true,
		gen: 3,
	},
	takeheart: {
		inherit: true,
		gen: 3,
	},
	magmastorm: {
		inherit: true,
		gen: 3,
	},
	photongeyser: {
		inherit: true,
		gen: 3,
	},
	roost: {
		inherit: true,
		gen: 3,
	},
	ironhead: {
		inherit: true,
		gen: 3,
	},
	charge: {
		flags: {snatch: 1},
		volatileStatus: 'charge',
		condition: {
			onStart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onRestart(pokemon, source, effect) {
				if (effect && ['Electromorphosis', 'Wind Power'].includes(effect.name)) {
					this.add('-start', pokemon, 'Charge', this.activeMove!.name, '[from] ability: ' + effect.name);
				} else {
					this.add('-start', pokemon, 'Charge');
				}
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
					pokemon.removeVolatile('charge');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.type === 'Electric' && move.id !== 'charge') {
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
};
