const playerMatt = document.querySelector("canvas");
const c = playerMatt.getContext("2d");

// test adding a second playerMatt
const playerNat = document.querySelector(".nat");
const n = playerNat.getContext("2d");

// variables for the width and height of the playerMatt
playerMatt.width = 200;
playerMatt.height = 300;

// fill the playerMatt and delimit its size
c.fillRect(0, 0, playerMatt.width, playerMatt.height);

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
		this.position = { x: -240, y: -150 };
		this.width = 50;
		this.height = 150; // change to 100?
		this.image = new Image();
		this.image.src = imageSrc;
		this.scale = 3.5;
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
	draw() {
		// instead of c use a parameter on draw(c)
		c.drawImage(
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
	update() {
		this.draw();
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
		this.framesHold = 2;
		this.sprites = sprites;

		for (const sprite in this.sprites) {
			sprites[sprite].image = new Image();
			sprites[sprite].image.src = sprites[sprite].imageSrc;
		}
	}

	// update the player's position
	update() {
		this.draw();
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
		if (this.position.y >= -180) {
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

const player = new Fighter(Nat);

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
	c.fillStyle = "grey";
	n.fillStyle = "red";
	c.fillRect(0, 0, playerMatt.width, playerMatt.height);
	// background.update();
	// fire.update();
	// white_fire.update();

	player.update();
	// enemy.update();

	player.switchSprite("idle");
}

animate();

// code for the sprite
