// make it so you cant scroll with space bar
// we do this because we use space bar in game

window.onkeydown = function (e) {
	return !(e.keyCode == 32 && e.target == document.body);
};

let gameStopped = false;
let alreadyReturned = false;

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// variables for the width and height of the canvas
canvas.width = 1024;
canvas.height = 576;

// fill the canvas and delimit its size
//c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;

// Stages
const Forest = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/background.png",
};

const Slum = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/background_1.png",
};

const Hills = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/background_2.png",
	scale: 1,
	offset: {
		x: 0,
		y: 30,
	},
};

const City = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/background_3.png",
};

// Code to select stage
function selectStage() {
	switch (localStorage.getItem("stage_selection")) {
		case "1":
			return Forest;
			break;
		case "2":
			return Slum;
			break;
		case "3":
			return Hills;
			break;
		case "4":
			return City;
			break;
	}
}

const stageSelected = selectStage();

const background = new Sprite(stageSelected);

/*const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./assets/background.png",
    //framesMax: 3,
    //sprites: {
    //  background_0: {
    //   imageSrc: './assests/background.png'
    //  },
    //  background_1: {
    //    imageSrc: './assets/background_1.png'
    //  },
    //  background_2: {
    //    imageSrc: './assets/background_2.png'
    //  },
    //  background_3: {
    //    imageSrc: './assets/background_3.png'
    //  }
    //}
});*/

//const fire = new Sprite({
//    position: {
//        x: 10,
//        y: 420,
//    },
//    imageSrc: "./assets/fire_fx_v1.0/png/orange/loops/burning_loop_1.png",
//    scale: 4,
//    framesMax: 8,
//});

//const white_fire = new Sprite({
//    position: {
//        x: 920,
//        y: 420,
//    },
//    imageSrc: "./assets/fire_fx_v1.0/png/white/loops/burning_loop_1.png",
//    scale: 4,
//    framesMax: 8,
//});

// player.draw()
// enemy.draw()
console.log(player);

// constant to define the different input keys
const keys = {
	a: {
		pressed: false,
	},
	d: {
		pressed: false,
	},
	ArrowRight: {
		pressed: false,
	},
	ArrowLeft: {
		pressed: false,
	},
};

const camera = {
	position: {
		x: 0,
		y: 0,
	},
};

// const camera2 = {
//     position: enemy.position,
// }

// decreaseTimer()

function rectangularCollision(
	{ rectangle1, rectangle2 },
	magic = false,
	magicRange = { x: 0, y: 0 }
) {
	// check if the two sprites are colliding
	return (
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
			rectangle2.position.x &&
		rectangle1.attackBox.position.x <=
			rectangle2.position.x + rectangle2.width &&
		rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
			rectangle2.position.y &&
		rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	);
}

function collisionDetection({ character1, character2 }, currentFrame) {
	if (
		rectangularCollision({
			rectangle1: character1,
			rectangle2: character2,
		}) &&
		character1.isAttacking &&
		character1.framesCurrent === currentFrame
	) {
		character2.takeHit();
		character1.isAttacking = false;
		console.log("collision");
		if (character1 === player) {
			document.querySelector("#enemyHealth").style.width = enemy.health + "%";
		} else {
			document.querySelector("#playerHealth").style.width = player.health + "%";
		}
	}
}

// loop to run the program and refresh the position of the players
function animate() {
	if(gameStopped) {
		setTimeout(() => {
			alreadyReturned = true;
		}, 1000)
	}

	if(alreadyReturned) {
		return
	}

	window.requestAnimationFrame(animate);
	
	c.fillStyle = "gray";
	if (stageSelected === Hills) {
		c.fillStyle = "rgba(35, 24, 5, 1)";
	}
	c.fillRect(0, 0, canvas.width, canvas.height);
	//c.save();
	//c.scale(1.5, 1.5);
	//c.translate(camera.position.x, 0);

	background.update();
	//fire.update();
	//white_fire.update();

	player.checkForHorizontalCollision();
	enemy.checkForHorizontalCollision();
	player.update();
	enemy.update();

	
	playerAnimate();
	enemyAnimate();

	
	//c.restore();
	// TODO: framesCurrent is the frame where the animation occurs
	// we can use a variable to change this for multiple characters
	// if player misses
	// NOTE: Code for player and enemy has been moved out to corresponding player and enemy files

	
}

animate();


// this function will calculate the winner state based on health bar
// checks to see which health is lower and then choose the
// appropriate winner in any case
function determineWinner({ player, enemy, timerId }) {
	if (gameStopped) {
		return;
	}
	gameStopped = true;
	clearTimeout(timerId);
	document.querySelector("#displayText").style.display = "flex";
	if (player.health === enemy.health) {
		document.querySelector("#displayText").innerHTML = "Tie";
	} else if (player.health > enemy.health) {
		document.querySelector("#displayText").innerHTML = "Player 1 Wins";
	} else if (player.health < enemy.health) {
		document.querySelector("#displayText").innerHTML = "Player 2 Wins";
	}
}

let timer = 60;
let timerId;
function decreaseTimer() {
	if (timer > 0) {
		timerId = setTimeout(decreaseTimer, 1000);
		timer--;
		document.querySelector("#timer").innerHTML = timer;
	}

	if (timer === 0) {
		determineWinner({ player, enemy, timerId });
	}
}

decreaseTimer();

let enemyMagicInProgress = false;
let playerMagicInProgress = false;
let playerMagic2InProgress = false;

// event listener for when user press movement keys (WASD)
window.addEventListener("keydown", (event) => {
	if (!player.dead) {
		switch (event.key) {
			case "d":
			case "D":
				keys.d.pressed = true;
				player.lastKey = "d";
				player.shouldPanCameraToTheLeft({ canvas, camera });
				break;
			case "a":
			case "A":
				keys.a.pressed = true;
				player.lastKey = "a";
				player.shouldPanCameraToTheRight({ canvas, camera });
				break;
			case "w":
			case "W":
				// add code here to not let player jump
				if (player.velocity.y == 0) {
					player.velocity.y = -12;
				}
				break;

			case " ":
				if (!playerMagicInProgress && !playerMagic2InProgress) {
				player.attack();
				break;
				}
			case "x":
				player.useMagic();
				if (player.isUsingMagic) {
					playerUsedMagic = true;
				}
				break;

			case "z":
				if(playerMagicInProgress) {
					break;
				}

				player.useSpecial1();
				playerMagicInProgress = true;
				setTimeout(() => {
					playerMagicInProgress = false;
				}, 8500);

				if (player.isUsingSpecial1) {
					playerUsedSpecial1 = true;
				}
				break;
			case "c":
				if(playerMagic2InProgress) {
					break;
				}
				
				player.useSpecial2();
				playerMagic2InProgress = true;
				setTimeout(() => {
					playerMagic2InProgress = false;
				}, 8500);

				if (player.isUsingSpecial2) {
					moveable = false;
					playerUsedSpecial2 = true;
				}
				break;
		}
	}
	// These are the enemies keys
	if (!enemy.dead) {
		console.log("enemy magic in progress");
		switch (event.key) {
			case "ArrowRight":
				keys.ArrowRight.pressed = true;
				enemy.lastKey = "ArrowRight";
				break;
			case "ArrowLeft":
				keys.ArrowLeft.pressed = true;
				enemy.lastKey = "ArrowLeft";
				break;
			case "ArrowUp":
				if (enemy.velocity.y == 0) {
					enemy.velocity.y = -12;
				}
				break;

			case "Enter":
				enemy.attack();
				break;
			case "ArrowDown":
				enemy.useMagic();
				if (enemy.isUsingMagic) {
					enemyUsedMagic = true;
				}
				break;
			case "p":
				if(enemyMagicInProgress) {
					break;
				}
				enemy.useSpecial2();
				enemyMagicInProgress = true;
				setTimeout(() => {
					enemyMagicInProgress = false;
				}, 8500);

				if (enemy.isUsingSpecial2) {
					moveable2 = false;
					enemyUsedSpecial2 = true;
				}
				break;
		}
	}
	console.log(event.key);
});


// event listener for when user stops pressing movement key
window.addEventListener("keyup", (event) => {
	switch (event.key) {
		case "d":
		case "D":
			keys.d.pressed = false;
			break;
		case "a":
		case "A":
			keys.a.pressed = false;
			break;
		// These are the enemies keys
		case "ArrowRight":
			keys.ArrowRight.pressed = false;
			break;
		case "ArrowLeft":
			keys.ArrowLeft.pressed = false;
			break;
	}
	console.log(event.key);
});

function pauseHandlerHelper() {
	if (!alreadyReturned) {
		alreadyReturned = true;
		clearTimeout(timerId);
	}
	else {
		if(gameStopped && alreadyReturned) {
			return
		}
		alreadyReturned = false;
		animate();
		decreaseTimer();
	}
}
