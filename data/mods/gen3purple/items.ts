export const Items: {[k: string]: ModdedItemData} = {
	aguavberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 4000% max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.",
	},
	figyberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Atk Nature. Single use.",
	},
	iapapaberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Def Nature. Single use.",
	},
	magoberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.",
	},
	shellbell: {
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 5, pokemon);
			}
		},
		desc: "After an attack, holder gains 20% of the damage in HP dealt to other Pokemon.",
	},
	sitrusberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(30);
		},
	},
	starfberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		desc: "Raises a random stat by 2 when at 1/2 max HP or less (not acc/eva). Single use.",
	},
	wikiberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 2);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -SpA Nature. Single use.",
	},
	cursedtag: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	scarletrock: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	parasol: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	iceburngem: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
	lunarvest: {
		inherit: true,
		isNonstandard: "Unobtainable",
	},
};
