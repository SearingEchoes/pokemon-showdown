export const Rulesets: {[k: string]: ModdedFormatData} = {
	inheritmoverule: {
		effectType: 'ValidatorRule',
		name: 'Inherit Move Rule',
		desc: "Rule for multiple characters that can produce the same result on evo. (Zombie Fairy, Tenma, etc.)",
		ruleset: [
			'Obtainable', 'Sleep Clause Mod', 'Switch Priority Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Deoxys Camouflage Clause',
		],
		banlist: [
		//Zombie Fairy and Rin's 3 evos on level-up
			'Zombie Fairy + Substitute 2 + Crush Claw 2',
			'Zombie Fairy + Substitute 2 + Extrasensory 2',
			'Zombie Fairy + Substitute 2 + Disable 2',
			'Zombie Fairy + Substitute 2 + Screech 2',
			'Zombie Fairy + Substitute 2 + Crunch 2',
			'Zombie Fairy + Substitute 2 + Binding Voice',
			'Zombie Fairy + Substitute 2 + Blaze Kick 2',
			'Zombie Fairy + Substitute 2 + Agility 2',
			'Zombie Fairy + Substitute 2 + Tickle 2',
			'Zombie Fairy + Substitute 2 + Extreme Speed 2',
			'Zombie Fairy + Substitute 2 + Pain Split 2',
			'Zombie Fairy + Substitute 2 + Heat Wave 2',
			'Zombie Fairy + Substitute 2 + Smile',
			'Zombie Fairy + Substitute 2 + Blast Burn 2',
			'Zombie Fairy + Substitute 2 + Flare Blitz 2',
			'Zombie Fairy + Substitute 2 + Eruption 2',
			'Zombie Fairy + Crunch 2 + Crush Claw 2',
			'Zombie Fairy + Crunch 2 + Extrasensory 2',
			'Zombie Fairy + Crunch 2 + Disable 2',
			'Zombie Fairy + Crunch 2 + Screech 2',
			'Zombie Fairy + Crunch 2 + Binding Voice',
			'Zombie Fairy + Crunch 2 + Blaze Kick 2',
			'Zombie Fairy + Crunch 2 + Agility 2',
			'Zombie Fairy + Crunch 2 + Tickle 2',
			'Zombie Fairy + Crunch 2 + Extreme Speed 2',
			'Zombie Fairy + Crunch 2 + Pain Split 2',
			'Zombie Fairy + Crunch 2 + Heat Wave 2',
			'Zombie Fairy + Crunch 2 + Smile',
			'Zombie Fairy + Crunch 2 + Blast Burn 2',
			'Zombie Fairy + Crunch 2 + Flare Blitz 2',
			'Zombie Fairy + Crunch 2 + Eruption 2',
			'Zombie Fairy + Agility 2 + Crush Claw 2',
			'Zombie Fairy + Agility 2 + Extrasensory 2',
			'Zombie Fairy + Agility 2 + Disable 2',
			'Zombie Fairy + Agility 2 + Screech 2',
			'Zombie Fairy + Agility 2 + Binding Voice',
			'Zombie Fairy + Agility 2 + Blaze Kick 2',
			'Zombie Fairy + Agility 2 + Tickle 2',
			'Zombie Fairy + Agility 2 + Extreme Speed 2',
			'Zombie Fairy + Agility 2 + Pain Split 2',
			'Zombie Fairy + Agility 2 + Heat Wave 2',
			'Zombie Fairy + Agility 2 + Smile',
			'Zombie Fairy + Agility 2 + Blast Burn 2',
			'Zombie Fairy + Agility 2 + Flare Blitz 2',
			'Zombie Fairy + Agility 2 + Eruption 2',
			'Zombie Fairy + Extreme Speed 2 + Crush Claw 2',
			'Zombie Fairy + Extreme Speed 2 + Extrasensory 2',
			'Zombie Fairy + Extreme Speed 2 + Disable 2',
			'Zombie Fairy + Extreme Speed 2 + Screech 2',
			'Zombie Fairy + Extreme Speed 2 + Binding Voice',
			'Zombie Fairy + Extreme Speed 2 + Blaze Kick 2',
			'Zombie Fairy + Extreme Speed 2 + Tickle 2',
			'Zombie Fairy + Extreme Speed 2 + Pain Split 2',
			'Zombie Fairy + Extreme Speed 2 + Heat Wave 2',
			'Zombie Fairy + Extreme Speed 2 + Smile',
			'Zombie Fairy + Extreme Speed 2 + Blast Burn 2',
			'Zombie Fairy + Extreme Speed 2 + Flare Blitz 2',
			'Zombie Fairy + Extreme Speed 2 + Eruption 2',
			'Zombie Fairy + Smile + Crush Claw 2',
			'Zombie Fairy + Smile + Extrasensory 2',
			'Zombie Fairy + Smile + Disable 2',
			'Zombie Fairy + Smile + Screech 2',
			'Zombie Fairy + Smile + Binding Voice',
			'Zombie Fairy + Smile + Blaze Kick 2',
			'Zombie Fairy + Smile + Tickle 2',
			'Zombie Fairy + Smile + Pain Split 2',
			'Zombie Fairy + Smile + Heat Wave 2',
			'Zombie Fairy + Smile + Blast Burn 2',
			'Zombie Fairy + Smile + Flare Blitz 2',
			'Zombie Fairy + Smile + Eruption 2',
			'Zombie Fairy + Flare Blitz 2 + Crush Claw 2',
			'Zombie Fairy + Flare Blitz 2 + Extrasensory 2',
			'Zombie Fairy + Flare Blitz 2 + Disable 2',
			'Zombie Fairy + Flare Blitz 2 + Screech 2',
			'Zombie Fairy + Flare Blitz 2 + Binding Voice',
			'Zombie Fairy + Flare Blitz 2 + Blaze Kick 2',
			'Zombie Fairy + Flare Blitz 2 + Tickle 2',
			'Zombie Fairy + Flare Blitz 2 + Pain Split 2',
			'Zombie Fairy + Flare Blitz 2 + Heat Wave 2',
			'Zombie Fairy + Flare Blitz 2 + Blast Burn 2',
			'Zombie Fairy + Flare Blitz 2 + Eruption 2',
			'Zombie Fairy + Crush Claw 2 + Extrasensory 2',
			'Zombie Fairy + Crush Claw 2 + Disable 2',
			'Zombie Fairy + Crush Claw 2 + Screech 2',
			'Zombie Fairy + Crush Claw 2 + Binding Voice',
			'Zombie Fairy + Crush Claw 2 + Blaze Kick 2',
			'Zombie Fairy + Crush Claw 2 + Tickle 2',
			'Zombie Fairy + Crush Claw 2 + Pain Split 2',
			'Zombie Fairy + Crush Claw 2 + Heat Wave 2',
			'Zombie Fairy + Crush Claw 2 + Blast Burn 2',
			'Zombie Fairy + Crush Claw 2 + Eruption 2',
			'Zombie Fairy + Disable 2 + Extrasensory 2',
			'Zombie Fairy + Disable 2 + Screech 2',
			'Zombie Fairy + Disable 2 + Binding Voice',
			'Zombie Fairy + Disable 2 + Blaze Kick 2',
			'Zombie Fairy + Disable 2 + Tickle 2',
			'Zombie Fairy + Disable 2 + Pain Split 2',
			'Zombie Fairy + Disable 2 + Heat Wave 2',
			'Zombie Fairy + Disable 2 + Blast Burn 2',
			'Zombie Fairy + Disable 2 + Eruption 2',
			'Zombie Fairy + Binding Voice + Extrasensory 2',
			'Zombie Fairy + Binding Voice + Screech 2',
			'Zombie Fairy + Binding Voice + Blaze Kick 2',
			'Zombie Fairy + Binding Voice + Tickle 2',
			'Zombie Fairy + Binding Voice + Pain Split 2',
			'Zombie Fairy + Binding Voice + Heat Wave 2',
			'Zombie Fairy + Binding Voice + Blast Burn 2',
			'Zombie Fairy + Binding Voice + Eruption 2',
			'Zombie Fairy + Tickle 2 + Extrasensory 2',
			'Zombie Fairy + Tickle 2 + Screech 2',
			'Zombie Fairy + Tickle 2 + Blaze Kick 2',
			'Zombie Fairy + Tickle 2 + Pain Split 2',
			'Zombie Fairy + Tickle 2 + Heat Wave 2',
			'Zombie Fairy + Tickle 2 + Blast Burn 2',
			'Zombie Fairy + Tickle 2 + Eruption 2',
			'Zombie Fairy + Pain Split 2 + Extrasensory 2',
			'Zombie Fairy + Pain Split 2 + Screech 2',
			'Zombie Fairy + Pain Split 2 + Blaze Kick 2',
			'Zombie Fairy + Pain Split 2 + Heat Wave 2',
			'Zombie Fairy + Pain Split 2 + Blast Burn 2',
			'Zombie Fairy + Pain Split 2 + Eruption 2',
			'Zombie Fairy + Blast Burn 2 + Extrasensory 2',
			'Zombie Fairy + Blast Burn 2 + Screech 2',
			'Zombie Fairy + Blast Burn 2 + Blaze Kick 2',
			'Zombie Fairy + Blast Burn 2 + Heat Wave 2',
			'Zombie Fairy + Blast Burn 2 + Eruption 2',
			'Zombie Fairy + Eruption 2 + Extrasensory 2',
			'Zombie Fairy + Eruption 2 + Screech 2',
			'Zombie Fairy + Eruption 2 + Blaze Kick 2',
			'Zombie Fairy + Eruption 2 + Heat Wave 2',
			'Zombie Fairy + Extrasensory 2 + Screech 2',
			'Zombie Fairy + Extrasensory 2 + Blaze Kick 2',
			'Zombie Fairy + Extrasensory 2 + Heat Wave 2',
			'Zombie Fairy + Screech 2 + Blaze Kick 2',
			'Zombie Fairy + Screech 2 + Heat Wave 2',
			'Zombie Fairy + Blaze Kick 2 + Heat Wave 2',
		//Tenma from Aya/Hatate
			'Tenma + Twister 2 + Foresight 2',
			'Tenma + Twister 2 + Water Pulse 2',
			'Tenma + Twister 2 + Light Screen 2',
			'Tenma + Twister 2 + Mana Burst',
			'Tenma + Twister 2 + Shadow Ball 2',
			'Tenma + Twister 2 + Reflect 2',
			'Tenma + Twister 2 + Skill Swap 2',
			'Tenma + Twister 2 + Swift 2',
			'Tenma + Twister 2 + Black Ripple',
			'Tenma + Twister 2 + Tri Attack 2',
			'Tenma + Twister 2 + Confuse Ray 2',
			'Tenma + Twister 2 + Charge Beam 2',
			'Tenma + Twister 2 + Mana Charge',
			'Tenma + Twister 2 + Luster Purge 2',
			'Tenma + Sunny Day 2 + Foresight 2',
			'Tenma + Sunny Day 2 + Water Pulse 2',
			'Tenma + Sunny Day 2 + Light Screen 2',
			'Tenma + Sunny Day 2 + Mana Burst',
			'Tenma + Sunny Day 2 + Shadow Ball 2',
			'Tenma + Sunny Day 2 + Reflect 2',
			'Tenma + Sunny Day 2 + Skill Swap 2',
			'Tenma + Sunny Day 2 + Swift 2',
			'Tenma + Sunny Day 2 + Black Ripple',
			'Tenma + Sunny Day 2 + Tri Attack 2',
			'Tenma + Sunny Day 2 + Confuse Ray 2',
			'Tenma + Sunny Day 2 + Charge Beam 2',
			'Tenma + Sunny Day 2 + Mana Charge',
			'Tenma + Sunny Day 2 + Luster Purge 2',
			'Tenma + Taunt 2 + Foresight 2',
			'Tenma + Taunt 2 + Water Pulse 2',
			'Tenma + Taunt 2 + Light Screen 2',
			'Tenma + Taunt 2 + Mana Burst',
			'Tenma + Taunt 2 + Shadow Ball 2',
			'Tenma + Taunt 2 + Reflect 2',
			'Tenma + Taunt 2 + Skill Swap 2',
			'Tenma + Taunt 2 + Swift 2',
			'Tenma + Taunt 2 + Black Ripple',
			'Tenma + Taunt 2 + Tri Attack 2',
			'Tenma + Taunt 2 + Confuse Ray 2',
			'Tenma + Taunt 2 + Charge Beam 2',
			'Tenma + Taunt 2 + Mana Charge',
			'Tenma + Taunt 2 + Luster Purge 2',
			'Tenma + Rain Dance 2 + Foresight 2',
			'Tenma + Rain Dance 2 + Water Pulse 2',
			'Tenma + Rain Dance 2 + Light Screen 2',
			'Tenma + Rain Dance 2 + Mana Burst',
			'Tenma + Rain Dance 2 + Shadow Ball 2',
			'Tenma + Rain Dance 2 + Reflect 2',
			'Tenma + Rain Dance 2 + Skill Swap 2',
			'Tenma + Rain Dance 2 + Swift 2',
			'Tenma + Rain Dance 2 + Black Ripple',
			'Tenma + Rain Dance 2 + Tri Attack 2',
			'Tenma + Rain Dance 2 + Confuse Ray 2',
			'Tenma + Rain Dance 2 + Charge Beam 2',
			'Tenma + Rain Dance 2 + Mana Charge',
			'Tenma + Rain Dance 2 + Luster Purge 2',
			'Tenma + Solar Beam 2 + Foresight 2',
			'Tenma + Solar Beam 2 + Water Pulse 2',
			'Tenma + Solar Beam 2 + Light Screen 2',
			'Tenma + Solar Beam 2 + Mana Burst',
			'Tenma + Solar Beam 2 + Shadow Ball 2',
			'Tenma + Solar Beam 2 + Reflect 2',
			'Tenma + Solar Beam 2 + Skill Swap 2',
			'Tenma + Solar Beam 2 + Swift 2',
			'Tenma + Solar Beam 2 + Black Ripple',
			'Tenma + Solar Beam 2 + Tri Attack 2',
			'Tenma + Solar Beam 2 + Confuse Ray 2',
			'Tenma + Solar Beam 2 + Charge Beam 2',
			'Tenma + Solar Beam 2 + Mana Charge',
			'Tenma + Solar Beam 2 + Luster Purge 2',
			'Tenma + Cut 2 + Foresight 2',
			'Tenma + Cut 2 + Water Pulse 2',
			'Tenma + Cut 2 + Light Screen 2',
			'Tenma + Cut 2 + Mana Burst',
			'Tenma + Cut 2 + Shadow Ball 2',
			'Tenma + Cut 2 + Reflect 2',
			'Tenma + Cut 2 + Skill Swap 2',
			'Tenma + Cut 2 + Swift 2',
			'Tenma + Cut 2 + Black Ripple',
			'Tenma + Cut 2 + Tri Attack 2',
			'Tenma + Cut 2 + Confuse Ray 2',
			'Tenma + Cut 2 + Charge Beam 2',
			'Tenma + Cut 2 + Mana Charge',
			'Tenma + Cut 2 + Luster Purge 2',
			'Tenma + Magical Leaf 2 + Foresight 2',
			'Tenma + Magical Leaf 2 + Water Pulse 2',
			'Tenma + Magical Leaf 2 + Light Screen 2',
			'Tenma + Magical Leaf 2 + Mana Burst',
			'Tenma + Magical Leaf 2 + Shadow Ball 2',
			'Tenma + Magical Leaf 2 + Reflect 2',
			'Tenma + Magical Leaf 2 + Skill Swap 2',
			'Tenma + Magical Leaf 2 + Swift 2',
			'Tenma + Magical Leaf 2 + Black Ripple',
			'Tenma + Magical Leaf 2 + Tri Attack 2',
			'Tenma + Magical Leaf 2 + Confuse Ray 2',
			'Tenma + Magical Leaf 2 + Charge Beam 2',
			'Tenma + Magical Leaf 2 + Mana Charge',
			'Tenma + Magical Leaf 2 + Luster Purge 2',
			'Tenma + Night Slash 2 + Foresight 2',
			'Tenma + Night Slash 2 + Water Pulse 2',
			'Tenma + Night Slash 2 + Light Screen 2',
			'Tenma + Night Slash 2 + Mana Burst',
			'Tenma + Night Slash 2 + Shadow Ball 2',
			'Tenma + Night Slash 2 + Reflect 2',
			'Tenma + Night Slash 2 + Skill Swap 2',
			'Tenma + Night Slash 2 + Swift 2',
			'Tenma + Night Slash 2 + Black Ripple',
			'Tenma + Night Slash 2 + Tri Attack 2',
			'Tenma + Night Slash 2 + Confuse Ray 2',
			'Tenma + Night Slash 2 + Charge Beam 2',
			'Tenma + Night Slash 2 + Mana Charge',
			'Tenma + Night Slash 2 + Luster Purge 2',
			'Tenma + Razor Leaf 2 + Foresight 2',
			'Tenma + Razor Leaf 2 + Water Pulse 2',
			'Tenma + Razor Leaf 2 + Light Screen 2',
			'Tenma + Razor Leaf 2 + Mana Burst',
			'Tenma + Razor Leaf 2 + Shadow Ball 2',
			'Tenma + Razor Leaf 2 + Reflect 2',
			'Tenma + Razor Leaf 2 + Skill Swap 2',
			'Tenma + Razor Leaf 2 + Swift 2',
			'Tenma + Razor Leaf 2 + Black Ripple',
			'Tenma + Razor Leaf 2 + Tri Attack 2',
			'Tenma + Razor Leaf 2 + Confuse Ray 2',
			'Tenma + Razor Leaf 2 + Charge Beam 2',
			'Tenma + Razor Leaf 2 + Mana Charge',
			'Tenma + Razor Leaf 2 + Luster Purge 2',
			'Tenma + High Jump Kick 2 + Foresight 2',
			'Tenma + High Jump Kick 2 + Water Pulse 2',
			'Tenma + High Jump Kick 2 + Light Screen 2',
			'Tenma + High Jump Kick 2 + Mana Burst',
			'Tenma + High Jump Kick 2 + Shadow Ball 2',
			'Tenma + High Jump Kick 2 + Reflect 2',
			'Tenma + High Jump Kick 2 + Skill Swap 2',
			'Tenma + High Jump Kick 2 + Swift 2',
			'Tenma + High Jump Kick 2 + Black Ripple',
			'Tenma + High Jump Kick 2 + Tri Attack 2',
			'Tenma + High Jump Kick 2 + Confuse Ray 2',
			'Tenma + High Jump Kick 2 + Charge Beam 2',
			'Tenma + High Jump Kick 2 + Mana Charge',
			'Tenma + High Jump Kick 2 + Luster Purge 2',
			'Tenma + Mud Shot 2 + Foresight 2',
			'Tenma + Mud Shot 2 + Water Pulse 2',
			'Tenma + Mud Shot 2 + Light Screen 2',
			'Tenma + Mud Shot 2 + Mana Burst',
			'Tenma + Mud Shot 2 + Shadow Ball 2',
			'Tenma + Mud Shot 2 + Reflect 2',
			'Tenma + Mud Shot 2 + Skill Swap 2',
			'Tenma + Mud Shot 2 + Swift 2',
			'Tenma + Mud Shot 2 + Black Ripple',
			'Tenma + Mud Shot 2 + Tri Attack 2',
			'Tenma + Mud Shot 2 + Confuse Ray 2',
			'Tenma + Mud Shot 2 + Charge Beam 2',
			'Tenma + Mud Shot 2 + Mana Charge',
			'Tenma + Mud Shot 2 + Luster Purge 2',
			'Tenma + Sandstorm 2 + Foresight 2',
			'Tenma + Sandstorm 2 + Water Pulse 2',
			'Tenma + Sandstorm 2 + Light Screen 2',
			'Tenma + Sandstorm 2 + Mana Burst',
			'Tenma + Sandstorm 2 + Shadow Ball 2',
			'Tenma + Sandstorm 2 + Reflect 2',
			'Tenma + Sandstorm 2 + Skill Swap 2',
			'Tenma + Sandstorm 2 + Swift 2',
			'Tenma + Sandstorm 2 + Black Ripple',
			'Tenma + Sandstorm 2 + Tri Attack 2',
			'Tenma + Sandstorm 2 + Confuse Ray 2',
			'Tenma + Sandstorm 2 + Charge Beam 2',
			'Tenma + Sandstorm 2 + Mana Charge',
			'Tenma + Sandstorm 2 + Luster Purge 2',
			'Tenma + Silver Wind 2 + Foresight 2',
			'Tenma + Silver Wind 2 + Water Pulse 2',
			'Tenma + Silver Wind 2 + Light Screen 2',
			'Tenma + Silver Wind 2 + Mana Burst',
			'Tenma + Silver Wind 2 + Shadow Ball 2',
			'Tenma + Silver Wind 2 + Reflect 2',
			'Tenma + Silver Wind 2 + Skill Swap 2',
			'Tenma + Silver Wind 2 + Swift 2',
			'Tenma + Silver Wind 2 + Black Ripple',
			'Tenma + Silver Wind 2 + Tri Attack 2',
			'Tenma + Silver Wind 2 + Confuse Ray 2',
			'Tenma + Silver Wind 2 + Charge Beam 2',
			'Tenma + Silver Wind 2 + Mana Charge',
			'Tenma + Silver Wind 2 + Luster Purge 2',
		//Goliath Doll from Shanghai/Hourai
			'Goliath Doll + Agility 2 + Iron Defense 2',
			'Goliath Doll + Agility 2 + Psybeam 2',
			'Goliath Doll + Agility 2 + Wish 2',
			'Goliath Doll + Agility 2 + Aurora Beam 2',
			'Goliath Doll + Agility 2 + Lucky Chant 2',
			'Goliath Doll + Agility 2 + Protect 2',
			'Goliath Doll + Agility 2 + Baton Pass 2',
			'Goliath Doll + Agility 2 + Spite 2',
			'Goliath Doll + Quick Attack 2 + Iron Defense 2',
			'Goliath Doll + Quick Attack 2 + Psybeam 2',
			'Goliath Doll + Quick Attack 2 + Wish 2',
			'Goliath Doll + Quick Attack 2 + Aurora Beam 2',
			'Goliath Doll + Quick Attack 2 + Lucky Chant 2',
			'Goliath Doll + Quick Attack 2 + Protect 2',
			'Goliath Doll + Quick Attack 2 + Baton Pass 2',
			'Goliath Doll + Quick Attack 2 + Spite 2',
			'Goliath Doll + Tailwind 2 + Iron Defense 2',
			'Goliath Doll + Tailwind 2 + Psybeam 2',
			'Goliath Doll + Tailwind 2 + Wish 2',
			'Goliath Doll + Tailwind 2 + Aurora Beam 2',
			'Goliath Doll + Tailwind 2 + Lucky Chant 2',
			'Goliath Doll + Tailwind 2 + Protect 2',
			'Goliath Doll + Tailwind 2 + Baton Pass 2',
			'Goliath Doll + Tailwind 2 + Spite 2',
			'Goliath Doll + Psycho Cut 2 + Iron Defense 2',
			'Goliath Doll + Psycho Cut 2 + Psybeam 2',
			'Goliath Doll + Psycho Cut 2 + Wish 2',
			'Goliath Doll + Psycho Cut 2 + Aurora Beam 2',
			'Goliath Doll + Psycho Cut 2 + Lucky Chant 2',
			'Goliath Doll + Psycho Cut 2 + Protect 2',
			'Goliath Doll + Psycho Cut 2 + Baton Pass 2',
			'Goliath Doll + Psycho Cut 2 + Spite 2',
			'Goliath Doll + Substitute 2 + Iron Defense 2',
			'Goliath Doll + Substitute 2 + Psybeam 2',
			'Goliath Doll + Substitute 2 + Wish 2',
			'Goliath Doll + Substitute 2 + Aurora Beam 2',
			'Goliath Doll + Substitute 2 + Lucky Chant 2',
			'Goliath Doll + Substitute 2 + Protect 2',
			'Goliath Doll + Substitute 2 + Baton Pass 2',
			'Goliath Doll + Substitute 2 + Spite 2',
			'Goliath Doll + Swords Dance 2 + Iron Defense 2',
			'Goliath Doll + Swords Dance 2 + Psybeam 2',
			'Goliath Doll + Swords Dance 2 + Wish 2',
			'Goliath Doll + Swords Dance 2 + Aurora Beam 2',
			'Goliath Doll + Swords Dance 2 + Lucky Chant 2',
			'Goliath Doll + Swords Dance 2 + Protect 2',
			'Goliath Doll + Swords Dance 2 + Baton Pass 2',
			'Goliath Doll + Swords Dance 2 + Spite 2',
			'Goliath Doll + Reversal 2 + Iron Defense 2',
			'Goliath Doll + Reversal 2 + Psybeam 2',
			'Goliath Doll + Reversal 2 + Wish 2',
			'Goliath Doll + Reversal 2 + Aurora Beam 2',
			'Goliath Doll + Reversal 2 + Lucky Chant 2',
			'Goliath Doll + Reversal 2 + Protect 2',
			'Goliath Doll + Reversal 2 + Baton Pass 2',
			'Goliath Doll + Reversal 2 + Spite 2',
			'Goliath Doll + Superpower 2 + Iron Defense 2',
			'Goliath Doll + Superpower 2 + Psybeam 2',
			'Goliath Doll + Superpower 2 + Wish 2',
			'Goliath Doll + Superpower 2 + Aurora Beam 2',
			'Goliath Doll + Superpower 2 + Lucky Chant 2',
			'Goliath Doll + Superpower 2 + Protect 2',
			'Goliath Doll + Superpower 2 + Baton Pass 2',
			'Goliath Doll + Superpower 2 + Spite 2',
		//Aki Sisters from Shizuha/Minoriko
			'Aki Sisters + Growl 2 + Defense Curl 2',
			'Aki Sisters + Growl 2 + Growth 2',
			'Aki Sisters + Growl 2 + Nature Power 2',
			'Aki Sisters + Growl 2 + Bullet Seed 2',
			'Aki Sisters + Growl 2 + Mega Drain 2',
			'Aki Sisters + Growl 2 + Razor Wind 2',
			'Aki Sisters + Growl 2 + Swagger 2',
			'Aki Sisters + Growl 2 + Nasty Plot 2',
			'Aki Sisters + Growl 2 + Torment 2',
			'Aki Sisters + Growl 2 + Tremors',
			'Aki Sisters + Growl 2 + Recycle 2',
			'Aki Sisters + Growl 2 + Helping Hand 2',
			'Aki Sisters + Growl 2 + Yawn 2',
			'Aki Sisters + Growl 2 + Sandstorm 2',
			'Aki Sisters + Razor Leaf 2 + Defense Curl 2',
			'Aki Sisters + Razor Leaf 2 + Growth 2',
			'Aki Sisters + Razor Leaf 2 + Nature Power 2',
			'Aki Sisters + Razor Leaf 2 + Bullet Seed 2',
			'Aki Sisters + Razor Leaf 2 + Mega Drain 2',
			'Aki Sisters + Razor Leaf 2 + Razor Wind 2',
			'Aki Sisters + Razor Leaf 2 + Swagger 2',
			'Aki Sisters + Razor Leaf 2 + Nasty Plot 2',
			'Aki Sisters + Razor Leaf 2 + Torment 2',
			'Aki Sisters + Razor Leaf 2 + Tremors',
			'Aki Sisters + Razor Leaf 2 + Recycle 2',
			'Aki Sisters + Razor Leaf 2 + Helping Hand 2',
			'Aki Sisters + Razor Leaf 2 + Yawn 2',
			'Aki Sisters + Razor Leaf 2 + Sandstorm 2',
			'Aki Sisters + Sleep Powder 2 + Defense Curl 2',
			'Aki Sisters + Sleep Powder 2 + Growth 2',
			'Aki Sisters + Sleep Powder 2 + Nature Power 2',
			'Aki Sisters + Sleep Powder 2 + Bullet Seed 2',
			'Aki Sisters + Sleep Powder 2 + Mega Drain 2',
			'Aki Sisters + Sleep Powder 2 + Razor Wind 2',
			'Aki Sisters + Sleep Powder 2 + Swagger 2',
			'Aki Sisters + Sleep Powder 2 + Nasty Plot 2',
			'Aki Sisters + Sleep Powder 2 + Torment 2',
			'Aki Sisters + Sleep Powder 2 + Tremors',
			'Aki Sisters + Sleep Powder 2 + Recycle 2',
			'Aki Sisters + Sleep Powder 2 + Helping Hand 2',
			'Aki Sisters + Sleep Powder 2 + Yawn 2',
			'Aki Sisters + Sleep Powder 2 + Sandstorm 2',
			'Aki Sisters + Cotton Spore 2 + Defense Curl 2',
			'Aki Sisters + Cotton Spore 2 + Growth 2',
			'Aki Sisters + Cotton Spore 2 + Nature Power 2',
			'Aki Sisters + Cotton Spore 2 + Bullet Seed 2',
			'Aki Sisters + Cotton Spore 2 + Mega Drain 2',
			'Aki Sisters + Cotton Spore 2 + Razor Wind 2',
			'Aki Sisters + Cotton Spore 2 + Swagger 2',
			'Aki Sisters + Cotton Spore 2 + Nasty Plot 2',
			'Aki Sisters + Cotton Spore 2 + Torment 2',
			'Aki Sisters + Cotton Spore 2 + Tremors',
			'Aki Sisters + Cotton Spore 2 + Recycle 2',
			'Aki Sisters + Cotton Spore 2 + Helping Hand 2',
			'Aki Sisters + Cotton Spore 2 + Yawn 2',
			'Aki Sisters + Cotton Spore 2 + Sandstorm 2',
			'Aki Sisters + Magical Leaf 2 + Defense Curl 2',
			'Aki Sisters + Magical Leaf 2 + Growth 2',
			'Aki Sisters + Magical Leaf 2 + Nature Power 2',
			'Aki Sisters + Magical Leaf 2 + Bullet Seed 2',
			'Aki Sisters + Magical Leaf 2 + Mega Drain 2',
			'Aki Sisters + Magical Leaf 2 + Razor Wind 2',
			'Aki Sisters + Magical Leaf 2 + Swagger 2',
			'Aki Sisters + Magical Leaf 2 + Nasty Plot 2',
			'Aki Sisters + Magical Leaf 2 + Torment 2',
			'Aki Sisters + Magical Leaf 2 + Tremors',
			'Aki Sisters + Magical Leaf 2 + Recycle 2',
			'Aki Sisters + Magical Leaf 2 + Helping Hand 2',
			'Aki Sisters + Magical Leaf 2 + Yawn 2',
			'Aki Sisters + Magical Leaf 2 + Sandstorm 2',
			'Aki Sisters + Memento 2 + Defense Curl 2',
			'Aki Sisters + Memento 2 + Growth 2',
			'Aki Sisters + Memento 2 + Nature Power 2',
			'Aki Sisters + Memento 2 + Bullet Seed 2',
			'Aki Sisters + Memento 2 + Mega Drain 2',
			'Aki Sisters + Memento 2 + Razor Wind 2',
			'Aki Sisters + Memento 2 + Swagger 2',
			'Aki Sisters + Memento 2 + Nasty Plot 2',
			'Aki Sisters + Memento 2 + Torment 2',
			'Aki Sisters + Memento 2 + Tremors',
			'Aki Sisters + Memento 2 + Recycle 2',
			'Aki Sisters + Memento 2 + Helping Hand 2',
			'Aki Sisters + Memento 2 + Yawn 2',
			'Aki Sisters + Memento 2 + Sandstorm 2',
			'Aki Sisters + Screech 2 + Defense Curl 2',
			'Aki Sisters + Screech 2 + Growth 2',
			'Aki Sisters + Screech 2 + Nature Power 2',
			'Aki Sisters + Screech 2 + Bullet Seed 2',
			'Aki Sisters + Screech 2 + Mega Drain 2',
			'Aki Sisters + Screech 2 + Razor Wind 2',
			'Aki Sisters + Screech 2 + Swagger 2',
			'Aki Sisters + Screech 2 + Nasty Plot 2',
			'Aki Sisters + Screech 2 + Torment 2',
			'Aki Sisters + Screech 2 + Tremors',
			'Aki Sisters + Screech 2 + Recycle 2',
			'Aki Sisters + Screech 2 + Helping Hand 2',
			'Aki Sisters + Screech 2 + Yawn 2',
			'Aki Sisters + Screech 2 + Sandstorm 2',
			'Aki Sisters + Extrasensory 2 + Defense Curl 2',
			'Aki Sisters + Extrasensory 2 + Growth 2',
			'Aki Sisters + Extrasensory 2 + Nature Power 2',
			'Aki Sisters + Extrasensory 2 + Bullet Seed 2',
			'Aki Sisters + Extrasensory 2 + Mega Drain 2',
			'Aki Sisters + Extrasensory 2 + Razor Wind 2',
			'Aki Sisters + Extrasensory 2 + Swagger 2',
			'Aki Sisters + Extrasensory 2 + Nasty Plot 2',
			'Aki Sisters + Extrasensory 2 + Torment 2',
			'Aki Sisters + Extrasensory 2 + Tremors',
			'Aki Sisters + Extrasensory 2 + Recycle 2',
			'Aki Sisters + Extrasensory 2 + Helping Hand 2',
			'Aki Sisters + Extrasensory 2 + Yawn 2',
			'Aki Sisters + Extrasensory 2 + Sandstorm 2',
			'Aki Sisters + Flail 2 + Defense Curl 2',
			'Aki Sisters + Flail 2 + Growth 2',
			'Aki Sisters + Flail 2 + Nature Power 2',
			'Aki Sisters + Flail 2 + Bullet Seed 2',
			'Aki Sisters + Flail 2 + Mega Drain 2',
			'Aki Sisters + Flail 2 + Razor Wind 2',
			'Aki Sisters + Flail 2 + Swagger 2',
			'Aki Sisters + Flail 2 + Nasty Plot 2',
			'Aki Sisters + Flail 2 + Torment 2',
			'Aki Sisters + Flail 2 + Tremors',
			'Aki Sisters + Flail 2 + Recycle 2',
			'Aki Sisters + Flail 2 + Helping Hand 2',
			'Aki Sisters + Flail 2 + Yawn 2',
			'Aki Sisters + Flail 2 + Sandstorm 2',
			'Aki Sisters + Leaf Blade 2 + Defense Curl 2',
			'Aki Sisters + Leaf Blade 2 + Growth 2',
			'Aki Sisters + Leaf Blade 2 + Nature Power 2',
			'Aki Sisters + Leaf Blade 2 + Bullet Seed 2',
			'Aki Sisters + Leaf Blade 2 + Mega Drain 2',
			'Aki Sisters + Leaf Blade 2 + Razor Wind 2',
			'Aki Sisters + Leaf Blade 2 + Swagger 2',
			'Aki Sisters + Leaf Blade 2 + Nasty Plot 2',
			'Aki Sisters + Leaf Blade 2 + Torment 2',
			'Aki Sisters + Leaf Blade 2 + Tremors',
			'Aki Sisters + Leaf Blade 2 + Recycle 2',
			'Aki Sisters + Leaf Blade 2 + Helping Hand 2',
			'Aki Sisters + Leaf Blade 2 + Yawn 2',
			'Aki Sisters + Leaf Blade 2 + Sandstorm 2',
			'Aki Sisters + Safeguard 2 + Defense Curl 2',
			'Aki Sisters + Safeguard 2 + Growth 2',
			'Aki Sisters + Safeguard 2 + Nature Power 2',
			'Aki Sisters + Safeguard 2 + Bullet Seed 2',
			'Aki Sisters + Safeguard 2 + Mega Drain 2',
			'Aki Sisters + Safeguard 2 + Razor Wind 2',
			'Aki Sisters + Safeguard 2 + Swagger 2',
			'Aki Sisters + Safeguard 2 + Nasty Plot 2',
			'Aki Sisters + Safeguard 2 + Torment 2',
			'Aki Sisters + Safeguard 2 + Tremors',
			'Aki Sisters + Safeguard 2 + Recycle 2',
			'Aki Sisters + Safeguard 2 + Helping Hand 2',
			'Aki Sisters + Safeguard 2 + Yawn 2',
			'Aki Sisters + Safeguard 2 + Sandstorm 2',
			'Aki Sisters + Twister 2 + Defense Curl 2',
			'Aki Sisters + Twister 2 + Growth 2',
			'Aki Sisters + Twister 2 + Nature Power 2',
			'Aki Sisters + Twister 2 + Bullet Seed 2',
			'Aki Sisters + Twister 2 + Mega Drain 2',
			'Aki Sisters + Twister 2 + Razor Wind 2',
			'Aki Sisters + Twister 2 + Swagger 2',
			'Aki Sisters + Twister 2 + Nasty Plot 2',
			'Aki Sisters + Twister 2 + Torment 2',
			'Aki Sisters + Twister 2 + Tremors',
			'Aki Sisters + Twister 2 + Recycle 2',
			'Aki Sisters + Twister 2 + Helping Hand 2',
			'Aki Sisters + Twister 2 + Yawn 2',
			'Aki Sisters + Twister 2 + Sandstorm 2',
		],
	},
};