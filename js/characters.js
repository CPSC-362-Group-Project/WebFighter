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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic2: {
			effect: {
				imageSrc: "./assets/magic_eff/fire_eff/firebolt-SpriteSheet.png",
				scale: 2.0,
				framesMax: 11,
				offset: {
					x: 0,
					y: 0,
				},
			},
			impact: {
				imageSrc: "assets/magic_eff/fire_eff2/Explosion SpriteSheet.png",
				scale: 2.0,
				framesMax: 16,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion 2 SpriteSheet.png",
				scale: 5.5,
				framesMax: 18,
				offset: {
					x: 100,
					y: 80,
				},
				is2dFrame: false,
				xFrames: 18,
			},
			impact: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion SpriteSheet.png",
				scale: 4.0,
				framesMax: 16,
				offset: {
					x: 100,
					y: 60,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
		magic2: {
			effect: {
				imageSrc: "./assets/magic_eff/fire_eff/fire-Breath-SpriteSheet.png",
				scale: 4.0,
				framesMax: 24,
				offset: {
					x: -45,
					y: 80,
				},
				is2dFrame: true,
				xFrames: 8,
			},
			impact: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion SpriteSheet.png",
				scale: 3.0,
				framesMax: 16,
				offset: {
					x: 10,
					y: 50,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc:
					"./assets/magic_eff/water_eff/water_blast_spritesheet/waterBlast-Startup-and-Infinite.png",
				scale: 2.0,
				framesMax: 12,
				offset: {
					x: 80,
					y: 80,
				},
				is2dFrame: true,
				xFrames: 4,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/water_eff/water_blast_spritesheet/waterBlast-End.png",
				scale: 2.0,
				framesMax: 9,
				offset: {
					x: 80,
					y: 80,
				},
				is2dFrame: true,
				xFrames: 3,
			},
		},
		magic2: {
			effect: {
				imageSrc:
					"./assets/magic_eff/water_eff/water_ball _spritesheet/waterBall-Startup-and-Infinite.png",
				scale: 2.0,
				framesMax: 25,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 5,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/water_eff/water_ball _spritesheet/waterBall-Impact.png",
				scale: 2.0,
				framesMax: 16,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc:
					"./assets/magic_eff/thunder_eff/Thunder Strike/Thunderstrike w blur.png",
				scale: 3.0,
				framesMax: 13,
				offset: {
					x: 50,
					y: 40,
				},
				is2dFrame: false,
				xFrames: 13,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/thunder_eff/Thunder Strike/Thunderstrike w blur.png",
				scale: 3.0,
				framesMax: 13,
				offset: {
					x: 50,
					y: 200,
				},
				is2dFrame: false,
				xFrames: 9,
			},
		},
		magic2: {
			effect: {
				imageSrc:
					"./assets/magic_eff/thunder_eff/Thunder Splash/Thunder splash w blur.png",
				scale: 3.0,
				framesMax: 14,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 14,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/thunder_eff/Thunder Splash/Thunder splash w blur.png",
				scale: 3.0,
				framesMax: 14,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 7,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion 2 SpriteSheet.png",
				scale: 5.5,
				framesMax: 18,
				offset: {
					x: 100,
					y: 80,
				},
				is2dFrame: false,
				xFrames: 18,
			},
			impact: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion SpriteSheet.png",
				scale: 4.0,
				framesMax: 16,
				offset: {
					x: 100,
					y: 60,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
		magic2: {
			effect: {
				imageSrc: "./assets/magic_eff/fire_eff/fire-Breath-SpriteSheet.png",
				scale: 4.0,
				framesMax: 24,
				offset: {
					x: -45,
					y: 80,
				},
				is2dFrame: true,
				xFrames: 8,
			},
			impact: {
				imageSrc: "./assets/magic_eff/fire_eff2/Explosion SpriteSheet.png",
				scale: 3.0,
				framesMax: 16,
				offset: {
					x: 10,
					y: 50,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc:
					"./assets/magic_eff/Holy VFX 01-02/Holy VFX 02/Holy VFX 02.png",
				scale: 3.0,
				framesMax: 16,
				offset: {
					x: 40,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 10,
			},
			impact: {
				imageSrc: "./assets/magic_eff/ice_eff/Ice VFX 2/Ice VFX 2 Ending.png",
				scale: 3.0,
				framesMax: 18,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 18,
			},
		},
		magic2: {
			effect: {
				imageSrc:
					"./assets/magic_eff/ice_eff/Ice VFX 1/IceVFX 1 Repeatable.png",
				scale: 4.0,
				framesMax: 10,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 10,
			},
			impact: {
				imageSrc: "./assets/magic_eff/ice_eff/Ice VFX 1/Ice VFX 1 Hit.png",
				scale: 4.0,
				framesMax: 8,
				offset: {
					x: 70,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 8,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc: "./assets/magic_eff/wind_eff/Air Explosion.png",
				scale: 4.0,
				framesMax: 12,
				offset: {
					x: 40,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 4,
			},
			impact: {
				imageSrc: "./assets/magic_eff/wind_eff/Pull in.png",
				scale: 4.0,
				framesMax: 9,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 3,
			},
		},
		magic2: {
			effect: {
				imageSrc: "./assets/magic_eff/wind_eff/Air Burst.png",
				scale: 4.0,
				framesMax: 9,
				offset: {
					x: 0,
					y: 20,
				},
				is2dFrame: true,
				xFrames: 3,
			},
			impact: {
				imageSrc: "./assets/magic_eff/wind_eff/Preparing Burst.png",
				scale: 4.0,
				framesMax: 12,
				offset: {
					x: 0,
					y: 20,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
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
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc:
					"./assets/magic_eff/dark_eff/Dark VFX 2/Dark VFX 2 (48x64).png",
				scale: 3.0,
				framesMax: 16,
				offset: {
					x: 10,
					y: 0,
				},
				is2dFrame: false,
				xFrames: 16,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/dark_eff/Dark VFX 2/Dark VFX 2 (48x64).png",
				scale: 3.0,
				framesMax: 16,
				offset: {
					x: 40,
					y: 80,
				},
				is2dFrame: false,
				xFrames: 9,
			},
		},
		magic2: {
			effect: {
				imageSrc:
					"./assets/magic_eff/dark_eff/Dark VFX 1/Dark VFX 1 (40x32).png",
				scale: 4.0,
				framesMax: 20,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 10,
			},
			impact: {
				imageSrc:
					"./assets/magic_eff/dark_eff/Dark VFX 1/Dark VFX 1 (40x32).png",
				scale: 4.0,
				framesMax: 20,
				offset: {
					x: 40,
					y: -20,
				},
				is2dFrame: true,
				xFrames: 10,
			},
		},
	},
};

let Huntress = {
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
	imageSrc: "./assets/characters/Huntress/Sprites/Idle.png",
	framesMax: 8,
	scale: 3.2,
	offset: {
		x: 215,
		y: 170,
	},
	sprites: {
		idle: {
			imageSrc: "./assets/characters/Huntress/Sprites/Idle.png",
			framesMax: 8,
		},
		run: {
			imageSrc: "./assets/characters/Huntress/Sprites/Run.png",
			framesMax: 8,
		},
		jump: {
			imageSrc: "./assets/characters/Huntress/Sprites/Jump.png",
			framesMax: 2,
		},
		fall: {
			imageSrc: "./assets/characters/Huntress/Sprites/Fall.png",
			framesMax: 2,
		},
		attack1: {
			imageSrc: "./assets/characters/Huntress/Sprites/Attack2.png",
			framesMax: 5,
		},
		takeHit: {
			imageSrc: "./assets/characters/Huntress/Sprites/Take hit.png",
			framesMax: 3,
		},
		death: {
			imageSrc: "./assets/characters/Huntress/Sprites/Death.png",
			framesMax: 8,
		},
	},
	attackBox: {
		offset: {
			x: 20,
			y: 10,
		},
		width: 163,
		height: 70,
	},
	magicSprites: {
		healing_effect: {
			imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
			scale: 2.0,
			framesMax: 16,
			offset: {
				x: 80,
				y: 80,
			},
			is2dFrame: true,
			xFrames: 4,
		},
		magic1: {
			effect: {
				imageSrc:
					"./assets/magic_eff/Earth Effect 01/Irregular rock Spritesheet.png",
				scale: 5.0,
				framesMax: 12,
				offset: {
					x: 70,
					y: 45,
				},
				is2dFrame: true,
				xFrames: 6,
			},
			impact: {
				imageSrc: "./assets/magic_eff/Earth Effect 01/Impact Spritesheet.png",
				scale: 5.0,
				framesMax: 7,
				offset: {
					x: 70,
					y: 30,
				},
				is2dFrame: false,
				xFrames: 7,
			},
		},
		magic2: {
			effect: {
				imageSrc: "./assets/magic_eff/Earth Effect 02/Earth Bump.png",
				scale: 4.0,
				framesMax: 16,
				offset: {
					x: 0,
					y: 0,
				},
				is2dFrame: true,
				xFrames: 4,
			},
			impact: {
				imageSrc: "./assets/magic_eff/Earth Effect 02/Earth Wall.png",
				scale: 4.0,
				framesMax: 16,
				offset: {
					x: 50,
					y: -5,
				},
				is2dFrame: true,
				xFrames: 4,
			},
		},
	},
};
