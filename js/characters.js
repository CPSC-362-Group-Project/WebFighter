// new character
let Kenji = {
	position: {
		x: 850,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: -50,
		y: 0,
	},
	imageSrc: "./assets/characters/Martial-Hero2/Sprites/Idle.png",
	framesMax: 4,
	scale: 2.5,
	offset: {
		x: 215,
		y: 175,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Idle.png",
			framesMax: 4,
		},
		run: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Jump.png",
			framesMax: 2,
		},
		fall: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Fall.png",
			framesMax: 2,
		},
		attack1: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Attack1.png",
			framesMax: 4,
		},
		takeHit: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Take hit.png",
			framesMax: 3,
		},
		death: {
			imageSrc: "./assets/characters/Martial-Hero2/Sprites/Death.png",
			framesMax: 7,
		},
	},
	attackBox: {
		// offset and height and width should be the same
		offset: {
			x: -171,
			y: 50,
		},
		width: 171,
		height: 50,
	},
};

// new character
let Matt = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Martial-Hero/Sprites/Idle.png",
	framesMax: 8,
	scale: 2.5,
	offset: {
		x: 215,
		y: 160,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Idle.png",
			framesMax: 8,
		},
		run: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Jump.png",
			framesMax: 2,
		},
		fall: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Fall.png",
			framesMax: 2,
		},
		attack1: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Attack1.png",
			framesMax: 6,
		},
		takeHit: {
			imageSrc:
				"./assets/characters/Martial-Hero/Sprites/Take Hit - white silhouette.png",
			framesMax: 4,
		},
		death: {
			imageSrc: "./assets/characters/Martial-Hero/Sprites/Death.png",
			framesMax: 6,
		},
	},
	attackBox: {
		offset: {
			x: 100,
			y: 50,
		},
		width: 160,
		height: 50,
	},
};

// new character
let Riku = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Martial-Hero3/Sprite/Idle.png",
	framesMax: 10,
	scale: 2.5,
	offset: {
		x: 215,
		y: 60,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Idle.png",
			framesMax: 10,
		},
		run: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Going Up.png",
			framesMax: 3,
		},
		fall: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Going Down.png",
			framesMax: 3,
		},
		attack1: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Attack1.png",
			framesMax: 7,
		},
		takeHit: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Take Hit.png",
			framesMax: 3,
		},
		death: {
			imageSrc: "./assets/characters/Martial-Hero3/Sprite/Death.png",
			framesMax: 11,
		},
	},
	attackBox: {
		offset: {
			x: 10,
			y: 50,
		},
		width: 85,
		height: 50,
	},
};

// new character
let Ray = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Idle.png",
	framesMax: 10,
	scale: 2.5,
	offset: {
		x: 215,
		y: 108,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Idle.png",
			framesMax: 10,
		},
		run: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Jump.png",
			framesMax: 3,
		},
		fall: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Fall.png",
			framesMax: 3,
		},
		attack1: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Attack1.png",
			framesMax: 7,
		},
		takeHit: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Take-hit.png",
			framesMax: 3,
		},
		death: {
			imageSrc: "./assets/characters/Fantasy-Warrior/Sprites/Death.png",
			framesMax: 7,
		},
	},
	attackBox: {
		offset: {
			x: 10,
			y: 50,
		},
		width: 105,
		height: 50,
	},
};

// new character
let Pyro = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Evil-Wizard/Sprites/Idle.png",
	framesMax: 8,
	scale: 2.5,
	offset: {
		x: 215,
		y: 110,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Idle.png",
			framesMax: 8,
		},
		run: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Move.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Move.png",
			framesMax: 8,
		},
		fall: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Idle.png",
			framesMax: 8,
		},
		attack1: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Attack.png",
			framesMax: 8,
		},
		takeHit: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Take Hit.png",
			framesMax: 4,
		},
		death: {
			imageSrc: "./assets/characters/Evil-Wizard/Sprites/Death.png",
			framesMax: 8,
		},
	},
	attackBox: {
		offset: {
			x: 10,
			y: 50,
		},
		width: 123,
		height: 50,
	},
};

// new character
let Nat = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Hero-Knight/Sprites/Idle.png",
	framesMax: 11,
	scale: 2.5,
	offset: {
		x: 215,
		y: 140,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Idle.png",
			framesMax: 11,
		},
		run: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Jump.png",
			framesMax: 3,
		},
		fall: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Fall.png",
			framesMax: 3,
		},
		attack1: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Attack1.png",
			framesMax: 7,
		},
		takeHit: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Take-Hit.png",
			framesMax: 4,
		},
		death: {
			imageSrc: "./assets/characters/Hero-Knight/Sprites/Death.png",
			framesMax: 11,
		},
	},
	attackBox: {
		offset: {
			x: 10,
			y: -10,
		},
		width: 105,
		height: 100,
	},
};

// new character
let King = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Medieval-King-Pack/Idle.png",
	framesMax: 6,
	scale: 1.8,
	offset: {
		x: 130,
		y: 63,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Idle.png",
			framesMax: 6,
		},
		run: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Jump.png",
			framesMax: 2,
		},
		fall: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Fall.png",
			framesMax: 2,
		},
		attack1: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Attack_1.png",
			framesMax: 6,
		},
		takeHit: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Hit.png",
			framesMax: 4,
		},
		death: {
			imageSrc: "./assets/characters/Medieval-King-Pack/Death.png",
			framesMax: 11,
		},
	},
	attackBox: {
		offset: {
			x: -50,
			y: 50,
		},
		width: 100,
		height: 70,
	},
};

// new character

let Wiz = {
	position: {
		x: 120,
		y: 100,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/characters/Wizard-Pack/Idle.png",
	framesMax: 6,
	scale: 1.6,
	offset: {
		x: 215,
		y: 80,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Wizard-Pack/Idle.png",
			framesMax: 6,
		},
		run: {
			imageSrc: "./assets/characters/Wizard-Pack/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Wizard-Pack/Jump.png",
			framesMax: 2,
		},
		fall: {
			imageSrc: "./assets/characters/Wizard-Pack/Fall.png",
			framesMax: 2,
		},
		attack1: {
			imageSrc: "./assets/characters/Wizard-Pack/Attack2.png",
			framesMax: 8,
		},
		takeHit: {
			imageSrc: "./assets/characters/Wizard-Pack/Hit.png",
			framesMax: 4,
		},
		death: {
			imageSrc: "./assets/characters/Wizard-Pack/Death.png",
			framesMax: 7,
		},
	},
	attackBox: {
		offset: {
			x: 20,
			y: -0,
		},
		width: 123,
		height: 80,
	},
};
