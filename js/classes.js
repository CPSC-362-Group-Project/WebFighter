class Sprite {
    // basic parameters for the character
    constructor({position, imageSrc, scale = 1, framesMax = 1}){
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
    }

    // display the character
    draw(){
       c.drawImage(
        this.image, 
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x, 
        this.position.y, 
        (this.image.width / this.framesMax) * this.scale, 
        this.image.height * this.scale)
    }

    // update the player's position
    update(){
        this.draw()
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

    
}

//copy of sprite class
class Fighter {
    // basic parameters for the character
    constructor({position, velocity, color = 'red', attackBoxOffset, scabbardOffset }){
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.color = color
         
        //attackBox for the character
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 100,
            height: 50,
            offset: attackBoxOffset
        }

         //scabbard for the character
         this.scabbard = {
            position: {
                x: this.position.x,
                y: this.position.y + 50
            },
            width: 100,
            height: 50,
            offset: scabbardOffset
        }

        this.color = color
        this.isAttacking
        this.isUsingMagic
        this.health = 100
        this.magic = 100
       
    }

    // display the character
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        // display the attackBox only when the character is attacking
        if (this.isAttacking){
            if (this.color == 'red') {
                c.fillStyle = 'blue'
            }
            else {
                c.fillStyle = 'orange'
            }
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
        if (this.isUsingMagic){
            c.fillStyle = 'yellow'
            c.fillRect(this.scabbard.position.x, this.scabbard.position.y, this.scabbard.width, this.scabbard.height)
        }
    }

    // update the player's position
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // update the attackBox position to follow the character
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y 

         // update the scabbard position to follow the character
         this.scabbard.position.x = this.position.x + this.scabbard.offset.x
         this.scabbard.position.y = this.position.y + 50

        // note that canvas.height determines the limit for the players.
        if (this.position.y + this.height + this.velocity.y >= canvas.height - 50){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity
        }
    }

    attack() {
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

    
}
// end of copy