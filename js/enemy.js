let enemyUsedMagic = false
let enemyUsedSpecial2 = false
let moveable2 = false

//turn on simulator on single player mode
let simulator = localStorage.getItem("isSinglePlayer") === "true" ? true : false;

// create an enemy sprite instance
const enemy = new Fighter(Kenji)

const enemyHealing = enemy.magicSprites.healing_effect
const heal_eff2 = new Sprite({
  position: enemy.position,
  imageSrc: enemyHealing.imageSrc,
  scale: enemyHealing.scale,
  framesMax: enemyHealing.framesMax,
  offset: enemyHealing.offset,
  is2dFrame: enemyHealing.is2dFrame,
  xFrames: enemyHealing.xFrames
})

const enemyMagic2 = enemy.magicSprites.magic2.effect
const magic2b = new Sprite({
  position: { ...enemy.position },
  imageSrc: enemyMagic2.imageSrc,
  scale:  enemyMagic2.scale,
  framesMax:  enemyMagic2.framesMax,
  offset:  enemyMagic2.offset
})

const enemyMagic2Impact = enemy.magicSprites.magic2.impact
const magic2bImpact = new Sprite({
  position: { ...magic2b.position },
  imageSrc: enemyMagic2Impact.imageSrc,
  scale: enemyMagic2Impact.scale,
  framesMax: enemyMagic2Impact.framesMax,
  offset: enemyMagic2Impact.offset,
  is2dFrame: enemyMagic2Impact.is2dFrame,
	xFrames: enemyMagic2Impact.xFrames,
})
/*
This function uses random number to generate random attack for the enemy
*/
let randomNum = 1;
let activated = false;
function simulateAttack() {
  //generate random number between 1 and 5
 
  randomNum = Math.floor(Math.random() * 1000) + 1;
  if (randomNum <= 60 && (enemy.position.x - enemy.attackBox.width + 50 > player.position.x)) {
    if (activated) {
      return 
    }
    activated = true;
    keys.ArrowLeft.pressed = true ;
    enemy.lastKey = "ArrowLeft";
    
    setTimeout(() => {
      keys.ArrowLeft.pressed = false;
      activated = false;
    }, 200);
    
    
  } else if (randomNum >= 141 && randomNum <= 340 && (enemy.position.x < player.position.x + 50)) {
    if (activated) {
      return
    }
    activated = true;
    keys.ArrowRight.pressed = true ;
    enemy.lastKey = "ArrowRight";

    setTimeout(() => {
      keys.ArrowRight.pressed = false;
      activated = false;
    }, 200);
  }
  else if (randomNum >= 401 && randomNum <= 408 && enemy.health <= 70) {
    enemy.useMagic();
    if (enemy.isUsingMagic) {
      enemyUsedMagic = true;
    }
  }
  else if (randomNum === 501 && enemy.magic >= 50 && player.position.y <= enemy.position.y + 50 && player.position.y >= enemy.position.y - 50) {
    enemy.useSpecial2();
    if (enemy.isUsingSpecial2) {
      enemyUsedSpecial2 = true;
    }
  }
  else if (randomNum >= 601 && randomNum <= 620 && player.velocity.y < 0) {
    if (enemy.velocity.y === 0) {
      enemy.velocity.y = -12;
    }
  }
  else if ( randomNum >= 701 && randomNum <= 720 && enemy.position.x - enemy.attackBox.width < player.position.x) {
    enemy.attack();
}
  else {
    enemy.switchSprite("idle");
  }
}

function enemyAnimate() {
  /************************************* 
  Enemy movements are defined below
  *************************************/

  if(simulator) simulateAttack();

  enemy.velocity.x = 0;
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -3;
    enemy.switchSprite("run");
    
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 3;
    enemy.switchSprite("run");
  }
  // return to idle if no other animation is being performed
  else {
    enemy.switchSprite("idle");
  }

  // control animation for enemy jump and fall
  if (enemy.velocity.y < 0) {
    enemy.switchSprite("jump");
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite("fall");
  }

  collisionDetection({character1: enemy, character2: player}, 2);
  

  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
  }
  
  /*************************************
  Enemy magic is defined below
  **************************************/

  if (enemyUsedMagic) {
    heal_eff2.position = enemy.position;
    heal_eff2.offset = { x: 80, y: 80 };
    heal_eff2.update();

    setTimeout(() => {
      enemyUsedMagic = false;
    }, 5000);
  }

  if (enemyUsedSpecial2) {
    // shooting attack

    if (!moveable2) {
      magic2b.position = { ...enemy.position };
      moveable2 = true;
    }

    // close up attack
    // magic2b.position = enemy.position
     // close up attack
    // magic2b.position = enemy.position
    if (magic2b.position.x > player.position.x) {
      magic2b.update();
      magic2bImpact.position = magic2b.position;
			magic2bImpact.update();
      magic2b.position.x -= 5;
      magic2b.position.y = player.position.y;
    } else {
      // magic2b.position.x = player.position.x
      magic2b.position = player.position;
      magic2b.update();
      magic2bImpact.position = player.position;
			magic2bImpact.update();
      magic2b.framesCurrent = 0;
      magic2b.update();
      if (magic2b.framesCurrent === 5) {
        magic2b.framesCurrent = 0;
      }
      player.switchSprite("takeHit");
      setTimeout(() => {
        enemyUsedSpecial2 = false;
      }, 3000);
      // magic2b.position.x = player.position.x
    }
  }

  if (enemy.isUsingSpecial2) {
    enemy.isUsingSpecial2 = false;
    enemy.magic -= 15;
    if (player.health < 20 ) {
      player.health = 0;
    } else {
      player.health -= 20;
    }
    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  if (enemy.isUsingMagic && enemy.magic >= 5) {
    enemy.isUsingMagic = false;
    if (enemy.health < 80) {
      enemy.health += 25;
    } else {
      enemy.health = 100;
    }
    enemy.magic -= 5;
    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}
