// make it so you cant scroll with space bar
// we do this because we use space bar in game
window.onkeydown = function(e) { 
    return !(e.keyCode == 32 && e.target == document.body);
  }; 

const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

// variables for the width and height of the canvas
canvas.width = 1024
canvas.height = 576

// fill the canvas and delimit its size
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.3

// class Asset {
//     constructor({position, imageSrc}) {
//         this.position = position
//         this.width = 50
//         this.height = 100
//         this.image = new Image()
//         this.image.src = imageSrc
//     }

//     draw() {
//         c.drawImage(this.image, this.position.x, this.position.y)
//     }

//     update() {
//         this.draw()
//     }
// }


const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/background.jpg'
})

const fire = new Sprite({
    position: {
        x: 10,
        y: 420
    },
    imageSrc: './assets/fire_fx_v1.0/png/orange/loops/burning_loop_1.png',
    scale: 4,
    framesMax: 8
})


// create the main player sprite instance
const player = new Fighter({
    position: {
        x: 100,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }, 
    color: 'red',
    
    attackBoxOffset: {
        x: 0,
        y: 0
    },
    scabbardOffset: {
        x: -50,
        y: 0
    }

})

// create an enemy sprite instance
const enemy = new Fighter({
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
    attackBoxOffset: {
        x: -50,
        y: 0
    },
    scabbardOffset: {
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

// decreaseTimer()

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
    c.fillStyle = "gray"
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    fire.update()
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
        // console.log('collision')
        enemy.health -= 20 
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

    if (
        rectangularCollision({
            rectangle1: enemy, 
            rectangle2: player
        }) &&
        enemy.isAttacking
    ) {
        enemy.isAttacking = false
        // console.log('Enemy launches an attack')
        player.health -= 20 
        document.querySelector('#playerHealth').style.width = player.health + "%"
   
    }

    if(player.isUsingMagic && player.magic >= 20) {
        player.isUsingMagic = false
        if (player.health < 50) {
            player.health += 50
        }
        else {
            player.health = 100
        }
        player.magic -=20
        document.querySelector('#playerMagic').style.width = player.magic + "%"
        document.querySelector('#playerHealth').style.width = player.health + "%"
        
        
    }

    if(enemy.isUsingMagic && enemy.magic >= 20) {
        enemy.isUsingMagic = false
        if (enemy.health < 50) {
            enemy.health += 50
        }
        else {
            enemy.health = 100
        }
        enemy.magic -=20
        document.querySelector('#enemyMagic').style.width = enemy.magic + "%"
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

    // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }

}

animate()

// this function will calculate the winner state based on health bar 
//checks to see which health is lower and then choose the 
//appropriate winner in any case
function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (player.health > enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (player.health < enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
  }
  
  let timer = 60
  let timerId
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }
  
    if (timer === 0) {
      determineWinner({ player, enemy, timerId })
    }
  }

  decreaseTimer()
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
        case 'x':
            player.useMagic()
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
            break
        case 'ArrowDown':
            enemy.useMagic()
            break
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