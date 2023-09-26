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
	},
	shellbell: {
		inherit: true,
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 5, pokemon);
			}
		},
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
	},
};
