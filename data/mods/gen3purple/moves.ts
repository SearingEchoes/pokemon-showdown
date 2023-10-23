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
};
