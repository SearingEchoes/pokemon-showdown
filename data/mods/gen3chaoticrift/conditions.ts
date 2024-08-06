export const Conditions: {[k: string]: ModdedConditionData} = {

	partiallytrapped: {
		inherit: true,
		durationCallback(target, source, sourceEffect) {
			if (source.hasItem('gripclaw')) {
				return 6;
			} else if (sourceEffect.id == 'iceblitz') {
				return 3;
			} else {
				return this.random(3, 7);
			}
		},
		onStart(pokemon, source, sourceEffect) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
			
			if (sourceEffect.id == 'iceblitz') {
				this.effectState.boundDivisor = 1;
			} else {
				this.effectState.boundDivisor = source.hasItem('bindingband') ? 8 : 16;
			}
		},
		onResidual(pokemon) {
			const trapper = this.effectState.source;
			if (trapper && (!trapper.isActive || trapper.hp <= 0 || !trapper.activeTurns)) {
				delete pokemon.volatiles['partiallytrapped'];
				return;
			}
			this.damage(pokemon.baseMaxhp / this.effectState.boundDivisor);
		},
	},

};
