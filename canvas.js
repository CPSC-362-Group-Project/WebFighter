const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

// variables for the width and height of the canvas
canvas.width = 1024
canvas.height = 576

// fill the canvas and delimit its size
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.3
class Sprite {
    // basic parameters for the character
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastKey
    }

    // display the character
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    // update the player's position
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity
        }
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

// loop to run the program and refresh the position of the players
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "gray"
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
}

// idea for pause button
// while(!pause){
//      animate()   
//}
animate()

// event listener for when user press movement keys (WASD)
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -12
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
    }    
    console.log(event.key)
})

// event listener for when user stops pressing movement key
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
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