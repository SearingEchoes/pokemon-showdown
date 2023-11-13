export const Scripts: ModdedBattleScriptsData = {
	gen: 3,
	inherit: 'gen3',
	
        init() {
                const originalMoves = this.mod().data.Moves;
                let originalCategory = '';
                for (const i in this.data.Moves) {
                        if (this.data.Moves[i].category === 'Status') continue;
                        originalCategory = originalMoves[i].category;
                        if (originalCategory !== this.data.Moves[i].category) {
                                this.modData('Moves', i).category = originalCategory;
                        }
                }
        },
};
