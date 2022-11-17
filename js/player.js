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

function playerAnimate() {
	/*************************************
    Player movements are defined below
    *************************************/

	player.velocity.x = 0;
	if (keys.a.pressed && player.lastKey === "a") {
		player.velocity.x = -3;
		player.switchSprite("run");
	} else if (keys.d.pressed && player.lastKey === "d") {
		player.velocity.x = 3;
		player.switchSprite("run");
	}
	// return to idle if no other animation is being performed
	else {
		player.switchSprite("idle");
	}

	// control animation for player jump and fall
	if (player.velocity.y < 0) {
		player.switchSprite("jump");
	} else if (player.velocity.y > 0) {
		player.switchSprite("fall");
	}

	collisionDetection({ character1: player, character2: enemy }, 4);

	// if player misses
	if (player.isAttacking && player.framesCurrent === 4) {
		player.isAttacking = false;
	}

	/*************************************
    NOTE: Player Magic calls are defined below
    *************************************/

	if (playerUsedMagic) {
		heal_eff1.position = player.position;
		heal_eff1.offset = { x: 80, y: 80 };
		heal_eff1.update();

		setTimeout(() => {
			playerUsedMagic = false;
		}, 5000);
	}

	if (playerUsedSpecial1) {
		waterEffect.position = enemy.position;
		waterEffect.offset = { x: 80, y: 80 };
		waterEffectEnd.position = enemy.position;
		waterEffectEnd.offset = { x: 80, y: 80 };
		waterEffect.update();
		waterEffectEnd.update();
		enemy.switchSprite("takeHit");

		setTimeout(() => {
			playerUsedSpecial1 = false;
		}, 5000);
	}

	if (playerUsedSpecial2) {
		// shooting attack

		// if (!moveable) {
		//   waterBall.position = { ...player.position }
		//   moveable = true
		// }

		// close up attack
		waterBall.position = player.position;

		if (waterBall.position.x < enemy.position.x) {
			waterBall.update();
			if (waterBall.framesCurrent === 21) {
				waterBall.framesCurrent = 5;
			}

			waterBall.position.x += 5;
		} else {
			waterBall.position.x = enemy.position.x;
			waterBallImpact.position = enemy.position;
			waterBallImpact.update();
			enemy.switchSprite("takeHit");
		}

		setTimeout(() => {
			playerUsedSpecial2 = false;
		}, 5000);
	}

	if (player.isUsingMagic) {
		player.isUsingMagic = false;
		if (player.health < 50) {
			player.health += 50;
		} else {
			player.health = 100;
		}
		player.magic -= 20;
		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#playerHealth").style.width = player.health + "%";
	}

	if (player.isUsingSpecial1) {
		player.isUsingSpecial1 = false;
		player.magic -= 50;
		if (enemy.health < 40) {
			enemy.health = 0;
		} else {
			enemy.health -= 40;
		}

		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#enemyHealth").style.width = enemy.health + "%";
	}

	if (player.isUsingSpecial2) {
		player.isUsingSpecial2 = false;
		player.magic -= 40;
		if (enemy.health < 35) {
			enemy.health = 0;
		} else {
			enemy.health -= 35;
		}

		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#enemyHealth").style.width = enemy.health + "%";
	}
}
