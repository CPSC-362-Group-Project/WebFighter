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
		this.framesHold = 5;
		this.offset = offset;
		this.is2dFrame = is2dFrame;
		this.xFrames = xFrames;
	}

	// display the character
	draw() {
		if (!this.is2dFrame) {
			c.drawImage(
				this.image,
				this.framesCurrent * (this.image.width / this.framesMax),
				0,
				this.image.width / this.framesMax,
				this.image.height,
				this.position.x - this.offset.x,
				this.position.y - this.offset.y,
				(this.image.width / this.framesMax) * this.scale,
				this.image.height * this.scale
			);
		} else {
			const yFrames = Math.floor(this.framesMax / this.xFrames);
			c.drawImage(
				this.image,
				(this.framesCurrent % this.xFrames) * (this.image.width / this.xFrames),
				Math.floor(this.framesCurrent / this.xFrames) *
					(this.image.height / yFrames),
				this.image.width / this.xFrames,
				this.image.height / yFrames,
				this.position.x - this.offset.x,
				this.position.y - this.offset.y,
				(this.image.width / this.xFrames) * this.scale,
				(this.image.height / yFrames) * this.scale
			);
		}
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

// copy of sprite class
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
		magicSprites
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

		this.camerabox = {
			position: {
				x: this.position.x,
				y: this.position.y,
			},
			width: 100,
			height: 100,
		};

		this.color = color;
		this.isAttacking;
		this.isUsingMagic;
		this.isUsingSpecial1;
		this.isUsingSpecial2;
		this.health = 100;
		this.magic = 100;
		this.framesCurrent = 0;
		this.framesElapsed = 0;
		// adjust framesHold to adjust speed of sprite.
		// if necessary pass argument for different sprite speeds
		// The lower the value the faster it goes
		this.framesHold = 5;
		this.sprites = sprites;
		this.dead = false;
		this.magicSprites = magicSprites;

		for (const sprite in this.sprites) {
			sprites[sprite].image = new Image();
			sprites[sprite].image.src = sprites[sprite].imageSrc;
		}
	}

	updateCamerabox() {
		this.camerabox = {
			position: {
				x: this.position.x - 100,
				y: this.position.y - 50,
			},
			width: 100,
			height: 100,
		};
	}

	checkForHorizontalCollision() {
		if (
			this.position.x + this.width + this.velocity.x >= 1024 ||
			this.position.x + this.velocity.x <= 40
		) {
			this.velocity.x = 0;
		}
	}

	// shouldPanCameraToTheLeft({canvas, camera}) {
	// 	const cameraboxRightSide = this.camerabox.position.x + this.camerabox.width;

	//	// TODO: Will be updated for background larger than canvas to scroll
	// 	if (cameraboxRightSide >= 1024) { return }

	// 	if (cameraboxRightSide >= 576 + Math.abs(camera.position.x)) {
	// 		camera.position.x -= this.velocity.x
	// 	}
	// }

	// shouldPanCameraToTheRight({canvas, camera}) {
	// 	if (this.camerabox.position.x <= 0) { return }

	// 	if (this.camerabox.position.x <= Math.abs(camera.position.x)) {
	// 		camera.position.x -= this.velocity.x
	// 	}

	// }

	// update the player's position
	update() {
		this.draw();
		if (!this.dead) {
			this.animateFrames();
		}

		this.updateCamerabox();
		// c.fillStyle = 'rgba(0, 0, 255, 0.2)';
		// c.fillRect(
		// 	this.camerabox.position.x,
		// 	this.camerabox.position.y,
		// 	this.camerabox.width,
		// 	this.camerabox.height
		// );

		// Temporarily removing because is messing up the code
		// // update the attackBox position to follow the character
		this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
		this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

		// code for testing hit boxes
		// c.fillRect(
		// 	this.attackBox.position.x,
		// 	this.attackBox.position.y,
		// 	this.attackBox.width,
		// 	this.attackBox.height
		// );

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// update the scabbard position to follow the character
		//  this.scabbard.position.x = this.position.x + this.scabbard.offset.x
		//  this.scabbard.position.y = this.position.y + 50

		// note that canvas.height determines the limit for the players.
		if (this.position.y + this.height + this.velocity.y >= canvas.height - 50) {
			this.velocity.y = 0;
			// might not need the next sentence
			// this.position.y = 376
		} else {
			this.velocity.y += gravity;
		}
		// used this console to determine the 376
		// console.log(this.position)
	}

	attack() {
		this.switchSprite("attack1");
		this.isAttacking = true;
	}

	takeHit() {
		// change this value for the amount of health
		this.health -= 10;
		if (this.health <= 0) {
			this.switchSprite("death");
		} else {
			this.switchSprite("takeHit");
		}
	}

	useMagic() {
		if (this.magic >= 10) {
			this.isUsingMagic = true;
		}
	}

	useSpecial1() {
		if (this.magic >= 30) {
			this.isUsingSpecial1 = true;
		}
	}

	useSpecial2() {
		if (this.magic >= 15) {
			this.isUsingSpecial2 = true;
		}
	}

	switchSprite(sprite) {
		if (this.image === this.sprites.death.image) {
			if (this.framesCurrent === this.sprites.death.framesMax - 1) {
				this.dead = true;
			}
			return;
		}

		// overriding all other animations with the attack animation
		if (
			this.image === this.sprites.attack1.image &&
			this.framesCurrent < this.sprites.attack1.framesMax - 1
		)
			return;

		// override when fighter gets hit
		if (
			this.image === this.sprites.takeHit.image &&
			this.framesCurrent < this.sprites.takeHit.framesMax - 1
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
// end of copy
