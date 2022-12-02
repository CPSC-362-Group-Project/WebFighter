let playerUsedMagic = false;
let playerUsedSpecial1 = false;
let playerUsedSpecial2 = false;
let moveable = false;

// adding code to select player
function selectCharacter() {
	switch (localStorage.getItem("selection")) {
		case "1":
			return Matt;
			break;
		case "2":
			return Nat;
			break;
		case "3":
			return Huntress;
			break;
		case "4":
			return Riku;
			break;
		case "5":
			return Pyro;
			break;
		case "6":
			return Ray;
			break;
		case "7":
			return Wiz;
			break;
		case "8":
			return King;
			break;
	}
}
const selected = selectCharacter();

//console.log(localStorage.getItem("selection"));

// create the main player sprite instance
const player = new Fighter(selected);

const playerHealingEffect = player.magicSprites.healing_effect
const heal_eff1 = new Sprite({
	position: player.position,
	imageSrc: playerHealingEffect.imageSrc,
	scale: playerHealingEffect.scale,
	framesMax: playerHealingEffect.framesMax,
	offset: playerHealingEffect.offset,
	is2dFrame: playerHealingEffect.is2dFrame,
	xFrames: playerHealingEffect.xFrames,
});

const playerMagic1Effect = player.magicSprites.magic1.effect
const magic1 = new Sprite({
	position: enemy.position,
	imageSrc: playerMagic1Effect.imageSrc,
	scale: playerMagic1Effect.scale,
	framesMax: playerMagic1Effect.framesMax,
	offset: playerMagic1Effect.offset,
	is2dFrame: playerMagic1Effect.is2dFrame,
	xFrames: playerMagic1Effect.xFrames,
});

const playerMagic1Impact = player.magicSprites.magic1.impact
const magic1End = new Sprite({
	position: enemy.position,
	imageSrc: playerMagic1Impact.imageSrc,
	scale: playerMagic1Impact.scale,
	framesMax: playerMagic1Impact.framesMax,
	offset: playerMagic1Impact.offset,
	is2dFrame: playerMagic1Impact.is2dFrame,
	xFrames: playerMagic1Impact.xFrames,
});

const playerMagic2Effect = player.magicSprites.magic2.effect
const magic2 = new Sprite({
	position: { ...player.position },
	imageSrc: playerMagic2Effect.imageSrc,
	scale: playerMagic2Effect.scale,
	framesMax: playerMagic2Effect.framesMax,
	offset: playerMagic2Effect.offset,
	is2dFrame: playerMagic2Effect.is2dFrame,
	xFrames: playerMagic2Effect.xFrames,
});

const playerMagic2Impact = player.magicSprites.magic2.impact
const magic2Impact = new Sprite({
	position: { ...enemy.position },
	imageSrc: playerMagic2Impact.imageSrc,
	scale: playerMagic2Impact.scale,
	framesMax: playerMagic2Impact.framesMax,
	offset: playerMagic2Impact.offset,
	is2dFrame: playerMagic2Impact.is2dFrame,
	xFrames: playerMagic2Impact.xFrames,
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
		magic1.position = enemy.position;
		magic1End.position = enemy.position;
		magic1.update();
		magic1End.update();
		player.switchSprite("attack1");
		enemy.switchSprite("takeHit");

		setTimeout(() => {
			playerUsedSpecial1 = false;
		}, 3000);
	}

	if (playerUsedSpecial2) {
		// shooting attack

		// if (!moveable) {
		//   waterBall.position = { ...player.position }
		//   moveable = true
		// }

		// close up attack
		magic2.position = player.position;
		player.position.y = enemy.position.y;

		

		if (player.position.x < enemy.position.x) {
			
			magic2.position = player.position;
			magic2.update();
			magic2Impact.position = player.position;
			magic2Impact.update();
			keys.d.pressed = true;
			player.lastKey = "d";
		
			
			// if (magic2.framesCurrent === 21) {
			// 	magic2.framesCurrent = 5;
			// }

			player.position.x += 4;
			player.switchSprite("run")
		} else {
			keys.d.pressed = false;
			player.lastKey = "";
			magic2.position.x = enemy.position.x;
			magic2Impact.position = enemy.position;
			magic2Impact.update();
			player.switchSprite("attack1");
			enemy.switchSprite("takeHit");
			setTimeout(() => {
				playerUsedSpecial2 = false;
				
			}, 3000);
		}
	}
	

	if (player.isUsingMagic) {
		player.isUsingMagic = false;
		if (player.health < 50) {
			player.health += 50;
		} else {
			player.health = 100;
		}
		player.magic -= 10;
		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#playerHealth").style.width = player.health + "%";
	}

	if (player.isUsingSpecial1) {
		player.isUsingSpecial1 = false;
		player.magic -= 30;
		if (enemy.health < 20) {
			enemy.health = 0;
		} else {
			enemy.health -= 20;
		}

		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#enemyHealth").style.width = enemy.health + "%";
	}

	if (player.isUsingSpecial2) {
		player.isUsingSpecial2 = false;
		player.magic -= 15;
		if (enemy.health < 15) {
			enemy.health = 0;
		} else {
			enemy.health -= 15;
		}

		document.querySelector("#playerMagic").style.width = player.magic + "%";
		document.querySelector("#enemyHealth").style.width = enemy.health + "%";
	}
}
