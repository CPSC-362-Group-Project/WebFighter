const playerMatt = document.querySelector(".matt");
const c = playerMatt.getContext("2d");

// variables for the width and height of the playerMatt
playerMatt.width = 200;
playerMatt.height = 300;
c.fillRect(0, 0, playerMatt.width, playerMatt.height);

// test adding a second playerMatt
const playerNat = document.querySelector(".nat");
const n = playerNat.getContext("2d");

playerNat.width = 200;
playerNat.height = 300;
n.fillRect(0, 0, playerNat.width, playerNat.height);

//third player
const playerKenji = document.querySelector(".kenji");
const k = playerKenji.getContext("2d");

playerKenji.width = 200;
playerKenji.height = 300;
k.fillRect(0, 0, playerKenji.width, playerKenji.height);

//fourth player
const playerRiku = document.querySelector(".riku");
const r = playerRiku.getContext("2d");

playerRiku.width = 200;
playerRiku.height = 300;
r.fillRect(0, 0, playerRiku.width, playerRiku.height);

// fifth player
const playerPyro = document.querySelector(".pyro");
const p = playerPyro.getContext("2d");

playerPyro.width = 200;
playerPyro.height = 300;
p.fillRect(0, 0, playerPyro.width, playerPyro.height);

// sixth player
const playerRay = document.querySelector(".ray");
const ra = playerRay.getContext("2d");

playerRay.width = 200;
playerRay.height = 300;
ra.fillRect(0, 0, playerRay.width, playerRay.height);

// seventh player
const playerWiz = document.querySelector(".wiz");
const w = playerWiz.getContext("2d");

playerWiz.width = 200;
playerWiz.height = 300;
w.fillRect(0, 0, playerWiz.width, playerWiz.height);

// eight player
const playerKing = document.querySelector(".king");
const ki = playerKing.getContext("2d");

playerKing.width = 200;
playerKing.height = 300;
ki.fillRect(0, 0, playerKing.width, playerKing.height);

const gravity = 0.5;
// code for sprite here
class Sprite {
	// basic parameters for the character
	constructor({
		position,
		imageSrc,
		scale = 1,
		framesMax = 1,
		offset = { x: 0, y: 0 },
		is2dFrame = false,
		xFrames = 0,
	}) {
		// adjust all these values and pass them from other file for all characters
		// adjust position with gravity to make this work nicely
		this.position = position;
		this.width = 50;
		this.height = 150; // change to 100?
		this.image = new Image();
		this.image.src = imageSrc;
		this.scale = scale;
		this.framesMax = framesMax;
		this.framesCurrent = 0;
		this.framesElapsed = 0;
		// adjust framesHold to adjust speed of sprite.
		// if necessary pass argument for different sprite speeds
		// The lower the value the faster it goes
		this.framesHold = 200;
		this.offset = offset;
		this.is2dFrame = is2dFrame;
		this.xFrames = xFrames;
	}

	// display the character
	draw(context) {
		// instead of c use a parameter on draw(c)
		context.drawImage(
			this.image,
			this.framesCurrent * (this.image.width / this.framesMax),
			0,
			this.image.width / this.framesMax,
			this.image.height,
			this.position.x,
			this.position.y,
			(this.image.width / this.framesMax) * this.scale,
			this.image.height * this.scale
		);
	}

	animateFrames() {
		this.framesElapsed++;

		if (this.framesElapsed % this.framesHold === 0) {
			if (this.framesCurrent < this.framesMax - 1) {
				this.framesCurrent++;
			} else {
				this.framesCurrent = 0;
			}
		}
	}

	// update the player's position
	update(context) {
		this.draw(context);
		this.animateFrames();
	}
}

class Fighter extends Sprite {
	// basic parameters for the character
	constructor({
		position,
		velocity,
		color = "red",
		imageSrc,
		scale = 1,
		framesMax = 1,
		offset = { x: 0, y: 0 },
		sprites,
		attackBox = { offset: {}, width: undefined, height: undefined },
	}) {
		super({
			position,
			imageSrc,
			scale,
			framesMax,
			offset,
		});

		this.velocity = velocity;
		this.width = 50;
		this.height = 150;
		this.lastKey;

		// attackBox for the character
		this.attackBox = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			offset: attackBox.offset,
			width: attackBox.width,
			height: attackBox.height,
		};

		this.color = color;
		this.framesCurrent = 0;
		this.framesElapsed = 0;
		// adjust framesHold to adjust speed of sprite.
		// if necessary pass argument for different sprite speeds
		// The lower the value the faster it goes
		this.framesHold = 15;
		this.sprites = sprites;

		for (const sprite in this.sprites) {
			sprites[sprite].image = new Image();
			sprites[sprite].image.src = sprites[sprite].imageSrc;
		}
	}

	// update the player's position
	update(context) {
		this.draw(context);
		this.animateFrames();

		// Temporarily removing because is messing up the code
		// // update the attackBox position to follow the character
		this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
		this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

		// code for testing hit boxes
		// c.fillRect(
		//     this.attackBox.position.x,
		//     this.attackBox.position.y,
		//     this.attackBox.width,
		//     this.attackBox.height)

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// note that playerMatt.height determines the limit for the players.
		// check original to see if this is working properly
		if (this.position.y >= -220) {
			this.velocity.y = 0;
			// might not need the next sentence
			// this.position.y = 376
		} else {
			this.velocity.y += gravity;
		}
		// used this console to determine the 376
		// console.log(this.position)
	}

	switchSprite(sprite) {
		// overriding all other animations with the attack animation
		if (
			this.image === this.sprites.attack1.image &&
			this.framesCurrent < this.sprites.attack1.framesMax - 1
		)
			return;

		switch (sprite) {
			case "idle":
				if (this.image !== this.sprites.idle.image) {
					this.image = this.sprites.idle.image;
					this.framesMax = this.sprites.idle.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "run":
				if (this.image !== this.sprites.run.image) {
					this.image = this.sprites.run.image;
					this.framesMax = this.sprites.run.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "jump":
				if (this.image !== this.sprites.jump.image) {
					this.image = this.sprites.jump.image;
					this.framesMax = this.sprites.jump.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "fall":
				if (this.image !== this.sprites.fall.image) {
					this.image = this.sprites.fall.image;
					this.framesMax = this.sprites.fall.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "attack1":
				if (this.image !== this.sprites.attack1.image) {
					this.image = this.sprites.attack1.image;
					this.framesMax = this.sprites.attack1.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "takeHit":
				if (this.image !== this.sprites.takeHit.image) {
					this.image = this.sprites.takeHit.image;
					this.framesMax = this.sprites.takeHit.framesMax;
					this.framesCurrent = 0;
				}
				break;
			case "death":
				if (this.image !== this.sprites.death.image) {
					this.image = this.sprites.death.image;
					this.framesMax = this.sprites.death.framesMax;
					this.framesCurrent = 0;
				}
				break;
		}
	}
}

// declare players here
const player = new Fighter(Matt);
const Natt = new Fighter(Nat);
const ken = new Fighter(Huntress);
const rik = new Fighter(Riku);
const pyr = new Fighter(Pyro);
const raya = new Fighter(Ray);
const wizz = new Fighter(Wiz);
const kingg = new Fighter(King);

const first = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/samurai.png",
};

const second = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/wizard.png",
};

const third = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/knight.png",
};

const fourth = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/viking.png",
};

const fifth = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/sorcerer.png",
};

const sixth = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/ranger.png",
};

const seventh = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/king.png",
};

const eighth = {
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: "./assets/character_background/barbarian.png",
};

//create backgrounds
const background = new Sprite(first);

const background2 = new Sprite(second);

const background3 = new Sprite(third);

const background4 = new Sprite(fourth);

const background5 = new Sprite(fifth);

const background6 = new Sprite(sixth);

const background7 = new Sprite(seventh);

const background8 = new Sprite(eighth);

// const background = new Sprite({
// 	position: {
// 		x: 0,
// 		y: 0,
// 	},
// 	imageSrc: "./assets/backgrounds.jpg",
// 	framesMax: 3,
// 	//sprites: {
// 	//  background_1: {
// 	//    imageSrc: './assets/background_1.jpg'
// 	//  },
// 	//  background_2: {
// 	//    imageSrc: './assets/background_2.jpg'
// 	//  },
// 	//  background_3: {
// 	//    imageSrc: './assets/background_3.jpg'
// 	//  }
// 	//}
// });

function animate() {
	window.requestAnimationFrame(animate);
	// first player
	c.fillStyle = "grey";
	c.fillRect(0, 0, playerMatt.width, playerMatt.height);

	// add code for background here
	background.update(c);

	player.update(c);
	player.switchSprite("idle");
	// when player hovers over character, the character attacks
	playerMatt.addEventListener("mouseover", () => {
		player.switchSprite("attack1");
	});
	// pass the character selection
	playerMatt.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "1");
		document.location.href = "./stage_select.html";
	});

	// second player
	n.fillStyle = "grey";
	n.fillRect(0, 0, playerNat.width, playerNat.height);

	background3.update(n);
	
	Natt.update(n);
	Natt.switchSprite("idle");
	playerNat.addEventListener("mouseover", () => {
		Natt.switchSprite("attack1");
	});
	playerNat.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "2");
		document.location.href = "./stage_select.html";
	});

	// third player
	k.fillStyle = "grey";
	k.fillRect(0, 0, playerKenji.width, playerKenji.height);

	background6.update(k);

	ken.update(k);
	ken.switchSprite("idle");
	playerKenji.addEventListener("mouseover", () => {
		ken.switchSprite("attack1");
	});
	playerKenji.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "3");
		document.location.href = "./stage_select.html";
	});

	//  fourth player
	r.fillStyle = "grey";
	r.fillRect(0, 0, playerRiku.width, playerRiku.height);

	background8.update(r);

	rik.update(r);
	rik.switchSprite("idle");
	playerRiku.addEventListener("mouseover", () => {
		rik.switchSprite("attack1");
	});
	playerRiku.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "4");
		document.location.href = "./stage_select.html";
	});

	// fifth player
	p.fillStyle = "grey";
	p.fillRect(0, 0, playerPyro.width, playerPyro.height);

	background5.update(p);

	pyr.update(p);
	pyr.switchSprite("idle");
	playerPyro.addEventListener("mouseover", () => {
		pyr.switchSprite("attack1");
	});
	playerPyro.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "5");
		document.location.href = "./stage_select.html";
	});

	// sixth player
	ra.fillStyle = "grey";
	ra.fillRect(0, 0, playerRay.width, playerRay.height);
	background4.update(ra);
	raya.update(ra);
	raya.switchSprite("idle");
	playerRay.addEventListener("mouseover", () => {
		raya.switchSprite("attack1");
	});
	playerRay.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "6");
		document.location.href = "./stage_select.html";
	});

	// seventh player
	w.fillStyle = "grey";
	w.fillRect(0, 0, playerWiz.width, playerWiz.height);
	background2.update(w);
	wizz.update(w);
	wizz.switchSprite("idle");
	playerWiz.addEventListener("mouseover", () => {
		wizz.switchSprite("attack1");
	});
	playerWiz.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "7");
		document.location.href = "./stage_select.html";
	});

	// eighth player
	ki.fillStyle = "grey";
	ki.fillRect(0, 0, playerKing.width, playerKing.height);
	background7.update(ki);
	kingg.update(ki);
	kingg.switchSprite("idle");
	playerKing.addEventListener("mouseover", () => {
		kingg.switchSprite("attack1");
	});
	playerKing.addEventListener("click", () => {
		// add some code here to move to game
		localStorage.setItem("selection", "8");
		document.location.href = "./stage_select.html";
	});

	// background.update();
	// fire.update();
	// white_fire.update();
}

animate();

// code for the sprite
