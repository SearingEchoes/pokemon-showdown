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

			this.effectState.boundDivisor = source.hasItem('bindingband') ? 8 : 16;
		},
		onResidual(pokemon) {		
			const source = this.effectState.source;
            if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns)) {
                delete pokemon.volatiles['partiallytrapped'];
                this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]', '[silent]');
                return;
            }
            if (this.effectState.sourceEffect === 'Ice Blitz') {
                return;
            }
			
			this.damage(pokemon.baseMaxhp / this.effectState.boundDivisor);
		},
	},

};
