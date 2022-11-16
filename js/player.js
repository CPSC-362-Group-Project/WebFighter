let playerUsedMagic = false;
let playerUsedSpecial1 = false;
let playerUsedSpecial2 = false;
let moveable = false;

// create the main player sprite instance
const player = new Fighter(Wiz);

const heal_eff1 = new Sprite({
	position: player.position,
	imageSrc: "./assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png",
	scale: 2.0,
	framesMax: 16,
	offset: {
		x: 80,
		y: 80,
	},
	is2dFrame: true,
	xFrames: 4,
});

const waterEffect = new Sprite({
	position: enemy.position,
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
});

const waterEffectEnd = new Sprite({
	position: enemy.position,
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
});

const waterBall = new Sprite({
	position: { ...player.position },
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
});

const waterBallImpact = new Sprite({
	position: { ...enemy.position },
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
});
