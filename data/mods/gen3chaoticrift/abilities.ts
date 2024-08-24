export const Abilities: {[k: string]: ModdedAbilityData} = {
	dollwall: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (damage && move.flags['contact']) {
				this.damage(source.baseMaxhp / 16, source, target);
			}
		},
	},
	honeygather: {
		inherit: true,
		onStart(pokemon) {
			if (!pokemon.item) {
				this.add("-message", pokemon.name + " found some Honey!");
				pokemon.setItem('honey');
			}
		},
	},
};
