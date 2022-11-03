class Sprite {
    // basic parameters for the character
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y: 0}}){
        this.position = position
        this.width = 50
        this.height = 150 //change to 100?
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        // adjust framesHold to adjust speed of sprite. 
        // if necessary pass argument for different sprite speeds
        // The lower the value the faster it goes
        this.framesHold = 20
        this.offset = offset
    }

    // display the character
    draw(){
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
        )
    }

    animateFrames() {
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0){
            if (this.framesCurrent < this.framesMax - 1){
                this.framesCurrent++
            }
            else {
                this.framesCurrent = 0
            }
        }
    }
    // update the player's position
    update(){
        this.draw()
        this.animateFrames()
    }

    
}

//copy of sprite class
class Fighter extends Sprite {
    // basic parameters for the character
    constructor({
        position, 
        velocity, 
        color = 'red',
        imageSrc, 
        scale = 1, 
        framesMax = 1,
        offset = { x: 0, y:0 },
        sprites 
    }) {
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        })

        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
         
        //attackBox for the character
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            // width: 100,
            // height: 50,
            // offset: attackBoxOffset
        }

        this.color = color
        this.isAttacking
        this.isUsingMagic
        this.health = 100
        this.magic = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        // adjust framesHold to adjust speed of sprite. 
        // if necessary pass argument for different sprite speeds
        // The lower the value the faster it goes
        this.framesHold = 20
        this.sprites = sprites
       
        for (const sprite in this.sprites){
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }
 

    // update the player's position
    update(){
        this.draw()
        this.animateFrames()

        // Temporarily removing because is messing up the code
        // // update the attackBox position to follow the character
        // this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        // this.attackBox.position.y = this.position.y 


        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

         // update the scabbard position to follow the character
        //  this.scabbard.position.x = this.position.x + this.scabbard.offset.x
        //  this.scabbard.position.y = this.position.y + 50

        // note that canvas.height determines the limit for the players.
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 50){
            this.velocity.y = 0
            // might not need the next sentence
            // this.position.y = 376
        }
        else{
            this.velocity.y += gravity
        }
        // used this console to determine the 376
        // console.log(this.position)
    }


    attack() {
        this.switchSprite('attack1')
        this.isAttacking = true
        //attack for only a small period of time (100ms)
        setTimeout(() => {
            this.isAttacking = false
        }, 200)

    }

    useMagic() {
        this.isUsingMagic = true
        //attack for only a small period of time (100ms)
        setTimeout(() => {
            this.isUsingMagic = false
        }, 200)

    }
    switchSprite(sprite){
        if (this.image === this.sprites.attack1.image && 
            this.framesCurrent < this.sprites.attack1.framesMax - 1) return

        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image
                    this.framesMax = this.sprites.jump.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image
                    this.framesMax = this.sprites.fall.framesMax
                    this.framesCurrent = 0
                }
                break
            case 'attack1':
                if (this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image
                    this.framesMax = this.sprites.attack1.framesMax
                    this.framesCurrent = 0
                }
                break
        }
    }
    
}
// end of copy