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
		desc: "Restores 50% max HP at 1/2 max HP or less; confuses if -SpD Nature. Single use.",
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
	tamatoberry: {
		inherit: true,
		onUpdate() {},
		onResidualOrder: 10,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 20) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp);
			this.boost({atk: 4});
			this.boost({def: 4});
			this.boost({spa: 4});
			this.boost({spd: 4});
			this.boost({spe: 4});
		},
	},
	elderpain: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	psychowand: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	vintotie: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	berserkgene: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	throatspray: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	zoomlens: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	expertbelt: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	honey: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	violetfear: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	bunnyamulet: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	dharoksgreataxe: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	mixedherbs: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	swordofzerker: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	rockofsaurian: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	starofninja: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
	alicecard: {
		inherit: true,
		isNonstandard: null,
		gen: 3,
	},
};
