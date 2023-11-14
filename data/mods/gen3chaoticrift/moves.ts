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
};
