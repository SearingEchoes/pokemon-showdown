export const Abilities: {[k: string]: ModdedAbilityData} = {
	sturdy: {
		inherit: true,
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	voltabsorb: {
		inherit: true,
		onTryHit(target, source, move) {
			if ((target !== source && move.type === 'Electric')||(target !== source && move.type === 'Wind')) {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		isNonstandard: null,
	},
	waterabsorb: {
		inherit: true,
		onTryHit(target, source, move) {
			if ((target !== source && move.type === 'Water')||(target !== source && move.type === 'Aqua')) {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		isNonstandard: null,
	},
	lightningrod: {
		inherit: true,
		onTryHit(target, source, move) {
			if ((target !== source && move.type === 'Electric')||(target !== source && move.type === 'Wind')) {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || move.type !== 'Wind' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
				}
				return this.effectState.target;
			}
		},
		isNonstandard: null,
	},
	protean: {
		inherit: true,
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.flags['futuremove'] || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		onSwitchIn() {},
		rating: 4.5,
		isNonstandard: null,
		gen: 3,
	},
	flashfire: {
		inherit: true,
		onTryHit(target, source, move) {
			if ((target !== source && move.type === 'Fire')||(target !== source && move.type === 'Pyro')) {
				move.accuracy = true;
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd() {},
		condition: {},
	},
	sapsipper: {
		inherit: true,
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Sap Sipper');
				}
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (source === this.effectState.target || !target.isAlly(source)) return;
			if (move.type === 'Grass') {
				this.boost({atk: 1}, this.effectState.target);
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	stormdrain: {
		inherit: true,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Storm Drain');
				}
				return this.effectState.target;
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	hustle: {
		inherit: true,
		onSourceModifyAccuracyPriority: 7,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Physical' && typeof accuracy === 'number') {
				return accuracy * 0.8;
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	galewings: {
		inherit: true,
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying') return priority + 1;
		},
		rating: 4,
		isNonstandard: null,
		gen: 3,
	},
	oblivious: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Oblivious', '[of] ' + target);
			}
			if (effect.name === 'Fascinate' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'Special Attack', '[from] ability: Oblivious', '[of] ' + target);
			}
		},
	},
	owntempo: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Own Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit(target, source, move) {
			if (move?.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Own Tempo', '[of] ' + target);
			}
			if (effect.name === 'Fascinate' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'Special Attack', '[from] ability: Own Tempo', '[of] ' + target);
			}
		},
	},
	innerfocus: {
		inherit: true,
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Focus', '[of] ' + target);
			}
			if (effect.name === 'Fascinate' && boost.spa) {
				delete boost.spa;
				this.add('-fail', target, 'unboost', 'Special Attack', '[from] ability: Inner Focus', '[of] ' + target);
			}
		},
	},
	noguard: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	regenerator: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	superluck: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	toxicboost: {
		inherit: true,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical') {
				return this.chainModify(1.5);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				return false;
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	flareboost: {
		inherit: true,
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'brn') {
				return false;
			}
		},
		isNonstandard: null,
		gen: 3,
	},
	furcoat: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	gluttony: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	skilllink: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	steelworker: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	snowwarning: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	imposter: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	moxie: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	prankster: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	sandrush: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	slushrush: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	quickfeet: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	motordrive: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	defiant: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	interdict: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
};
