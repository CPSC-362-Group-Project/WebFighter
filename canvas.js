const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

// variables for the width and height of the canvas
canvas.width = 1024
canvas.height = 576

// fill the canvas and delimit its size
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2
class Sprite {
    // basic parameters for the character
    constructor({position, velocity, color = 'red', offset}){
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
            offset
        }

        this.isAttacking
    }

    // display the character
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        // display the attackBox only when the character is attacking
        if (this.isAttacking){
            c.fillStyle = 'blue'
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
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

        if (this.position.y + this.height + this.velocity.y >= canvas.height){
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
}

// create the main player sprite instance
const player = new Sprite({
    position: {
        x: 100,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }, 
    color: 'red',
    offset: {
        x: 0,
        y: 0
    }

})

// create an enemy sprite instance
const enemy = new Sprite({
    position: {
        x: 900,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'green',
    //enemy facing left initially, attackBox is offset to the left
    offset: {
        x: -50,
        y: 0
    }
})

//player.draw()
//enemy.draw()
console.log(player)

// constant to define the different input keys
const keys = {
    a:{
        pressed: false
    },
    d:{
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    }
}

function rectangularCollision({rectangle1, rectangle2}){
    // check if the two sprites are colliding
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width  >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height)
}

// loop to run the program and refresh the position of the players
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    // player movement
    player.velocity.x = 0
    if (keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5
    }
    else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
    }

    // Enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5
    }
    else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5
    }

    // Collision detection
    if (
        rectangularCollision({
            rectangle1: player, 
            rectangle2: enemy
        }) &&
        player.isAttacking
    ) {
        player.isAttacking = false
        console.log('collision')
    }

    if (
        rectangularCollision({
            rectangle1: enemy, 
            rectangle2: player
        }) &&
        enemy.isAttacking
    ) {
        enemy.isAttacking = false
        console.log('Enemy launches an attack')
    }

}

animate()

// event listener for when user press movement keys (WASD)
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
        case 'D':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
        case 'A':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
        case 'W':
            player.velocity.y = -12
            break
        case ' ':
            player.attack()
            break


        // These are the enemies keys
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            enemy.velocity.y = -12
            break 
        case 'Enter':
            enemy.attack()
    }    
    console.log(event.key)
})

// event listener for when user stops pressing movement key
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
        case 'D':
            keys.d.pressed = false
            break
        case 'a':
        case 'A':
            keys.a.pressed = false
            break
        // These are the enemies keys
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break          
    }    
    console.log(event.key)
})