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

const gravity = 0.2

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

const white_fire = new Sprite({
    position: {
        x: 920,
        y: 420
    },
    imageSrc: './assets/fire_fx_v1.0/png/white/loops/burning_loop_1.png',
    scale: 4,
    framesMax: 8
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
    white_fire.update()

    player.update()
    enemy.update()


    // player movement
    player.velocity.x = 0
    if (keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -3
        player.switchSprite('run')
    }
    else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 3
        player.switchSprite('run')
    } 
    // return to idle if no other animation is being performed
    else {
        player.switchSprite('idle')
    }

    // control animation for player jump and fall
    if (player.velocity.y < 0) {
        player.switchSprite('jump')
    }
    else if (player.velocity.y > 0) {
        player.switchSprite('fall')
    }


    // Enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -3
        enemy.switchSprite('run')
    }
    else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 3
        enemy.switchSprite('run')
    }
    // return to idle if no other animation is being performed
    else {
        enemy.switchSprite('idle')
    }

    // control animation for enemy jump and fall
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    }
    else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
    }

    // Collision detection
    if (
        rectangularCollision({
            rectangle1: player, 
            rectangle2: enemy
        }) &&
        player.isAttacking && player.framesCurrent === 4
    ) {
        enemy.takeHit()
        player.isAttacking = false
        // console.log('collision')
        
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false
    }

    // this is where player gets hit
    if (
        rectangularCollision({
            rectangle1: enemy, 
            rectangle2: player
        }) &&
        enemy.isAttacking && enemy.framesCurrent === 2
    ) {
        player.takeHit()
        enemy.isAttacking = false
        // console.log('Enemy launches an attack')
     
        document.querySelector('#playerHealth').style.width = player.health + "%"
   
    }

    // TODO: framesCurrent is the frame where the animation occurs
    // we can use a variable to change this for multiple characters
    // if player misses
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false
    }


    if (playerUsedSpecial1 === true) {
        waterEffect.position = enemy.position
        waterEffect.offset = {x:80, y:80}
        waterEffectEnd.position = enemy.position
        waterEffectEnd.offset = {x:80, y:80}
        waterEffect.update()
        waterEffectEnd.update()
        enemy.switchSprite('takeHit')
        
        setTimeout(() => {
            playerUsedSpecial1 = false
        }
        , 5000)
    }
    
    if (playerUsedSpecial2 === true) {
        //shooting attack

        if (!moveable) {
            waterBall.position = {...player.position}
            moveable = true
        }
       
        //close up attack 
        //waterBall.position = player.position
        if (waterBall.position.x < enemy.position.x) {
            waterBall.update()
            if(waterBall.framesCurrent === 21){
                waterBall.framesCurrent = 5
            }
        
            waterBall.position.x += 5
        }
        else {
            waterBall.position.x = enemy.position.x
            waterBallImpact.position = enemy.position
            waterBallImpact.update()
            enemy.switchSprite('takeHit')
        }
        
        setTimeout(() => {
            playerUsedSpecial2 = false
        }
        , 5000)
    }
    

    if (enemyUsedSpecial2 === true) {
        //shooting attack

        if (!moveable2) {
            fireBolt.position = {...enemy.position}
            moveable2 = true
        }
       
        //close up attack 
        //fireBolt.position = enemy.position
        if (fireBolt.position.x > player.position.x) {
            fireBolt.update()
            fireBolt.position.x -= 5
        }
        else {
            //fireBolt.position.x = player.position.x
            fireBolt.position = player.position
            fireBolt.update()
            fireBolt.framesCurrent = 0
            fireBolt.update()
            if(fireBolt.framesCurrent === 5){
                fireBolt.framesCurrent = 0
            }
            player.switchSprite('takeHit')
        }
        
        setTimeout(() => {
            enemyUsedSpecial2 = false
        }
        , 5000)
    }
    
    if(player.isUsingMagic ) {
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

    if (player.isUsingSpecial1) {
    
        player.isUsingSpecial1 = false
        player.magic -= 50
        if (enemy.health < 40) {
            enemy.health = 0
        }
        else {
            enemy.health -= 40
        }

        document.querySelector('#playerMagic').style.width = player.magic + "%"
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

    if (player.isUsingSpecial2) {
    
        player.isUsingSpecial2 = false
        player.magic -= 40
        if (enemy.health < 35) {
            enemy.health = 0
        }
        else {
            enemy.health -= 35
        }

        document.querySelector('#playerMagic').style.width = player.magic + "%"
        document.querySelector('#enemyHealth').style.width = enemy.health + "%"
    }

    if (enemy.isUsingSpecial2) {
    
        enemy.isUsingSpecial2 = false
        enemy.magic -= 40
        if (player.health < 35) {
            player.health = 0
        }
        else {
            player.health -= 35
        }

        document.querySelector('#enemyMagic').style.width = enemy.magic + "%"
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
    if (!player.dead) {
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

        case 'z':
            player.useSpecial1()
            if (player.isUsingSpecial1) {
                playerUsedSpecial1 = true
            }
            break
        case 'c':
            player.useSpecial2()
            if (player.isUsingSpecial2) {
                moveable = false
                playerUsedSpecial2 = true
            }
            break
    }   
    }
        // These are the enemies keys
    if (!enemy.dead) {
    switch(event.key) {
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
        case 'p':
            enemy.useSpecial2()
            if (enemy.isUsingSpecial2) {
                moveable2 = false
                enemyUsedSpecial2 = true
            }
            break
    }    
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