export const Conditions: {[k: string]: ModdedConditionData} = {
	par: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility('quickfeet')) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
	},
	brn: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: Flame Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brn');
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			if (!pokemon.hasAbility('flareboost')) {
				this.damage(pokemon.baseMaxhp / 16);
			}
		},
	},
	frz: {
		inherit: true,
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
		},
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		onBeforeMove() {},
		onModifyMove() {},
		onAfterMoveSecondary() {},
		onDamagingHit() {},

		start: "  [POKEMON] was frostbitten!",
		startFromItem: "  [POKEMON] contracted frostbite from [ITEM]!",
		alreadyStarted: "  [POKEMON] already has frostbite!",
		end: "  [POKEMON]'s recovered from frostbite!",
		endFromItem: "  [POKEMON]'s [ITEM] healed its frostbite!",
		damage: "  [POKEMON] is suffering from frostbite!",
	},
	raindance: {
		inherit: true,
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'RainDance', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'RainDance');
			}
		},
	},
	sunnyday: {
		inherit: true,
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
		},
	},
	sandstorm: {
		inherit: true,
		onModifySpD(spd, pokemon) {
			if ((pokemon.hasType('Rock') && this.field.isWeather('sandstorm')) && this.field.isWeather('sandstorm')) {
				return this.modify(spd, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Sandstorm', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Sandstorm');
			}
		},
	},
	hail: {
		inherit: true,
		onModifyDef(def, pokemon) {
			if (pokemon.hasType('Ice') && this.field.isWeather('hail')) {
				return this.modify(def, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Hail', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
	},
};
