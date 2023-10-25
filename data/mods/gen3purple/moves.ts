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
	rapidspin2: {
		inherit: true,
		self: {
			onHit(pokemon) {
				if (pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin 2', '[of] ' + pokemon);
				}
				const sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
				for (const condition of sideConditions) {
					if (pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.dex.conditions.get(condition).name, '[from] move: Rapid Spin 2', '[of] ' + pokemon);
					}
				}
				if (pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			},
		},
	},
};
